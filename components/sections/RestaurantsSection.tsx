"use client";
import { IFood } from "@/Type";
import RestaurantCard from "@/components/Card";
import { SkeletonLoader } from "@/components/skeletonLoader/SkeletonLoader";

interface RestaurantsSectionProps {
  isLoading: boolean;
  restaurants: IFood[];
   restaurantsRef: React.RefObject<HTMLDivElement | null>; // <-- allow null
}

export default function RestaurantsSection({ isLoading, restaurants, restaurantsRef }: RestaurantsSectionProps) {
  return (
    <>
      <div ref={restaurantsRef} className="scroll-mt-16 my-2 text-slate-700 text-[24px] text-start ml-2">
        Restaurants
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4">
        {isLoading ? (
          <SkeletonLoader />
        ) : (
          restaurants.map((restaurant, i) => (
            <RestaurantCard key={i} restaurant={restaurant} />
          ))
        )}
      </div>
    </>
  );
}
