import React, { useEffect, useState, } from 'react'
import ProductsItem from '../productsItem/ProductsItem'
import './productsScreen.scss'
import { colors } from '../../variables/variables.js'

export default function ProductsScreen() {



   const productsList = [
      { id: 1, title: "title", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit", img: "img", color: colors.green, },
      { id: 2, title: "title 2", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit", img: "img", color: colors.violet, },
      { id: 3, title: "title 3", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit", img: "img", color: colors.yellow, },

   ]

   let randomBoxNumber = 1;
   let randomDelayValue = 1000;



   (function setRandomAnimation() {

      randomDelayValue = Math.floor(Math.random() * (6000 - 1500) + 1500);
      setTimeout(() => {
         randomBoxNumber = Math.floor(Math.random() * 3 + 1);


         document.getElementById('product-' + randomBoxNumber).classList.add('products-item--active')
         setTimeout(() => {
            document.getElementById('product-' + randomBoxNumber).classList.remove('products-item--active')
            setRandomAnimation()
         }, 810)



      }, randomDelayValue)
   }())

   // setRandomAnimation()





   return (

      <div id='productsScreen' className='products-screen screen' >
         <div className="container ">
            <h2>Отличные подарки</h2>
            <div className="products-container">
               {productsList.map(product =>

                  <ProductsItem key={product.id} id={product.id} product={product} randomBoxNumber={randomBoxNumber} randomDelayValue={randomDelayValue} />
               )}
            </div>
            <article className='products-article'>
               Любое из этих изделий станет замечательным подарком для близких или для себя. для тех кто дорожит деталями и уникальнотью
            </article>
            <span>Посмотрите <a h="">отзывы</a></span>


         </div>


      </div>

   )
}
