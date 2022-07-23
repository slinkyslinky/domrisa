import React from 'react'
import ProductsItem from '../productsItem/ProductsItem'
import './productsScreen.scss'


export default function ProductsScreen() {

   const productsList = [
      { id: 1, title: "title", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit", img: "img" },
      { id: 2, title: "title 2", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit", img: "img" },
      { id: 3, title: "title 3", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit", img: "img" },

   ]



   return (

      <div id='productsScreen' className='products-screen screen'>
         <div className="container">

            {productsList.map(product =>

               <ProductsItem key={product.id} product={product} />
            )}



         </div>


      </div>

   )
}
