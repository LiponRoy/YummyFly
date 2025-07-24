import RestaurantCard from "@/components/Card";
import React, { use } from "react";
import { Cuisines } from "@/Constant";

type FoodProps = {
  params: {
    id: string;
  };
};

const CuisinesPage = ({ params }: { params: Promise<FoodProps["params"]> }) => {
  const { id } = use(params);
  const cuisinesData = Cuisines.filter((item) => item.id.toString() === id);

  console.log("cuisinesData xx :", cuisinesData[0].restaurantsData);

  return (
    <div className="mt-14 mb-1 ">
      {/* // Banner */}
      <div
  className="relative w-full h-[10vh] md:h-[30vh] bg-cover bg-center"
  style={{ backgroundImage: "url('/cuisinesBg.jpg')" }}
>
  <div className="absolute inset-0 flex justify-start items-center container-custom">
    <span className="text-slate-300 text-xl md:text-6xl font-semibold ml-4 md:ml-0">
      Favorite Cuisines
    </span>
  </div>
</div>


      {/* // card Grid */}
      <div className="container-custom m-3">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {cuisinesData?.[0]?.restaurantsData?.map((val, i) => (
            <RestaurantCard key={i} restaurant={val} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CuisinesPage;
