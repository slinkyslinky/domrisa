import React from 'react'
import './ReviewsItem.scss'

export default function ReviewsItem(props) {
   return (
      <article className='reviews__item'>
         <span>{props.date}</span>
         <img src={props.image} alt="" />

         <picture>
            <img className='reviews__review' src={props.review} alt="" />
            <img className='reviews__avatar' src={props.reviewPhoto} alt="" />
         </picture>
         <picture>
            <img className='reviews__review' src={props.answer} alt="" />
            <img className='reviews__avatar' src={props.answerPhoto} alt="" />
         </picture>




      </article>
   )
}
