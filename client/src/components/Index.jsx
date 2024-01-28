import React from 'react'
import Navbar from './index/Navbar'
import Banner from './index/Banner'
import Categories from './index/Categories'
import Footer from './index/Footer'
import Products from './index/Products'
import Featured from './index/Featured'

function Index() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Categories/>
      <Products/>
      <Featured/>
      <Footer/>
    </>
  )
}

export default Index
