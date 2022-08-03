import React from 'react';
import './contacts.scss';
import insta from '../../img/insta.svg';
import telegram from '../../img/telegram.svg';
import whatsapp from '../../img/whatsappl.svg';

export default function Contacts() {
   return (
      <div className='contacts'>
         <a href=""><img src={insta} alt="insta" /></a>
         <a href=""><img src={telegram} alt="telegramm" /></a>
         <a href=""><img src={whatsapp} alt="whatsapp" /></a>

      </div>
   )
}
