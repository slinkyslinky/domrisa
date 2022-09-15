import React, { useState } from 'react'
import Arrow from '../arrow/Arrow'
import './OrderCount.scss'

export default function OrderCount({ amount, setAmount, setAmountChange }) {

   let displayLeft, displayRight, marginLeft, marginRight;




   if (amount === 1) {
      displayLeft = 'none'
      marginLeft = "auto"
   } else {
      displayLeft = 'block'
      marginLeft = "0"
   }

   if (amount === 10) {
      displayRight = 'none'
      marginRight = "auto"
   } else {
      displayRight = 'block';
      marginRight = "0"
   }



   return (
      <div className='order-count'>
         <Arrow arrowType='arrow--left' display={displayLeft} count={amount} onClick={setAmount} setAmountChange={setAmountChange} />
         <span className="order-count__value" style={{ marginLeft: marginLeft, marginRight: marginRight }}>{amount}</span>
         <Arrow arrowType='arrow--right' display={displayRight} count={amount} onClick={setAmount} setAmountChange={setAmountChange} />
      </div>
   )
}
