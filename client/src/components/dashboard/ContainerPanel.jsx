import React from 'react'
import NavbarTop from './NavbarTop'
import PanelTable from './PanelTable'
import PanelOrder from './PanelOrder'

function ContainerPanel() {
  return (
    <div className='w-[80%]'>
        <NavbarTop/>
        <div className='flex'>
          <PanelTable/>
          <PanelOrder/>
        </div>
    </div>
  )
}

export default ContainerPanel