import axios from 'axios'
import React, { useRef } from 'react'
import Email from '../../icons/email'
import Phone from '../../icons/phone'
import Telegram from '../../icons/telegram'
import Whatsapp from '../../icons/whatsapp'
import { formValidationIncorrect, phoneValidation } from '../../utils/validation'
import { telegram as constants } from '../../variables/variables'
import '../arrow/arrow.scss'
import OrderButton from '../buttons/OrderButton'
import OrderInput from '../input/OrderInput'
import './contactFormSecondScreen.scss'

export default function ContactFormSecondScreen({ contacts, setContact }) {

   const form = useRef(null)
   const TOKEN = constants.TOKEN
   const CHAT_ID = constants.CHAT_ID
   const URL = constants.URL
   // const secondInputRef = useRef();

   let secondInputType;
   let secondInputValidation;
   let secondInputText;
   let backButton;
   let backText;
   let minLength;
   let formData;



   switch (contacts) {
      case 'phone': backButton = <Phone />; backText = 'Звонок'; break;
      case 'telegram': backButton = <Telegram />; backText = 'Телеграм'; break;
      case 'email': backButton = <Email />; backText = 'E-mail'; break;
      case 'Vkontacte': backButton = <Whatsapp />; backText = 'Whats App'; break;
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
      minLength = 18; //
   }

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
               <OrderButton type='submit' text='Отправить' link='' form="contact-form__form" onClick={sendForm} />
            </form>
         </div>

      </div>
   )
}
