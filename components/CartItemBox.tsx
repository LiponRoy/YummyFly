"use client";
import useCartStore from "@/app/store/useCartStore";
import { IFood } from "@/Type";
import { Archive, ShoppingBasket } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const CartItemBox = () => {
  const router = useRouter();
  const { addItemToCart, incrementCart, decrementCart, removeItemFromCart, allCartRemove } = useCartStore();
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
      <div className="border border-slate-400 rounded-xl p-1 md:p-4 mt-10 md:mt-0 mx-4 md:mx-0 w-[368px] md:w-[400px] max-h-[600px] overflow-y-auto ">
        <h4 className="w-full bg-slate-100 py-1 px-2 rounded-xl">Your Cart </h4>

        {/* Scrollable container */}
        <div className="w-full  pr-2 flex flex-col justify-center ">
          {/* Right side Cart items */}
          <div className="w-full flex flex-col justify-center items-center ">
            {cartProducts && cartProducts.length > 0 ? (
              <div className="w-full ">
                {cartProducts.map((item, i) => (
                  <div
                    key={i}
                    className="w-full flex flex-col justify-start items-start p-1 my-2 border-b border-slate-200 "
                  >
                    <div className="w-full flex justify-between items-center ">
                      <div className="flex justify-center items-center">
                        <Image
                          src={item.imageUrl}
                          width={200}
                          height={300}
                          alt="no pic"
                          className="w-12 h-12 rounded-md m-1"
                        />
                        <div className="flex flex-col justify-start items-start">
                          <span className="text-[12px]">{item.name}</span>
                          <span className="ml-2 md:ml-1">{item.price} /=</span>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center items-center  space-y-2 ">
                        <div className="flex justify-center items-center space-x-4">
                          <div className="flex justify-between items-center border-2 border-slate-200 px-1 rounded-md w-[80px] text-lg ">
                            <button
                              className={`font-bold ${
                                item.cartQuantity === 1 ? "text-slate-200 cursor-not-allowed" : "cursor-pointer"
                              }`}
                              onClick={() => decrementItem(item)}
                            >
                              -
                            </button>
                            {/* <span className=" mx-2">{item.cartQuantity}</span> */}
                            <span className=" mx-2">{getItemQuantity && getItemQuantity(item.id.toString())}</span>
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
                ))}
                {/* //,,, */}
              </div>
            ) : (
              <div className=" flex flex-col justify-center items-center text-slate-700 space-y-1">
                <ShoppingBasket className="text-primary-1" size={60} />
                <span className="text-2xl font-bold">Hungry ?</span>
                <span className="text-md">Your Cart Is Empty !!!</span>
              </div>
            )}
            {/* // Total Count */}
            <div className="relative w-full flex flex-col justify-start items-start rounded-md shadow mx-1 px-2 my-4">
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

          <div className="w-full flex justify-center items-center space-x-2 mt-4">
            <div
           
              onClick={() =>cartProducts && cartProducts.length > 0 && router.push("/checkout")}
              // className="w-full bg-primary-1 p-1 text-center text-white rounded-sm cursor-pointer"
              className={`w-full ${
                cartProducts && cartProducts.length > 0
                  ? "bg-primary-1 text-white cursor-pointer"
                  : "bg-slate-400 text-slate-200"
              } p-1 text-center  rounded-sm `}
            >
              Checkout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemBox;
