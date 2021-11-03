import React from "react"
import { Slider } from '../components/Slider/Slider'
import { Categories } from '../components/Categories/Categories'
import { Products } from '../components/Products/Products'

export const Home = () => {
  return (
    <>
      <Slider />
      <Categories />
      <Products />
    </>
  )
}
