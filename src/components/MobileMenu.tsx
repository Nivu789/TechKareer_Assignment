import React, { EventHandler, MouseEventHandler } from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { RiNotification3Line } from "react-icons/ri";

const MobileMenu = ({onClick}:{onClick:MouseEventHandler<SVGElement>}) => {
  return (
    <div className='lg:hidden flex absolute bg-white w-full justify-between border-b-2'>
        <div className='mt-5 flex flex-col'>
            <div className='p-3'>Job preview</div>
            <div className='p-3'>Applicants</div>
            <div className='p-3'>Match</div>
            <div className='p-3'>Messages</div>
            <div className='p-3'>Notifications</div>
            <div className='flex p-3 gap-2 items-center'>
                <button className='border border-red-500 bg-red-50 py-3 px-12 flex items-center rounded-lg gap-2 text-md text-orange-600 font-semibold'>Delete job</button>
                <button className='border-2 border-orange-400 bg-orange-600 py-3 px-12 flex items-center rounded-lg gap-1 text-md text-white font-semibold'>Edit job</button>
                <img className="rounded-full w-10 h-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr42lt0uL4-RkQGD5AoUhQGn4OGr-foggxTQ&s" alt="logo" /> 
                <select name="" id=""></select>
            </div>
        </div>
        <div className='flex'>  
        <IoIosCloseCircleOutline onClick={onClick} className='mt-3 mr-6 text-2xl cursor-pointer'/>
        </div>
    </div>
  )
}

export default MobileMenu