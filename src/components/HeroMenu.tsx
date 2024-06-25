import React from 'react'
import { PiBagLight } from "react-icons/pi";
import { LuMessageSquare } from "react-icons/lu";
import { GiReceiveMoney } from "react-icons/gi";


const HeroMenu = () => {
  return (
    <div className='grid grid-cols-3 lg:p-3 border rounded-full lg:pt-2 mt-3 w-[400px] lg:w-full'>
        <div className='bg-orange-600 p-3 rounded-full text-center lg:w-3/4 lg:text-xl text-white flex justify-center items-center gap-1 border-orange-400 border'>
            <PiBagLight className='lg:text-2xl'/>
            Jobs
        </div>
        <div className='p-4 text-center w-full lg:text-xl text-slate-500 flex justify-center items-center gap-1'>
            <LuMessageSquare />
            <span className='absolute mr-[76px] mb-5 lg:text-2xl text-red-500'>&#x2022;</span>
            Messages
        </div>
        
        <div className='p-4 text-center w-full lg:text-xl text-slate-500 flex justify-center items-center gap-1'>
            <GiReceiveMoney />
            Payments
        </div>
    </div>
  )
}

export default HeroMenu