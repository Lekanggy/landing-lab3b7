import Image from 'next/image'
import React from 'react'
import Arrow from '../public/arrow.png'
import Log1 from '../public/Icon 1.png'

const DocDescription = () => {
  return (
    <section className="flex mb-20">
        <div className="flex-1 bg-[#1A0AD7] pl-5 space-y-3 py-5">
            <span className="inline-flex text-[#DBD8FD] text-2xl font-bold">
                Help your team get better
            </span>
            <h2 className="font-black w-[500px] leading-[80px] text-[#FCFCFC] text-6xl">
                What document would you like to write?
            </h2>
            <span className="inline-flex text-2xl font-medium text-[#DBD8FD]">
                Just enter your text in the prompt and start in seconds...
            </span>
            <div className="flex flex-col space-y-3 pt-8">
                    <div className="flex justify-between items-center w-[300px] border-[#FCFCFC] border rounded-[30px] bg-[#5D4EF8] py-4 px-10">
                        <Image src={Arrow} alt="icon" className="w-[40px]"/>
                        <span className="inline-flex text-[#FCFCFC] font-bold text-[20px]">Write Letter</span>
                    </div>
            </div>
        </div>
        <div className="flex flex-col space-y-5 px-10 pt-10">
            <div className="flex flex-col space-y-5">
                <Image src={Log1} alt="" className="w-[100px]"/>
                <span className="inline-flex w-[450px] text-3xl font-bold text-[#100F0F]">
                    Write Quick Accurate  Business Letter
                </span>
                <span className="inline-flex w-[450px] text-[#4B4B4E] text-[22px] font-medium pb-5">
                    With docuhelp.ai users can write detailed formal letters with 100% accuracy
                </span>
                <span className='flex text-center rounded-lg border border-[#1A0AD7] w-[150px] h-[40px] py-2 px-5 bg-[#E8E7FE] text-[#1A0AD7]'>
                    Start writing
                </span>
            </div>
        </div>
       
    </section>
  )
}

export default DocDescription