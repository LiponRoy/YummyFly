import { availableDeals } from "@/Constant";
import { Utensils } from "lucide-react";
import React from "react";
import Modal from "./Modal";
import { IAvailableDeals } from "@/Type";

const AvailableDeals = ({
  selectedAvailableDeals,
  setSelectedAvailableDeals,
  openAvailableDealsModal,
  setOpenAvailableDealsModal,
}: any) => {
  const clickPerAvailableDeals = (val: IAvailableDeals) => {
    setSelectedAvailableDeals(val);
    setOpenAvailableDealsModal(true);
  };
  return (
    <>
      <div className="my-4">
        <span className=" text-start text-2xl font-medium ">
          Available Deals :
        </span>
        <div className="grid grid-cols-4 gap-4">
          {availableDeals?.map((val, i) => (
            <div
              onClick={() => clickPerAvailableDeals(val)}
              key={i}
              className="relative flex flex-col justify-start items-start  border border-y-amber-400 bg-slate-100 text-black rounded-xl p-4 mt-2 cursor-pointer"
            >
              <span className="text-lg font-semibold my-1 flex justify-start items-center gap-x-2">
                <Utensils
                  size={16}
                  className="border border-slate rounded-md p-[2px]"
                />
                {val.title}
              </span>
              <span className="text-[12px] font-semibold my-1 flex justify-start items-center gap-x-2">
                {val.description}
              </span>
              {(val.id === 1 || val.id === 3) && (
                <div>
                  <div className="absolute top-0 bottom-0 -left-3 my-auto w-5 h-5 rounded-full  bg-black"></div>
                  <div className="absolute top-0 bottom-0 -right-3 my-auto w-5 h-5 rounded-full  bg-black"></div>
                </div>
              )}

              {(val.id === 2 || val.id === 4) && (
                <div>
                  <div className="absolute top-0 bottom-0 -left-3 my-auto w-5 h-5 rounded-full  bg-black"></div>
                  <div className="absolute top-3 -right-8 my-auto w-10 h-10 rounded-full  bg-black"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        <Modal
          isOpen={selectedAvailableDeals}
          onClose={() => setSelectedAvailableDeals(false)}
        >
          <div className="max-h-40 text-black bg-white flex flex-col justify-items-start items-start">
            <span>{selectedAvailableDeals.title}</span>
            <span>{selectedAvailableDeals.description}</span>
            <span className="text-3xl text-red-800 font-semibold m-4">hurry up</span>
            
          </div>
        </Modal>
      </div>
    </>
  );
};

export default AvailableDeals;
