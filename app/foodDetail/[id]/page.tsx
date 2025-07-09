import { restaurants } from "@/Constant";
import { Bike, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

type FoodProps = {
    params: {
        id: string;
    };
};

const FoodDetail = ({ params }: FoodProps) => {
    const { id } = params;

    const product = restaurants.find((item) => item.id.toString() === id);

    if (!product) {
        return (
            <div className="p-6 text-red-500 font-bold">
                Product not found for ID: {id}
            </div>
        );
    }

    console.log("product", product);

    return (
        <div className="container-custom mt-4">
           <div className="grid grid-cols-8 space-x-2">
                    <div className="col-span-1 ">
                        <Image
                            src={product.imageUrl}
                            alt={"food"}
                            width={500}
                            height={500}
                            className="w-full h-40 object-cover transition-transform duration-500 ease-in-out hover:scale-110 "
                        />
                    </div>
                    <div className="col-span-7 ">
                        <div className="flex flex-col justify-start items-start ml-2 space-y-1">
                          <div className="flex justify-center items-center">
                              <span className="text-[26px] font-normal">{product.name}</span>
                              <span className="mx-2">-</span>
                            <span className="text-[26px] font-normal">{product.location}</span>
                          </div>
                          <div className="flex justify-center items-center space-x-1">
                            <Star size={14} className="mr-1 text-red-600" />
                          <span>({product.topRated}.0) <span className="ml-2">Rating</span></span>
                          </div>
                          <div className="flex justify-center items-center space-x-1">
                            <Bike size={16} /> 
                            <span className="mr-2">Delivery Fee :</span>{product.deliveryFee} <span className="ml-1">Taka</span></div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default FoodDetail;
