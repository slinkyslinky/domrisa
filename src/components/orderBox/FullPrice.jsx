import React from 'react'

export default function FullPrice({ fullPrice }) {

   return (
      <div className="order-box__summary">
         <span>Общая стоимость заказа: </span>
         <span id='fullPrice'>{fullPrice} р.</span>
      </div>
   )
}
