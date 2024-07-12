from sqlalchemy import create_engine, Column, Integer,BigInteger, String, Boolean, ForeignKey, Table
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, sessionmaker
from sqlalchemy.types import JSON

SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"

engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

# Association table for many-to-many relationship between Tickets and Users
ticket_user = Table('ticket_user', Base.metadata,
                    Column('user_id', Integer, ForeignKey('users.id')),
                    Column('ticket_id', Integer, ForeignKey('tickets.id')))



class AreaDetails(Base):
    __tablename__ = "area_details"
    id = Column(Integer, primary_key=True, index=True)
    area = Column(String, index=True)
    lat = Column(JSON)  # Store list as JSON
    lon = Column(JSON)  # Store list as JSON

class PlantsName(Base):
    __tablename__ = "plants_name"
    id = Column(Integer, primary_key=True, index=True)
    plant_name = Column(String, unique=True, index=True)

class Ticket(Base):
    __tablename__ = "tickets"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    payment_status = Column(Boolean, default=False)
    admin_approval = Column(Boolean, default=False)
    selected_area = Column(Integer, ForeignKey('area_details.id'))
    selected_plants = Column(Integer, ForeignKey('plants_name.id'))
    no_of_plants = Column(Integer)

    user = relationship("User", back_populates="tickets")
    area = relationship("AreaDetails")
    plant = relationship("PlantsName")

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True)
    full_name = Column(String)
    hashed_password = Column(String)
    disabled = Column(Boolean, default=False)
    is_admin = Column(Boolean, default=False)
    verified_user = Column(Boolean, default=False)
    adhaar_no = Column(BigInteger, unique=True)
    photo = Column(String)
    adhaar_photo = Column(String)
    tickets = relationship("Ticket", secondary=ticket_user, back_populates="user")

def init_db():
    Base.metadata.create_all(bind=engine)




































































# from sqlalchemy import create_engine, Column, Integer, String, Boolean
# from sqlalchemy.ext.declarative import declarative_base
# from sqlalchemy.orm import sessionmaker

# SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"

# engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
# SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base = declarative_base()

# class User(Base):
#     __tablename__ = "users"
#     id = Column(Integer, primary_key=True, index=True)
#     username = Column(String, unique=True, index=True)
#     email = Column(String, unique=True, index=True)
#     full_name = Column(String)
#     hashed_password = Column(String)
#     disabled = Column(Boolean, default=False)

# def init_db():
#     Base.metadata.create_all(bind=engine)
