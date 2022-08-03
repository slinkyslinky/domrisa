import React from 'react'
import './aboutScreen.scss'
import AboutProducts from '../aboutProducts/AboutProducts.jsx'


export default function AboutScreen() {





   return (
      <div id='aboutScreen' className='about-screen screen'>

         <div className="container">
            <article className='about-screen__item'>
               <h2>Ручная работа</h2>
               <p>В этом магазине все товары ручной работы, созданы с индивидуальным подходом и любовью. <br /><br />

                  Можно сделать индивидуальный заказ или приобрести уже готовые изделия в магазине.</p>
            </article>
            <div className='about-screen__item'>
               <AboutProducts />

               <p>Посмотрите больше в <a href=''>Instagram</a></p>
            </div>
         </div>


      </div>

   )
}
