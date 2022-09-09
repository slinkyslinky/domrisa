import React from 'react'
import { useState } from 'react';
import ShopModal from '../shopModal/ShopModal';
import './shopItem.scss'
import { Link } from 'react-router-dom'

export default function ShopItem(props) {

   const [isModalVisible, setIsModalVisible] = useState(false)


   function changeAddButton(e) {
      const parentClassList = e.target.offsetParent.offsetParent.classList;
      const classList = e.target.classList;
      if (classList.contains('add-button--active')) {
         classList.remove('add-button--active')
         parentClassList.remove('shop-item--active')
         props.getOrdered(props.ordered + 1)

      } else {
         classList.add('add-button--active');
         parentClassList.add('shop-item--active');
         props.getOrdered(props.ordered - 1)
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
            <h4>{props.name}</h4>
            <p>{props.description} </p>
         </div>
         <div className="shop-item__order">
            <div className="shop-item__buttons">
               <Link to="/order/" className='buy-button'>Заказать</Link>

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
