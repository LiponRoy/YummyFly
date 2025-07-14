"use client";
import { restaurants } from "@/Constant";
import { Bike, MapPinPlusInside, OctagonAlert, Star } from "lucide-react";
import Image from "next/image";
import React, { use, useState } from "react";

type FoodProps = {
  params: {
    id: string;
  };
};
// ({ params }: { params: Promise<{ id: string }> }) {
const FoodDetail = ({ params }: { params: Promise<FoodProps["params"]> }) => {
  const { id } = use(params);
  const [openMoreInfoModal, setOpenMoreInfoModal] = useState(false);
  const [openFoodItemModal, setOpenFoodItemModal] = useState(false);
  console.log("openMoreInfoModal: ", openMoreInfoModal);

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
    <>
      <div className=" mt-4 relative ">
        <div className="container-custom flex flex-col justify-start items-start">
          {/* // top restaurant info */}
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
                  <span className="text-[26px] font-normal">
                    {product.name}
                  </span>
                  <span className="mx-2">-</span>
                  <span className="text-[26px] font-normal">
                    {product.location}
                  </span>
                </div>
                <div className="flex justify-center items-center space-x-1">
                  <Star size={14} className="mr-1 text-red-600" />
                  <span>
                    ({product.topRated}.0) <span className="ml-2">Rating</span>
                  </span>
                </div>
                <div className="flex justify-center items-center space-x-1">
                  <Bike size={16} />
                  <span className="mr-2">Delivery Fee :</span>
                  {product.deliveryFee} <span className="ml-1">Taka</span>
                </div>
              </div>
              {/* More Info  */}
              <div className="mt-2">
                <div
                  className="text-red-400 flex justify-start items-center space-x-1 cursor-pointer"
                  onClick={() => setOpenMoreInfoModal(!openMoreInfoModal)}
                >
                  <OctagonAlert className="text-red-400" size={16} />
                  <span>More Info</span>
                </div>
              </div>
              {/* // More info Modal */}
              {openMoreInfoModal && (
                <div className=" absolute inset-0 mx-auto my-auto w-full h-full bg-slate-800/80 ">
                  <div className="absolute inset-0 mx-auto my-auto bg-slate-200 w-[500px] max-h-[500px] overflow-hidden text-slate-600 rounded-xl p-4">
                    <div
                      onClick={() => setOpenMoreInfoModal(false)}
                      className="absolute top-2 right-2 text-md font-bold bg-amber-700 rounded-full w-6 h-6 cursor-pointer z-50 flex justify-center items-center text-white"
                    >
                      <span> X</span>
                    </div>
                    <span className="pl-4 font-semibold">More Info</span>
                    <div className="col-span-1 ">
                      <Image
                        src={product?.moreInfo?.imageUrl}
                        alt={"food"}
                        width={500}
                        height={500}
                        className="w-full h-40 object-cover"
                      />
                      <div className=" ml-4">
                        <div className="flex justify-start items-start space-x-1 my-2">
                          <MapPinPlusInside className="text-red-400" />
                          <span>{product?.moreInfo?.fullLocation}</span>
                        </div>
                        <div className="flex flex-col justify-start items-start">
                          <span className="text-md font-semibold">
                            Delivery Fee :
                          </span>
                          <span>{product?.moreInfo?.aboutDeliveryFee}</span>
                        </div>
                        <div className="flex flex-col justify-start items-start">
                          <span className="text-md font-semibold">
                            Minimum Order
                          </span>
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
                  </div>
                  .
                </div>
              )}
              {/* end More Info  */}
            </div>
          </div>
          {/* // End top restaurant info */}

          {/* // All menu based on this restaurant */}
          <div className="w-full mt-5">
            {product?.foods.map((val, i) => (
              <div
                key={i}
                onClick={() => setOpenFoodItemModal(!openFoodItemModal)}
                className=" w-1/2 border border-slate-300 p-4 bg-slate-100 text-slate-700 rounded-lg m-2 grid grid-cols-12 hover:bg-red-50"
              >
                <div className="col-span-10 flex flex-col justify-start items-start">
                  <span className="text-[18px] font-semibold">
                    {val.name} :
                  </span>
                  <span>{val.description}</span>
                  <span>
                    <span className="mr-2">Taka</span>
                    {val.price}
                  </span>
                </div>
                <div className="col-span-2 ">
                  <Image
                    src={val.imageUrl}
                    alt={"food"}
                    width={200}
                    height={200}
                    className="h-24 w-24 object-cover transition-transform duration-500 ease-in-out hover:scale-110 rounded-lg"
                  />
                </div>

                {/* // Food Item Modal */}
                {openFoodItemModal && (
                  <div className=" absolute inset-0 mx-auto my-auto w-full h-full bg-slate-800/80 ">
                    <div className="absolute inset-0 mx-auto my-auto bg-slate-200 w-[500px] max-h-[500px] overflow-hidden text-slate-600 rounded-xl p-4">
                      <span
                        onClick={() => setOpenFoodItemModal(false)}
                        className="absolute top-2 right-2 text-md font-bold bg-amber-700 rounded-full w-6 h-6 cursor-pointer z-50 flex justify-center items-center text-white"
                      >
                        <span> X</span>
                      </span>
                      <span className="pl-4 font-semibold">Food Item</span>
                      <div className="col-span-1 ">
                        <Image
                          src={val.imageUrl}
                          alt={"food"}
                          width={500}
                          height={500}
                          className="w-[100px] h-[100px] object-cover rounded-full"
                        />
                        <div className=" ml-4">
                          <div className="flex justify-start items-start space-x-1 my-2">
                            <MapPinPlusInside className="text-red-400" />
                            <span>{val.name}</span>
                          </div>
                          <div className="flex flex-col justify-start items-start">
                            <span className="text-md font-semibold">
                              Delivery Fee :
                            </span>
                            <span>{val.name}</span>
                          </div>
                          <div className="flex flex-col justify-start items-start">
                            <span className="text-md font-semibold">
                              Minimum Order
                            </span>
                            <span>{val.name}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    .
                  </div>
                )}
                {/* end Food Item modal  */}
              </div>
            ))}
          </div>
          {/* // End All menu based on this restaurant */}
        </div>
      </div>
    </>
  );
};

export default FoodDetail;
