import React from 'react'
import OrderProduct from '../orderProduct/OrderProduct'
import './OrderBox.scss'

export default function OrderBox() {




   return (
      <div className='order-box'>
         <div className="order-box__table">
            <span className='table-column__name'>Цена</span>
            <span className='table-column__name'>Количество</span>

         </div>
         <OrderProduct />
         <OrderProduct />
         <div className="order-box__summary">
            <span>Общая стоимость заказа</span>
            <span>1200 р.</span>
         </div>
      </div>
   )
}
