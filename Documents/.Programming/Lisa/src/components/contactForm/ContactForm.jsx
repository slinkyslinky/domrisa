import React, { useState } from 'react'
import './ContactForm.scss'
import ContactFormFirstScreen from './contactFormFirstScreen'
import ContactFormSecondScreen from './ContactFormSecondScreen'



export default function ContactForm() {

   const [contacts, setContact] = useState(0);
   if (contacts === 0) {
      return (
         <div className='contact-form'>
            <h3>Обратная связь</h3>
            <ContactFormFirstScreen setContact={setContact} />


         </div>
      )
   } else {
      return (
         <div className='contact-form'>
            <h3>Обратная связь</h3>
            <ContactFormSecondScreen contacts={contacts} setContact={setContact} />
         </div>
      )
   }
}
