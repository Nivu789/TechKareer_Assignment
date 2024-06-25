import React from 'react'

const Footer = () => {
  return (
    <div className='grid lg:grid-cols-3 mt-8 pb-8'>
        <div className='flex flex-col gap-5'>
            <div className='flex items-center gap-3'>
                <div className='w-10 h-10'>
                    <img className="rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr42lt0uL4-RkQGD5AoUhQGn4OGr-foggxTQ&s" alt="" />
                </div>
                <div className='text-2xl text-slate-600'>
                Atlassian
                </div>
            </div>
            <div className='flex flex-col gap-1 mt-2'>
               <div className='text-md text-slate-400'>Compnay size</div> 
               <div className='text-md'>1k - 2k Employees</div> 
            </div>
            <div className='flex flex-col gap-1'>
               <div className='text-md text-slate-400'>Sector</div> 
               <div className='text-md'>Information Technology, Infrastructure</div> 
            </div>
            <div className='flex flex-col gap-1'>
               <div className='text-md text-slate-400'>Founded In</div> 
               <div className='text-md'>2019</div> 
            </div>
        </div>
        <div className='col-span-2'>
            <div className='flex flex-col gap-5 mt-16 pt-1'>
                <div className='flex flex-col gap-1'>
                    <div className='text-md text-slate-400'>Type</div> 
                    <div className='text-md'>Private</div> 
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='text-md text-slate-400'>Funding</div> 
                    <div className='text-md'>Bootstrapped</div> 
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='text-md text-slate-400'>Founded By</div> 
                    <div className='text-md'>Scott Farquhar, Mike Cannon-Brookes</div> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer