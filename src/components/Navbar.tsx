import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [mobileView,setMobileView] = useState(false)
  return (
    <div>
      <button className='lg:hidden float-right w-10 h-10'><RxHamburgerMenu onClick={()=>setMobileView(true)}/></button>
    <div className='pt-6 border-b-2 hidden lg:block'>
        <ul className='flex text-xl gap-24 pl-24 ml-5'>
            <div className='flex flex-col items-center'>
                <li className='text-orange-600 font-bold'>Job preview</li>
                <span className='text-orange-600 font-extrabold'>_________</span>
            </div>
            <li className='text-slate-500'>Applicants</li>
            <li className='text-slate-500'>Match</li>
            <li className='text-slate-500'>Messages</li>
        </ul>
    </div>
    {mobileView && 
     <MobileMenu onClick={()=>setMobileView(false)}/> 
    }
    </div>
  )
}

export default Navbar