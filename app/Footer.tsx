import React from 'react'
import { MdOutlineForwardToInbox } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between bg-[#0D0C0D] text-white py-5 px-10">
        <div className="flex flex-col justify-start space-y-5 py-4">
            <span className="inline-flex w-[300px] font-bold text-[40px] leading-[48.5px] text-white">
                Stay In Touch With Us
            </span>
            <p className="text-base font-normal w-[400px]">
                The latest Docuhelp news, articles, and resources, sent straight to your inbox every month.
            </p>
            <div className="flex items-center space-x-5 py-2 px-4 rounded-lg border border-solid border-[#1A0AD7] bg-white">
                <input type="email" placeholder='Email Address' className="border-0 py-4 px-4 placeholder:text-[#1A0AD7] placeholder:text-lg focus:outline-none text-[#1A0AD7] text-base"/>
                <button className="py-2 px-3.5 border-0 bg-[#1A0AD7] text-base font-medium rounded">Subscribe</button>
            </div>
        </div>
        <div className="flex flex-col justify-start space-y-3 pb-24">
            <span className="inline-flex text-lg font-bold pb-3">
                Company
            </span>
            <span className="inline-flex text-base font-normal">
                3d7 Technologies
            </span>
            <span className="inline-flex text-base font-normal">
               Product
            </span>
            <span className="inline-flex text-base font-normal">
               Legal
            </span>
        </div>
        <div className="flex flex-col justify-start space-y-3 pb-24">
            <span className="inline-flex text-lg font-bold pb-3">
               Contact Us
            </span>
            <span className="inline-flex items-center space-x-2 text-base font-normal">
            <MdOutlineForwardToInbox className='mr-2'/> 3d7 Technologies
            </span>
            <span className="inline-flex text-base font-normal">
            <CiLocationOn className='mr-2'/> Manchester, United Kindom
            </span>
            <span className="inline-flex text-base font-normal">
            <BsTelephone className='mr-2'/> +1552452464
            </span>
        </div>
        
    </footer>
  )
}

export default Footer