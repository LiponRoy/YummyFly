"use client";
import useCartStore from "@/app/store/useCartStore";
import { IFood } from "@/Type";
import { Archive } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const CartItemBox = () => {
  const { addItemToCart, incrementCart, decrementCart, removeItemFromCart, allCartRemove } = useCartStore();

  const { cartProducts } = useCartStore();
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [myTotalPrice, setMyTotalPrice] = useState(0);

  useEffect(() => {
    const totalQuantity = cartProducts.reduce((prev, next) => {
      return prev + next.cartQuantity;
    }, 0);

    const totalPrice = cartProducts.reduce((prev, next) => {
      const totalPrice = prev + next.cartQuantity * next.price;
      return totalPrice;
    }, 0);

    setTotalQuantity(totalQuantity);
    setMyTotalPrice(totalPrice);
  }, [cartProducts]);

  useEffect(() => {
    // set total price to store to get from checkout page or other
    useCartStore.setState((state) => ({
      totalPrice: myTotalPrice ? myTotalPrice : 0,
    }));
  }, [myTotalPrice]);

  const deleteItem = (item: IFood) => {
    removeItemFromCart(item);
  };

  const incrementItem = (item: IFood) => {
    incrementCart(item);
  };

  const decrementItem = (item: IFood) => {
    decrementCart(item);
  };

  return (
    <div>
      <div className="relative col-span-3 border border-slate-400 rounded-xl p-2">
        {/* Clear All Button */}
        {cartProducts.length > 0 && (
          <div onClick={() => allCartRemove()} className="absolute -top-7 right-2 cursor-pointer">
            Clear All
          </div>
        )}

        {/* Scrollable container */}
        <div className=" h-[400px] overflow-y-auto pr-2">
          {/* Right side Cart items */}
          {cartProducts && cartProducts.length > 0 ? (
            <div className="">
              {cartProducts.map((item, i) => (
                <div
                  key={i}
                  className="w-full flex flex-col justify-start items-start p-1 my-2 border-b border-slate-200"
                >
                  <div className="w-full flex justify-center items-center">
                    <Image
                      src={item.imageUrl}
                      width={200}
                      height={300}
                      alt="no pic"
                      className="w-12 h-12 rounded-md m-1"
                    />
                    <div className="flex flex-col justify-start w-full space-y-2">
                      <span className="text-[14px]">{item.name}</span>
                      <div className="flex justify-between items-center">
                        <span className="ml-2 md:ml-1">
                          {item.price} <span className="ml-[2px]">TK</span>
                        </span>
                        <div className="flex justify-center items-center space-x-4">
                          <div className="flex justify-between items-center border-2 border-primary-1 px-2 rounded-md w-[90px] text-xl ">
                            <button
                              className={`font-bold ${
                                item.cartQuantity === 1 ? "text-slate-200 cursor-not-allowed" : "cursor-pointer"
                              }`}
                              onClick={() => decrementItem(item)}
                            >
                              -
                            </button>
                            <span className=" mx-2">{item.cartQuantity}</span>
                            <button className="cursor-pointer font-bold" onClick={() => incrementItem(item)}>
                              +
                            </button>
                          </div>
                          <Archive
                            className="cursor-pointer text-primary-1 shadow"
                            onClick={() => deleteItem(item)}
                            size={22}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* //,,, */}
              {/* // Total Count */}
              <div className=" relative flex flex-col justify-start items-start rounded-md shadow mx-1 px-2 my-4">
                <span className="text-slate-600 text-start  uppercase font-semibold text-md mb-1 w-full">
                  total calculation
                </span>
                <div className="flex justify-between items-center w-full ">
                  <span className=" text-md text-slate-600 font-semibold">Total Product: </span>
                  <span className=" text-md text-slate-700 font-semibold">{cartProducts.length} </span>
                </div>
                <div className="flex justify-between items-center w-full ">
                  <span className=" text-md text-slate-600 font-semibold">Total Quantity: </span>
                  <span className="ml-2 text-md text-slate-700 font-semibold">{totalQuantity}</span>
                </div>
                <div className="flex justify-between items-center w-full ">
                  <span className=" text-md text-slate-600 font-semibold">Total Price: </span>
                  <span className="ml-2 text-md text-slate-700 font-semibold">
                    {myTotalPrice}
                    <span className=" ml-2 text-slate-500">TK</span>
                  </span>
                </div>
              </div>
              {/* // End Total Count */}
            </div>
          ) : (
            <div className="h-[400px] flex flex-col justify-center items-center text-slate-700 space-y-1">
              <Image
                src="/hungry.png"
                alt={"food"}
                width={200}
                height={200}
                className="w-[80px] h-[80px] animate-pulse"
              />
              <span className="text-2xl font-bold">Hungry ?</span>
              <span className="text-md">Your Cart Is Empty !!!</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItemBox;
