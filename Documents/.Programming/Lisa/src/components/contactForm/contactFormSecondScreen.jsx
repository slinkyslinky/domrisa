import React, { useState, useRef } from 'react'
import './contactFormSecondScreen.scss'
import OrderButton from '../buttons/OrderButton'
import Telegram from '../../icons/telegram'
import Phone from '../../icons/phone'
import Whatsapp from '../../icons/whatsapp'
import Email from '../../icons/email'
import '../arrow/arrow.scss'
import OrderInput from '../input/OrderInput'
import { phoneValidation, } from '../../utils/validation'


export default function ContactFormSecondScreen({ contacts, setContact }) {
   let secondInputType;
   let secondInputValidation;
   let secondInputText;
   let backButton;
   let backText;
   let minLength;
   // const secondInputRef = useRef();

   switch (contacts) {
      case 'phone': backButton = <Phone />; backText = 'Звонок'; break;
      case 'telegram': backButton = <Telegram />; backText = 'Телеграм'; break;
      case 'email': backButton = <Email />; backText = 'E-mail'; break;
      case 'whatsapp': backButton = <Whatsapp />; backText = 'Whats App'; break;
      default: backButton = <Phone />;

   }

   if (contacts === 'email') {
      secondInputType = 'email';
      secondInputText = 'E-mail';
      secondInputValidation = () => { };
      minLength = 0;
   } else {
      secondInputType = 'tel';
      secondInputText = 'Телефон';
      secondInputValidation = phoneValidation;
      minLength = 18; // Почему то не раотает
   }





   return (
      <div className="contact-form__second-screen">
         <button className="contact-form__contact contact-back" onClick={() => setContact(0)}>
            <div className="arrow--back"></div>
            {backButton}
            <span>{backText}</span>
         </button>
         <div className="contact-form__inner">
            <p>Заполните Ваши данные</p>

            <form className="contact-form__form">
               <OrderInput type='text' placeholder='Имя' autofocus={true} />
               <OrderInput
                  type={secondInputType}
                  placeholder={secondInputText}
                  validation={secondInputValidation}
                  minLength={minLength}

               />



            </form>
         </div>
         <OrderButton text='Отправить' styles={{
            position: "relative",
            top: "40%",
            left: "100%",
            transform: "translateX(-100%) translateY(-100%)",
            height: 70,
            width: 298,
         }} />
      </div>
   )
}
