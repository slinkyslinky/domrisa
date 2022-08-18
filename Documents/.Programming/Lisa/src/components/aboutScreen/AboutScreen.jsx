import React from 'react'
import './aboutScreen.scss'
import Slider from '../slider/Slider'
import img1 from '../../img/item1.png'
import img2 from '../../img/py4u3x9Z--Y.jpg'

export default function AboutScreen() {



   const imageList = [
      { id: 1, img: img1, alt: 'Image of the product' },
      { id: 2, img: img2, alt: 'Image of the product' },
      { id: 3, img: '', alt: 'Image of the product' },
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
               <Slider itemList={imageList} />

               <p>Посмотрите больше в <a href='https://vk.com/elisa_domrisa'>Instagram</a></p>
            </div>
         </div>


      </div>

   )
}
