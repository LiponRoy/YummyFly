"use client";
import SidebarContent from "./SidebarContent";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  propsForSidebar: any; // pass down sidebar props
}

export default function MobileSidebar({ isOpen, onClose, propsForSidebar }: MobileSidebarProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Drawer */}
      <div className="w-64 bg-white p-4 overflow-y-auto shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Filters</h2>
          <button
            onClick={onClose}
            className="text-red-500 font-bold text-xl"
          >
            ✕
          </button>
        </div>
        <SidebarContent {...propsForSidebar} closeSidebar={onClose} />
      </div>

      {/* Overlay */}
      <div
        className="flex-1 bg-black/70 bg-opacity-40"
        onClick={onClose}
      />
    </div>
  );
}
