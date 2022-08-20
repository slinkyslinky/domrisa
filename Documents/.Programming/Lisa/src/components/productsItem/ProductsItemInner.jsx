import React from 'react'
import './ProductsItemInner.scss'

export default function ProductsItemInner({ product, hideProduct }) {

   return (
      <div className={"products-item__inner "} onClick={hideProduct}>
         <div className="products-item__back" style={{ backgroundColor: product.color }} >
            <img className='products-item__picture' src={product.img} alt='img of the prod' />
         </div>

         <article  >

            <h5>{product.title}</h5>
            <p>{product.text}</p>

         </article>
      </div>

   )
}
