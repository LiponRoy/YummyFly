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

  return (
    <div className="container-custom grid grid-cols-1 md:grid-cols-6 text-slate-600 mt-14">
      <div className="hidden w-full col-span-1 md:flex flex-col justify-start items-start pl-6 pt-6 bg-slate-100 ">
        {/* Sort By */}

        <div>
          <label className="block mb-1 font-medium mt-4">Sort By:</label>

          {/* <button
            
            title=""
            className=" my-9 bg-orange-deep text-black w-20 py-2  rounded-r-lg  cursor-pointer  text-3xl"
          /> */}
          <div className="flex flex-col space-y-1">
            <label className="flex justify-start items-center space-x-1">
              <input
                type="radio"
                name="sort"
                value=""
                checked={selectedSort === ""}
                onChange={() => setSelectedSort("")}
                className="w-4 h-4"
              />{" "}
              <span>None</span>
            </label>
            <label className="flex justify-start items-center space-x-1">
              <input
                type="radio"
                name="sort"
                value="fastestDelivery"
                checked={selectedSort === "fastestDelivery"}
                onChange={() => setSelectedSort("fastestDelivery")}
                className="w-4 h-4"
              />{" "}
              <span>Fastest Delivery</span>
            </label>
            <label className="flex justify-start items-center space-x-1">
              <input
                type="radio"
                name="sort"
                value="distance"
                checked={selectedSort === "distance"}
                onChange={() => setSelectedSort("distance")}
                className="w-4 h-4"
              />{" "}
              <span>Distance</span>
            </label>
            <label className="flex justify-start items-center space-x-1">
              <input
                type="radio"
                name="sort"
                value="topRated"
                checked={selectedSort === "topRated"}
                onChange={() => setSelectedSort("topRated")}
                className="w-4 h-4"
              />{" "}
              <span>Top Rated</span>
            </label>
          </div>
        </div>
        {/* End Sort By */}

        {/* Cuisine */}
        <div className="mt-4">
          <label className="block mb-1 font-medium mt-2">Cuisine:</label>
          {allCuisines.map((cuisine) => (
            <div key={cuisine}>
              <label className="flex justify-start items-center space-x-1">
                <input
                  type="checkbox"
                  checked={selectedCuisines.includes(cuisine)}
                  className="w-4 h-4"
                  onChange={() => handleCheckboxChange(cuisine, selectedCuisines, setSelectedCuisines)}
                />
                <span> {cuisine}</span>
              </label>
            </div>
          ))}
        </div>
        {/* End Cuisine */}

        <div onClick={() => resetFilter()} className="mt-4 bg-green-500 p-1 w-[86%] text-center text-white rounded-sm">
          RESET FILTER
        </div>
      </div>
      <div className="col-span-5 mx-4">
        {/* // filter button for mobile view */}
        <div
          onClick={() => setSidebarToggle(!sidebarToggle)}
          className="md:hidden mt-1 bg-primary-1 text-white rounded-r-xl w-20 p-1 pl-3  cursor-pointer  text-lg"
        >
          Filter
        </div>
        <div className="w-full my-2">
          <DailyDeals />
        </div>
        <div className="w-full my-4">
                    <FavouriteCuisines />
                </div>
        <div className="my-2  text-slate-700 text-[24px] text-start ml-2 ">Restaurants</div>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 ">
          {filteredProducts.map((restaurant, i) => (
            <RestaurantCard key={i} restaurant={restaurant} />
          ))}
        </div>
      </div>
      {/* mobile sideBar */}

      <div
        onClick={() => setSidebarToggle(false)}
        className={`fixed inset-0 bg-black/60 bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out ${
          sidebarToggle ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`fixed top-[68px] right-0 h-full w-[70%] bg-slate-100 text-slate-600 px-6 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
            sidebarToggle ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Filter section */}

          <div className="relative w-full col-span-1 flex flex-col justify-start items-start pl-6 pt-6 bg-slate-100 ">
            {/* Sort By */}
            <div>
              <label className="block mb-1 font-medium mt-4">Sort By:</label>
              <div className="flex flex-col space-y-2">
                {[
                  { label: "None x", value: "" },
                  { label: "Fastest Delivery", value: "fastestDelivery" },
                  { label: "Distance", value: "distance" },
                  { label: "Top Rated", value: "topRated" },
                ].map((option) => (
                  <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      value={option.value}
                      checked={selectedSort === option.value}
                      onChange={() => setSelectedSort(selectedSort === option.value ? "" : option.value)}
                      className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <span className={selectedSort === option.value ? "text-green-600 font-medium" : ""}>
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* End Sort By */}

            {/* Cuisine */}
            <div className="mt-4">
              <label className="block mb-1 font-medium mt-2">Cuisine:</label>
              {allCuisines.map((cuisine) => (
                <div key={cuisine}>
                  <label className="flex justify-start items-center space-x-1">
                    <input
                      type="checkbox"
                      checked={selectedCuisines.includes(cuisine)}
                      className="w-4 h-4"
                      onChange={() => handleCheckboxChange(cuisine, selectedCuisines, setSelectedCuisines)}
                    />
                    <span> {cuisine}</span>
                  </label>
                </div>
              ))}
            </div>
            {/* End Cuisine */}

            <div
              onClick={() => resetFilter()}
              className="mt-4 bg-green-500 p-1 w-[86%] text-center text-white rounded-sm"
            >
              RESET FILTER
            </div>
            <div
              onClick={() => setSidebarToggle(false)}
              className="mt-4 bg-green-500 p-1 w-[86%] text-center text-white rounded-sm"
            >
              FILTER APPLY
            </div>

            <button
              onClick={() => setSidebarToggle(false)}
              className="absolute top-2 -left-3  text-xl text-red-800 font-bold"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
