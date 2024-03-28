import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Accordion = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-[600px] flex flex-col space-y-4 p-5.5 rounded-xl border border-solid border-[#1A0AD7] bg-[#F6F5FF] overflow-hidden transition-all duration-1000" onClick={() => setOpen(prev => !prev)}>
      <div className="flex justify-between">
        <span className="inline-block text-2xl text-[#100F0F] font-bold">Industry Focus</span>
        <span className="inline-block text-2xl text-[#100F0F] font-bold">{open ? '-' : '+'}</span>
      </div>
      <p className={`text-lg text-[#100F0F] font-medium ${open ? 'max-h-[1000px]' : 'max-h-0'}`}>
        Backend prompt can be focus mainly on your industry so result are more precise
      </p>
    </div>
  );
};

export default Accordion;
