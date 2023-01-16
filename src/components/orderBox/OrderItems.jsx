import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import OrderProduct from '../orderProduct/OrderProduct'
import FullPrice from './FullPrice'
import './OrderItems.scss'


export default function OrderItems() {

   let allPrice = 0;
   let amount = '';

   const [fullPrice, setFullPrice] = useState(allPrice)
   const orders = [];


   if (sessionStorage.length > 0) {
      for (let i = 0; i < sessionStorage.length; i++) {
         if (sessionStorage.key(i).substring(0, 5) === "order") {
            let item = JSON.parse(sessionStorage.getItem(sessionStorage.key(i)))
            orders.push(item)
            allPrice += item.price * item.amount
         }
      }
   }

   if (window.innerWidth > 700) { amount = 'Количество' } else {
      amount = 'Кол.'
   }

   if (orders.length > 0) {

      return (
         <div className='order-items'>
            <div className="order-box__table">
               <span className='table-column__name'></span>
               <span className='table-column__name'>Товар</span>
               <span className='table-column__name'>Цена</span>
               <span className='table-column__name'>{amount}</span>
            </div>
            {orders.map(item =>
               <OrderProduct
                  fullPrice={fullPrice}
                  setFullPrice={setFullPrice}
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={parseInt(item.price)}
               />
            )}
            <FullPrice fullPrice={fullPrice} />
         </div>
      )
   } else return (
      <div id="no-ordered-items">
         <span>У вас нет выбранных товаров</span><br />
         <Link to="/shop">Вернуться в магазин</Link>
      </div>
   )
}
