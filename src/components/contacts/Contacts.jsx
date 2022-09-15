import React from 'react';
import './contacts.scss';
import Whatsapp from '../../icons/whatsapp'
import Instagram from '../../icons/instagram'
import Telegram from '../../icons/telegram'

export default function Contacts() {
   return (
      <div className='contacts'>
         <a href="https://vk.com/elisa_domrisa"><Instagram />                  </a>
         <a href=""><Telegram />                        </a>
         <a href=""><Whatsapp />                 </a>

      </div>
   )
}
