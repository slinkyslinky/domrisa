import React, { useRef } from 'react'
import OrderInput from '../input/OrderInput'

import './OrderBox.scss'
import OrderButton from '../buttons/OrderButton'

import OrderItems from './OrderItems'
import { phoneValidation } from '../../utils/validation'
import { useEffect } from 'react'

export default function OrderBox() {

   const form = useRef(null)
   useEffect(() => {
      form.current.childNodes.forEach(item => {
         item.classList.add("order-input--dark")
      })
   }, [])


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

         <form ref={form} className='order-box__contact-form' >
            <OrderInput type="text" placeholder="Имя" />
            <OrderInput type="email" placeholder="E-mail" />
            <OrderInput type="tel" placeholder="Phone" validation={phoneValidation} />
         </form>
         <OrderButton link="/order/" text="Оформить заказ" />
      </div>
   )
}
