import React from "react";
import { Clock, Star, Bike } from "lucide-react";
import { RestaurantCardProps } from "@/Type";
import Image from "next/image";

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  name,
  location,
  cuisine,
  rating,
  reviews,
  deliveryFee,
  imageUrl,
  estimatedTime,
  discountText,
  tag
}) => {
  return (
    <div className="rounded-xl shadow-sm border bg-white overflow-hidden w-full cursor-pointer">
      <div className="relative">
         <Image
    src={imageUrl}
    alt={name}
    width={500}
    height={500}
    className="w-full h-40 object-cover transition-transform duration-500 ease-in-out hover:scale-110 "
  />
        {tag && (
          <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
            {tag}
          </div>
        )}
        {discountText && (
          <div className="absolute top-8 left-2 bg-red-200 text-red-700 text-xs px-2 py-1 rounded">
            {discountText}
          </div>
        )}
        <div className="absolute bottom-2 right-2 bg-white text-xs px-2 py-1 rounded flex items-center gap-1 shadow">
          <Clock size={14} />
          <span>{estimatedTime}</span>
        </div>
      </div>

      <div className="p-3">
        <h3 className="font-semibold text-sm text-gray-600">{name}</h3>
        <p className="text-xs text-gray-600">{cuisine}</p>
        <div className="flex items-center text-xs mt-2 gap-3">
          <span className="flex items-center text-red-500 font-medium">
            <Star size={14} className="mr-1" />
            {rating} <span className="text-gray-500 ml-1">({reviews})</span>
          </span>
          <span className="flex items-center text-gray-700">
            <Bike size={14} className="mr-1" />
            {deliveryFee} tk
          </span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
