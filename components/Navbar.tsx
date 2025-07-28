"use client";
import useCartStore from "@/app/store/useCartStore";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const { cartProducts } = useCartStore();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow px-4 py-3 z-50 border-b-2 border-primary-1">
  <div className="container-custom mx-auto flex justify-between items-center">
    <Link href="/" className="text-xl font-bold text-primary-1">
     
      <div className="flex justify-center items-center space-x-4 ">
         <span><span className="text-primary-2">BD</span>-Foody-Zone</span>
          <div className="hidden md:flex justify-center items-center space-x-1 cursor-default">
            <ShoppingCart size={16} />
        <span className="text-md font-normal text-slate-500">{cartProducts.length}</span>
          </div>
     
      </div>
    </Link>

    <Link href="/cartDetails" className="text-gray-700 flex justify-center items-center gap-x-1 cursor-pointer md:hidden">
      <span className="text-xl text-slate-500">{cartProducts.length}</span>
      <ShoppingCart size={24} className="animate-pulse" />
    </Link>

    <div className="space-x-4 flex items-center">
      <Link href="/" className="text-gray-700 hover:text-orange-500">
        Home
      </Link>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
