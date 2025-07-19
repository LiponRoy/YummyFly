"use client";
import useCartStore from "@/app/store/useCartStore";
import AvailableDeals from "@/components/AvailableDeals";
import CartItemBox from "@/components/CartItemBox";
import FoodItemCard from "@/components/FoodItemCard";
import Modal from "@/components/Modal";
import { restaurants } from "@/Constant";
import { IAvailableDeals, IFood } from "@/Type";

import { Bike, MapPinPlusInside, OctagonAlert, Star } from "lucide-react";
import Image from "next/image";
import React, { use, useState } from "react";

type FoodProps = {
  params: {
    id: string;
  };
};
const FoodDetail = ({ params }: { params: Promise<FoodProps["params"]> }) => {
  const { id } = use(params);

  const { addItemToCart } = useCartStore();

  const [openModal, setOpenModal] = useState<Boolean>(false);

  const [openFoodItemModal, setOpenFoodItemModal] = useState<Boolean>(false);
  const [selectedFoodItem, setSelectedFoodItem] = useState<IFood>();

  const clickPerFoodItem = (val: IFood) => {
    setSelectedFoodItem(val);
    setOpenFoodItemModal(true);
  };

  // Available Deals
  const [openAvailableDealsModal, setOpenAvailableDealsModal] = useState<Boolean>(false);
  const [selectedAvailableDeals, setSelectedAvailableDeals] = useState<IAvailableDeals>();

  const product = restaurants.find((item) => item.id.toString() === id);

  if (!product) {
    return <div className="p-6 text-red-500 font-bold">Product not found for ID: {id}</div>;
  }

  return (
    <>
      <div className="container-custom ">
        <div className="container-custom mt-4 relative  ">
          <div className="w-full flex flex-col justify-start items-start">
            {/* // top restaurant info */}
            <div className="grid grid-cols-8 space-x-2 ">
              <div className="col-span-2 ">
                <Image
                  src={product.imageUrl}
                  alt={"food"}
                  width={500}
                  height={500}
                  className="w-[156px] h-[156px] object-cover transition-transform duration-500 ease-in-out hover:scale-110 rounded-md"
                />
              </div>
              <div className="col-span-6 ">
                <div className="flex flex-col justify-start items-start space-y-1 ml-2">
                  <div className="flex justify-center items-center">
                    <span className="text-[32px] font-bold text-slate-800">{product.name}</span>
                    <span className="mx-2">-</span>
                    <span className="text-[28px] font-normal">{product.location}</span>
                  </div>
                  <div className="flex justify-center items-center space-x-1 text-[14px]">
                    <Star size={14} className="mr-1 text-red-600" />
                    <span>
                      ({product.topRated}
                      .0) <span className="ml-2">Rating</span>
                    </span>
                  </div>
                  <div className="flex justify-center items-center space-x-1 text-[14px]">
                    <Bike size={16} />
                    <span className="mr-2">Delivery Fee :</span>
                    {product.deliveryFee} <span className="ml-1">Taka</span>
                  </div>
                </div>
                {/* More Info  */}
                <div className="mt-4 w-28 ml-2 text-[14px]">
                  <div
                    className="text-red-400 flex justify-start items-center space-x-1 cursor-pointer"
                    onClick={() => setOpenModal(true)}
                  >
                    <OctagonAlert className="text-red-400" size={16} />
                    <span>More Info</span>
                  </div>
                </div>
                {/* More Info  */}
                <Modal isOpen={openModal} onClose={() => setOpenModal(false)} header="Restaurants More Info">
                  <div className="">
                    <Image
                      src={product?.moreInfo?.imageUrl}
                      alt={"food"}
                      width={500}
                      height={500}
                      className="w-full h-40 object-cover"
                    />
                    <div className=" ml-4">
                      <div className="flex justify-start items-start space-x-1 my-2">
                        {product.name}
                        <MapPinPlusInside className="text-red-400" />
                        <span>{product?.moreInfo?.fullLocation}</span>
                      </div>
                      <div className="flex flex-col justify-start items-start">
                        <span className="text-md font-semibold">Delivery Fee :</span>
                        <span>{product?.moreInfo?.aboutDeliveryFee}</span>
                      </div>
                      <div className="flex flex-col justify-start items-start">
                        <span className="text-md font-semibold">Minimum Order</span>
                        <span>{product?.moreInfo?.aboutMinimumOrder}</span>
                      </div>
                      <div className="flex flex-col justify-start items-start mt-4">
                        <span>Opening Hours</span>
                        {product?.moreInfo?.OpeningHours.map((val, i) => (
                          <div key={i} className="">
                            {val}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Modal>
                {/* end More Info  */}
              </div>
            </div>
            {/* // End top restaurant info */}
            <div className="w-full grid grid-cols-12 ">
              <div className="col-span-9">
                <AvailableDeals
                  selectedAvailableDeals={selectedAvailableDeals}
                  setSelectedAvailableDeals={setSelectedAvailableDeals}
                  openAvailableDealsModal={openAvailableDealsModal}
                  setOpenAvailableDealsModal={setOpenAvailableDealsModal}
                />

                {/* // All menu based on this restaurant */}
                <span className=" text-start text-[24px] font-medium mb-2">All Food Menu :</span>
                <div className="w-[94%] grid grid-cols-1 md:grid-cols-2 gap-2">
                  {product?.foods.map((val: IFood, i) => (
                    <FoodItemCard key={i} val={val} clickPerFoodItem={clickPerFoodItem} />
                  ))}
                </div>
                {/* // End All menu based on this restaurant */}
                {/* // modal of selected food item */}
                <Modal isOpen={openFoodItemModal} onClose={() => setOpenFoodItemModal(false)} header="food item">
                  {selectedFoodItem ? (
                    <div className="">
                      <Image
                        src={selectedFoodItem.imageUrl}
                        alt={"food"}
                        width={200}
                        height={200}
                        className="w-full h-40 object-cover"
                      />
                      <div className="flex flex-col justify-start items-start space-y-2 my-6 mt-2">
                        <span className="text-[18px] font-semibold">{selectedFoodItem.name} :</span>
                        <span>{selectedFoodItem.description}</span>
                        <span className="text-xl font-medium">
                          <span className="mr-1">Taka</span>
                          {selectedFoodItem.price}
                          <span className="ml-1">/=</span>
                        </span>
                      </div>
                      {/* add cart options */}
                      <div className="w-full flex justify-between items-center p-2  bg-slate-100 border border-slate-300 my-4 rounded-lg">
                        <div className="flex justify-center items-center space-x-4">
                          <button className="bg-orange-600 w-8 h-8 rounded-2xl flex justify-center items-center text-white text-3xl">
                            -
                          </button>
                          <span className="text-2xl font-bold">12</span>
                          <button className="bg-orange-600 w-8 h-8 rounded-2xl flex justify-center items-center text-white text-2xl">
                            +
                          </button>
                        </div>
                        <div onClick={() => selectedFoodItem && addItemToCart(selectedFoodItem)} className="">
                          <button className="bg-orange-600 w-[180px] p-1 rounded-lg text-white curser-pointer">
                            Add to cart
                          </button>
                        </div>
                      </div>
                      {/* add cart options */}
                    </div>
                  ) : (
                    <div>No food Found</div>
                  )}
                </Modal>
                {/* // End modal of selected food item */}
              </div>
              <div className="hidden md:block col-span-3 mt-14">
                {/* //  cart option */}
                <CartItemBox />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodDetail;
