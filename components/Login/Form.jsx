import React from 'react'
import Input from './Input'
import { useLogin } from '../../hooks/useLogin';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Form = () => {
  const [data1, setData1] = React.useState('')
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const a = e.target.querySelectorAll('input');
    console.log(a)

    const data1 = {
      username: a[0].value,
      password: a[1].value
    }


    const res = await axios.post('https://long-cyan-puffer-tux.cyclic.app/admin/login', data1);
    const data = await res.data;

    if (data === 'SuperAdmin') {
      navigate("/admin/addfund")
    }

  }

  return (
    <form className='h-[65%] w-[100%] font-mono' onSubmit={handleSubmit}>
      <div className='h-[75%] w-[100%] flex flex-col justify-evenly items-center text-black'>
        <Input placeholder={'Enter UserName'} field='username' />
        <Input placeholder={'Enter Password'} field='password' />
      </div>
      <button type='submit' className='h-[25%] w-[100%] flex justify-center'>
          <div className='w-[75%] h-full flex flex-row-reverse items-center pr-10'>
            <div className='bg-[#A03030] h-fit w-fit px-10 py-2 text-white rounded-full cursor-pointer border-black border-4 text-[20px]'>Sign In</div>
          </div>
      </button>
    </form>
  )
}

export default Form