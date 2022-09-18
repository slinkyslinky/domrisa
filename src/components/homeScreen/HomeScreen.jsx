import React, { useState } from 'react'
import title from '../../img/elisa_dorisa.png'
import OrderButton from '../buttons/OrderButton'
import Contacts from '../contacts/Contacts'
import './homeScreeen.scss'

export default function HomeScreen() {



   return (
      <div id='homeScreen' className='homeScreen screen'>
         <img className='home-screen__title' src={title} alt="" />
         <Contacts />
         <OrderButton
            link='/contactform'

            styles={{

            }} text='Заказать' />
      </div >
   )
}
