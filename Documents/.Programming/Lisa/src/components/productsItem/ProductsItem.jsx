import React from 'react'
import './ProductsItem.scss'

export default function ProductsItem({ product }) {
   return (
      <div className='products-item'>
         <h3>{product.title}</h3>
         <p>{product.text}</p>
         <img src="" alt={product.img} />
      </div>
   )
}
