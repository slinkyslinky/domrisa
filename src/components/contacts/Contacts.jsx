import React from 'react';
import './contacts.scss';
import Vkontacte from '../../icons/Vkontacte'
import Instagram from '../../icons/instagram'
import Telegram from '../../icons/telegram'

export default function Contacts() {
   return (
      <div className='contacts'>
         <a href="https://www.instagram.com/elisa_domrisa/"><Instagram /></a>
         <a href="https://t.me/elisa_domrisa"><Telegram /></a>
         <a href="https://vk.com/elisa_domrisa"><Vkontacte /></a>
      </div>
   )
}
