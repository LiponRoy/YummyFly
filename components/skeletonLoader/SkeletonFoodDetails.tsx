"use client";
import React from "react";

export const SkeletonFoodDetails = () => {
  return (
    <div className="container-custom mt-16 p-4 space-y-6 animate-pulse">
      {/* Top restaurant info */}
      <div className="w-full md:w-[55%] grid grid-cols-1 md:grid-cols-8 md:space-x-2">
        {/* Image */}
        <div className="md:col-span-2">
          <div className="w-full md:w-[156px] h-[156px] rounded-xl bg-gray-300"></div>
        </div>
        {/* Info */}
        <div className="md:col-span-6 space-y-3 mt-3 md:mt-0 ml-2">
          <div className="h-8 w-3/4 bg-gray-300 rounded"></div>
          <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
          <div className="h-4 w-1/3 bg-gray-300 rounded"></div>
          <div className="h-4 w-1/3 bg-gray-300 rounded"></div>
          <div className="h-4 w-2/5 bg-gray-300 rounded"></div>
          <div className="h-6 w-24 bg-gray-300 rounded mt-4"></div>
        </div>
      </div>

      {/* Main content grid */}
      <div className="relative w-full grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left side - deals + food list */}
        <div className="md:col-span-8 space-y-6">
          {/* Available deals skeleton */}
          <div className="space-y-2">
            <div className="h-6 w-40 bg-gray-300 rounded"></div>
            <div className="flex gap-3">
              <div className="h-20 w-32 bg-gray-300 rounded-lg"></div>
              <div className="h-20 w-32 bg-gray-300 rounded-lg"></div>
              <div className="h-20 w-32 bg-gray-300 rounded-lg"></div>
            </div>
          </div>

          {/* Food menu skeleton */}
          <div className="space-y-3">
            <div className="h-6 w-44 bg-gray-300 rounded"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="p-2 border rounded-lg space-y-3">
                  <div className="h-32 w-full bg-gray-300 rounded-md"></div>
                  <div className="h-5 w-2/3 bg-gray-300 rounded"></div>
                  <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
                  <div className="h-6 w-20 bg-gray-300 rounded"></div>
                  <div className="h-8 w-full bg-gray-300 rounded-md"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right side - cart skeleton */}
        <div className="hidden md:flex flex-col col-span-4 mt-16 sticky top-20 h-fit space-y-3 p-4 border rounded-lg">
          <div className="h-6 w-40 bg-gray-300 rounded"></div>
          <div className="h-20 w-full bg-gray-300 rounded-md"></div>
          <div className="h-20 w-full bg-gray-300 rounded-md"></div>
          <div className="h-10 w-32 bg-gray-300 rounded self-end"></div>
        </div>
      </div>
    </div>
  );
};
