import React from 'react'
import './ReviewsItem.scss'

export default function ReviewsItem(props) {
   return (
      <article className='reviews__item'>
         <span>{props.date}</span>
         <img className='reviews__image' src={props.image} alt="" />

         <picture className='reviews__review'>
            <img src={props.review} alt="" />
            <img className='reviews__avatar' src={props.avatar} alt="" />
         </picture>
         <picture className='reviews__review'>
            <img src={props.answer} alt="" />
            <img className='reviews__avatar' src="../../img/avatar.png" alt="" />
         </picture>




      </article>
   )
}
