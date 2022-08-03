import React from 'react'
import ProductsItem from '../productsItem/ProductsItem'
import './productsScreen.scss'
import { colors } from '../../variables/variables.js'

export default function ProductsScreen() {

   const productsList = [
      { id: 1, title: "title", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit", img: "img", color: colors.green },
      { id: 2, title: "title 2", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit", img: "img", color: colors.violet },
      { id: 3, title: "title 3", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit", img: "img", color: colors.yellow },

   ]



   return (

      <div id='productsScreen' className='products-screen screen'>
         <div className="container ">
            <h2>Отличные подарки</h2>
            <div className="products-container">
               {productsList.map(product =>

                  <ProductsItem key={product.id} product={product} />
               )}
            </div>
            <article className='products-article'>
               Любое из этих изделий станет замечательным подарком для близких или для себя. для тех кто дорожит деталями и уникальнотью
            </article>
            <span>Посмотрите <a href="">отзывы</a></span>


         </div>


      </div>

   )
}
