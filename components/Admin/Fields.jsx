import React, { useContext } from 'react'
import { AdminContext } from '../../contexts/Admin'
import { useNavigate } from 'react-router-dom'

const Fields = ({ props, isActive, index }) => {
  const { setActive } = useContext(AdminContext);
  const navigate = useNavigate();

  return (
    <div 
      className={`h-[15%] w-full ${isActive ? 'border-l-[15px]' : ''} px-5 border-[#FDA3A3] bg-${isActive ? '[#EAEAEA]' : 'white'} flex items-center cursor-pointer`}
      onClick={() => {
        setActive(index)
        navigate(`/admin/${props.params}`)
      }}
    >
      <div className='h-[60%] object-contain'>
          <img 
          className='h-[100%]'
          src={`/admin/${isActive ? props.image : props.image + '-inactive'}.png`}/>
      </div>
      <div className={`text-xl ml-4 font-extrabold ${isActive ? 'text-black' : 'text-[#989898]'}`}>
        {props.name}
      </div>
    </div>
  )
}

export default Fields