"use client";
import useCartStore from "@/app/store/useCartStore";
import Image from "next/image";
import React from "react";

const CartItemBox = () => {
  const { addItemToCart, allCartRemove } = useCartStore();

  const { cartProducts } = useCartStore();
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
            cartProducts.map((item, i) => (
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
                      <span className="ml-2 md:ml-0">
                        {item.price} <span className="ml-1">TK</span>
                      </span>
                      <div className="flex justify-between items-center border border-slate-500 px-2 rounded-md w-[70px]">
                        <button>-</button>
                        <span>12</span>
                        <button>+</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
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
