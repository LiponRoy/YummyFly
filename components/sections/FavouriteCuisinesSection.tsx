"use client";
import FavouriteCuisines from "@/components/sliders/FavouriteCuisines";
import { HorizontalSliderSkeleton } from "@/components/skeletonLoader/SkeletonLoader";

export default function FavouriteCuisinesSection({ isLoading }: { isLoading: boolean }) {
  return (
    <div className="w-full my-4">
      {isLoading ? (
        <HorizontalSliderSkeleton count={6} title="Favorite Cuisines" />
      ) : (
        <FavouriteCuisines />
      )}
    </div>
  );
}
