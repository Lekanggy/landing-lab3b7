import React from 'react'

const Describe = () => {
  return (
    <section className="bg-[#F6F5FF] w-full pt-20">
        <div className="flex flex-col justify-center items-center bg-hero-img bg-cover bg-no-repeat">
            <span className="inline-flex text-center text-[64px] max-[640px]:text-[32px] font-black leading-[76.8px] max-[640px]:leading-normal max-[640px]:">
                DOCUHELP <span className="inline-flex text-[#4435F6] ml-3">WRITES</span>
            </span>
            <span className="inline-flex text-center text-[64px] max-[640px]:text-[32px] font-black leading-[76.8px] max-[640px]:leading-normal">
                BUSINESS DOCUMENTS.
            </span>
            <p className="w-[700px] text-center font-normal text-xl pt-2">
                We are a software company that help businesses build 
                fast business documents that can help the business reach it goals.
            </p>
            <div className='flex space-x-4 items-center pt-10 pb-20'>
                <span className="inline-block text-center rounded-lg   py-5 px-10 bg-[#1A0AD7] text-white font-bold text-base">Get started</span>
                <span className="inline-block text-center rounded-lg border-[1.5px] border-[#1A0AD7]  w-[170px] py-[17.5px] bg-[#E8E7FE] text-[#1A0AD7] font-bold text-base">Sign In</span>
            </div>
        </div>
       
    </section>
  )
}

export default Describe