import React from 'react'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GrMoney } from "react-icons/gr";


interface TitleProps {
    title:string
    location:string,
    salary:string,
    published:string
}

const TitleSection = ({title,location,salary,published}:TitleProps) => {
  return (
    <div className='flex flex-col pb-10'>
        <div className='flex pt-5 gap-4 items-center mt-4'>
            <div className='text-xl lg:text-4xl font-semibold'>
                {title}
            </div>
            <div className='text-xl lg:text-2xl text-slate-300'>
            &#x2022;
            </div>
            <div className='text-slate-500'>
                {published}
            </div>
            <div className='justify-center font-semibold rounded-full bg-green-100 text-sm px-2 flex items-center gap-1 border border-green-400 text-green-800'>
                <div className='text-xl font-extrabold pb-1 text-green-600'>
                &#x2022;
                </div>
                Open
            </div>
        </div>
        <div className='flex text-xl gap-4 items-center mt-8'>
            <div className='flex items-center gap-2 text-slate-500 font-semibold'>
                <HiOutlineLocationMarker />
                {location}
            </div>
            <div className='text-slate-300'>
            &#x2022;
            </div>
            <div className='flex items-center gap-2 text-slate-500 font-semibold'>
                <GrMoney />
                {salary}
            </div>
        </div>
    </div>
  )
}

export default TitleSection