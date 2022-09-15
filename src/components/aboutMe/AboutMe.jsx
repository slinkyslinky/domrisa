import React from 'react'
import './aboutMe.scss'
import aboutMeImg from "../../img/aboutme.webp"
import icon from '../../img/insta.svg'

export default function AboutMe() {
   return (
      <div className='about-me'>
         <div className="about-me__img">
            <img src={aboutMeImg} alt="photo of me" />
         </div>

         <article>
            <h2>Обо мне</h2>
            <p className='about-me__text'>Я Никуличева Лизавета Все изделия в этом магазине ручной работы, созданы
               с индивидуальным подходом и любовью. Все изделия в этом магазине ручной работы, созданы
               с индивидуальным подходом и любовью. </p>
            <div className="about-me__contacts">
               <img className="contact__icon" src={icon} alt='instagramm icon'></img>
               <p>Elisa_domrisa</p>
            </div>
         </article>
      </div>
   )
}
