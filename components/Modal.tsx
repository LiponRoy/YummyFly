import React from "react";

interface Imodal {
    isOpen: Boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: Imodal) => {
    if (!isOpen) return null;

    return (
        <div onClick={onClose} className="absolute inset-0 bg-black/50 bg-opacity-50 z-50 flex items-center justify-center ">
      <div onClick={(e) => e.stopPropagation()}  className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
                <button   className="absolute top-2 right-2 bg-red-500 p-2 w-8 h-8 rounded-full text-white flex justify-center items-center border-2 border-slate-300 cursor-pointer" 
                onClick={onClose}>
                    <span className="text-md">X</span>
                    
                    </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
