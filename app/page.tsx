"use client";
import RestaurantCard from "@/components/Card";
import DailyDeals from "@/components/sliders/DailyDeals";
import FavouriteCuisines from "@/components/sliders/FavouriteCuisines";
import { allCuisines, restaurants } from "@/Constant";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
    const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);

    // Handler for multi-select filters
    const handleCheckboxChange = (
        value: string,
        selectedList: string[],
        setSelectedList: React.Dispatch<React.SetStateAction<string[]>>
    ) => {
        if (selectedList.includes(value)) {
            setSelectedList(selectedList.filter((item) => item !== value));
        } else {
            setSelectedList([...selectedList, value]);
        }
    };

    // Filtering
    const filteredProducts = restaurants.filter((product) => {
        // Filter by cuisines: show product if any cuisine matches any selected cuisine
        const cuisineMatch =
            selectedCuisines.length === 0
                ? true
                : product.cuisines.some((c) => selectedCuisines.includes(c));

        return cuisineMatch;
    });

    return (
        <div className="container-custom grid grid-cols-7 text-slate-600">
            <div className="col-span-1 flex flex-col justify-start items-center bg-slate-300">
                <span className="text-start">Filters</span>
                {/* Cuisine */}
                <div>
                    <label className=" font-medium">Cuisine:</label>
                    {allCuisines.map((cuisine) => (
                        <div key={cuisine}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedCuisines.includes(cuisine)}
                                    onChange={() =>
                                        handleCheckboxChange(
                                            cuisine,
                                            selectedCuisines,
                                            setSelectedCuisines
                                        )
                                    }
                                />
                                {cuisine}
                            </label>
                        </div>
                    ))}
                </div>
                {/* End Cuisine */}
            </div>
            <div className="col-span-6">
                <div className="w-full my-4">
                    <DailyDeals />
                </div>
                <div className="w-full my-4">
                    <FavouriteCuisines />
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-3 gap-2 m-4">
                    {filteredProducts.map((restaurant, i) => (
                        <RestaurantCard
                            key={i}
                            name={restaurant.name}
                            imageUrl={restaurant.imageUrl}
                            location={restaurant.location}
                            topRated={restaurant.topRated}
                            deliveryFee={restaurant.deliveryFee}
                            fastestDelivery={restaurant.fastestDelivery}
                            discountPercent={restaurant.discountPercent}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
