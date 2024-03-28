import Image from 'next/image'
import React from 'react'
import Edit from '../public/edit1.png'

const WriteDoc = () => {
  return (
    <section className="flex justify-between items-center relative p-10 mx-20 my-20 bg-white rounded-[40px] border-solid border-[#D2CEFD1A] shadow-ml">
    <div className="flex flex-col justify-start items-start space-y-3">
        <span className="inline-flex text-left w-[400px] font-black text-[52px] leading-[60px] uppercase text-[#100F0F]">
            Write with docuhelp
        </span>
        <p className="text-[#4B4B4E] w-[515px] font-normal text-lg">
            Generate professional graded documents, reports, proposal, sales pitch in a matter of minutes and 
            empower your team to work together in real time, ensuring accuracy and efficiency. 
            No more email chains or confusion—just smooth, simultaneous collaboration.
        </p>
        <div className='flex space-x-4 items-center pt-10 pb-20'>
            <span className="inline-block text-center rounded-lg   py-5 px-10 bg-[#1A0AD7] text-white font-bold text-base">Get started</span>
        </div>
    </div>

   
    <Image src={Edit} alt='logo' className='w-[600px] h-[500px] object-cover rounded-[40px] absolute right-0 bottom-0'/>
</section>
  )
}

export default WriteDoc