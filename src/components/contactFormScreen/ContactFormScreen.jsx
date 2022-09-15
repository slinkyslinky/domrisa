import React from 'react'
import ContactForm from '../contactForm/ContactForm'
import Footer from '../footer/Footer'
import './ContactFormScreen.scss'

export default function ContactFormScreen() {
   return (
      <div className='contact-form-screen' id='contact-form-screen'>
         <div className="container">
            <ContactForm />
         </div>
         <Footer />
      </div>
   )
}
