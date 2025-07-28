import RestaurantCard from "@/components/Card";
import { Restaurants } from "@/Constant";
import React, { use } from "react";

type FoodProps = {
  params: {
    discount: string;
  };
};

const CuisinesPage = ({ params }: { params: { id: string } }) => {
  const discount = params.id; // ✅ use id instead of discount
  // const DailyDeals = Restaurants?.filter((item) => item.discountPercent.toString ===discount));
  const DailyDeals = Restaurants?.filter((item)=>item.discountPercent.toString()===discount); 

  console.log("DailyDeals..", DailyDeals);
  console.log("Full data..", Restaurants);

  // console.log("cuisinesData xx :", cuisinesData[0].restaurantsData);

  return (
    <div className="mt-14 mb-1 ">
      {/* // Banner */}
      <div
        className="relative w-full h-[10vh] md:h-[30vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/offerBg.jpg')" }}
      >
        <div className="absolute inset-0 flex justify-start items-center container-custom">
          <span className="text-slate-300 text-xl md:text-6xl font-semibold ml-4 md:ml-0">Exclusive Offer's</span>
        </div>
      </div>
      {/* // card Grid */}
      <div className="container-custom m-3">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {DailyDeals?.map((val, i) => (
            <RestaurantCard key={i} restaurant={val} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CuisinesPage;
