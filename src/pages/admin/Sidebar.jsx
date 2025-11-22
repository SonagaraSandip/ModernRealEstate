import React from "react";
import { Users, LayoutDashboard, PlayCircle, Home } from "lucide-react";

const Sidebar = ({ setActiveTab, activeTab }) => {
  const menuItem = [
    {
      id: "overview",
      label: "Overview",
      icon: <LayoutDashboard size={18} />,
    },
    {
      id: "users",
      label: "Users",
      icon: <Users size={18} />,
    },
    {
      id: "properties",
      label: "Properties",
      icon: <Home size={18} />,
    },
  ];

  return (
    <div className="w-64 bg-[#0e1a1f] text-white flex flex-col">
      <div className="p-6 font-bold text-lg border-b border-gray-700">
        Admin panel
      </div>
      <nav className="flex flex-col mt-4">
        {menuItem.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex items-center gap-3 px-6 py-3 text-left hover:bg-gray-800 transition ${
              activeTab === item.id ? "bg-gray-700" : ""
            }`}
          >
            {item.icon} {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
