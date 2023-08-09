import React from 'react'

const Heading = () => {
  return (
    <div className='w-[100%] h-[35%] flex justify-center text-[40px]'>
      <div className='w-[70%] h-[100%] flex flex-col justify-center'>
        <div className='h-fit w-fit relative'>
          <img src='/login.png' className='h-[90px] w-[90px] relative right-[11px] top-0' />
          <div className='font-extrabold absolute top-[60px] left-0 text-7xl'>
            Login
          </div>
        </div>
      </div>
    </div>
  )
}

export default Heading