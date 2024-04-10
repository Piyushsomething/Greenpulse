import React from "react";

const ProfileCard = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-row justify-between card w-full h-auto bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">Name: Piyush</h2>
          <p>Address: wesee fjhar jfnsd jk</p>
          <p>Date Of Joining: 22 Jun 2024</p>
        </div>
        <div className="avatar mr-8">
        <div className="w-24 mask mask-squircle">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Profile Avatar" />
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default ProfileCard;
