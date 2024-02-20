import React from 'react'
import NavbarLeft from './account/NavbarLeft'
import ContainerPanel from "./account/ContainerPanel";
import './index.css';
import Navbar from './account/Navbar';

function Account() {
  return (
    <div className='max-w-[80%] h-[90vh] m-auto'>
        <Navbar/>
        <NavbarLeft/>
        <ContainerPanel/>
    </div>
  )
}

export default Account