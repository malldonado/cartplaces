import React from 'react'
import Navbar from './account/Navbar'
import Settings from './account/Settings'
import Informations from './account/Informations'
import './index.css';

function Account() {
  return (
    <>
      <Navbar/>
      <div className='flex w-full h-mainscreen max-w-[1200px] m-auto'>
        <Settings/>
        <Informations/>
      </div>
    </>
  )
}

export default Account
