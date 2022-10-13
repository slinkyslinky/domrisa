import React, { useState } from 'react'
import './ContactForm.scss'
import ContactFormFirstScreen from './contactFormFirstScreen'
import ContactFormSecondScreen from './ContactFormSecondScreen'
import ContactFormThirdtScreen from './ContactFormThirdScreen'
import backStar1 from '../../img/forms/backStar1.png'
import backStar2 from '../../img/forms/backStar2.png'
import notes from '../../img/forms/notes.png'


export default function ContactForm() {

   const [contacts, setContact] = useState(0);
   if (contacts === 0) {
      return (
         <div className='contact-form'>
            <picture className='stars'>
               <img src={backStar1} alt="" />
               <img src={backStar2} alt="" />
            </picture>
            <h3>Обратная связь</h3>
            <span className='contact-form__subtitle'>Для вопросов и предложений!</span>
            <ContactFormFirstScreen setContact={setContact} />
            <picture className='notes'>
               <img src={notes} alt="" />
               
            </picture>

         </div>
      )
   } else if (contacts === 1) {
      return (
         <div className='contact-form'>
             <picture className='stars'>
               <img src={backStar1} alt="" />
               <img src={backStar2} alt="" />
            </picture>
            <h3>Обратная связь</h3>
            <span className='contact-form__subtitle'>Для вопросов и предложений!</span>
            <ContactFormThirdtScreen setContact={setContact} />
            <picture className='notes'>
               <img src={notes} alt="" />
               
            </picture>

         </div>
      )
   } else {
      return (
         <div className='contact-form'>
             <picture className='stars'>
               <img src={backStar1} alt="" />
               <img src={backStar2} alt="" />
            </picture>
            <h3>Обратная связь</h3>
            <span className='contact-form__subtitle'>Для вопросов и предложений!</span>
            <ContactFormSecondScreen contacts={contacts} setContact={setContact} />
            <picture className='notes'>
               <img src={notes} alt="" />
               
            </picture>
         </div>
      )
   }
}
