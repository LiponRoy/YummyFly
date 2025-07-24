import RestaurantCard from '@/components/Card';
import React, { use } from 'react'
import { Cuisines } from "@/Constant";

type FoodProps = {
  params: {
    id: string;
  };
};

const CuisinesPage = ({ params }: { params: Promise<FoodProps["params"]> }) => {
   const { id } = use(params);
   const cuisinesData = Cuisines.filter((item)=>item.id.toString()===id);

console.log("cuisinesData xx :", cuisinesData[0].restaurantsData);
//    const data = cuisinesData?.[0];
// console.log("restaurantsData: ", data?.restaurantsData);
  return (
    <div className='mt-40'>
      <div className="my-4">
        Banner Part ...
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 ">
          {cuisinesData?.[0]?.restaurantsData?.map((val, i) => (
            <RestaurantCard key={i} restaurant={val} />
          ))}
        </div>
    </div>
  )
}

export default CuisinesPage