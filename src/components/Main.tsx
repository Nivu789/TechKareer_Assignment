import React from 'react'
import LeftMain from './LeftMain'
import SideBar from './SideBar'

const Main = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4'>
        <div className='col-span-3'>
        <LeftMain/>
        </div>
        <div>
            <SideBar/>
        </div>
    </div>
  )
}

export default Main