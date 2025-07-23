import useCartStore from "@/app/store/useCartStore";
import { IFood } from "@/Type";
import Image from "next/image";
import React from "react";

const FoodItemCard = ({ val, clickPerFoodItem }: any) => {
  
  return (
    <div
      onClick={() => clickPerFoodItem(val)}
      className="relative group w-full md:w-[420px] h-[154px] border border-slate-300 p-4 bg-slate-100 text-slate-700 rounded-lg  grid grid-cols-12 hover:bg-red-50 cursor-pointer "
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
          className="h-[120px] w-[130px] object-cover transition-transform duration-500 ease-in-out hover:scale-105 rounded-lg"
        />
      </div>
      <div  className=" absolute bottom-2 right-2  w-8 h-8 bg-white shadow-xl text-slate-600 border-2 border-primary-1 rounded-md flex justify-center items-center text-2xl font-semibold transition-transform duration-500 ease-in-out group-hover:scale-110 z-50 py-2">
        <span className="text-[24px] transition-transform duration-500 ease-in-out group-hover:scale-125 font-normal p-1 inline-block">+</span>

      </div>
    </div>
  );
};

export default FoodItemCard;
