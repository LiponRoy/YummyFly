"use client";
import useCartStore from "@/app/store/useCartStore";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { cartProducts } = useCartStore();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow px-2 py-1 z-50 border-b-2 border-primary-1">
  <div className="container-custom mx-auto flex justify-between items-center">
    <Link href="/" className=" text-primary-1">
     
      <div className="flex justify-center items-center text-[26px] font-bold">
        <Image
                            data-testid="restaurant-image"
                            src="/bee.png"
                            alt={"noImg"}
                            width={200}
                            height={200}
                            className="h-[50px] w-[50px]  object-cover transition-transform duration-500 ease-in-out hover:scale-110 "
                        />
         <span><span className="text-primary-2 ">Yummy</span>Fly</span>
          
     
      </div>
    </Link>

<div className="flex justify-center items-center space-x-6">
      <Link href="/cartDetails" className="text-gray-900 flex justify-center items-center gap-x-1 cursor-pointer ">
      <span className="text-xl text-slate-500">{cartProducts.length}</span>
      <ShoppingCart size={24} className="animate-pulse" />
     
    </Link>

    <Link href="/login" className="text-gray-900 flex justify-center items-center gap-x-1 cursor-pointer ">
      <span className="text-xl text-slate-500">Login</span>
    </Link>
</div>


  </div>
</nav>

  );
};

export default Navbar;
