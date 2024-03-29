import React from 'react';
import Email from '../../icons/email';
import Phone from '../../icons/phone';
import Telegram from '../../icons/telegram';
import Whatsapp from '../../icons/whatsapp';
import './contactFormFirstScreen.scss';

export default function contactFormFirstScreen({ setContact }) {

   return (
      <div className="contact-form__first-screen">
         <div className="contact-form__inner">
            <p>Выберете удобный вариант для связь с Вами</p>
            <div className="contact-form__contacts">
               <button className="contact-form__contact" onClick={() => setContact('phone')}>
                  <Phone />
                  <span>Звонок</span>
               </button>
               <button className="contact-form__contact" onClick={() => setContact('telegram')}>
                  <Telegram />
                  <span>Телеграмм</span>
               </button>
               <button className="contact-form__contact" onClick={() => setContact('Vkontacte')}>
                  <Whatsapp />
                  <span>Whats App</span>
               </button>
               <button className="contact-form__contact" onClick={() => setContact('email')}>
                  <Email />
                  <span>E-mail</span>
               </button>
            </div>
         </div>
      </div >
   )
}
