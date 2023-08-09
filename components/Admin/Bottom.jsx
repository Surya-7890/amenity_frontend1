import React from 'react'
import Fields from './Fields'
import { fields } from '../../contexts/Admin'
import { AdminContext } from '../../contexts/Admin'
import { useContext } from 'react'

const Bottom = () => {
  const { active } = useContext(AdminContext);

  return (
    <div className='h-[60%] w-full bg-white border-r-2 border-gray-500 rounded-t-[20px] pt-[25px] space-y-3'>
      {
        fields.map((element, index) => {
          return (
            <Fields 
              props={element} 
              key={index} 
              isActive={index === active ? true: false} 
              index={index}
            />
          )
        })
      }
    </div>
  )
}

export default Bottom