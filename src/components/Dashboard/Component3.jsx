// src/Component3.js
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Cookies from "js-cookie";

const Component3 = () => {
  const router = useRouter();
  const [userRequests, setUserRequests] = useState([]);

  useEffect(() => {
    const fetchUserRequests = async () => {
      try {
        const token = Cookies.get("access_token_login");
        if (!token) {
          router.push("/login");
        }

        const response = await fetch(`http://127.0.0.1:8000/tickets/`, {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Error fetching user requests:", errorData);
          throw new Error(errorData.detail || "Unknown error");
        }

        const data = await response.json();
        setUserRequests(data);
      } catch (error) {
        console.error("Error fetching user requests:", error.message);
      }
    };

    fetchUserRequests();
  }, []);

  return (
    <div className="h-full overflow-auto p-4">
      <h2 className="mb-4 text-2xl font-semibold">User Preferences</h2>
      <div className="overflow-x-auto">
        <table className="table mb-4 w-full min-w-full">
          <thead>
            <tr>
              <th>Selected Area</th>
              <th>Selected Plant</th>
              <th>Number of Plants</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {userRequests.map((request) => (
              <tr key={request.id}>
                <td>{request.area.area}</td>
                <td>{request.plant.plant_name}</td>
                <td>{request.no_of_plants}</td>
                <td>
                  <span
                    className={`rounded-lg px-2 py-1 text-white ${
                      request.payment_status ? "bg-green-500" : "bg-yellow-500"
                    }`}
                  >
                    {request.payment_status ? "done" : "pending"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Component3;
