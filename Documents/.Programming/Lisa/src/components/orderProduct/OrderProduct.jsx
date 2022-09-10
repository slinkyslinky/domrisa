import React from 'react'
import './OrderProduct.scss'
import image1 from '../../img/image1.jpg'
import OrderCount from './OrderCount'
import { useState } from 'react'

export default function OrderProduct(props) {

   const [ordered, setOrdered] = useState(true)
   const [amount, setAmount] = useState(1)



   function getAmount(value) {
      setAmount(value)
   }



   if (ordered) return (
      <div className='order-product'>
         <picture className="table__item">
            <img src={image1} alt="" />
         </picture>
         <span className="table__item">{props.name}</span>
         <span className="table__item">{props.price} р.</span>
         <div className="table__item">
            <OrderCount amount={amount} setAmount={setAmount} />
         </div>
         <button className='del-button' onClick={() => setOrdered(false)} />
      </div>
   )
}
