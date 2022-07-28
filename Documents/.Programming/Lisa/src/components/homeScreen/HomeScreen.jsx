import React from 'react'
import title from '../../img/elisa_dorisa.png'
import OrderButton from '../buttons/OrderButton'
import './homeScreeen.scss'

export default function HomeScreen() {



   return (
      <div id='homeScreen' className='homeScreen screen'>
         <img className='home-screen__title' src={title} alt="" />
         <OrderButton styles={{
            margin: "0 auto",
            top: "80%"
         }} />
      </div>
   )
}
