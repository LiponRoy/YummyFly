"use client";
import { useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useRestaurant } from "@/hooks/useRestaurant";
import { IFood } from "@/Type";
import SidebarContent from "@/components/filters/SidebarContent";
import MobileSidebar from "@/components/filters/MobileSidebar";
import DailyDealsSection from "@/components/sections/DailyDealsSection";
import FavouriteCuisinesSection from "@/components/sections/FavouriteCuisinesSection";
import RestaurantsSection from "@/components/sections/RestaurantsSection";

export default function Home() {
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);
  const [selectedSort, setSelectedSort] = useState("");
  const [sidebarToggle, setSidebarToggle] = useState(false);

  const restaurantsRef = useRef<HTMLDivElement | null>(null);
  const topRef = useRef<HTMLDivElement | null>(null);

  const { restaurants, isLoading } = useRestaurant();

  const handleRestaurantsScroll = () => {
    restaurantsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleTopScroll = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCheckboxChange = (value: string) => {
    setSelectedCuisines((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
    handleRestaurantsScroll();
  };

  const filteredProducts = restaurants
    ?.filter((product: any) =>
      selectedCuisines.length === 0
        ? true
        : product.cuisines.some((c: string) => selectedCuisines.includes(c))
    )
    .slice()
    .sort((a: any, b: any) => {
      if (!selectedSort) return 0;
      handleRestaurantsScroll();
      if (selectedSort === "distance" || selectedSort === "fastestDelivery") return a.distance - b.distance;
      if (selectedSort === "topRated") return b.rating - a.rating;
      return 0;
    });

  const resetFilter = () => {
    setSelectedCuisines([]);
    setSelectedSort("");
  };

  const sidebarProps = {
    isLoading,
    selectedSort,
    setSelectedSort,
    selectedCuisines,
    handleCheckboxChange,
    resetFilter,
  };

  return (
    <div className="container-custom relative text-slate-600 mt-16">
      {/* Scroll to Top */}
      <div
        onClick={handleTopScroll}
        className="fixed bottom-10 right-4 w-12 h-12 rounded-full bg-slate-200 hover:bg-slate-300 z-50 flex justify-center items-center cursor-pointer"
      >
        <ArrowUp />
      </div>

      <div className="grid grid-cols-12 gap-x-4">
        {/* Sidebar (Desktop) */}
        <aside className="hidden md:block col-span-2 bg-slate-100 text-slate-800 p-4 border border-slate-300 rounded-md mt-2 sticky top-20 h-fit">
          <SidebarContent {...sidebarProps} />
        </aside>

        {/* Main Content */}
        <main className="col-span-12 md:col-span-10 p-4 md:p-0 h-full relative custom-scrollbar-hide">
          {/* Mobile Filter Button */}
          <div
            onClick={() => setSidebarToggle(true)}
            className="md:hidden mt-1 bg-primary-1 text-white rounded-r-xl w-20 p-2 cursor-pointer text-lg"
          >
            Filter
          </div>

          {/* Mobile Sidebar */}
          <MobileSidebar isOpen={sidebarToggle} onClose={() => setSidebarToggle(false)} propsForSidebar={sidebarProps} />

          {/* Sections */}
          <div ref={topRef}>
            <DailyDealsSection isLoading={isLoading} />
          </div>
          <FavouriteCuisinesSection isLoading={isLoading} />
          <RestaurantsSection isLoading={isLoading} restaurants={filteredProducts as IFood[]} restaurantsRef={restaurantsRef} />
        </main>
      </div>
    </div>
  );
}
