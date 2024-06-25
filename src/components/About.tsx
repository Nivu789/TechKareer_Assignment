import React from 'react'

const About = () => {
  return (
    <div className='mt-8 pb-8'>
        <div className='text-md text-slate-400'>About job</div>
        <div className='ml-4 mt-3'>
            <ul className='list-decimal flex flex-col gap-1'>
                <li>Handle the UI/UX research design</li>
                <li>Work on researching on latest web applications designs & trends</li>
                <li>Work on conceptualizing and visualizing</li>
                <li>Work on creating graphics content and other graphic related works</li>
            </ul>
        </div>
        <div className='mt-2'>
            <div>Benefits:</div>
            <div className='ml-5'>
                <ul className='list-disc flex gap-1 flex-col'>
                    <li>Health Insurance</li>
                    <li>Provident Fund</li>
                </ul>
            </div>
        </div>
        <div className='mt-2'>
            <div>Schedule:</div>
            <div className='ml-5'>
                <ul className='list-disc flex gap-1 flex-col'>
                    <li>Day shift</li>
                </ul>
            </div>
        </div>
        <div className='mt-2'>
            <div>Supplemental pay types:</div>
            <div className='ml-5'>
                <ul className='list-disc flex gap-1 flex-col'>
                    <li>Performance bonus</li>
                    <li>Yearly bonus</li>
                </ul>
            </div>
        </div>
        <div className='mt-2'>
            <div>Work Location:In person</div>
        </div>
    </div>
  )
}

export default About