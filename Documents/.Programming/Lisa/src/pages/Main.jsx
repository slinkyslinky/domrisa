import React from 'react'
import AboutScreen from '../components/aboutScreen/AboutScreen.jsx'
import HomeScreen from '../components/homeScreen/HomeScreen.jsx'
import ProductsScreen from '../components/productsScreen/ProductsScreen.jsx'
import { FullPage, Slide } from 'react-full-page'
import DeliveryScreen from '../components/deliveryScreen/DeliveryScreen.jsx'
import ContactFormScreen from '../components/contactFormScreen/ContactFormScreen.jsx'

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
        <Slide>
          <DeliveryScreen />
        </Slide>
        <Slide>
          <ContactFormScreen />
        </Slide>

      </FullPage>




    </div>
  )
}
