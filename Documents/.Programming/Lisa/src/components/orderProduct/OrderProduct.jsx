import React from 'react'
import './OrderProduct.scss'
import image1 from '../../img/image1.jpg'
import OrderCount from './OrderCount'
import { useState } from 'react'
import { useEffect } from 'react'

export default function OrderProduct(props) {

   const [ordered, setOrdered] = useState(true)
   const [amount, setAmount] = useState(parseInt(JSON.parse(localStorage.getItem(`order-${props.id}`)).amount))
   const [amountChange, setAmountChange] = useState(0)
   let allPrice = 0;



   useEffect(() => {

      // props.setFullPrice(props.fullPrice + amountChange * props.price)
      let item = localStorage.getItem(`order-${props.id}`);
      localStorage.setItem(`order-${props.id}`, item.slice(0, item.length - 3) + `${amount}"}`)
      for (let i = 0; i < localStorage.length; i++) {
         if (localStorage.key(i).slice(0, 5) === "order") {
            let item = JSON.parse(localStorage.getItem(localStorage.key(i)))
            console.log(item);
            allPrice += item.price * item.amount
         }
      }


      props.setFullPrice(allPrice)
   }, [amount])

   function delFromStorage() {
      localStorage.removeItem(`order-${props.id}`)
   }


   if (ordered) return (
      <div className='order-product' data-name={props.name} data-count={amount}>
         <picture className="table__item">
            <img src={image1} alt="" />
         </picture>
         <span className="table__item" >{props.name}</span>
         <span className="table__item">{props.price} р.</span>
         <div className="table__item">
            <OrderCount setAmountChange={setAmountChange} amount={amount} setAmount={setAmount} id={props.id} />
         </div>
         <button className='del-button' onClick={() => { setOrdered(false); props.setFullPrice(props.fullPrice - amount * props.price); delFromStorage() }} />
      </div>
   )
}
