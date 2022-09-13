import React, { useRef } from 'react'
import OrderInput from '../input/OrderInput'

import './OrderBox.scss'
import OrderButton from '../buttons/OrderButton'

import OrderItems from './OrderItems'
import { formValidationIncorrect, phoneValidation } from '../../utils/validation'
import { useEffect } from 'react'
import axios from 'axios'
import { telegram as constants } from '../../variables/variables'

export default function OrderBox({ setScreen }) {

   const form = useRef(null)
   useEffect(() => {
      form.current.childNodes.forEach(item => {
         item.classList.add("order-input--dark")
      })
   }, [])

   const TOKEN = constants.TOKEN
   const CHAT_ID = constants.CHAT_ID
   const URL = constants.URL


   function sendForm(e) {
      let message = '';
      e.preventDefault()
      message += "<b>Поступил новый заказ</b> \n"
      message += "Имя:  " + form.current.elements["name"].value + "\n";
      message += "Почта:  " + form.current.elements["email"].value + "\n";
      message += "Телефон:  " + form.current.elements["tel"].value + "\n";
      message += "Способ доставки:  " + form.current.elements["delivery"].value + '\n';
      message += "Товары: \n"

      let allPrice = 0;
      let k = 1;
      for (let i = 0; i < localStorage.length; i++) {


         if (localStorage.key(i).slice(0, 5) === "order") {
            let item = localStorage.getItem(localStorage.key(i))
            item = JSON.parse(item)
            message += `   #${k}. ${item.name} (id: ${item.id}) ${item.price}р.  -  ${item.amount}шт. \n`
            allPrice += item.price * item.amount
            k++
         }
      }
      message += "Общая стоимость:  " + allPrice + " р."




      if (form.current.elements["name"].value.length > 1 &&
         form.current.elements["email"].value.length > 1 &&
         form.current.elements["tel"].value.length > 1) {
         axios.post(URL, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: message
         })
         setScreen(1)
         localStorage.clear()

      } else {

         formValidationIncorrect(form.current)
      }



   }


   return (
      <div className='order-box'>
         <h2>Ваш заказ</h2>
         <OrderItems />
         <h4>Выберите способ доставки</h4>
         <fieldset className="order-box__delivery">

            <input form="order-box__contact-form" type="radio" id="delivery--sdek" name='delivery' value='sdek' /> <label htmlFor="delivery--sdek">Доставка курьерской службой СДЭК (от 300 р. и рассчитывается индивитуально)</label><br />
            <input form="order-box__contact-form" type="radio" id="delivery--post" name='delivery' value='post' /> <label htmlFor="delivery--post">Доставка Почтой России (от 300 р. и рассчитывается индивитуально)</label>
         </fieldset>
         <h3>Заполните ваши данные</h3>
         <div className="order-box__warning">
            <span>Пожалуйста, внимательно введите Ваши данные.
            </span>  <br />
            <span>После оформления заказа  я свяжусь с Вами для уточнения деталей.</span>
         </div>

         <form ref={form} className='order-box__contact-form' id='order-box__contact-form' >
            <OrderInput type="text" name="name" placeholder="Имя" />
            <OrderInput type="email" name="email" placeholder="E-mail" />
            <OrderInput type="tel" name="tel" placeholder="Phone" validation={phoneValidation} />
         </form>
         <OrderButton link="/order/" text="Оформить заказ" onClick={sendForm} />
      </div>
   )
}
