// src/Component3.js
import React from 'react';

const Component3 = () => {

  const userRequests = [
    {
      "selectedArea": "Karachi",
      "selectedPlant": "Mango",
      "numberOfPlants": 10,
      "paymentStatus": "pending"
    },
    {
      "selectedArea": "Delhi",
      "selectedPlant": "Neem",
      "numberOfPlants": 15,
      "paymentStatus": "done"
    },
    {
      "selectedArea": "Taiwan Square (1 sq km)",
      "selectedPlant": "Apple",
      "numberOfPlants": 5,
      "paymentStatus": "pending"
    }
  ]
  
  

  return (
    <div className="p-4 h-full overflow-auto">
      <h2 className="text-2xl font-semibold mb-4">User Preferences</h2>
      <table className="table w-full mb-4">
        <thead>
          <tr>
            <th>Selected Area</th>
            <th>Selected Plant</th>
            <th>Number of Plants</th>
            <th>Payment Status</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {userRequests.map((request, index) => (
            <tr key={index}>
              <td>{request.selectedArea}</td>
              <td>{request.selectedPlant}</td>
              <td>{request.numberOfPlants}</td>
              <td>
                <span
                  className={`px-2 py-1 rounded-lg text-white ${
                    request.paymentStatus === 'pending'
                      ? 'bg-yellow-500'
                      : request.paymentStatus === 'done'
                      ? 'bg-green-500'
                      : 'bg-red-500'
                  }`}
                >
                  {request.paymentStatus}
                </span>
              </td>
              <td>
                <details className="cursor-pointer">
                  <summary className="text-blue-500 underline">
                    View Details
                  </summary>
                  <div className="mt-2">
                    <p><strong>Username:</strong> {request.username}</p>
                    <p><strong>Selected Area:</strong> {request.selectedArea}</p>
                    <p><strong>Selected Plant:</strong> {request.selectedPlant}</p>
                    <p><strong>Number of Plants:</strong> {request.numberOfPlants}</p>
                  </div>
                </details>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Component3;
