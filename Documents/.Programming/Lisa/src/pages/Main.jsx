import React from 'react'
import AboutScreen from '../components/aboutScreen/AboutScreen.jsx'
import HomeScreen from '../components/homeScreen/HomeScreen.jsx'
import ProductsScreen from '../components/productsScreen/ProductsScreen.jsx'
import { FullPage, Slide } from 'react-full-page'

export default function Main() {






  return (
    <div id='main' className='main' >
      <FullPage controls={false}>
        <Slide>
          <HomeScreen />
        </Slide>
        <Slide>
          <AboutScreen />
        </Slide>
        <Slide>
          <ProductsScreen />
        </Slide>
      </FullPage>




    </div>
  )
}
