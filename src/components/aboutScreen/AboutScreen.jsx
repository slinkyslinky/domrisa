import React from 'react'
import './aboutScreen.scss'


import SliderWrapper from '../slider/SliderWrapper'

export default function AboutScreen() {



   const imageList = [
      { id: 1, img: "about/about1.png", alt: 'Image of the product' },
      { id: 2, img: "about/about2.png", alt: 'Image of the product' },
      { id: 3, img: "about/about3.png", alt: 'Image of the product' },
      { id: 4, img: "about/about5.png", alt: 'Image of the product' },
      { id: 5, img: "about/about6.png", alt: 'Image of the product' },
      { id: 6, img: "about/about7.png", alt: 'Image of the product' },
  
   ]



   return (
      <div id='aboutScreen' className='about-screen screen'>

         <div className="container">
            <article className='about-screen__item'>
               <h2>Ручная работа</h2>
               <p>В этом магазине все товары ручной работы, созданы с индивидуальным подходом и любовью. <br /><br />

                  Можно сделать индивидуальный заказ или приобрести уже готовые изделия в магазине.</p>
            </article>
            <div className='about-screen__item'>
               <SliderWrapper imageList={imageList} hasPreview={false} />

               <span>Посмотрите больше в <a href='https://vk.com/elisa_domrisa'>Instagram</a></span>
            </div>
         </div>


      </div>

   )
}
