"use client";
import Link from "next/link";

const Navbar = () => {

  return (
    <nav className="bg-white shadow px-4 py-3 z-50">
      <div className="container-custom mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-orange-600">
        BD-Foody-Zone
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
