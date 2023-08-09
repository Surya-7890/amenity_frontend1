import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../contexts/Admin'
import { fields } from '../../contexts/Admin';
import { useParams } from 'react-router-dom';
import AddFunds from './AddFunds/Index';
import AddItems from './AddItems/Index';
import Refund from './Refund/Index';
import { useNavigate } from 'react-router-dom';
import NotFound from '../../src/NotFound';

const Right = () => {
  const { active } = useContext(AdminContext);
  const { name } = useParams();
  
  const navigate = useNavigate();

  useEffect(() => {
    if (name === 'logout') { 
      logout()
    };
  })
  
  const logout = () => {
    console.log('logout');
    navigate('/login')
  }


  return (
    <div className='w-[80%] relative bg-[#EAEAEA] overflow-hidden flex justify-center items-center'>
      {
        name === 'addfund' ? <AddFunds /> : 
        name === 'additem' ? <AddItems /> : 
        name === 'refund' ? <Refund /> : <NotFound />
      }

      <div className='absolute bottom-0 right-0'>
        <img src='/admin/others/food.png' />
      </div>
    </div>
  )
}

export default Right