import React from 'react'
import ContactForm from '../contactForm/ContactForm'
import './ContactFormScreen.scss'

export default function ContactFormScreen({ ref }) {
   return (
      <div className='contact-form-screen' id='contact-form-screen'>
         <div className="container">
            <ContactForm />
         </div>
      </div>
   )
}
