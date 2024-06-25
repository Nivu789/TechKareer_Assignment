import React, { ReactNode } from 'react'

interface SkillsProps {
    language:string,
    experience:string,
    type:string
}

const skills = [
    {
        name:"Figma",
        url:"https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png"
    },
    {
        name:"Adobe illustrator",
        url:"https://1000logos.net/wp-content/uploads/2020/06/illustrator-Logo-2013.png"
    },
    {
        name:"Adobe XD",
        url:"https://w7.pngwing.com/pngs/565/63/png-transparent-adobe-xd-macos-bigsur-icon-thumbnail.png"
    },
]

const Skills = ({language,experience,type}:SkillsProps) => {
  return (
    <div className='grid lg:grid-cols-5 pt-8 pb-8 grid-cols-2'>
        <div className='flex flex-col gap-2'>
            <div className='text-md text-slate-500'>Skills required</div>
            {skills.map((skill)=>(
                <div className='flex items-center text-xs border max-w-fit px-2 rounded-md gap-1' key={skill.name}><img className="w-5 h-5 object-cover" src={skill.url}/>{skill.name}</div>
            ))}
        </div>
        <div>
            <div className='text-md text-slate-500'>Preferred Language</div>
            <div className='text-md font-bold mt-2'>{language}</div>
        </div>
        <div className='mt-3 lg:mt-0'>
            <div className='text-md text-slate-500'>Type</div>
            <div className='text-md font-bold mt-2'>{type}</div>
        </div>
        <div className='lg:col-span-2 mt-3 lg:mt-0'>
            <div className='text-md text-slate-500'>Years of Experience</div>
            <div className='text-md font-bold mt-2'>{experience} Years of Experience</div>
        </div>
    </div>
  )
}

export default Skills