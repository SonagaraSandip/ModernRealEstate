import React, { useEffect, useState } from "react";
import { Trash2, Edit3, Plus, X } from "lucide-react";
import AddPropertyForm from "./AddPropertyForm.jsx";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [editingProperty, setEditingProperty] = useState(null);

  const [showAddForm, setShowAddForm] = useState(false);
 
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    price: "",
    in_stock: true,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchProperties = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/properties", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          if (res.status === 401) {
            console.error("Authentication failed, please log in again.");
            localStorage.clear();
            window.location.href = "/account/login";
            return;
          }
          throw new Error(`HTTP Error! Status: ${res.status}`);
        }

        const data = await res.json();
        setProperties(data.properties || []);
      } catch (error) {
        console.error("Error fetching properties", error);
      }
    };
    fetchProperties();
  }, []);

  //delete properties
  const deleteProperty = async (id) => {
    const token = localStorage.getItem("token");
    if (!window.confirm("Delete this Property?")) return;

    try {
      const res = await fetch(`http://localhost:5000/api/properties/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error("Failed to delete property");

      const data = await res.json();
      alert(data.message);
    } catch (error) {
      console.error("Error while deleteing Property", error);
    }

    setProperties(properties.filter((p) => p.id !== id));
  };

  //edit properties
  const handleEditClick = (property) => {
    setEditingProperty(property.id);
    setFormData({
      title: property.title,
      type: property.type,
      price: property.price,
      in_stock: property.in_stock,
      size_sqft: property.size_sqft,
      description: property.description,
    });
  };

  const handleUpdate = async () => {
    const token = localStorage.getItem("token");
    const body = new FormData();
    body.append("title", formData.title);
    body.append("type", formData.type);
    body.append("price", formData.price);
    body.append("size_sqft", formData.size_sqft);
    body.append("description", formData.description);
    body.append("in_stock", formData.in_stock);

    if (formData.main_image) {
      body.append("main_image", formData.main_image);
    }
    if (formData.image_1200) {
      body.append("image_1200", formData.image_1200);
    }
    if (formData.image_1400) {
      body.append("image_1400", formData.image_1400);
    }
    if (formData.image_1600) {
      body.append("image_1600", formData.image_1600);
    }

    try {
      const res = await fetch(
        `http://localhost:5000/api/properties/${editingProperty}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body,
        }
      );

      if (!res.ok) throw new Error("Failed to update property");

      const data = await res.json();
      alert(data.message);
      setProperties(
        properties.map((p) =>
          p.id === editingProperty
            ? { ...p, ...formData, image: data.property.image }
            : p
        )
      );

      setEditingProperty(null);
    } catch (error) {
      console.error("Error while updating Property", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Properties</h2>
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          <Plus size={16} /> Add Property
        </button>
      </div>

      <table className="w-full text-left border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Type</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Stock</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((p) => (
            <tr key={p.id}>
              <td className="border p-2">{p.id}</td>
              <td className="border p-2 flex items-center gap-6">
                <img
                  src={`http://localhost:5000/uploads/${p.image}`}
                  className="w-20 h-20"
                />
                {p.title}
              </td>
              <td className="border p-2">{p.type}</td>
              <td className="border p-2">₹{p.price}</td>
              <td className="border p-2">
                {p.in_stock ? (
                  <span className="text-green-600 font-semibold">Yes</span>
                ) : (
                  <span className="text-red-600 font-semibold">No</span>
                )}
              </td>
              <td className="border p-2 ">
                <button
                  onClick={() => handleEditClick(p)}
                  className="p-1 mr-6 text-blue-600 hover:text-blue-800"
                >
                  <Edit3 size={18} />
                </button>
                <button
                  onClick={() => deleteProperty(p.id)}
                  className="p-1  text-red-600 hover:text-red-800"
                >
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingProperty && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-md relative">
            <button
              onClick={() => setEditingProperty(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              {" "}
              <X size={20} />
            </button>
            <h3 className="text-lg font-serif font-semibold mb-4">
              Edit Property
            </h3>

            <input
              type="text"
              placeholder="Title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="border p-2 w-full mb-3 rounded"
            />
            <input
              type="text"
              placeholder="Type"
              value={formData.type}
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
              className="border p-2 w-full mb-3 rounded"
            />
            <input
              type="text"
              placeholder="Sizes (eg: 1200, 1400, 1600)"
              value={formData.size_sqft}
              onChange={(e) =>
                setFormData({ ...formData, size_sqft: e.target.value })
              }
              className="border p-2 w-full mb-3 rounded"
            />
            <input
              type="text"
              placeholder="Price"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
              className="border p-2 w-full mb-3 rounded"
            />
            <select
              value={formData.in_stock}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  in_stock: e.target.value === "true",
                })
              }
              className="border p-2 w-full mb-3 rounded"
            >
              <option value="true">In Stock</option>
              <option value="false">Out of Stock</option>
            </select>
            <textarea
              placeholder="Description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="border p-2 w-full mb-3 rounded"
            ></textarea>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="file"
                onChange={(e) =>
                  setFormData({ ...formData, main_image: e.target.files[0] })
                }
              />
              <input
                type="file"
                onChange={(e) =>
                  setFormData({ ...formData, image_1200: e.target.files[0] })
                }
              />
              <input
                type="file"
                onChange={(e) =>
                  setFormData({ ...formData, image_1400: e.target.files[0] })
                }
              />
              <input
                type="file"
                onChange={(e) =>
                  setFormData({ ...formData, image_1600: e.target.files[0] })
                }
              />
            </div>

            <button
              onClick={handleUpdate}
              className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700 transition-colors duration-300"
            >
              Save Change
            </button>
          </div>
        </div>
      )}

      {showAddForm && (
        <AddPropertyForm
          onClose={() => setShowAddForm(false)}
          onAdded={(newProperty) => setProperties([...properties, newProperty])}
        />
      )}
    </div>
  );
};

export default PropertyList;
