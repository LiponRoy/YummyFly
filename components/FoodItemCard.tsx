import { IFood } from "@/Type";
import Image from "next/image";
import React from "react";

const FoodItemCard = ({ val, clickPerFoodItem }: any) => {
  return (
    <div
      onClick={() => clickPerFoodItem(val)}
      className=" w-full md:w-[460px] h-[154px] border border-slate-300 p-4 bg-slate-100 text-slate-700 rounded-lg  grid grid-cols-12 hover:bg-red-50 cursor-pointer "
    >
      <div className="col-span-8 flex flex-col justify-start items-start">
        <span className="text-[18px] font-semibold">{val.name} :</span>
        <span className="my-1">
          <span className="mr-2">From Taka:</span>
          <span className="font-medium">
            {val.price}
            /=
          </span>
        </span>
        <span className="text-[14px]">{val.description}</span>
      </div>
      <div className="col-span-4 ml-4">
        <Image
          // src={val.imageUrl}
          src="/myFood.jpg"
          alt={"food"}
          width={200}
          height={200}
          className="h-[120px] w-[130px] object-cover transition-transform duration-500 ease-in-out hover:scale-110 rounded-lg"
        />
      </div>
    </div>
  );
};

export default FoodItemCard;
