import React from 'react'
import './OrderProduct.scss'
import image1 from '../../img/image1.jpg'
import OrderCount from './OrderCount'
import { useState } from 'react'
import { useEffect } from 'react'

export default function OrderProduct(props) {

   const [ordered, setOrdered] = useState(true)
   const [amount, setAmount] = useState(1)
   const [amountChange, setAmountChange] = useState(0)



   useEffect(() => {

      props.setFullPrice(props.fullPrice + amountChange * props.price)
   }, [amount])

   function delFromStorage() {
      localStorage.removeItem(`order-${props.id}`)
   }


   if (ordered) return (
      <div className='order-product'>
         <picture className="table__item">
            <img src={image1} alt="" />
         </picture>
         <span className="table__item">{props.name}</span>
         <span className="table__item">{props.price} р.</span>
         <div className="table__item">
            <OrderCount setAmountChange={setAmountChange} amount={amount} setAmount={setAmount} />
         </div>
         <button className='del-button' onClick={() => { setOrdered(false); props.setFullPrice(props.fullPrice - amount * props.price); delFromStorage() }} />
      </div>
   )
}
