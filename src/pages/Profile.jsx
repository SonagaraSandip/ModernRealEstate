import React from "react";
import { LogOut, MapPin, LayoutDashboard } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  // Get user info
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const role = user?.role;
  const isAdmin = role === "admin";

  const handleLogout = () => {
    localStorage.clear();
    navigate("/account/login");
  };

  return (
    <div className=" bg-[#f9f9f9] text-[#0e1a1f] flex justify-center px-6 md:px-20 py-16">
      <div className="max-w-6xl w-full flex flex-col md:flex-row justify-between items-start gap-16">
        {/* Account Details Section */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-8">Account</h1>

          <div>
            <h2 className="text-xl font-semibold mb-3">Account details</h2>
            <p className="text-gray-700">{user?.name || "User Name"}</p>
            <p className="text-gray-700 mb-6">{user?.email || "user@email.com"}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 px-2 py-2 bg-[#0e1a1f] text-white rounded-full hover:opacity-90 transition">
                <MapPin size={18} />
                View addresses (1)
              </button>

              {isAdmin && (
                <Link
                  to="/admin/dashboard"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                >
                  <LayoutDashboard size={18} />
                  Admin Dashboard
                </Link>
              )}

              <button
                onClick={handleLogout}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 text-black rounded-full hover:bg-gray-300 transition"
              >
                <LogOut size={18} />
                Log out
              </button>
            </div>
          </div>
        </div>

        {/* Order History Section */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-3">Order history</h2>
          <p className="text-gray-500">
            You haven't placed any orders yet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
