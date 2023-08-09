import React, { useContext } from 'react'
import User from '../../svg/User'
import Key from '../../svg/Key'

const Input = ({ placeholder, field }) => {

  return (
    <div className='w-[70%] h-16 bg-[#FDA3A3A1] flex rounded-[5px] overflow-hidden'>
      <div className='h-[100%] w-[15%] flex justify-center items-center'>
        {
          placeholder === 'Enter UserName' ? 
          <User height={'80%'}/>
          :
          <Key height={'60%'} />
        }
      </div>
      <input 
        type={field === 'username' ? 'text' : 'password'} 
        placeholder={placeholder} 
        id={field}
        className='w-[100%] h-[100%] text-[18px] bg-inherit placeholder:text-black pl-5 focus:outline-none focus:border-b-4 border-black' 
      />
    </div>
  )
}

export default Input