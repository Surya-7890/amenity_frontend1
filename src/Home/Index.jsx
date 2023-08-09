import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Card from '../../components/Home/Card'
import { useNavigate } from 'react-router-dom'

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/login')
  }, [])

  return (
    <div className='h-screen w-screen'>
      <Navbar/>
      <Card/>
    </div>
  )
}

export default Index