"use client";
import useCartStore from "@/app/store/useCartStore";
import React, { useEffect, useState } from "react";

const Checkout = () => {
  const getItemQuantity = useCartStore((state) => state.getItemQuantity);

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


  return (
    <div className="h-screen container-custom mt-20 ">
      <div className="w-full grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-center items-center h-full text-slate-800 my-2">Currently working on this page. .....</div>

        <div className="border border-slate-400 rounded-xl p-1 md:p-4 m-2 md:mx-0 w-[360px] md:w-[450px] mt-8 md:mt-0">
          <h4 className="w-full bg-slate-100 py-1 px-2 rounded-xl">Your Order From </h4>

          {/* Scrollable container */}
          <div className="w-full  pr-2 flex flex-col justify-center ">
            {/* Right side Cart items */}
            <div className="w-full flex flex-col justify-center items-center ">
             
                <div className="w-full ">
                  {cartProducts.map((item, i) => (
                    <div
                      key={i}
                      className="w-full flex flex-col justify-start items-start p-1 my-2 border-b border-slate-200 "
                    >
                      <div className="w-full flex justify-between items-center ">
                        <div className="flex justify-center items-center">
                          
                          <div className="flex justify-center items-center space-x-2">
                            <span className="text-[12px]">{item.name}</span>
                            <span className="text-[12px]">=</span>
                            <span className="ml-2 md:ml-1">{item.price}</span>
                            <div className="flex justify-center items-center space-x-4">
                            X<span className=" mx-2">{getItemQuantity && getItemQuantity(item.id.toString())}</span>
                          </div>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  ))}
                  {/* //,,, */}
                </div>
             
              {/* // Total Count */}
              <div className="relative w-[90%] md:w-full flex flex-col justify-start items-start rounded-md shadow mx-1 px-2 my-4">
                <span className="text-slate-600 text-start  uppercase font-semibold text-md mb-1 w-full">
                  total calculation
                </span>
                <div className="flex justify-between items-center w-full border-b border-slate-300 py-1">
                  <span className=" text-md text-slate-600 font-semibold">Total Product: </span>
                  <span className=" text-md text-slate-700 font-semibold">{cartProducts.length} </span>
                </div>
                <div className="flex justify-between items-center w-full border-b border-slate-300 py-1">
                  <span className=" text-md text-slate-600 font-semibold">Total Quantity: </span>
                  <span className="ml-2 text-md text-slate-700 font-semibold">{totalQuantity}</span>
                </div>
                <div className="flex justify-between items-center w-full border-b border-slate-300 py-1">
                  <span className=" text-md text-slate-600 font-semibold">Total Price: </span>
                  <span className="ml-2 text-md text-slate-700 font-semibold">
                    {myTotalPrice}
                    <span className=" ml-2 text-slate-500">TK</span>
                  </span>
                </div>
              </div>
              {/* // End Total Count */}
            </div>

            
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Checkout;
