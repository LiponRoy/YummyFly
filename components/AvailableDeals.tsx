import { availableDeals } from "@/Constant";
import { ChevronDown, Utensils } from "lucide-react";
import React, { useState } from "react";
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

  const [openingConditions, setOpeningConditions] = useState<Boolean>(false);

  return (
    <>
      <div className="hidden md:block w-[88%] my-4">
        <span className=" text-start text-[24px] font-medium ">Available Deals :</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 ">
          {availableDeals?.map((val, i) => (
            <div
              onClick={() => clickPerAvailableDeals(val)}
              key={i}
              className="relative w-[240px] h-[102px] flex flex-col justify-start items-start  border border-slate-500 bg-slate-100 text-slate-800 rounded-xl p-4 mt-2 cursor-pointer"
            >
              <span className="text-[14px] font-semibold my-1 flex justify-start items-center gap-x-2">
                <Utensils size={18} className="" />
                <span className="text-primary-1 mr-2">{val.title}</span>
              </span>
              <span className="text-[12px] font-normal my-1 flex justify-start items-center gap-x-2">
                {val.description}
              </span>
            </div>
          ))}
        </div>
        <Modal isOpen={selectedAvailableDeals} onClose={() => setSelectedAvailableDeals(false)} header="AvailableDeals">
          <div className="max-h-400 text-black bg-white flex flex-col justify-items-start items-start space-y-2">
            <span className="text-[24px] font-bold">{selectedAvailableDeals?.title}</span>
            <span>{selectedAvailableDeals?.time}</span>
            <span>Min. Order: {selectedAvailableDeals?.minOrder}</span>
            <span>{selectedAvailableDeals?.description}</span>
            <div className="">
              <div onClick={() => setOpeningConditions(!openingConditions)} className="flex justify-start items-center space-x-1 mt-2">
                <span className="font-bold">
                  Conditions
                </span>
                <ChevronDown size={18} className=" text-slate-500 font-bold border border-slate-400 rounded-full " />
              </div>

              <div>
                {openingConditions &&
                  selectedAvailableDeals?.Conditions?.map((val: string, i: any) => (
                    <span key={i} className="flex flex-col justify-center in-checked:">
                      {val}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default AvailableDeals;
