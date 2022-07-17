import React from 'react'
import LogoIndex from '../../images/logo/logo_index.png'
import { MdOutlineSearch } from "react-icons/md";
import { BsArrowDown } from "react-icons/bs";
import { BsBoxArrowInRight } from "react-icons/bs";
import { RiShoppingBag3Line } from "react-icons/ri";

function index() {
  return (
      <div>
        <nav className="bg-gradient-to-r from-[#2746d5] to-[#205acc]">
          <div className="h-16 flex mx-auto px-2 sm:px-6 lg:px-8 max-w-[1400px]">
            <div></div>
            <img className="h-6 my-auto px-10" src={LogoIndex}/>
            <ul className="flex my-auto">
              <li className="font-medium my-auto text-white px-2">Categorias</li>
              <li className="font-medium my-auto text-white px-2">Ofertas</li>
              <li className="font-medium my-auto text-white px-2">Histórico</li>
              <li className="font-medium my-auto text-white px-2">Vender</li>
              <li className="px-8 flex relative">
                <input className="h-12 w-[500px] rounded-md px-2 placeholder:text-[#717171] text-[#2746d5] font-sans placeholder:font-thin font-semibold" placeholder="Busque por um item ou loja"></input>
                <MdOutlineSearch className="h-8	my-auto text-3xl text-[#2746d5] absolute bottom-0 top-0 right-10"/>
              </li>
              <li className="h-auto my-auto px-4">
                <BsArrowDown className="text-2xl text-white"/>
              </li>
              <li className="h-auto my-auto px-4">
                <BsBoxArrowInRight className="text-3xl text-white"/>
              </li>
              <li className="flex h-auto my-auto px-4">
                <RiShoppingBag3Line className="text-3xl text-white"/>
                <div className="text-center text-white px-1">
                  <label className="text-[12px] leading-[1]">R$ 0,00</label>
                  <p className="text-[9px] leading-[1]">0 items</p>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>

  )
}

export default index