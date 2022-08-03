import React from 'react';
import './contactFormFirstScreen.scss';
import Telegram from '../../icons/telegram';
import WhatsApp from '../../icons/whatsapp';
import Email from '../../icons/email';
import Phone from '../../icons/phone';

export default function contactFormFirstScreen({ setContact }) {



   return (
      <div className="contact-form__first-screen">
         <p className='contact-form__subtitle'>Если у Вас есть вопросы или предлежения по сотрудничеству, заполните форму и я свяжусь с Вами.</p>
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
               <button className="contact-form__contact" onClick={() => setContact('whatsapp')}>
                  <WhatsApp />

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
