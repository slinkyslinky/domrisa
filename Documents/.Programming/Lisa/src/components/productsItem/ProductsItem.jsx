import React from 'react'
import './ProductsItem.scss'


export default function ProductsItem({ product }) {
   return (
      <div className='products-item' style={{ backgroundColor: product.color }}>
         <article>
            <h3>{product.title}</h3>
            <p>{product.text}</p>
         </article>

         <img src="" alt={product.img} />
      </div>
   )
}
