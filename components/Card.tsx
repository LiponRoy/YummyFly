"use client"
import React from "react";
import { Clock, Star, Bike, BadgePercent } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const RestaurantCard: React.FC<any> = ({
    restaurant
}) => {
  
    const route =useRouter();

    const goToFoodDetail = (id:string) => {
    // route.push(`/foodDetailCopy/${id}`);
    route.push(`/foodDetail/${id}`);
  };
    return (
        // href={`/user/${user.id}`}
        <div data-testid="restaurant-card" onClick={()=>goToFoodDetail(restaurant._id)} className="w-full h-[270px] rounded-xl shadow-sm border bg-white  cursor-pointer overflow-hidden">
            <div className="relative overflow-hidden">
                <Image
                    data-testid="restaurant-image"
                    src={restaurant.imageUrl}
                    alt={"noImg"}
                    width={500}
                    height={500}
                    className="w-full h-[190px] object-cover transition-transform duration-500 ease-in-out hover:scale-110 "
                />
               

                {/* Percent counting */}
                {restaurant.discountPercent &&  (
                    <div className="absolute top-4 -left-1 bg-primary-2 px-2 text-white rounded-md">
                        <div className="flex justify-center items-center pl-4">
                            <div className=" pr-2">
                                <BadgePercent size={16}/>
                            </div>{" "}
                            Up to {restaurant.discountPercent}% off
                        </div>
                    </div>
                )}
                {/* estimatedDeliveryTime */}
                {restaurant.deliveryTime &&(
                    <div className="absolute bottom-4 -right-1  px-2 text-slate-600 bg-white rounded-md">
                        <div className="flex justify-center items-center pl-1 py-1">
                            <div className=" pr-1">
                                
                            </div>{" "}
                             {restaurant.deliveryTime}
                        </div>
                    </div>
                )}
            </div>

            <div className="p-3">
                <div className="flex justify-start items-center space-x-1">
                    <span data-testid="restaurant-name" className="font-semibold text-sm text-gray-600">
                        {restaurant.restaurantName}
                    </span>
                    <span className="font-semibold text-sm text-gray-600">
                       -
                    </span>
                    <span className="font-semibold text-sm text-gray-600">
                        {restaurant.location}
                    </span>
                </div>
                <p className="text-xs text-gray-600">{restaurant.cuisine}</p>
                <div className="flex justify-between items-center text-xs mt-2 gap-3">
                    <span className="flex items-center justify-center space-x-1 text-gray-700 text-[18px] font-semibold">
                       <Bike size={16} /> <span>{restaurant.deliveryFee} tk</span>
                    </span>
                    <div className="flex justify-center items-center space-x-4">
                         <span className="flex justify-center items-center text-slate-700 font-medium">
                       
                        <span className="text-[14px]">({restaurant.distance} Km Far )</span>
                    </span>
                        <span className="flex justify-center items-center text-red-500 font-medium">
                        <Star size={14} className="mr-1 text-red-600" />
                        <span className="text-[14px]">{restaurant.rating} </span>
                    </span>
                   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;
