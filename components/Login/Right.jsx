import React from 'react'
import Form from './Form'
import Heading from './Heading'

const Right = () => {
  return (
    <div className='w-[70%] h-[100%] flex justify-center items-center overflow-x-hidden'>
      <div className='h-[90%] w-[60%]'>
        <Heading />
        <Form />
        <div className='h-[210px] w-[210px] bg-[#A03030] rounded-bl-full absolute right-0 top-0'></div>
        <div className='h-[90px] w-[90px] bg-[#A03030] rounded-tl-full absolute right-0 bottom-0'></div>
      </div>
    </div>
  )
}

export default Right