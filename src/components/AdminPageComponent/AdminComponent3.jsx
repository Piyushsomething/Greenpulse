"use client";

import React, { useState } from "react";

const AdminComponent3 = ({ userRequests, handleUserRequest }) => {
  return (
    <div className="p-4 h-full overflow-auto">
      <h2 className="text-2xl font-semibold mb-4">User Preferences</h2>
      <table className="table w-full mb-4 ">
        <thead>
          <tr>
            <th>Username</th>
            <th>Selected Area</th>
            <th>Selected Plant</th>
            <th>Number of Plants</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userRequests.map((request, index) => (
            <tr
              key={index}
              className={ 
                request.status === "approved"
                  ? "bg-green-100 "
                  : request.status === "denied"
                  ? "bg-red-100 "
                  : ""
              }
            >
              <td>{request.username}</td>
              <td>{request.selectedArea}</td>
              <td>{request.selectedPlant}</td>
              <td>{request.numberOfPlants}</td>
              <td>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none mr-2"
                  onClick={() => handleUserRequest(index, "approved")}
                >
                  Approve
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none mr-2"
                  onClick={() => handleUserRequest(index, "denied")}
                >
                  Deny
                </button>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none">
                  Comment
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminComponent3;
