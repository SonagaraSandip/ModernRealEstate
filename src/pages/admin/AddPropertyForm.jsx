import React, { useState } from "react";
import { X } from "lucide-react";

const AddPropertyForm = ({ onClose, onAdded }) => {
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    price: "",
    size_sqft: "",
    description: "",
    in_stock: true,
  });
  const [preview, setPreview] = useState({
    main_image: null,
    image_1200: null,
    image_1400: null,
    image_1600: null,
  });
  const [files, setFiles] = useState({
    main_image: null,
    image_1200: null,
    image_1400: null,
    image_1600: null,
  });

  const handleFileChange = (e, name) => {
    const file = e.target.files[0];
    setFiles({ ...files, [name]: file });
    setPreview({ ...preview, [name]: URL.createObjectURL(file) });
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");

    const body = new FormData();

    body.append("title", formData.title);
    body.append("type", formData.type);
    body.append("price", formData.price);
    body.append("size_sqft", formData.size_sqft);
    body.append("description", formData.description);
    body.append("in_stock", formData.in_stock);

    if (files.main_image) {
      body.append("main_image", files.main_image);
    }
    if (files.image_1200) {
      body.append("image_1200", files.image_1200);
    }
    if (files.image_1400) {
      body.append("image_1400", files.image_1400);
    }
    if (files.image_1600) {
      body.append("image_1600", files.image_1600);
    }

    try {
      const res = await fetch(
        "http://localhost:5000/api/properties/addProperty",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body,
        }
      );

      const data = await res.json();

      if (!res.ok) throw new Error("Failed to add property");

      alert("Property added successfully");
      onAdded(data.property);
      onClose();
    } catch (error) {
      console.error("Error adding property:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center p-4">
      <div className="bg-white p-6 rouned-lg w-[600px] relative shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-600 hover:text-black"
        >
          <X size={24} />
        </button>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <h2 className="text-2xl font-serif font-bold mb-5 ">
            Add New Property
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Title"
              className="border p-2 rounded "
              required
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Type"
              className="border p-2 rounded "
              required
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Price"
              className="border p-2 rounded "
              required
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Sizes (eg: 1200, 1400, 1600)"
              className="border p-2 rounded "
              required
              onChange={(e) =>
                setFormData({ ...formData, size_sqft: e.target.value })
              }
            />
            <textarea
              placeholder="Description"
              className="border p-2 rounded col-span-2"
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            ></textarea>
            <select
              onChange={(e) =>
                setFormData({
                  ...formData,
                  in_stock: e.target.value === "true",
                })
              }
              className="border p-2 rounded col-span-2"
            >
              <option value="true">In Stock</option>
              <option value="false">Out of Stock</option>
            </select>
          </div>
          <h3 className="font-semibold mt-6 mb-2">Upload Images</h3>
          <div className="grid grid-cols-2 gap-2">
            {/* main image */}
            <div>
              <p className="text-sm font-medium mb-1">Main Image</p>
              <input
                type="file"
                required
                onChange={(e) => handleFileChange(e, "main_image")}
              />

              {preview.main_image && (
                <img src={preview.main_image} className="h-20 mt-2 rounded" />
              )}
            </div>

            <div>
              <p className="text-sm font-medium mb-1">First Image</p>
              <input
                type="file"
                onChange={(e) => handleFileChange(e, "image_1200")}
              />

              {preview.image_1200 && (
                <img src={preview.image_1200} className="h-20 mt-2 rounded" />
              )}
            </div>
            <div>
              <p className="text-sm font-medium mb-1">Second Image</p>
              <input
                type="file"
                onChange={(e) => handleFileChange(e, "image_1400")}
              />

              {preview.image_1400 && (
                <img src={preview.image_1400} className="h-20 mt-2 rounded" />
              )}
            </div>
            <div>
              <p className="text-sm font-medium mb-1">Third Image</p>
              <input
                type="file"
                onChange={(e) => handleFileChange(e, "image_1600")}
              />

              {preview.image_1600 && (
                <img src={preview.image_1600} className="h-20 mt-2 rounded" />
              )}
            </div>
          </div>

          <button
            // onClick={handleSubmit}
            type="submit"
            className="bg-green-600 w-full mt-6 py-2 rounded text-white hover:bg-green-800"
          >
            Add Property
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPropertyForm;
