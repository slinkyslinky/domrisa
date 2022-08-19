import React from 'react'
import './OrderProduct.scss'
import image1 from '../../img/image1.jpg'

export default function OrderProduct() {
   return (
      <div className='order-product'>
         <picture className="table__item">
            <img src={image1} alt="" />
         </picture>
         <span className="table__item">Шоппер "Музыка"</span>
         <span className="table__item">1200 р.</span>
         <div className="table__item">
            <span>1</span>
         </div>
      </div>
   )
}
