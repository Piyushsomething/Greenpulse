from fastapi import FastAPI, Depends, HTTPException, status,File, UploadFile
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from passlib.context import CryptContext
import jwt
import os
import shutil
from pydantic import BaseModel
from datetime import datetime, timedelta
from typing import List, Optional
from sqlalchemy.orm import joinedload
from database import SessionLocal, engine, User, Ticket, AreaDetails, PlantsName, init_db


from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
# Initialize the database
init_db()

# SECRET_KEY and algorithm used to sign the JWT tokens
SECRET_KEY = "your_secret_key"
ALGORITHM = "HS256"

# Password Hashing Configuration
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# OAuth2PasswordBearer instance
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# Pydantic models
class UserCreate(BaseModel):
    username: str
    email: Optional[str] = None
    full_name: Optional[str] = None
    password: str
    adhaar_no: int
    photo: str
    adhaar_photo :str 

#***********************************

#************************************
class UserUpdate(BaseModel):
    verified_user: bool

class UserUpdate2Admin(BaseModel):
    is_admin: bool


class UserOut(BaseModel):
    username: str
    email: Optional[str] = None
    full_name: Optional[str] = None
    disabled: Optional[bool] = None
    is_admin: Optional[bool] = False
    verified_user: Optional[bool] = None
    adhaar_no: Optional[int] = None
    photo: Optional[str] = None
    adhaar_photo: Optional[str] = None

class Token(BaseModel):
    access_token: str
    token_type: str
    is_admin: bool


class TokenData(BaseModel):
    username: Optional[str] = None

class AreaDetailsBase(BaseModel):
    area: str
    lat: List[str]
    lon: List[str] 

class AreaDetailsCreate(AreaDetailsBase):
    pass

class AreaDetailsOut(AreaDetailsBase):
    id: int

    class Config:
        orm_mode = True


class PlantsNameBase(BaseModel):
    plant_name: str

class PlantsNameCreate(PlantsNameBase):
    pass

class PlantsNameOut(PlantsNameBase):
    id: int

    class Config:
        orm_mode = True

class AreaDetailsNested(BaseModel):
    id: int
    area: str
    lat: List[str]
    lon: List[str]

    class Config:
        orm_mode = True

class PlantsNameNested(BaseModel):
    id: int
    plant_name: str

    class Config:
        orm_mode = True

class TicketBase(BaseModel):
    user_id: int
    payment_status: bool
    admin_approval: bool
    selected_area: int
    selected_plants: int
    no_of_plants: int

class TicketCreate(BaseModel):
    payment_status: bool
    # admin_approval: bool = False
    selected_area: int
    selected_plants: int
    no_of_plants: int

class TicketUpdate(BaseModel):
    payment_status: bool
    admin_approval: bool
    # selected_area: int
    # selected_plants: int
    # no_of_plants: int


class TicketOut(BaseModel):
    id: int
    user_id: int
    payment_status: bool
    admin_approval: bool
    selected_area: AreaDetailsNested
    selected_plants: PlantsNameNested
    no_of_plants: int

    class Config:
        orm_mode = True



app = FastAPI()
app.add_middleware(
  CORSMiddleware,
  allow_origins = ["*"],
  allow_methods = ["*"],
  allow_headers = ["*"]
)
# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def get_user(db, username: str):
    return db.query(User).filter(User.username == username).first()

def get_user_by_email(db, email: str):
    return db.query(User).filter(User.email == email).first()

def get_user_by_adhaar(db, adhaar_no: int):
    return db.query(User).filter(User.adhaar_no == adhaar_no).first()

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

def authenticate_user(db, username: str, password: str):
    user = get_user(db, username)
    if not user:
        return False
    if not verify_password(password, user.hashed_password):
        return False
    return user

def create_access_token(data: dict):
    to_encode = data.copy()
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

async def get_current_user(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
        token_data = TokenData(username=username)
    except jwt.PyJWTError:
        raise credentials_exception
    user = get_user(db, username=token_data.username)
    if user is None:
        raise credentials_exception
    return user

async def get_current_active_user(current_user: User = Depends(get_current_user)):
    if current_user.disabled:
        raise HTTPException(status_code=400, detail="Inactive user")
    return current_user

#*********************************************************************************************

@app.post("/signup", response_model=UserOut)
async def signup(
    username: str,
    adhaar_no: int,
    password: str,
    email: str,
    photo: UploadFile = File(...),
    adhaar_photo: UploadFile = File(...),
    db: Session = Depends(get_db),
    full_name: Optional[str] = None,
    ):
    db_user = get_user(db, username=username)
    if db_user:
        raise HTTPException(status_code=400, detail="Username already registered")

    db_user_by_email = get_user_by_email(db, email=email)
    if db_user_by_email:
        raise HTTPException(status_code=400, detail="Email already registered")

    db_user_by_adhaar = get_user_by_adhaar(db, adhaar_no=adhaar_no)
    if db_user_by_adhaar:
        raise HTTPException(status_code=400, detail="Adhaar already registered")

    hashed_password = get_password_hash(password)

    # Create a directory for the user
    user_directory = f"photos/{username}"
    os.makedirs(user_directory, exist_ok=True)

    # Save the uploaded file in the user's directory
    file_location = f"{user_directory}/{photo.filename}"
    adhaar_location = f"{user_directory}/{adhaar_photo.filename}"


    with open(file_location, "wb") as file:
        shutil.copyfileobj(photo.file, file)
    
    with open(adhaar_location, "wb") as file:
        shutil.copyfileobj(adhaar_photo.file, file)

    db_user = User(
        username=username,
        email=email,
        full_name=full_name,
        hashed_password=hashed_password,
        disabled=False,
        is_admin=False,
        verified_user= False,
        adhaar_no=adhaar_no,
        photo=file_location,  # Store the file path in the database
        adhaar_photo=adhaar_location
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

#*********************************************************************************************
#*********************************************************************************************

# @app.post("/signup", response_model=UserOut)
# async def signup(user: UserCreate, db: Session = Depends(get_db)):
#     db_user = get_user(db, username=user.username)
#     if db_user:
#         raise HTTPException(status_code=400, detail="Username already registered")
    
#     db_user_by_email = get_user_by_email(db, email=user.email)
#     if db_user_by_email:
#         raise HTTPException(status_code=400, detail="Email already registered")

#     db_user_by_adhaar = get_user_by_adhaar(db, adhaar_no=user.adhaar_no)
#     if db_user_by_adhaar:
#         raise HTTPException(status_code=400, detail="adhaar already registered")

#     hashed_password = get_password_hash(user.password)
#     db_user = User(
#         username=user.username,
#         email=user.email,
#         full_name=user.full_name,
#         hashed_password=hashed_password,
#         disabled=False,
#         is_admin = False,
#         adhaar_no=user.adhaar_no,
#         photo=user.photo
#     )
#     db.add(db_user)
#     db.commit()
#     db.refresh(db_user)
#     return db_user

#*********************************************************************************************


@app.put("/signup/{user_id}")
async def update_user_profile(user_id: int, user: UserUpdate, db: Session= Depends(get_db),
                        current_user: User = Depends(get_current_active_user)  ):
    if current_user.is_admin:
        db_user = db.query(User).filter(User.id == user_id).first()
        if db_user is None:
            raise HTTPException(status_code=404, detail=" User Not Found")
        db_user.verified_user = user.verified_user
        db.commit()
        db.refresh(db_user)
    else:
        raise  HTTPException(
                    status_code=status.HTTP_401_UNAUTHORIZED,
                    detail="You're Not Authorized !"
                ) 

@app.get("/signup/all")
async def get_all_users(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_active_user)
):
    if current_user.is_admin:
        tickets = db.query(User).all()
        return tickets
    else:
        raise  HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="You're Not Authorized !"
        )


@app.post("/token")
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token = create_access_token(
        data={"sub": user.username}
    )
    isAdmin = user.is_admin
    varified_user =  user.verified_user
    if varified_user:
        print("", isAdmin)
        return {"access_token": access_token, "token_type": "bearer", "IsAdmin":isAdmin}
    else:
        raise  HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="You're Not Verfied User.Wait for Admin Approval !"
        )

@app.get("/users/me", response_model=UserOut)
async def read_users_me(current_user: User = Depends(get_current_active_user)):
    return current_user

@app.post("/area/", response_model=AreaDetailsOut)
async def create_area(area: AreaDetailsCreate, db: Session = Depends(get_db),
                      current_user: User = Depends(get_current_active_user)):
    if current_user.is_admin:
        db_area = AreaDetails(area=area.area, lat=area.lat, lon=area.lon)
        db.add(db_area) 
        db.commit()
        db.refresh(db_area)
        return db_area
    else:
        raise  HTTPException(
                    status_code=status.HTTP_401_UNAUTHORIZED,
                    detail="You're Not Authorized !"
                ) 

@app.get("/area/", response_model=List[AreaDetailsOut])
async def read_areas( db: Session = Depends(get_db)):#skip: int = 0, limit: int = 10,
    # areas = db.query(AreaDetails).offset(skip).limit(limit).all()
    areas = db.query(AreaDetails).all()
    return areas

# @app.get("/area/{area_id}", response_model=AreaDetailsOut)
# async def read_area(area_id: int, db: Session = Depends(get_db)):
#     db_area = db.query(AreaDetails).filter(AreaDetails.id == area_id).first()
#     if db_area is None:
#         raise HTTPException(status_code=404, detail="Area not found")
#     return db_area

@app.put("/area/{area_id}", response_model=AreaDetailsOut)
async def update_area(area_id: int, area: AreaDetailsCreate, db: Session = Depends(get_db),
                    current_user: User = Depends(get_current_active_user)):
    if current_user.is_admin:
        db_area = db.query(AreaDetails).filter(AreaDetails.id == area_id).first()
        if db_area is None:
            raise HTTPException(status_code=404, detail="Area not found")
        db_area.area = area.area
        db_area.lat = area.lat
        db_area.lon = area.lon
        db.commit()
        db.refresh(db_area)
        return db_area
    else:
        raise  HTTPException(
                    status_code=status.HTTP_401_UNAUTHORIZED,
                    detail="You're Not Authorized !"
                ) 
    
@app.delete("/area/{area_id}", response_model=AreaDetailsOut)
async def delete_area(area_id: int, db: Session = Depends(get_db),
                    current_user: User = Depends(get_current_active_user)):
    if current_user.is_admin:
        db_area = db.query(AreaDetails).filter(AreaDetails.id == area_id).first()
        if db_area is None:
            raise HTTPException(status_code=404, detail="Area not found")
        db.delete(db_area)
        db.commit()
        return db_area
    else:
        raise  HTTPException(
                    status_code=status.HTTP_401_UNAUTHORIZED,
                    detail="You're Not Authorized !"
                ) 


@app.post("/plants/", response_model=PlantsNameOut)
async def create_plant(plant: PlantsNameCreate, db: Session = Depends(get_db),
                       current_user: User = Depends(get_current_active_user)):
    if current_user.is_admin:
        db_plant = PlantsName(plant_name=plant.plant_name)
        db.add(db_plant)
        db.commit()
        db.refresh(db_plant)
        return db_plant
    else:
        raise  HTTPException(
                    status_code=status.HTTP_401_UNAUTHORIZED,
                    detail="You're Not Authorized !"
                ) 

@app.get("/plants/", response_model=List[PlantsNameOut])
async def read_plants( db: Session = Depends(get_db)):#skip: int = 0, limit: int = 10,
    # plants = db.query(PlantsName).offset(skip).limit(limit).all()
    plants = db.query(PlantsName).all()
    return plants

# @app.get("/plants/{plant_id}", response_model=PlantsNameOut)
# async def read_plant(plant_id: int, db: Session = Depends(get_db)):
#     db_plant = db.query(PlantsName).filter(PlantsName.id == plant_id).first()
#     if db_plant is None:
#         raise HTTPException(status_code=404, detail="Plant not found")
#     return db_plant




@app.put("/plants/{plant_id}", response_model=PlantsNameOut)
async def update_plant(plant_id: int, plant: PlantsNameCreate, db: Session = Depends(get_db),
                       current_user: User = Depends(get_current_active_user)):
    if current_user.is_admin:
        db_plant = db.query(PlantsName).filter(PlantsName.id == plant_id).first()
        if db_plant is None:
            raise HTTPException(status_code=404, detail="Plant not found")
        db_plant.plant_name = plant.plant_name
        db.commit()
        db.refresh(db_plant)
        return db_plant
    else:
        raise  HTTPException(
                    status_code=status.HTTP_401_UNAUTHORIZED,
                    detail="You're Not Authorized !"
                )

@app.delete("/plants/{plant_id}", response_model=PlantsNameOut)
async def delete_plant(plant_id: int, db: Session = Depends(get_db), 
                    current_user: User = Depends(get_current_active_user)):
    if current_user.is_admin:
        db_plant = db.query(PlantsName).filter(PlantsName.id == plant_id).first()
        if db_plant is None:
            raise HTTPException(status_code=404, detail="Plant not found")
        db.delete(db_plant)
        db.commit()
        return db_plant
    else:
        raise  HTTPException(
                    status_code=status.HTTP_401_UNAUTHORIZED,
                    detail="You're Not Authorized !"
                )

@app.post("/tickets/" ) #response_model=TicketOut
async def create_ticket(
    ticket: TicketCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_active_user)
):
    db_ticket = Ticket(
        user_id=current_user.id,  # Use the user_id from the logged-in user
        payment_status=ticket.payment_status,
        admin_approval= False, #ticket.admin_approval,
        selected_area=ticket.selected_area,
        selected_plants=ticket.selected_plants,
        no_of_plants=ticket.no_of_plants
    )
    
    db.add(db_ticket)
    db.commit()
    db.refresh(db_ticket)
    return db_ticket

@app.get("/tickets/")#, response_model=TicketOut
async def get_tickets_for_user(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_active_user)
):
    tickets = db.query(Ticket)\
            .options(joinedload(Ticket.user),joinedload(Ticket.area), joinedload(Ticket.plant))\
            .filter(Ticket.user_id == current_user.id)\
            .all()
    

    return tickets


    
@app.get("/tickets/all")#, response_model=TicketOut
async def get_tickets_for_user(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_active_user)
):
    if current_user.is_admin:
        tickets = db.query(Ticket)\
                .options(joinedload(Ticket.user),joinedload(Ticket.area), joinedload(Ticket.plant))\
                .all()
        
        return tickets
    else:
        raise  HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="You're Not Authorized !"
        )


@app.put("/tickets/{ticket_id}")
async def update_ticket(ticket_id: int, ticket: TicketUpdate, db: Session = Depends(get_db),
                        current_user: User = Depends(get_current_active_user)):
    if current_user.is_admin:
        db_ticket = db.query(Ticket).filter(Ticket.id == ticket_id).first()
        if db_ticket is None:
            raise HTTPException(status_code=404, detail="Ticket not found")
        db_ticket.payment_status = ticket.payment_status
        db_ticket.admin_approval = ticket.admin_approval
        db.commit()
        db.refresh(db_ticket)
        return db_ticket
    else:
        raise  HTTPException(
                    status_code=status.HTTP_401_UNAUTHORIZED,
                    detail="You're Not Authorized !"
                )


# {
#   "id": 0,
#   "user_id": 0,
#   "payment_status": true,
#   "admin_approval": true,
#   "selected_area": {
#     "id": 0,
#     "area": "string",
#     "lat": [
#       "string"
#     ],
#     "lon": [
#       "string"
#     ]
#   },
#   "selected_plants": {
#     "id": 0,
#     "plant_name": "string"
#   },
#   "no_of_plants": 0
# }

# @app.post("/tickets/", response_model=TicketBase)
# async def create_ticket(ticket: TicketCreate, db: Session = Depends(get_db)):
#     db_ticket = Ticket(
#         user_id=ticket.user_id,
#         payment_status=ticket.payment_status,
#         admin_approval=ticket.admin_approval,
#         selected_area=ticket.selected_area,
#         selected_plants=ticket.selected_plants,
#         no_of_plants=ticket.no_of_plants
#     )
    
#     db.add(db_ticket)
#     db.commit()
#     db.refresh(db_ticket)
#     return db_ticket

# {
#   "username": "admin",
#   "email": "admin@gamil.com",
#   "full_name": "string",
#   "password": "wesee",
#   "adhaar_no": 908567543567,
#   "photo": "string"
# }







# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run(app, host="0.0.0.0", port=8000)