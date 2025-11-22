import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar.jsx";
import { useNavigate } from "react-router-dom";
import UsersList from "./UserList.jsx";
import PropertiesList from "./PropertyList.jsx";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("properties");
  const [summary, setSummary] = useState({});
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!user || user.role !== "admin") {
      navigate("/");
      return; //stop excution if not authorized
    }

    //fetch dashboard summary
    const fetchSummary = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/admin/summary", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          // Check if the response was successful (status code 200-299)
          if (res.status === 401) {
            // Optionally handle 401 specifically, e.g., redirect to login
            console.error("Authentication failed, please log in again.");
            navigate("/account/login"); // Redirect to login page
          }
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setSummary(data);
      } catch (error) {
        console.error("Error fetching dashboard summary:", error);
      }
    };
    fetchSummary();
  }, [user, navigate, token]);
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar setActiveTab={setActiveTab} activeTab={activeTab} />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6 font-serif">Admin Dashboard</h1>

        {activeTab === "overview" && (
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white p-6 shadow rounded-lg">
              <h2 className="text-gray-600 text-sm">Total Users</h2>
              <p className="text-2xl font-bold">{summary.users || 0}</p>
            </div>
            <div className="bg-white p-6 shadow rounded-lg">
              <h2 className="text-gray-600 text-sm">Total Properties</h2>
              <p className="text-2xl font-bold">{summary.properties || 0}</p>
            </div>
            <div className="bg-white p-6 shadow rounded-lg">
              <h2 className="text-gray-600 text-sm">In Stock</h2>
              <p className="text-2xl font-bold text-green-600">
                {summary.inStock || 0}
              </p>
            </div>
          </div>
        )}

        {activeTab === "users" && <UsersList />}
        {activeTab === "properties" && <PropertiesList />}
      </div>
    </div>
  );
};

export default Dashboard;
