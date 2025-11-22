import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowBigRight, Heart, Share2, Scissors, Minus, Plus } from "lucide-react";
import ShopPro from "../assets/homepage/shop-pro.webp";
import { fetchProperties } from "../api/propertyApi";

const ProductDetails = () => {
  const { productId } = useParams();
  const [property, setProperty] = useState(null);
  const [properties, setProperties] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const slugify = (title) =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  // FETCH PROPERTY
  useEffect(() => {
    fetch("http://localhost:5000/api/properties")
      .then((res) => res.json())
      .then((data) => {
        const found = data.properties.find(
          (p) => slugify(p.title) === productId
        );
        if (found) {
          setProperty(found);
          setSelectedSize(found.size_sqft[0]); // default first size
        }
      });
  }, [productId]);

  //fetxh property for images section
  useEffect(() => {
    fetchProperties().then((data) => {
      // You can use the fetched data here if needed
      setProperties(data);
    });
  }, []);

  if (!property) return <h1 className="text-white p-10">Loading...</h1>;

  const currentImage =
    property.images_by_size?.[selectedSize] || property.image;

  return (
    <div className=" min-h-screen text-white px-6 py-12">
      <div className=" max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* LEFT SECTION */}
        <div>
          {/* Back button + Wishlist */}
          <div className="flex justify-between items-center mb-8">
            <Link
              to="/collections"
              className="flex items-center gap-2 text-white hover:underline"
            >
              <ArrowLeft size={20} /> Back to category
            </Link>

            <button className="flex items-center gap-2 text-white hover:underline">
              <Heart size={20} /> Add to wishlist
            </button>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-bold mb-6">{property.title}</h1>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed mb-6">
            {property.description}
          </p>

          {/* SIZE SELECTOR */}
          <div className="mb-8">
            <p className="text-lg mb-2 font-semibold">
              Size: {selectedSize} sq ft
            </p>

            <div className="flex gap-3 flex-wrap">
              {property.size_sqft.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-6 py-2 rounded-full border text-sm ${
                    selectedSize === size
                      ? "bg-white text-black"
                      : "border-gray-400 hover:bg-white hover:text-black"
                  }`}
                >
                  {size} sq ft
                </button>
              ))}
            </div>
          </div>

          {/* Sizing Guide + Share */}
          <div className="flex items-center gap-6 text-gray-300 mb-6">
            <button className="flex items-center gap-2 hover:text-white">
              <Scissors size={18} /> See Sizing Guide
            </button>

            <button className="flex items-center gap-2 hover:text-white">
              <Share2 size={18} /> Share
            </button>
          </div>

          {/* PRICE + QUANTITY */}
          <div className="flex items-center justify-between mb-6">
            {/* Quantity */}
            <div className="flex items-center gap-4 bg-transparent border px-4 py-2 rounded-full">
              <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
                <Minus size={18} />
              </button>
              <span className="font-semibold">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>
                <Plus size={18} />
              </button>
            </div>

            {/* Price */}
            <p className="text-2xl font-semibold text-green-400">
              Rs. {property.price.toLocaleString()}
            </p>
          </div>

          {/* ADD TO CART / BUY NOW */}
          <div className="flex gap-4 mt-6">
            <button className="flex-1 py-4 text-black bg-[#ffe7d9] rounded-full font-semibold hover:bg-white transition">
              Add to Cart →
            </button>

            <button className="flex-1 py-4 border border-white rounded-full font-semibold hover:bg-white hover:text-black transition">
              Buy it now
            </button>
          </div>
        </div>

        {/* RIGHT SECTION — IMAGE */}
        <div className="flex flex-col items-center">
          <img
            src={`http://localhost:5000/uploads/${currentImage}`}
            className="rounded-xl w-full h-[420px] object-cover shadow-lg"
          />

          {/* Slider Dots */}
          <div className="flex gap-3 mt-4">
            {property.size_sqft.map((size, i) => (
              <button
                key={i}
                onClick={() => setSelectedSize(size)}
                className={`w-3 h-3 rounded-full ${
                  selectedSize === size ? "bg-white" : "bg-gray-500"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
      {/* images sections */}
      <div className="max-w-7xl mx-auto flex flex-col gap-4">
        <h2 className="text-4xl font-serif font-semibold mt-24 mb-8">
          Recently Viewed Products
        </h2>
        <div className="flex gap-8">
          {properties.slice(0, 4).map((prop) => (
            <div
              key={prop.id}
              className="flex flex-col w-full items-center gap-2 border-2 border-white rounded-xl hover:scale-105 transition-transform cursor-pointer"
            >
              <img
                key={prop.id}
                src={`http://localhost:5000/uploads/${prop.image}`}
                alt={prop.title}
                className="w-96 h-72 object-cover rounded-xl"
              />
              <p className="text-xl truncate pl-2 font-semibold self-start font-serif">
                {prop.title}
              </p>
              <p className="text-xl font-mono pl-2 self-start">Rs.{prop.price.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>

      {/*Other section of property */}
      <div className="flex flex-col mt-12 gap-8">
        <div className="flex gap-16 max-w-7xl mx-auto">
          <h1 className="text-4xl text-nowrap font-serif">
            Open the door for aspacious living
          </h1>
          <p className="mt-12 bg-[#172229]  p-4 rounded-md z-10">
            Indulge in the ultimate coastal lifestyle with our contemporary
            beachfront properties. Immerse yourself in the soothing sounds of
            the ocean and bask in the warm embrace of the sun, just steps away
            from your doorstep.
          </p>
        </div>
        <img src={ShopPro} alt="big image is here" className="-mt-16 w-full" />
      </div>
      {/* Horizonal property card  */}
      <div className="flex gap-16 max-w-7xl mx-auto">
        <h1 className="text-4xl text-nowrap font-serif">
          Open the door for aspacious living
        </h1>
        <p className="mt-12 bg-[#172229]  p-4 rounded-md z-10">
          Experience the epitome of luxury and leisure in our resort-style
          private estates. Set within lush landscaped grounds, these exclusive
          properties offer a wealth of amenities to indulge your every desire.
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
