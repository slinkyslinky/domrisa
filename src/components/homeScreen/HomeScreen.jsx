import React, { useState } from 'react'
import title from '../../img/title.png'
import Contacts from '../contacts/Contacts'
import './homeScreeen.scss'

export default function HomeScreen() {

   return (
      <div id='homeScreen' className='homeScreen screen'>
         <img className='home-screen__title' src={title} alt="" />
         <Contacts />
         <a className='order-button' href="#contact-form-screen" >Заказать</a>
      </div >
   )
}
