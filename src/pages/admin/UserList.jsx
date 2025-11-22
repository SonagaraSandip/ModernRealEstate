import React, { useState, useEffect } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/admin/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          if (res.status === 401) {
            setError("Unauthrorized- please login again");
            localStorage.clear();
            window.location.href = "/account/login";
            return;
          }
          throw new Error(`HTTP Error! Status: ${res.status}`);
        }
        const data = await res.json();
        setUsers(data.users || data || []);
      } catch (error) {
        console.error("Error fetching users", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const promoteToAdmin = async (id) => {
    const token = localStorage.getItem("token");
    if (!window.confirm("Promote this user to Admin?")) return;

    try {
      const res = await fetch(`http://localhost:5000/api/admin/promote/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error("Failed to promote user");

      const data = await res.json();
      alert(data.message);
    } catch (error) {
      console.error("Error promoting user:", error);
    }
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, role: "admin" } : u))
    );
  };

  if (loading) return <p className="text-gray-600">Loading users...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 font-serif">Users</h2>
      <table className="w-full font-semibold mb-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Role</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {users.map((u, index) => (
            <tr key={index}>
              <td className="p-2 border">{u.id}</td>
              <td className="p-2 border">{u.name}</td>
              <td className="p-2 border">{u.email}</td>
              <td className="p-2 border">{u.role}</td>
              <td className="p-2 border cursor-pointer">
                {u.role !== "admin" && (
                  <button
                    onClick={() => promoteToAdmin(u.id)}
                    className="border px-2 py-1 rounded-full bg-green-500 hover:bg-green-800 text-white"
                  >
                    Promote To Admin
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
