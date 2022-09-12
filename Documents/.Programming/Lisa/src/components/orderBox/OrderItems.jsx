import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import OrderProduct from '../orderProduct/OrderProduct'
import FullPrice from './FullPrice'
import './OrderItems.scss'


export default function OrderItems() {


   const orders = []


   if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
         if (localStorage.key(i).substring(0, 5) === "order") {

            orders.push(JSON.parse(localStorage.getItem(localStorage.key(i))))

         }
      }

   }




   let ordersFullPrice = 0;
   orders.forEach((item) => {

      ordersFullPrice += parseInt(item.price)

   })

   const [fullPrice, setFullPrice] = useState(ordersFullPrice)

   function getFullPrice(value) {
      setFullPrice(value)
   }



   if (orders.length > 0) {

      return (
         <div className='order-items'>
            <div className="order-box__table">
               <span className='table-column__name'>Товар</span>
               <span className='table-column__name'>Цена</span>
               <span className='table-column__name'>Количество</span>

            </div>

            {orders.map(item =>
               <OrderProduct
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={parseInt(item.price)}
                  fullPrice={fullPrice}
                  setFullPrice={setFullPrice}

               />
            )}
            <FullPrice fullPrice={fullPrice} setFullPrice={setFullPrice} />

         </div>
      )
   } else return (
      <div id="no-ordered-items">
         <span>У вас нет выбранных товаров</span><br />
         <Link to="/shop">Вернуться в магазин</Link>
      </div>

   )
}
