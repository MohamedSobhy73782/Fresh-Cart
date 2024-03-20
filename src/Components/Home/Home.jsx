import React from 'react'
import MainSlider from '../MainSlider/MainSlider'
import Categories from '../Categories/Categories'
import { Outlet } from 'react-router-dom'
import Products from '../Products/Products'



export default function Home() {
  return (
    <>


      < MainSlider />
      <Categories />
      <Products />

      <Outlet />
    </>
  )
}
