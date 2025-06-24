import RestaurantCard from "@/components/Card";
import FavouriteCuisines from "@/components/sliders/FavouriteCuisines";
import { restaurants } from "@/Constant";
import Image from "next/image";

export default function Home() {
  return (
<div className="container-custom grid grid-cols-7 text-slate-600">
  <div className="col-span-1 flex flex-col justify-start items-center bg-slate-300">
    <span>Filter Side</span>
  </div>
  <div className="col-span-6">
    <div className="w-full my-4">
      <FavouriteCuisines/>
    </div>
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-2 m-4">
      {restaurants.map((restaurant, i) => (
        <RestaurantCard
          key={i}
          name={restaurant.name}
          imageUrl={restaurant.imageUrl}
          location={restaurant.location}
          rating={restaurant.rating}
          deliveryFee={restaurant.deliveryFee}
        />
      ))}

    </div>
  
  </div>

</div>
  );
}
