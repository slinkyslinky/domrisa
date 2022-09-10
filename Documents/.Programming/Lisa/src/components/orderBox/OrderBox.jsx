import React from 'react'
import OrderInput from '../input/OrderInput'
import OrderProduct from '../orderProduct/OrderProduct'
import './OrderBox.scss'
import OrderButton from '../buttons/OrderButton'
import { useState } from 'react'

export default function OrderBox() {

   const [fullPrice, setFullPrice] = useState(0)

   const orders = [
      { id: 1, name: 'Shopper', price: 1200 },
      { id: 2, name: 'Shopper', price: 1200 },
   ]

   function getFullPrice(value) {
      setFullPrice(value)
   }

   return (
      <div className='order-box'>
         <h2>Ваш заказ</h2>
         <div className="order-box__table">
            <span className='table-column__name'>Товар</span>
            <span className='table-column__name'>Цена</span>
            <span className='table-column__name'>Количество</span>

         </div>

         {orders.map(item =>
            <OrderProduct
               key={item.id}
               name={item.name}
               price={item.price}
               fullPrice={fullPrice}
               setFullPrice={setFullPrice}
            />
         )}

         <div className="order-box__summary">
            <span>Общая стоимость заказа: </span>
            <span>{fullPrice} р.</span>
         </div>
         <h4>Выберите способ доставки</h4>
         <fieldset className="order-box__delivery">

            <input type="radio" id="delivery--sdek" name='delivery' /> <label htmlFor="delivery--sdek">Доставка курьерской службой СДЭК (от 300 р. и рассчитывается индивитуально)</label><br />
            <input type="radio" id="delivery--post" name='delivery' /> <label htmlFor="delivery--post">Доставка Почтой России (от 300 р. и рассчитывается индивитуально)</label>
         </fieldset>
         <h3>Заполните ваши данные</h3>
         <div className="order-box__warning">
            <span>Пожалуйста, внимательно введите Ваши данные.
            </span>  <br />
            <span>После оформления заказа  я свяжусь с Вами для уточнения деталей.</span>
         </div>

         <fieldset>
            <OrderInput />
            <OrderInput />
            <OrderInput />
         </fieldset>
         <OrderButton />
      </div>
   )
}
