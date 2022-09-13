import React from 'react'
import { useState } from 'react';
import ShopModal from '../shopModal/ShopModal';
import './shopItem.scss'
import { Link } from 'react-router-dom'
import { useRef } from 'react';
import { useEffect } from 'react';

export default function ShopItem(props) {

   const [isModalVisible, setIsModalVisible] = useState(false)
   const refItem = useRef(null);
   const refBtn = useRef(null);

   function addToOrder() {

      localStorage.setItem(`order-${props.id}`, `{"id": "${props.id}", "name": "${props.name}", "price": "${props.price}", "amount": "1"}`)

   }

   function removeFromOrder() {
      localStorage.removeItem(`order-${props.id}`)
   }


   useEffect(() => {
      if (localStorage.getItem(`order-${props.id}`)) {
         refBtn.current.classList.add('add-button--active');
         refItem.current.classList.add('shop-item--active');

         // console.log(123);

      }
   }, [])


   function changeAddButton() {


      if (refBtn.current.classList.contains('add-button--active')) {
         refBtn.current.classList.remove('add-button--active')
         refItem.current.classList.remove('shop-item--active')
         props.getOrdered(props.ordered - 1);
         removeFromOrder();

      } else {
         refBtn.current.classList.add('add-button--active');
         refItem.current.classList.add('shop-item--active');
         props.getOrdered(props.ordered + 1);
         addToOrder();
      }

   }

   function setModalVisible(e) {
      const container = e.target.parentNode.parentNode.parentNode;
      const item = e.target.parentNode.parentNode

      if (item !== container.children[0]) {
         setIsModalVisible(true)
      }
   }


   return (
      <div ref={refItem} className="shop-item">
         <div className="shop-item__image" onClick={setModalVisible}>
            <img src={props.image} alt="" />
         </div>
         <div className="shop-item__description">
            <h4>{props.name}</h4>
            <p>{props.description} </p>
         </div>
         <div className="shop-item__order">
            <div className="shop-item__buttons">
               <Link to="/order/" className='buy-button' onClick={addToOrder}>Заказать</Link>

               <button ref={refBtn} className='add-button' onClick={changeAddButton} ></button>
            </div>
            <p className='price'>
               <span>{props.price}</span>
               <span>{props.valute}</span>
            </p>

         </div>
         <ShopModal isVisible={isModalVisible} setIsModalVisible={setIsModalVisible} imageList={props.imageList} />
      </div>
   )
}
