import React from 'react'

const Top = () => {
  return (
    <div className='h-[40%] w-full flex flex-col items-center py-3'>
      <div className='h-[10%]w-full flex justify-center'>
        <img src='/admin/smart.png' className='w-[80%]' />
      </div>
      <div className='h-[80%] w-full flex justify-center items-center'>
        <div className='h-[150px] w-[150px] rounded-full bg-white'>
        </div>
      </div>
      <div className='text-white font-extrabold text-[25px]'>Name</div>
    </div>
  )
}

export default Top