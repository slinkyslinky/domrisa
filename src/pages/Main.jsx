import React, { useState } from 'react'
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
  let scrollMode = "full-page";

  if (navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
    scrollMode = "normal";
  };


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

  const [height, setHeight] = useState(window.innerHeight)
  const [heightOut, setHeightOut] = useState(window.outerHeight)

  window.onresize = () => {
    setHeight(window.innerHeight)
    setHeightOut(window.outerHeight)
  }


  return (
    <div id='main' className='main' style={{ minHeight: height, marginTop: heightOut - height }} >



      {/* {<FullPage controls={false} duration={500} scrollMode={scrollMode}>
        <Slide> */}
      <HomeScreen />
      {/* </Slide> */}
      {/* <Slide> */}
      <AboutScreen />
      {/* </Slide> */}
      {/* <Slide> */}
      <ProductsScreen />
      {/* </Slide> */}
      {/* <Slide> */}
      <DeliveryScreen />
      {/* </Slide> */}
      {/* <Slide> */}
      <ContactFormScreen />

      {/* </Slide> */}

      {/* </FullPage>} */}




    </div>
  )
}
