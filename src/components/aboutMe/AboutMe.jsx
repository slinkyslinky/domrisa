import React from 'react'
import './aboutMe.scss'
import aboutMeImg from "../../img/about/aboutme.webp"
import icon from '../../img/svg/insta.svg'

export default function AboutMe() {
   return (
      <div className='about-me'>
         <div className="about-me__img">
            <img src={aboutMeImg} alt="photo of me" />
         </div>

         <article>
            <h2>Обо мне</h2>
            <p className='about-me__text'>Привет, я Никуличева Лизавета. Почти всю свою жизнь я создаю. В 11 месяцев я пришивала пуговицы к дивану, в 3 года рисовала на обоях, в 10 лепила из глины смешариков, в 12 начала учится играть на домре, в 15 вышивала на одежде, в 17 открыла для себя краски по ткани, в 19 преподавала в художественной студии и заканчивала колледж по домре.
               Всегда пораллельно с обучением в училище и позднее в институте я рисовала. Рисовала на холстах, одежде, шопперах, обуви, верхней одежде. Недавно я открыла для себя полимерную глину и теперь мои творческие рамки намного шире.
               Я очень люблю дарить подарки сделанные своими руками и так появилась идея радовать не только своих близких, но и давать другим любям возможность приобрести разнообразные ващи ручной работы.</p>
            <div className="about-me__contacts">
               <img className="contact__icon" src={icon} alt='instagramm icon'></img>
               <p>Elisa_domrisa</p>
            </div>
         </article>
      </div>
   )
}
