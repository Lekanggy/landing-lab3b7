import Image from 'next/image'
import React from 'react'
import Logo from '../public/log2.png'

const Header = () => {
  return (
    <nav className='flex justify-between items-center py-3 px-8 max-[768px]:px-6 h-[80px] bg-white shadow-nav max-[768px]:justify-around'>
        <div className='flex space-x-8 items-center max-[640px]:space-x-2'>
           <Image src={Logo} alt='logo' className='w-[132px] h-[34px] object-cover'/>
           <span className='text-sm font-normal text-[#0A0A0A]'>Support</span>
           <span className='text-sm font-normal text-[#0A0A0A]'>Pricing</span>
        </div>
        <div className='flex space-x-8 items-center'>
            <span className='inline-block text-center rounded-lg w-[130px] h-[40px] py-2 px-5 bg-[#1A0AD7] text-white'>Get started</span>
            <span className='inline-block text-center rounded-lg border border-[#1A0AD7] w-[130px] h-[40px] py-2 px-5 bg-[#E8E7FE] text-[#1A0AD7]'>Sign In</span>
        </div>
    </nav>
  )
}

export default Header