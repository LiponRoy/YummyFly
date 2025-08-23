"use client";
import { allCuisines } from "@/Constant";

interface SidebarContentProps {
  isLoading: boolean;
  selectedSort: string;
  setSelectedSort: (value: string) => void;
  selectedCuisines: string[];
  handleCheckboxChange: (cuisine: string) => void;
  resetFilter: () => void;
  closeSidebar?: () => void; // used for mobile
}

export default function SidebarContent({
  isLoading,
  selectedSort,
  setSelectedSort,
  selectedCuisines,
  handleCheckboxChange,
  resetFilter,
  closeSidebar,
}: SidebarContentProps) {
  return (
    <>
      {/* Sort By */}
      <div>
        <div className="w-full border-b border-slate-300 mt-1">
          <label className="block mb-1 font-semibold">Filters:</label>
        </div>
        <label className="block mb-1 font-medium mt-2">Sort By:</label>
        {isLoading ? (
          <div className="h-40 w-full bg-slate-200"></div>
        ) : (
          <div className="flex flex-col space-y-1">
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
                  className="w-4 h-4 rounded-full appearance-none border-2 border-slate-500 cursor-pointer checked:border-primary-1 checked:border-4"
                />
                <span>{label}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Cuisine Filter */}
      <div className="mt-4">
        <label className="block mb-1 font-medium mt-2">Cuisine:</label>
        {isLoading ? (
          <div className="h-40 w-full bg-slate-200"></div>
        ) : (
          <div>
            {allCuisines.map((cuisine) => (
              <label key={cuisine} className="flex items-center space-x-1">
                <input
                  type="checkbox"
                  checked={selectedCuisines.includes(cuisine)}
                  onChange={() => handleCheckboxChange(cuisine)}
                  className="w-4 h-4 rounded appearance-none border-2 border-slate-500 cursor-pointer checked:border-primary-1 checked:border-4"
                />
                <span>{cuisine}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Reset & Apply */}
      <div className="w-full flex justify-center items-center space-x-2 mt-4">
        <div
          onClick={resetFilter}
          className="w-full bg-primary-1 p-1 text-center text-white rounded-sm cursor-pointer"
        >
          Reset
        </div>
        {closeSidebar && (
          <div
            onClick={closeSidebar}
            className="md:hidden w-full bg-primary-1 p-1 text-center text-white rounded-sm cursor-pointer"
          >
            Apply
          </div>
        )}
      </div>
    </>
  );
}
