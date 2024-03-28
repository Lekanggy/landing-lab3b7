import React from 'react'

const Action = () => {
  return (
    <section className="flex justify-between items-center p-10 mx-20 my-20 bg-white rounded-[48px] border-solid border-[#D2CEFD1A] shadow-ml">
        <div className="flex flex-col justify-start items-start space-y-3">
            <span className="inline-flex text-left w-[300px] font-bold text-[52px] leading-[60px] text-[#100F0F]">
             Get Started for free
            </span>
            <p className="text-[#4B4B4E] w-[515px] font-normal text-lg">
                Transforming Blank Pages into Captivating Narratives
                DocuHelp AI empowers businesses to discover their distinctive storytelling style
            </p>
            <div className='flex space-x-4 items-center pt-10 pb-20'>
                <span className="inline-block text-center rounded-lg   py-5 px-10 bg-[#1A0AD7] text-white font-bold text-base">Get started</span>
                <span className="inline-block text-center rounded-lg border-[1.5px] border-[#1A0AD7]  w-[170px] py-[17.5px] bg-[#E8E7FE] text-[#1A0AD7] font-bold text-base">Sign In</span>
            </div>
        </div>

        <div className="flex flex-col justify-start space-y-6 mb-24 mr-48">
            <div className="flex space-x-3 items-center">
                <span className="inline-block rounded-full w-[10px] h-[10px] bg-[#18C718]"></span>
                <span className="text-lg font-medium text-[ #4B4B4E]">Try Docuhelp Now!</span>
            </div>
            <div className="flex space-x-3 items-center">
                <span className="inline-flex justify-center items-center text-white rounded-full w-6 h-6 bg-[#1A0AD7]">&#10004;</span>
                <span className="text-lg font-medium text-[ #4B4B4E]">No credit card required</span>
            </div>
            <div className="flex space-x-3 items-center">
                <span className="inline-flex justify-center items-center text-white rounded-full w-6 h-6 bg-[#1A0AD7]">&#10004;</span>
                <span className="text-lg font-medium text-[ #4B4B4E]">Unlimited access</span>
            </div>
        </div>

    </section>
  )
}

export default Action