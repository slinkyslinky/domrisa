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
import { useEffect } from 'react'
import axios from 'axios'
import { formValidationIncorrect } from '../../utils/validation'
import { telegram as constants } from '../../variables/variables'

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

   const form = useRef(null)
   let formData;

   const TOKEN = constants.TOKEN
   const CHAT_ID = constants.CHAT_ID
   const URL = constants.URL


   function sendForm(e) {
      let message = '';
      e.preventDefault()
      message += "<b>Новая заявка на связь</b> \n"
      message += "Имя:  " + form.current.elements["name"].value + "\n";
      message += secondInputType + ":  " + form.current.elements["contact"].value + "\n";
      message += `Способ связи: ${backText}`

      if (form.current.elements["name"].value.length > 1 &&
         form.current.elements["contact"].value.length > 1) {
         axios.post(URL, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: message
         })
         setTimeout(() => {
            setContact(1)
         }, 800)
      } else {
         console.log(form.current.elements);
         formValidationIncorrect(form.current)
      }



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

            <form ref={form} className="contact-form__form" id='contact-form__form'>
               <OrderInput name="name" form="contact-form__form" type='text' placeholder='Имя' autofocus={true} />
               <OrderInput name="contact" form="contact-form__form"
                  type={secondInputType}
                  placeholder={secondInputText}
                  validation={secondInputValidation}
                  minLength={minLength}

               />



            </form>
         </div>
         <OrderButton type='submit' text='Отправить' link='' form="contact-form__form" onClick={sendForm} styles={{

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
