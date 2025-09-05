"use client";
import { Session } from "next-auth";
import useCartStore from "@/app/store/useCartStore";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logout from "./Logout";

interface NavbarClientProps {
  session: Session | null;
}

export default function NavbarClient({ session }: NavbarClientProps) {
  const { cartProducts } = useCartStore();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow px-2 py-1 z-50 border-b-2 border-primary-1">
      <div className="container-custom mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex justify-center items-center text-[26px] font-bold text-primary-1">
          <Image
            src="/bee.png"
            alt="YummyFly logo"
            width={50}
            height={50}
            className="object-cover transition-transform duration-500 ease-in-out hover:scale-110"
            priority
          />
          <span className="ml-2">
            <span className="text-primary-2">Yummy</span>Fly
          </span>
        </Link>

        {/* Right Section */}
        <div className="flex justify-center items-center space-x-6">
          {/* Cart */}
          <Link
            href="/cartDetails"
            className="text-gray-900 flex justify-center items-center gap-x-1 cursor-pointer"
            aria-label="View Cart"
          >
            <span className="text-xl text-slate-500">{cartProducts?.length ?? 0}</span>
            <ShoppingCart size={24} className="animate-pulse" aria-hidden="true" />
          </Link>

          {/* Auth Buttons */}
          {session?.user ? (
            <Logout />
          ) : (
            <Link
              href="/login"
              className="bg-primary-1 text-white px-3 py-2 rounded hover:bg-primary-2 transition-colors"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
