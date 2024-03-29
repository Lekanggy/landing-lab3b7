import Image from 'next/image'
import React from 'react'
import Edit2 from '../public/edit2.png'

const DocUse = () => {
  return (
    <section className="flex justify-between items-center relative p-10 max-[768px]:p-0 mx-20 my-20 bg-white rounded-[40px] border-solid border-[#D2CEFD1A] shadow-ml">
        <div className="flex flex-col justify-start items-start space-y-3">
            <span className="inline-flex text-left w-[400px] font-black text-[52px] leading-[60px] uppercase text-[#100F0F]">
            
            </span>
            <p className="text-[#1A0AD7] w-[500px] font-black text-[35px] max-[1024px]:text-[30px] uppercase border-t-8 border-[#1A0AD7] pt-3">
                Use DocuHelp to write documents for your business, work report, 
                and proposals for your next project! 
            </p>
            <div className='flex space-x-4 items-center pt-10 pb-20'>
                <span className="inline-block text-center rounded-lg   py-5 px-10 bg-[#1A0AD7] text-white font-bold text-base">Get started</span>
            </div>
        </div>
        <Image src={Edit2} alt='logo' className='w-[400px] h-[600px] object-cover  absolute right-11 bottom-0 max-[1024px]:w-[300px] max-[1024px]:h-[500px]'/>
    </section>
  )
}

export default DocUse