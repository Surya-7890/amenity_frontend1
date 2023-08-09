import React from 'react'
import Left from '../../components/Admin/Left'
import { AdminProvider } from '../../contexts/Admin'
import Right from '../../components/Admin/Right'

const Index = () => {
  return (
    <AdminProvider>
      <div className='h-screen w-screen flex bg-[#EAEAEA]'>
        <Left/>
        <Right/>
      </div>
    </AdminProvider>
  )
}

export default Index