import React from "react";
import { useNavigate } from "react-router-dom";
import First from "../assets/collection/1.webp";
import Second from "../assets/collection/2.webp";
import Third from "../assets/collection/3.webp";
import Fourth from "../assets/collection/4.jpg";

const Collections = () => {
  const navigate = useNavigate();

  const collections = [
    {
      id: "bestseller",
      title: "Bestseller",
      items: 8,
      image: First,
    },
    {
      id: "farm-villa",
      title: "Farm Villa",
      items: 8,
      image: Second,
    },
    {
      id: "properties",
      title: "Properties",
      items: 9,
      image: Third,
    },
    {
      id: "royal-house",
      title: "Royal House",
      items: 9,
      image: Fourth,
    },
  ];

  const handleCardClick = (collectionId) => {
    navigate(`/collections/${collectionId}`);
  };

  return (
    <div className="min-h-screen bg-[#fcfcf9]  py-12 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-center text-5xl font-semibold mb-14 text-[#13343b]  tracking-tight">
          Collections
        </h1>

        {/* Top Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {collections.map((collection) => (
            <div
              key={collection.id}
              onClick={() => handleCardClick(collection.id)}
              className="cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-2 group"
            >
              <div className="relative w-full pb-[75%] overflow-hidden rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
              <div className="text-center mt-6">
                <h2 className="text-2xl font-semibold mb-3 text-[#13343b] ">
                  {collection.title}
                </h2>
                <span className="inline-block bg-[#13343b]  text-[#fcfcf9]  px-5 py-2 rounded-full text-sm font-medium">
                  {collection.items} - Items
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
