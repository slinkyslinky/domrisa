import React from 'react'
import OrderInput from '../input/OrderInput'

import './OrderBox.scss'
import OrderButton from '../buttons/OrderButton'

import OrderItems from './OrderItems'

export default function OrderBox() {



   return (
      <div className='order-box'>
         <h2>Ваш заказ</h2>
         <OrderItems />
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
