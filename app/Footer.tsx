import React from 'react'
import { MdOutlineForwardToInbox } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import Image from 'next/image';
import Logo from '../public/log2.png'
import Logo2 from '../public/log.png'
import { FaLinkedin } from "react-icons/fa";
import { LiaFacebookSquare } from "react-icons/lia";
import { FiTwitter } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-[#0D0C0D] mt-28 w-full">
        <div className="flex max-[1024px]:flex-wrap max-[1024px]:space-y-10 items-center justify-between text-white py-20 px-10 max-[1024px]:w-[900px]">
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
            <div className="flex flex-col justify-start space-y-3 pb-5">
                <Image src={Logo} alt="logo" className="w-[200px] "/>
                <span className="inline-flex font-bold text-white text-base">
                    Write business documents.
                </span>
                <p className="inline-flex w-[300px] text-base font-light text-[#FCFCFC]">
                    DocuHelp may produce inaccurate information about people, places, or facts and may also display 
                    inaccurate or offensive information that doesn’t represent 3d7 Technologies views.
                </p>
            </div>
        </div>
        <hr className="w-full bg-[#999999] text-[#999999]"/>
        <div className="flex justify-between py-10 px-10">
            <div className="flex items-center space-x-2">
                <Image src={Logo2} alt='docs' className="w-[20px] h-[20px]"/>
                <div className="flex items-center space-x-1 text-white divide-x">
                    <span className="inline-flex text-[13px] font-normal">© 2023 docuhelp.ai</span>
                    <span className="inline-block text-[13px] font-normal pl-1">Security</span>
                    <span className="inline-block text-[13px] font-normal pl-1">Your Privacy</span>
                    <span className="inline-block text-[13px] font-normal pl-1">Terms</span>
                </div>
            </div>
            <div className="flex items-center space-x-3 max-[1024px]:mr-7">
                <FaLinkedin className='text-white text-lg'/>
                <LiaFacebookSquare className='text-white text-lg'/>
                <FiTwitter className='text-white text-lg'/>
                <GrInstagram className='text-white text-lg'/>
            </div>
        </div>
        
    </footer>
  )
}

export default Footer