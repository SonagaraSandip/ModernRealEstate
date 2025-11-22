import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LocateFixed, MoveRight, Heart, RefreshCcw, Eye } from "lucide-react";

const PropertryCard = ({ property }) => {
  const defaultSize = property.size_sqft?.[0];
  const [selectedSize, setSelectedSize] = useState(defaultSize);

  const currentImage =
    property.images_by_size?.[selectedSize] || property.image;

  const GenerateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  return (
    <div className="flex flex-col bg-[#ffe7d9] rounded-2xl text-[#172229] shadow-lg hover:shadow-2xl transition-all w-full max-w-sm mx-auto ">
      <div className="relative w-full h-48 rounded-xl overflow-hidden group">
        <Link to={`/products/${GenerateSlug(property.title)}`}>
          <img
            src={`http://localhost:5000/uploads/${currentImage}`}
            alt={property.title}
            loading="lazy"
            className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
          />
        </Link>

        {/* hover actions */}
        <div className="absolute top-2 left-2 flex flex-col opacity-0 group-hover:opacity-100 gap-2 transition-opacity  ">
          <button className="bg-black/70 p-1 rounded-lg hover:bg-black/90 text-white">
            <Heart size={16} />
          </button>
          <button className="bg-black/70 p-1 rounded-lg hover:bg-black/90 text-white">
            <RefreshCcw size={16} />
          </button>
          <button className="bg-black/70 p-1 rounded-lg hover:bg-black/90 text-white">
            <Eye size={16} />
          </button>
        </div>
      </div>

      <div className="flex flex-col p-5">
        <div className="flex items-center gap-1 mb-2">
          <LocateFixed size={14} />
          <p className="text-sm font-serif ">{property.type}</p>
        </div>
        <h2 className="text-md font-bold mb-4">{property.title}</h2>
        {/* size button */}
        <select
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
          className="w-full mb-4 p-2 rounded-lg border border-gray-300 bg-gray-100 text-gray-700 focus:outline-none"
        >
          {property.size_sqft.map((size, index) => (
            <option key={index} value={size}>
              {size} sq ft
            </option>
          ))}
        </select>
        {/* price */}
        <div className="text-green-600 font-semibold text-md mb-4">
          ₨. ₹{property.price}
        </div>
        {/* add to cart */}
        <button className="flex items-center self-start gap-1 px-4 py-2 rounded-full text-sm border transition-colors duration-300 bg-[#172229] text-white hover:bg-[#ffe7d9] hover:text-black border-black">
          <span>Add to Cart</span>
          <MoveRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default PropertryCard;
