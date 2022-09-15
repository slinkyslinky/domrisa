import React from 'react'
import './ContactFormThirdScreen.scss'

export default function ContactFormThirdScreen({ setContact }) {
   return (
      <div id='contact-form__third-screen'>

         <span>Заявка успешно отправлена!</span><br />
         <span> В ближайшее время я свяжусь с вами :)</span><br />
         <span onClick={() => setContact(0)}>Назад</span>
      </div>
   )
}
