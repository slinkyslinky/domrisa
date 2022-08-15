import React, { useEffect, useState, } from 'react'
import ProductsItem from '../productsItem/ProductsItem'
import './productsScreen.scss'
import { colors } from '../../variables/variables.js'
import firstImg from '../../img/py4u3x9Z--Y.jpg'
import secondImg from '../../img/py4u3x9Z--Y.jpg'
import thirdImg from '../../img/phone.svg'

export default function ProductsScreen() {

   const [openedBox, setopenedBox] = useState(0);


   const productsList = [
      { id: 1, title: "title", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit", img: firstImg, color: colors.green, },
      { id: 2, title: "title 2", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit", img: secondImg, color: colors.violet, },
      { id: 3, title: "title 3", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit", img: thirdImg, color: colors.yellow, },

   ]


   // setRandomAnimation()





   return (

      <div id='productsScreen' className='products-screen screen' >
         <div className="container ">
            <h2>Отличные подарки</h2>
            <div className="products-container" id='productsContainer'>
               {productsList.map(product =>

                  <ProductsItem
                     key={product.id}
                     product={product}

                     setopenedBox={setopenedBox}
                     openedBox={openedBox}
                  />
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
