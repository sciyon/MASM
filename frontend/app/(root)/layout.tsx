import React from 'react'
import Navbar from '../components/Navbar'

const layout = ({ children }: Readonly<{ children: React.ReactNoe }>) => {
  return (
    <main className='font-work-sans'>
        <Navbar/>
        {children}
    </main>
  )
}

export default layout