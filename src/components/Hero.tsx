import React from 'react'
import HeroMenu from './HeroMenu'
import { RiNotification3Line } from "react-icons/ri";

const Hero = () => {
  return (
    <div className='lg:grid lg:grid-cols-3 items-center border-b-2 p-2 sticky top-0 bg-white flex'>
        <div className='w-1/2 pt-4 p-2'>
            <div className='bg-slate-200 lg:w-24 m-auto p-4 text-center text-orange-500 font-semibold lg:text-lg w-14 text-sm'>
                Logo
            </div>
        </div>
        <div>
            <HeroMenu/>
        </div>
        <div className='lg:flex justify-end w-full pt-8 lg:gap-3 items-center lg:px-4 pb-4 gap-2 ml-2 hidden'>
            <RiNotification3Line className='lg:text-3xl text-xl'/>
            <span className='absolute mr-[87px] mb-7 text-2xl text-red-500'>&#x2022;</span>
            <img className="rounded-full lg:w-10 lg:h-10 w-5 h-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr42lt0uL4-RkQGD5AoUhQGn4OGr-foggxTQ&s" alt="logo" /> 
            <select name="" id=""></select>
        </div>
    </div>
  )
}

export default Hero