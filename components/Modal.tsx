import React from "react";

interface Imodal {
    isOpen: Boolean;
    onClose: () => void;
    children: React.ReactNode;
    header:string;
}

const Modal = ({ isOpen, onClose,header='Header', children }: Imodal) => {
    if (!isOpen) return null;

    return (
        <div
            onClick={onClose}
            className="absolute inset-0 bg-black/50 bg-opacity-50 z-50 flex items-center justify-center h-full"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative"
            >
                <div className="absolute top-1 left-3 ">
                     <span className="text-[14px]">{header}</span>
                </div>
                <button
                    className="absolute top-1 right-2 bg-red-500 p-2 w-6 h-6 rounded-full text-white flex justify-center items-center border-2 border-slate-300 cursor-pointer"
                    onClick={onClose}
                >
                    <span className="text-md">X</span>
                </button>
                <div className="mx-1 my-4">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
