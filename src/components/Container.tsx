import React, {ReactNode} from 'react'

type ParentProps = {
    children:ReactNode
}
const Container:React.FC<ParentProps> = ({children}) => {
  return (
    <div className='container lg:pl-28 max-h-fit border-b-2 pl-10'>
        {children}
    </div>
  )
}

export default Container