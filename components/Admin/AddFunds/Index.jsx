import React from 'react'

const Index = () => {
  return (
    <div className='h-[300px] w-[300px] relative flex justify-center items-center bg-[#FDA3A3DE]'>
      <div className='border-t-4 border-l-4 border-[#A03030] h-[100px] w-[100px] absolute top-[-10px] left-[-10px]'></div>
      <div className='border-t-4 border-r-4 border-[#A03030] h-[100px] w-[100px] absolute top-[-10px] right-[-10px]'></div>
      <div className='border-b-4 border-l-4 border-[#A03030] h-[100px] w-[100px] absolute bottom-[-10px] left-[-10px]'></div>
      <div className='border-b-4 border-r-4 border-[#A03030] h-[100px] w-[100px] absolute bottom-[-10px] right-[-10px]'></div>
      <div className='font-extrabold text-[20px]'>ADD FUNDS</div>
    </div>
  )
}

export default Index