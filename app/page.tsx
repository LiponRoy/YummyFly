"use client";
import RestaurantCard from "@/components/Card";
import DailyDeals from "@/components/sliders/DailyDeals";
import FavouriteCuisines from "@/components/sliders/FavouriteCuisines";
import { allCuisines, restaurants } from "@/Constant";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
    const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);
    const [selectedSort, setSelectedSort] = useState("");

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
    const filteredProducts = restaurants
        .filter((product) => {
            // Filter by cuisines: show product if any cuisine matches any selected cuisine
            const cuisineMatch =
                selectedCuisines.length === 0
                    ? true
                    : product.cuisines.some((c) =>
                          selectedCuisines.includes(c)
                      );

            return cuisineMatch;
        })
        .slice()
        .sort((a, b) => {
            if (!selectedSort) return 0;

            if (selectedSort === "fastestDelivery") {
                return a.fastestDelivery - b.fastestDelivery;
            }
            if (selectedSort === "distance") {
                return a.distance - b.distance;
            }
            if (selectedSort === "topRated") {
                return b.topRated - a.topRated;
            }
            return 0;
        });

    const resetFilter = () => {
        setSelectedCuisines([]);
        setSelectedSort("");
    };

    return (
        <div className="container-custom grid grid-cols-6 text-slate-600">
            <div className="w-full col-span-1 flex flex-col justify-start items-start pl-6 pt-6 bg-slate-100 ">
                {/* Sort By */}
                <div>
                    <label className="block mb-1 font-medium mt-4">
                        Sort By:
                    </label>
                    <div className="flex flex-col space-y-1">
                        <label className="flex justify-start items-center space-x-1">
                            <input
                                type="radio"
                                name="sort"
                                value=""
                                checked={selectedSort === ""}
                                onChange={() => setSelectedSort("")}
                                className="w-4 h-4"
                            />{" "}
                            <span>None</span>
                        </label>
                        <label className="flex justify-start items-center space-x-1">
                            <input
                                type="radio"
                                name="sort"
                                value="fastestDelivery"
                                checked={selectedSort === "fastestDelivery"}
                                onChange={() =>
                                    setSelectedSort("fastestDelivery")
                                }
                                className="w-4 h-4"
                            />{" "}
                            <span>Fastest Delivery</span>
                        </label>
                        <label className="flex justify-start items-center space-x-1">
                            <input
                                type="radio"
                                name="sort"
                                value="distance"
                                checked={selectedSort === "distance"}
                                onChange={() => setSelectedSort("distance")}
                                className="w-4 h-4"
                            />{" "}
                            <span>Distance</span>
                        </label>
                        <label className="flex justify-start items-center space-x-1">
                            <input
                                type="radio"
                                name="sort"
                                value="topRated"
                                checked={selectedSort === "topRated"}
                                onChange={() => setSelectedSort("topRated")}
                                className="w-4 h-4"
                            />{" "}
                            <span>Top Rated</span>
                        </label>
                    </div>
                </div>
                {/* End Sort By */}

                {/* Cuisine */}
                <div className="mt-4">
                    <label className="block mb-1 font-medium mt-2">
                        Cuisine:
                    </label>
                    {allCuisines.map((cuisine) => (
                        <div key={cuisine}>
                            <label className="flex justify-start items-center space-x-1">
                                <input
                                    type="checkbox"
                                    checked={selectedCuisines.includes(cuisine)}
                                    className="w-4 h-4"
                                    onChange={() =>
                                        handleCheckboxChange(
                                            cuisine,
                                            selectedCuisines,
                                            setSelectedCuisines
                                        )
                                    }
                                />
                                <span> {cuisine}</span>
                            </label>
                        </div>
                    ))}
                </div>
                {/* End Cuisine */}

                <div onClick={()=>resetFilter()} className="mt-4 bg-green-500 p-1 w-[86%] text-center text-white rounded-sm">RESET FILTER</div>
            </div>
            <div className="col-span-5">
                <div className="w-full my-2">
                    <DailyDeals />
                </div>
                <div className="w-full my-4">
                    <FavouriteCuisines />
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-3 gap-2 m-4">
                    {filteredProducts.map((restaurant, i) => (
                        <RestaurantCard
                            key={i}
                            id={restaurant.id}
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
