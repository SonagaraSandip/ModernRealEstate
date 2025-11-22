import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { fetchProperties } from "../api/propertyApi";
import PropertyCard from "../components/PropertryCard";

const CollectionDetails = () => {
  const { collectionsId } = useParams();
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("best-selling");
  const [filters, setFilters] = useState({
    availability: [],
    size: [],
  });

  // Map collection ID to property type
  const collectionTypeMap = {
    bestseller: "all",
    "farm-villa": "villa",
    properties: "bunglows",
    "royal-house": "royalhouse",
  };

  // Collection metadata
  const collectionInfo = {
    bestseller: {
      title: "Bestseller",
      count: 8,
      description:
        "A villa is a type of house that was originally an ancient Roman upper class country house. Since its origins in the Roman villa, the idea and function of a villa have evolved considerably. After the fall of the Roman Republic, villas became small farming compounds, which were increasingly fortified in Late Antiquity, sometimes transferred to the Church for reuse as a monastery.",
    },
    "farm-villa": {
      title: "Farm Villa",
      count: 8,
      description:
        "Luxurious farm villas combining rustic charm with modern amenities, perfect for those seeking a countryside retreat.",
    },
    properties: {
      title: "Properties",
      count: 9,
      description:
        "Browse our complete collection of premium properties featuring diverse architectural styles and locations.",
    },
    "royal-house": {
      title: "Royal House",
      count: 9,
      description:
        "Majestic royal houses offering grandeur and elegance with spacious layouts and premium finishes.",
    },
  };

  const currentCollection =
    collectionInfo[collectionsId] || collectionInfo["bestseller"];
  const propertyType = collectionTypeMap[collectionsId] || "all";

  // Fetch properties on mount
  useEffect(() => {
    const loadProperties = async () => {
      setLoading(true);
      try {
        const data = await fetchProperties();
        setProperties(data);

        // Filter by collection type
        let filtered = data;
        if (propertyType !== "all") {
          filtered = data.filter(
            (p) => p.type.toLowerCase() === propertyType.toLowerCase()
          );
        }

        setFilteredProperties(filtered);
      } catch (error) {
        console.error("Error loading properties:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProperties();
  }, [collectionsId, propertyType]);

  // Apply filters
  useEffect(() => {
    let filtered = properties.filter(
      (p) =>
        propertyType === "all" ||
        p.type.toLowerCase() === propertyType.toLowerCase()
    );

    // Availability filter
    if (filters.availability.length > 0) {
      filtered = filtered.filter((p) => {
        if (filters.availability.includes("in-stock")) return p.in_stock;
        if (!filters.availability.includes("in-stock")) return !p.in_stock;
        return true;
      });
    }

    // Size filter
    if (filters.size.length > 0) {
      filtered = filtered.filter((p) => {
        return p.size_sqft.some((size) => {
          const sizeNum = parseInt(size);
          return filters.size.some((filterSize) => {
            const filterNum = parseInt(filterSize);
            return sizeNum === filterNum;
          });
        });
      });
    }

    // Sort
    switch (sortBy) {
      case "best-selling":
        // Keep original order
        break;
      case "price-low-high":
        filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      case "price-high-low":
        filtered.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        break;
      case "a-z":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "z-a":
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "date-new-old":
        filtered.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        break;
      case "date-old-new":
        filtered.sort(
          (a, b) => new Date(a.created_at) - new Date(b.created_at)
        );
        break;
    }

    setFilteredProperties(filtered);
  }, [filters, sortBy, properties, propertyType]);

  const toggleFilter = (category, value) => {
    setFilters((prev) => {
      const updated = { ...prev };
      const index = updated[category].indexOf(value);

      if (index > -1) {
        updated[category] = updated[category].filter((v) => v !== value);
      } else {
        updated[category] = [...updated[category], value];
      }

      return updated;
    });
  };

  const resetFilters = (category) => {
    setFilters((prev) => ({ ...prev, [category]: [] }));
  };

  const getAvailableCount = (filterType) => {
    return properties.filter(
      (p) =>
        (propertyType === "all" ||
          p.type.toLowerCase() === propertyType.toLowerCase()) &&
        (filterType === "in-stock" ? p.in_stock : !p.in_stock)
    ).length;
  };

  const getSizeCount = (size) => {
    return properties.filter(
      (p) =>
        (propertyType === "all" ||
          p.type.toLowerCase() === propertyType.toLowerCase()) &&
        p.size_sqft.includes(size)
    ).length;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-2xl text-gray-700">Loading properties...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#2a3335]">
      {/* Header Section */}
      <div className="bg-[#2a3335] py-12 px-5">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-white mb-8 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center">
              <ChevronLeft size={20} />
            </div>
            <span className="text-lg">Back to home</span>
          </button>

          <h1 className="text-4xl font-bold text-white mb-2">
            {currentCollection.title}{" "}
            <span className="text-gray-400">({currentCollection.count})</span>
          </h1>

          <p className="text-gray-300 max-w-4xl leading-relaxed">
            {currentCollection.description}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-5 py-8">
          <div className="flex gap-8">
            {/* Sidebar Filters */}
            <aside className="w-80 flex-shrink-0">
              <div className="bg-white rounded-lg p-6 sticky top-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Filters
                </h2>

                {/* Availability Filter */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-gray-900 text-sm">
                      AVAILABILITY
                    </h3>
                    {filters.availability.length > 0 && (
                      <button
                        onClick={() => resetFilters("availability")}
                        className="text-sm text-gray-600 hover:text-gray-900"
                      >
                        Reset
                      </button>
                    )}
                  </div>
                  <div className="space-y-3">
                    {getAvailableCount("in-stock") > 0 && (
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.availability.includes("in-stock")}
                          onChange={() =>
                            toggleFilter("availability", "in-stock")
                          }
                          className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-gray-700 text-sm">
                          In stock ({getAvailableCount("in-stock")})
                        </span>
                      </label>
                    )}

                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.availability.includes("out-of-stock")}
                        disabled={getAvailableCount("out-of-stock") === 0}
                        onChange={() =>
                          toggleFilter("availability", "out-of-stock")
                        }
                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-gray-700 text-sm">
                        Out of stock ({getAvailableCount("out-of-stock")})
                      </span>
                    </label>
                  </div>
                </div>

                {/* Size Filter */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-gray-900 text-sm">
                      SIZE
                    </h3>
                    {filters.size.length > 0 && (
                      <button
                        onClick={() => resetFilters("size")}
                        className="text-sm text-gray-600 hover:text-gray-900"
                      >
                        Reset
                      </button>
                    )}
                  </div>
                  <div className="space-y-3">
                    {[
                      "1100",
                      "1200",
                      "1300",
                      "1400",
                      "1500",
                      "1700",
                      "1800",
                      "1900",
                    ].map((size) => {
                      const count = getSizeCount(size);
                      if (count === 0) return null;

                      return (
                        <label
                          key={size}
                          className="flex items-center gap-3 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={filters.size.includes(size)}
                            onChange={() => toggleFilter("size", size)}
                            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-gray-700 text-sm">
                            {size} sq ft ({count})
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <main className="flex-1">
              {/* Breadcrumb & Sort */}
              <div className="flex justify-between items-center mb-6">
                <div className="text-gray-600 text-sm">
                  <span
                    className="hover:text-gray-900 cursor-pointer"
                    onClick={() => navigate("/")}
                  >
                    Home
                  </span>
                  <span className="mx-2">/</span>
                  <span className="text-gray-900 font-medium">
                    {currentCollection.title}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <label
                    htmlFor="sort"
                    className="text-gray-700 font-medium text-sm"
                  >
                    Sort by:
                  </label>
                  <select
                    id="sort"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[200px]"
                  >
                    <option value="best-selling">Best selling</option>
                    <option value="price-low-high">Price: Low to High</option>
                    <option value="price-high-low">Price: High to Low</option>
                    <option value="a-z">Title: A-Z</option>
                    <option value="z-a">Title: Z-A</option>
                    <option value="date-new-old">Date: New to Old</option>
                    <option value="date-old-new">Date: Old to New</option>
                  </select>
                </div>
              </div>

              {/* Product Cards Grid */}
              {filteredProperties.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-xl text-gray-500">
                    No properties found matching your filters.
                  </p>
                  <button
                    onClick={() => setFilters({ availability: [], size: [] })}
                    className="mt-4 px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Clear All Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionDetails;
