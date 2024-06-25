import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrFormEdit } from "react-icons/gr";
import { GoPeople } from "react-icons/go";
import { BsPersonCheck } from "react-icons/bs";
import { LuMessageSquare } from "react-icons/lu";
import { LuEye } from "react-icons/lu";


const data = [
  {
    key:"Applicants",
    value:400,
    icon:<GoPeople />
  },
  {
    key:"Matches",
    value:100,
    icon:<BsPersonCheck />
  },
  {
    key:"Messages",
    value:147,
    icon:<LuMessageSquare />
  },
  {
    key:"Views",
    value:800,
    icon:<LuEye />
  }
]


const SideBar = () => {
  return (
    <div className='lg:flex flex-col w-full border-l pt-8 h-full hidden px-2 bg-slate-50'>
      <div className='flex gap-3 pl-5'>
        <button className='border border-red-500 bg-red-50 py-1 px-8 flex items-center rounded-lg text-md text-orange-600 font-semibold max-w-fit'><RiDeleteBin6Line />Delete job</button>
        <button className='border-2 border-orange-400 bg-orange-600 py-2 px-8 flex items-center rounded-lg gap-1 text-md text-white font-semibold'><GrFormEdit className='text-3xl'/>Edit job</button>
      </div>
      <div className='pt-4'>
        {data.map((value)=>(
          <div className={`flex justify-between ${value.key=="Views"?"":"border-b"} p-6 px-8 max-width-fit`} key={value.key}>
            <div className='flex text-lg items-center gap-2 text-slate-600'>{value.icon}{value.key}</div>
            <div className='flex text-lg font-bold'>{value.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideBar