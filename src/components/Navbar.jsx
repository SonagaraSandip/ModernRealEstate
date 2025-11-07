import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo/Logo.webp";
import { ChevronDown, User, ShoppingCart } from "lucide-react";
import INR from "../assets/flag/inr.svg";
import USD from "../assets/flag/usd.svg";
import AUD from "../assets/flag/aud.svg";
import CAN from "../assets/flag/cad.svg";
import ApartmentImage from "../assets/logo/4.webp";
import BestSeller from "../assets/Navbar/bestseller.webp";
import FarmVilla from "../assets/Navbar/farmvilla.webp";
import Property from "../assets/Navbar/properties.webp";
import RoyalHouse from "../assets/Navbar/royalhouse.webp";

const apartmentMenu = {
  farmVilla: [
    "Wheelwright Cottage House D-55",
    "Town Place Apartments E-62",
    "Meadow View D-205",
    "Luxury Landing E-87",
    "Heavenly Homes B-64",
    "Heart and Soul Apartments D-604",
    "Green Gardens A-72",
    "Family Villas C-92",
  ],
  luxuryProperties: [
    "Town Place Walkups A-404",
    "Town Place Apartments E-62",
    "The White House J-54",
    "Tannery Gardens House B-32",
    "Noble Park B-106",
    "MiniPalais D-703",
    "Heart and Soul Apartments D-604",
    "Family Villas C-92",
    "East Side Living",
  ],
  royalHouse: [
    "Wheelwright Cottage House D-55",
    "Town Place Walkups A-404",
    "The White House J-54",
    "The Never-Ending Story C-52",
    "Tannery Gardens House B-32",
    "MiniPalais D-703",
    "Meadow View D-205",
    "Heavenly Homes B-64",
    "Heart and Soul Apartments D-604",
  ],
};

const Collection = [
  {
    image: BestSeller,
    name: "Best Sellers",
  },
  {
    image: FarmVilla,
    name: "Farm Villa",
  },
  {
    image: Property,
    name: "Properties",
  },
  {
    image: RoyalHouse,
    name: "Royal House",
  },
];

const Pages = [
  {
    name: "About Us",
    link : "about"
  },
  {
    name: "Contact with Us",
    link: "contact",
  },
  {
    name: "Faq",
    link: "faq"
  },
  {
    name: "Privacy Policy",
    link: "privacy"
  },
  {
    name: "Shipping & Delivery",
    link: "shipping"
  },
  {
    name: "Terms & Conditions",
    link: "terms"
  },
  {
    name: "Wishlist",
    link: "wishlist"
  },
];

const Blog = [
  {
    name: "Blog Page",
  },
  {
    name: "Artical Page",
  },
];

const currency = [
  {
    name: " INR ₹",
    image: INR,
  },
  {
    name: "USD $",
    image: USD,
  },
  {
    name: "AUD $",
    image: AUD,
  },
  {
    name: "CAN $",
    image: CAN,
  },
];

const Navbar = () => {
  const [selectedCurrency, setSelectedCurrency] = useState(currency[0]);
  const [isInrOpen, setIsInrOpen] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [menuTimer, setMenuTimer] = useState(null);

  const handleMenuEnter = (menuName) => {
    if (menuTimer) {
      clearTimeout(menuTimer);
      setMenuTimer(null);
    }
    setOpenMenu(menuName);
  };

  const handleMenuLeave = () => {
    const timer = setTimeout(() => {
      setOpenMenu(null);
    }, 500);
    setMenuTimer(timer);
  };

  return (
    <div className=" relative">
      <div className="flex items-center justify-between border-b border-white-500 max-w-7xl mx-auto  py-5 text-white">
        {/* left side */}
        <div className="flex gap-6 items-center text-white">
          {/* apartment */}
          <div
            onMouseEnter={() => handleMenuEnter("apartment")}
            onMouseLeave={handleMenuLeave}
            className="flex items-center gap-1 cursor-pointer"
          >
            <h1 className="text-white text-sm">Apartment</h1>
            <ChevronDown size={16} className="mt-1" />
          </div>
          {/* collection */}
          <div
            onMouseEnter={() => handleMenuEnter("collection")}
            onMouseLeave={handleMenuLeave}
            className="flex items-center justify-center gap-1 cursor-pointer  "
          >
            <h1 className="text-white text-sm">Collection</h1>
            <span>
              <ChevronDown size={16} />
            </span>
          </div>
          {/* page */}
          <div
            onMouseEnter={() => handleMenuEnter("page")}
            onMouseLeave={handleMenuLeave}
            className="flex items-center justify-center gap-1 cursor-pointer"
          >
            <h1 className="text-white text-sm">Page</h1>
            <span>
              <ChevronDown size={16} />
            </span>
          </div>
          {/* blog */}
          <div
            onMouseEnter={() => handleMenuEnter("blog")}
            onMouseLeave={handleMenuLeave}
            className="flex items-center justify-center gap-1 cursor-pointer"
          >
            <h1 className="text-white text-sm">Blog</h1>
            <span>
              <ChevronDown size={16} />
            </span>
          </div>
        </div>
        {/* logo */}
        <img src={Logo} alt="logo" className="h-10 items-center" />

        {/* right side */}
        <div className="flex gap-4">
          <button className="flex items-center gap-1 border rounded-full px-4">
            <h1 className="text-white text-sm">English</h1>
            <ChevronDown size={16} />
          </button>
          <div className="relative">
            <button
              onClick={() => setIsInrOpen(!isInrOpen)}
              className="flex items-center gap-1 border rounded-full px-4 py-2"
            >
              {/*  Now shows the selected currency */}
              <img
                src={selectedCurrency.image}
                alt={selectedCurrency.name}
                className="w-4 h-4 "
              />
              <h1 className="text-white text-sm">{selectedCurrency.name}</h1>
              <ChevronDown size={16} />
            </button>

            {/* Currency Dropdown */}
            {isInrOpen && (
              <div className="absolute top-full right-0 mt-2 rounded-lg bg-white py-2 px-4 text-sm z-50">
                {currency.map((item) => (
                  <button
                    key={item.name}
                    className="flex items-center gap-2 my-1 w-24 max-w-full text-left text-black hover:bg-gray-100 p-2 rounded"
                    onClick={() => {
                      setSelectedCurrency(item);
                      setIsInrOpen(false);
                    }}
                  >
                    <img src={item.image} alt={item.name} className="w-4 h-4" />
                    <h1 className="text-lg font-semibold">{item.name}</h1>
                  </button>
                ))}
              </div>
            )}
            {isInrOpen && (
              <div
                onClick={() => setIsInrOpen(false)}
                className="fixed inset-0 "
              ></div>
            )}
          </div>
          {/* User account */}
          <div className="relative">
            <button
              onClick={() => setOpenUser(!openUser)}
              className="border rounded-full p-2"
            >
              <User className="" />
            </button>
            {/*  User Dropdown */}
            {openUser && (
              <div className="absolute top-full right-0 mt-2 font-serif rounded-lg bg-white text-black py-2 px-4 text-sm z-50 w-32">
                <button className="text-lg hover:text-gray-600 block w-full text-left">
                  Register
                </button>
                <button className="text-lg mt-1 hover:text-gray-600 block w-full text-left">
                  Login
                </button>
                <button className="text-lg mt-1 hover:text-gray-600 block w-full text-left">
                  Wishlist (0)
                </button>
              </div>
            )}
            {openUser && (
              <div
                onClick={() => setOpenUser(false)}
                className="fixed inset-0 "
              ></div>
            )}
          </div>
          {/* Cart */}
          <div className="flex items-center border rounded-full px-4 gap-1">
            <h3 className="text-sm font-serif">My Cart :</h3>
            <span className="text-sm">0.00</span>
            <ShoppingCart size={20} />
          </div>
        </div>
      </div>
      {/* Apartment mega menu */}
      {openMenu === "apartment" && (
        <div
          className="absolute top-full left-0 right-0 bg-white shadow-lg z-40 text-black"
          onMouseEnter={() => handleMenuEnter("apartment")} //  Keep it open when mouse enters menu
          onMouseLeave={handleMenuLeave}
        >
          <div className="max-w-7xl mx-auto py-4">
            <div className="flex justify-between gap-16">
              {/* Farm villa */}
              <div>
                <h3 className="font-bold text-xl mb-3 text-gray-800">
                  Farm Villa
                </h3>
                <ul className="space-y-2">
                  {apartmentMenu.farmVilla.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-md text-gray-600 hover:text-black"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Luxury property */}
              <div>
                <h3 className="font-bold text-xl mb-3 text-gray-800">
                  Luxury Properties
                </h3>
                <ul className="space-y-2">
                  {apartmentMenu.luxuryProperties.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-md text-gray-600 hover:text-black"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Royal house */}
              <div>
                <h3 className="font-bold text-xl mb-3 text-gray-800">
                  Royal House
                </h3>
                <ul className="space-y-2">
                  {apartmentMenu.royalHouse.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-md text-gray-600 hover:text-black"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Image Column */}
              <div className="w-64 h-auto">
                <img
                  src={ApartmentImage}
                  alt="Featured Apartment"
                  className="rounded-lg object-cover w-96 h-60"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* collection menu */}
      {openMenu === "collection" && (
        <div
          onMouseEnter={() => handleMenuEnter("collection")}
          onMouseLeave={handleMenuLeave}
          className="absolute top-full left-0 right-0 bg-white shadow-lg z-40 text-black"
        >
          <div className="max-w-7xl mx-auto py-4">
            <div className="flex justify-between gap-8">
              {Collection.map((item) => (
                <div key={item} className="flex flex-col">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-xl"
                  />
                  <h1 className="text-md mt-1 text-center">{item.name}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* Page menu */}
      {openMenu === "page" && (
        <div
          onMouseEnter={() => handleMenuEnter("page")}
          onMouseLeave={handleMenuLeave}
          className="absolute top-full left-72 bg-white shadow-lg rounded-md z-40 text-black"
        >
          <div className="flex flex-col gap-1 p-2 cursor-pointer ">
            {Pages.map((item) => (
              <Link to={`/pages/${item.link}`} key={item}>
                <h1 className="text-md mt-1 hover:bg-zinc-200 hover:rounded-md hover:p-1">
                  {item.name}
                </h1>
              </Link>
            ))}
          </div>
        </div>
      )}
      {/* blog menu */}
      {openMenu === "blog" && (
        <div
          onMouseEnter={() => handleMenuEnter("blog")}
          onMouseLeave={handleMenuLeave}
          className="absolute top-full left-96 bg-white shadow-lg rounded-md z-40 text-black"
        >
          <div className="flex flex-col gap-1 p-2 cursor-pointer ">
            {Blog.map((item) => (
              <div key={item}>
                <h1 className="text-md mt-1 hover:bg-zinc-200 hover:rounded-md hover:p-1">
                  {item.name}
                </h1>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
