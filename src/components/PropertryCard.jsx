import React, { useState } from "react";
import { LocateFixed, MoveRight } from "lucide-react";

const PropertryCard = ({ property }) => {
  const [selectedSize, setSelectedSize] = useState(property.size_sqft?.[0]);

  return (
    <div className="flex flex-col bg-[#ffe7d9] rounded-2xl text-[#172229] shadow-lg hover:shadow-2xl transition-all w-full max-w-sm mx-auto ">
      <img
        src={`http://localhost:5000/uploads/${property.image}`}
        alt={property.title}
        loading="lazy"
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="flex flex-col p-5">
        <div className="flex items-center gap-1 mb-2">
          <LocateFixed size={14} />
          <p className="text-sm font-serif ">{property.type}</p>
        </div>
        <h2 className="text-md font-bold mb-4">{property.title}</h2>
        {/* size button */}
       <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)} className="w-full mb-4 p-2 rounded-lg border border-gray-300 bg-gray-100 text-gray-700 focus:outline-none">
        {property.size_sqft.map((size , index) => (
          <option key={index} value={size}>{size} sq ft</option>
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
