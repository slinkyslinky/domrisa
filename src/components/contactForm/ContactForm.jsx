import React, { useState } from 'react'
import './ContactForm.scss'
import ContactFormFirstScreen from './contactFormFirstScreen'
import ContactFormSecondScreen from './ContactFormSecondScreen'
import ContactFormThirdtScreen from './ContactFormThirdScreen'


export default function ContactForm() {

   const [contacts, setContact] = useState(0);
   if (contacts === 0) {
      return (
         <div className='contact-form'>
            <h3>Обратная связь</h3>
            <span className='contact-form__subtitle'>Для вопросов и предложений!</span>
            <ContactFormFirstScreen setContact={setContact} />


         </div>
      )
   } else if (contacts === 1) {
      return (
         <div className='contact-form'>
            <h3>Обратная связь</h3>
            <span className='contact-form__subtitle'>Для вопросов и предложений!</span>
            <ContactFormThirdtScreen setContact={setContact} />


         </div>
      )
   } else {
      return (
         <div className='contact-form'>
            <h3>Обратная связь</h3>
            <span className='contact-form__subtitle'>Для вопросов и предложений!</span>
            <ContactFormSecondScreen contacts={contacts} setContact={setContact} />
         </div>
      )
   }
}
