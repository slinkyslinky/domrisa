import React from 'react'
import { useState } from 'react';
import ShopModal from '../shopModal/ShopModal';
import './shopItem.scss'


export default function ShopItem(props) {

   const [isModalVisible, setIsModalVisible] = useState(false)


   function changeAddButton(e) {
      const parentClassList = e.target.offsetParent.offsetParent.classList;
      const classList = e.target.classList;
      if (classList.contains('add-button--active')) {
         classList.remove('add-button--active')
         parentClassList.remove('shop-item--active')
      } else {
         classList.add('add-button--active');
         parentClassList.add('shop-item--active');
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
      <div className="shop-item">
         <div className="shop-item__image" onClick={setModalVisible}>
            <img src={props.image} alt="" />
         </div>
         <div className="shop-item__description">
            <h3>{props.name}</h3>
            <p>{props.description} </p>
         </div>
         <div className="shop-item__order">
            <div className="shop-item__buttons">
               <button className='buy-button'>Заказать</button>
               <button className='add-button' onClick={changeAddButton} ></button>
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
