import React from 'react'
import AboutScreen from '../components/aboutScreen/AboutScreen.jsx'
import ContactFormScreen from '../components/contactFormScreen/ContactFormScreen.jsx'
import DeliveryScreen from '../components/deliveryScreen/DeliveryScreen.jsx'
import HomeScreen from '../components/homeScreen/HomeScreen.jsx'
import ProductsScreen from '../components/productsScreen/ProductsScreen.jsx'

export default function Main() {


  let randomBoxNumber = 1;
  let randomDelayValue = 1000;
  let scrollMode = "full-page";



  (function setRandomAnimation() {

    randomDelayValue = Math.floor(Math.random() * (6000 - 1500) + 1500);
    setTimeout(() => {
      randomBoxNumber = Math.floor(Math.random() * 3);



      document?.getElementById('productsContainer')?.children[randomBoxNumber]?.classList.add('products-item--active')
      setTimeout(() => {
        document?.getElementById('productsContainer')?.children[randomBoxNumber]?.classList.remove('products-item--active')
        setRandomAnimation()
      }, 800)



    }, randomDelayValue)
  }())



  return (
    <div id='main' className='main'  >




      <HomeScreen />

      <AboutScreen />

      <ProductsScreen />

      <DeliveryScreen />

      <ContactFormScreen />





    </div>
  )
}
