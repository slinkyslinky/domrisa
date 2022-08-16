import React from 'react'
import './reviews.scss'
import review1 from '../../img/review1.jpg';
import ReviewsItem from '../reviewsItem/ReviewsItem';

export default function Reviews() {

   const reviewList = [
      { id: 1, date: '29 июля', image: review1, review: '', reviewsPhoto: '', answer: '', answerPhoto: '' },
   ]


   return (
      <div className='reviews'>
         <div className="reviews__wrapper">
            <h2>Отзывы</h2>
            <div className="reviews__content">
               {reviewList.map(review =>
                  <ReviewsItem
                     key={review.id}
                     date={review.date}
                     image={review.image}
                     review={review.review}
                     reviewsPhoto={review.reviewsPhoto}
                     answer={review.answer}
                     answerPhoto={review.answerPhoto}
                  />
               )}
            </div>
         </div>
      </div>
   )
}
