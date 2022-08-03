import React from 'react'
import './contactFormSecondScreen.scss'
import OrderButton from '../buttons/OrderButton'
import Telegram from '../../icons/telegram'
import '../arrow/arrow.scss'
import OrderInput from '../input/OrderInput'

export default function contactFormSecondScreen({ contacts, setContact }) {
   let secondInputType;
   let secondInputText;
   if (contacts === 'email') {
      secondInputType = 'email';
      secondInputText = 'E-mail';
   } else {
      secondInputType = 'phone';
      secondInputText = 'Телефон';
   }

   return (
      <div className="contact-form__second-screen">
         <button className="contact-form__contact contact-back" onClick={() => setContact(0)}>
            <div className="arrow--back"></div>
            <Telegram />
            <span>Звонок</span>
         </button>
         <div className="contact-form__inner">
            <p>Заполните Ваши данные</p>

            <form className="contact-form__form">
               <OrderInput type='text' placeholder='Имя' />
               <OrderInput type={secondInputType} placeholder={secondInputText} />

               <OrderButton />

            </form>
         </div>

      </div>
   )
}
