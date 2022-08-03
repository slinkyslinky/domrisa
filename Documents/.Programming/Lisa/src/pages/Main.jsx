import React from 'react'
import { FullPage, Slide } from 'react-full-page'
import AboutScreen from '../components/aboutScreen/AboutScreen.jsx'
import ContactFormScreen from '../components/contactFormScreen/ContactFormScreen.jsx'
import DeliveryScreen from '../components/deliveryScreen/DeliveryScreen.jsx'
import Footer from '../components/footer/Footer.jsx'
import HomeScreen from '../components/homeScreen/HomeScreen.jsx'
import ProductsScreen from '../components/productsScreen/ProductsScreen.jsx'

export default function Main() {






  return (
    <div id='main' className='main' >



      {<FullPage controls={false} duration={500} >
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
          <Footer />
        </Slide>

      </FullPage>}




    </div>
  )
}
