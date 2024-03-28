"use client"
import React from 'react'
import Accordion from './components/Accordion'

const data = [
    {
        title: "",
        des: ""
    }
]

const WhyDoc = () => {
  return (
    <section className="flex flex-col justify-center items-center space-y-10 mb-5">
        <h2 className="text-center text-[#1A0AD7] font-black text-6xl">Why Docuhelp?</h2>

        <Accordion/>
        <Accordion/>
    </section>
  )
}

export default WhyDoc