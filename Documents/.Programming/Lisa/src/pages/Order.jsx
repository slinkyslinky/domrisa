import React from 'react'
import OrderBox from '../components/orderBox/OrderBox'

export default function Order() {
   return (
      <div id='order'>
         <div className="container">
            <h2>Ваш заказ</h2>
            <OrderBox />
         </div>
      </div>
   )
}
