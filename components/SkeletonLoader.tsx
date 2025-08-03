// components/SkeletonLoader.tsx
import React from "react";

interface SkeletonLoaderProps {
  count?: number;
  title?: string;
}
// For grid view
export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ count = 8,title="" }) => {
  return (
    <>
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="h-48 w-full rounded-md bg-gray-300 animate-pulse"
        />
      ))}
    </>
  );
};

// For slider
export const HorizontalSliderSkeleton: React.FC<SkeletonLoaderProps> = ({
  count = 6,title="Slider" 
}) => {
  return (
  <div className="flex flex-col justify-start items-start px-2 mt-5">
     <div className="relative  text-slate-700 text-[24px] text-start my-2">
               {title}
            </div>
  
    <div className="flex justify-center items-center gap-2 ">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center w-[100px] md:w-[160px] animate-pulse"
        >
          <div className="rounded-md h-[60px] md:h-[100px] w-[60px] md:w-[120px] bg-gray-300 mb-1" />
          <div className="h-4 w-3/4 bg-gray-300 rounded" />
        </div>
      ))}
    </div>
    </div>
    
  );
};
