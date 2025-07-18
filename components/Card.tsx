import React from "react";
import { Clock, Star, Bike, BadgePercent } from "lucide-react";
import { RestaurantCardProps } from "@/Type";
import Image from "next/image";
import { useRouter } from "next/navigation";

const RestaurantCard: React.FC<RestaurantCardProps> = ({
    id,
    name,
    location,
    cuisine,
    topRated,
    reviews,
    deliveryFee,
    discountPercent,
    imageUrl,
    fastestDelivery,
    discountText,
    tag,
}) => {
    const route =useRouter();

    const goToFoodDetail = (id) => {
    route.push(`/foodDetail/${id}`);
  };
    return (
        // href={`/user/${user.id}`}
        <div onClick={()=>goToFoodDetail(id)} className="w-full h-[270px] rounded-xl shadow-sm border bg-white  cursor-pointer overflow-hidden">
            <div className="relative overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={name}
                    width={500}
                    height={500}
                    className="w-full h-[190px] object-cover transition-transform duration-500 ease-in-out hover:scale-110 "
                />
               

                {/* Percent counting */}
                {discountPercent && discountPercent >0 ? (
                    <div className="absolute top-4 -left-1 bg-green-600 px-2 text-white rounded-md">
                        <div className="flex justify-center items-center pl-4">
                            <div className=" pr-2">
                                <BadgePercent size={16}/>
                            </div>{" "}
                            Up to {discountPercent}% off
                        </div>
                    </div>
                ):""}
                {/* estimatedDeliveryTime */}
                {fastestDelivery && fastestDelivery > 0 ? (
                    <div className="absolute bottom-4 -right-1  px-2 text-slate-600 bg-white rounded-md">
                        <div className="flex justify-center items-center pl-1 py-1">
                            <div className=" pr-1">
                                
                            </div>{" "}
                             {fastestDelivery} min
                        </div>
                    </div>
                ):""}
            </div>

            <div className="p-3">
                <div className="flex justify-start items-center space-x-1">
                    <span className="font-semibold text-sm text-gray-600">
                        {name}
                    </span>
                    <span className="font-semibold text-sm text-gray-600">
                       -
                    </span>
                    <span className="font-semibold text-sm text-gray-600">
                        {location}
                    </span>
                </div>
                <p className="text-xs text-gray-600">{cuisine}</p>
                <div className="flex justify-between items-center text-xs mt-2 gap-3">
                    <span className="flex items-center justify-center space-x-1 text-gray-700 text-[18px] font-semibold">
                       <Bike size={16} /> <span>{deliveryFee} tk</span>
                    </span>
                    <span className="flex justify-center items-center text-red-500 font-medium">
                        <Star size={14} className="mr-1 text-red-600" />
                        <span className="text-[14px]">{topRated} </span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;
