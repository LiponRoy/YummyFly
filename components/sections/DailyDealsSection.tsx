"use client";
import DailyDeals from "@/components/sliders/DailyDeals";
import { HorizontalSliderSkeleton } from "@/components/skeletonLoader/SkeletonLoader";

export default function DailyDealsSection({ isLoading }: { isLoading: boolean }) {
  return (
    <div className="w-full scroll-mt-16 my-2">
      {isLoading ? (
        <HorizontalSliderSkeleton count={6} title="Your Daily Deals" />
      ) : (
        <DailyDeals />
      )}
    </div>
  );
}
