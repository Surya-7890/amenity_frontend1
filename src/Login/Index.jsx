import React from 'react'
import Left from '../../components/Login/Left'
import Right from '../../components/Login/Right'
import { LoginProvider } from '../../contexts/Login'

const Index = () => {
  return (
    <LoginProvider>
    <div className='h-screen w-screen flex'>
      <Left/>
      <Right/>
    </div>
    </LoginProvider>
  )
}

export default Index