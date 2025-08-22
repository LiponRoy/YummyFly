"use client";
import RestaurantCard from "@/components/Card";
import { HorizontalSliderSkeleton, SkeletonLoader } from "@/components/skeletonLoader/SkeletonLoader";
import DailyDeals from "@/components/sliders/DailyDeals";
import FavouriteCuisines from "@/components/sliders/FavouriteCuisines";
import { allCuisines } from "@/Constant";
import { useRestaurant } from "@/hooks/useRestaurant";
import { IFood } from "@/Type";
import { ArrowUp } from "lucide-react";
import {useRef, useState } from "react";

export default function Home() {
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);
  const [selectedSort, setSelectedSort] = useState("");
  const restaurantsRef = useRef<HTMLDivElement | null>(null);
  const topRef = useRef<HTMLDivElement | null>(null);

  // fetch data using SWR 
  const { restaurants, isLoading, isError } = useRestaurant();

  // go to food cards when click on filters
    const handleRestaurantsScroll = () => {
    restaurantsRef.current?.scrollIntoView({ behavior: "smooth",block: "start" });
  };

  const handleTopScroll = () => {
  topRef.current?.scrollIntoView({ behavior: "smooth"});
  };

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

    handleRestaurantsScroll();
  };

  // Filtering
  const filteredProducts = restaurants?.filter((product:any) => {
    // Filter by cuisines: show product if any cuisine matches any selected cuisine
    const cuisineMatch =
      selectedCuisines.length === 0 ? true : product.cuisines.some((c:string) => selectedCuisines.includes(c));
// 
    return cuisineMatch;
  })
    .slice()
    .sort((a:any, b:any) => {
      if (!selectedSort) return 0;

      if (selectedSort === "fastestDelivery") {
         handleRestaurantsScroll();
        return a.distance - b.distance;
      }
      if (selectedSort === "distance") {
         handleRestaurantsScroll();
        return a.distance - b.distance;
      }
      if (selectedSort === "topRated") {
         handleRestaurantsScroll();
        return b.rating - a.rating;
      }

     
      return 0;
    });

    console.log("filteredProducts", filteredProducts)

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
    <div className="w-full border-b border-slate-300 mt-1">
          <label className="block mb-1 font-semibold ">Filters:</label>
    </div>
        <label className="block mb-1 font-medium mt-2">Sort By:</label>
        {isLoading?<div className="h-40 w-full bg-slate-200"></div>:<div className="flex flex-col space-y-1">
          {[
            { label: "None", value: "" },
            { label: "Fastest Delivery", value: "fastestDelivery" },
             { label: "Top Rated", value: "topRated" },
            { label: "Distance", value: "distance" },
           
          ].map(({ label, value }) => (
            <label key={value} className="flex items-center space-x-1">
              <input
                type="radio"
                name="sort"
                value={value}
                checked={selectedSort === value}
                onChange={() => setSelectedSort(value)}
                  className="w-4 h-4 rounded-full appearance-none border-2 border-slate-500 cursor-pointer  checked:border-primary-1 checked:border-4"
              />
              <span>{label}</span>
            </label>
          ))}
        </div>}
      </div>

      {/* Cuisine Filter */}
      <div className="mt-4">
        <label className="block mb-1 font-medium mt-2">Cuisine:</label>
       {isLoading?<div className="h-40 w-full bg-slate-200"></div>:<div> {allCuisines.map((cuisine) => (
          <label key={cuisine} className="flex items-center space-x-1 ">
            <input
              type="checkbox"
              checked={selectedCuisines.includes(cuisine)}
              onChange={() => handleCheckboxChange(cuisine, selectedCuisines, setSelectedCuisines)}
              className="w-4 h-4 rounded appearance-none border-2 border-slate-500 cursor-pointer  checked:border-primary-1 checked:border-4"
            />
            <span>{cuisine}</span>
          </label>
        ))}</div>}
      </div>

      {/* Reset Button */}
      <div className="w-full flex justify-center items-center space-x-2 mt-4">
        <div
        onClick={resetFilter}
        className="w-full bg-primary-1 p-1 text-center text-white rounded-sm cursor-pointer"
      >
        Reset
      </div>
      <div
        onClick={() => setSidebarToggle(false)}
        className="md:hidden w-full bg-primary-1 p-1 text-center text-white rounded-sm cursor-pointer"
      >
        Apply
      </div>
      </div>
      
    </>
  );

  return (
    <div className="container-custom relative text-slate-600 mt-16">

      <div onClick={handleTopScroll} className="fixed bottom-10 right-4 w-12 h-12 rounded-full bg-slate-200 hover:bg-slate-300 z-50 flex justify-center items-center cursor-pointer">
        <ArrowUp />
      </div>
      
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
          <div ref={topRef}  className="w-full scroll-mt-16 my-2">
            {isLoading?<HorizontalSliderSkeleton count={6} title="Your Daily Deals"/>: <DailyDeals />}
           
          </div>
          <div className="w-full my-4">
            {isLoading?<HorizontalSliderSkeleton count={6} title="Favorite Cuisines"/>:<FavouriteCuisines />}
          </div>
          <div ref={restaurantsRef} className="scroll-mt-16 my-2 text-slate-700 text-[24px] text-start ml-2">Restaurants</div>
          <div  className="relative grid grid-cols-1 md:grid-cols-3 gap-4">
            {isLoading?<SkeletonLoader/>:
            filteredProducts?.map((restaurant:IFood, i:number) => (
              <RestaurantCard key={i} restaurant={restaurant} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
