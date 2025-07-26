"use client";
import RestaurantCard from "@/components/Card";
import DailyDeals from "@/components/sliders/DailyDeals";
import FavouriteCuisines from "@/components/sliders/FavouriteCuisines";
import { allCuisines, Restaurants } from "@/Constant";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);
  const [selectedSort, setSelectedSort] = useState("");

  // Handler for multi-select filters
  const handleCheckboxChange = (
    value: string,
    selectedList: string[],
    setSelectedList: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (selectedList.includes(value)) {
      setSelectedList(selectedList.filter((item) => item !== value));
    } else {
      setSelectedList([...selectedList, value]);
    }
  };

  // Filtering
  const filteredProducts = Restaurants.filter((product) => {
    // Filter by cuisines: show product if any cuisine matches any selected cuisine
    const cuisineMatch =
      selectedCuisines.length === 0 ? true : product.cuisines.some((c) => selectedCuisines.includes(c));

    return cuisineMatch;
  })
    .slice()
    .sort((a, b) => {
      if (!selectedSort) return 0;

      if (selectedSort === "fastestDelivery") {
        return a.distance - b.distance;
      }
      if (selectedSort === "distance") {
        return a.distance - b.distance;
      }
      if (selectedSort === "topRated") {
        return b.rating - a.rating;
      }
      return 0;
    });

  const resetFilter = () => {
    setSelectedCuisines([]);
    setSelectedSort("");
  };

  // for filter sidebar of mobile view
  const [sidebarToggle, setSidebarToggle] = useState(false);

 const SidebarContent = () => (
    <>
      {/* Sort By */}
      <div>
        <label className="block mb-1 font-medium mt-4">Filters:</label>
        <label className="block mb-1 font-medium mt-2">Sort By:</label>
        <div className="flex flex-col space-y-1">
          {[
            { label: "None", value: "" },
            { label: "Fastest Delivery", value: "fastestDelivery" },
            { label: "Distance", value: "distance" },
            { label: "Top Rated", value: "topRated" },
          ].map(({ label, value }) => (
            <label key={value} className="flex items-center space-x-1">
              <input
                type="radio"
                name="sort"
                value={value}
                checked={selectedSort === value}
                onChange={() => setSelectedSort(value)}
                className="w-4 h-4"
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Cuisine Filter */}
      <div className="mt-4">
        <label className="block mb-1 font-medium mt-2">Cuisine:</label>
        {allCuisines.map((cuisine) => (
          <label key={cuisine} className="flex items-center space-x-1">
            <input
              type="checkbox"
              checked={selectedCuisines.includes(cuisine)}
              onChange={() => handleCheckboxChange(cuisine, selectedCuisines, setSelectedCuisines)}
              className="w-4 h-4"
            />
            <span>{cuisine}</span>
          </label>
        ))}
      </div>

      {/* Reset Button */}
      <div
        onClick={resetFilter}
        className="mt-4 bg-green-500 p-2 text-center text-white rounded-sm cursor-pointer"
      >
        RESET FILTER
      </div>
    </>
  );

  return (
    <div className="container-custom text-slate-600 mt-14">
      <div className="grid grid-cols-12 gap-x-4">
        {/* Desktop Sidebar */}
       <aside className="hidden md:block col-span-2 bg-slate-100 text-slate-800 p-4 border border-slate-300 rounded-md mt-2 sticky top-20 h-fit">
  <SidebarContent />
</aside>


        {/* Main Content */}
        <main className="col-span-12 md:col-span-10 p-4 md:p-0 h-full relative custom-scrollbar-hide">
          {/* Filter Button (Mobile only) */}
          <div
            onClick={() => setSidebarToggle(true)}
            className="md:hidden mt-1 bg-primary-1 text-white rounded-r-xl w-20 p-2 cursor-pointer text-lg"
          >
            Filter
          </div>

          {/* Mobile Sidebar Drawer */}
          {sidebarToggle && (
            <div className="fixed inset-0 z-50 flex">
              {/* Drawer */}
              <div className="w-64 bg-white p-4 overflow-y-auto shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Filters</h2>
                  <button
                    onClick={() => setSidebarToggle(false)}
                    className="text-red-500 font-bold text-xl"
                  >
                    ✕
                  </button>
                </div>
                <SidebarContent />
              </div>

              {/* Overlay: click to close */}
              <div
                className="flex-1 bg-black/70 bg-opacity-40"
                onClick={() => setSidebarToggle(false)}
              />
            </div>
          )}

          {/* Main Section Content */}
          <div className="w-full my-2">
            <DailyDeals />
          </div>
          <div className="w-full my-4">
            <FavouriteCuisines />
          </div>
          <div className="my-2 text-slate-700 text-[24px] text-start ml-2">Restaurants</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {filteredProducts.map((restaurant, i) => (
              <RestaurantCard key={i} restaurant={restaurant} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
