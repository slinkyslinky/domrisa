import React, { useEffect, useRef } from 'react'
import './ProductsItem.scss'
import bant from '../../img/Bant2.png'

export default function ProductsItem({ product, randomBoxNumber, randomDelayValue, id }) {







   return (
      <div className='products-item' id={'product-' + id} >
         <img className='products-item__bant' src={bant} alt="" />
         <div className="products-item__cover" style={{ backgroundColor: product.color }}>
            <article>
               <h3>{product.title}</h3>
               <p>{product.text}</p>
            </article>

            <img className='products-item__picture' src="" alt={product.img} />

         </div>

      </div>
   )
}
