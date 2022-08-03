import React from 'react'
import './shopItem.scss'
import itemImg from "../../img/item1.png"

export default function ShopItem() {
   return (
      <div className="shop-item">
         <div className="shop-item__image">
            <img src={itemImg} alt="" />
         </div>
         <div className="shop-item__description">
            <h3>Брошь</h3>
            <p>С индивидуальным подходом и любовью. Все изделия в этом магазине ручной работы, созданы
               с индивидуальным подходом и любовью. </p>
         </div>
         <div className="shop-item__order">
            <div className="buttons">
               <button className='buy-button'>Заказать</button>
               <button className='add-button'>+</button>
            </div>
            <p className='price'>
               <span>1200 </span>
               <span> р</span>
            </p>

         </div>
      </div>
   )
}
