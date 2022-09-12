import React from 'react'
import { FullPage, Slide } from 'react-full-page'
import AboutScreen from '../components/aboutScreen/AboutScreen.jsx'
import ContactFormScreen from '../components/contactFormScreen/ContactFormScreen.jsx'
import DeliveryScreen from '../components/deliveryScreen/DeliveryScreen.jsx'
import Footer from '../components/footer/Footer.jsx'
import HomeScreen from '../components/homeScreen/HomeScreen.jsx'
import ProductsScreen from '../components/productsScreen/ProductsScreen.jsx'

export default function Main() {


  let randomBoxNumber = 1;
  let randomDelayValue = 1000;



  (function setRandomAnimation() {

    randomDelayValue = Math.floor(Math.random() * (6000 - 1500) + 1500);
    setTimeout(() => {
      randomBoxNumber = Math.floor(Math.random() * 3);



      document.getElementById('productsContainer').children[randomBoxNumber].classList.add('products-item--active')
      setTimeout(() => {
        document.getElementById('productsContainer').children[randomBoxNumber].classList.remove('products-item--active')
        setRandomAnimation()
      }, 800)



    }, randomDelayValue)
  }())




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

        </Slide>

      </FullPage>}




    </div>
  )
}
