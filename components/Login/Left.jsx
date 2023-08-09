import React from 'react'

const Left = () => {
  return (
    <div className='w-[30%] h-[100%] bg-[#A03030] font-mono text-white flex justify-center items-center text-[100px] relative overflow-hidden'> 


      <div className='absolute top-10 right-[-40px]'>
        <img src='/Polygon.png' className='' />
      </div>
      <div className='h-[100px] w-[100px] bg-[#FDA3A3DE] absolute top-[20%] left-[-40px] rotate-45'>
      </div>
      <div className='absolute bottom-0 left-0'>
        <img src='/Ellipse.png' className='h-44' />
      </div>


      <div className='h-[160px] w-[70%] relative'>
        <img src='/cart.png' className='h-[150px] w-[150px] opacity-70' />
        <div className='absolute top-10 font-extrabold'>
          <img src='/Smart.png' />
        </div>
      </div>
      
    </div>
  )
}

export default Left