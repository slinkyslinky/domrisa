import React from 'react'
import './reviews.scss'

import ReviewsItem from '../reviewsItem/ReviewsItem';
import Footer from '../footer/Footer'

import review1Img from '../../img/review1.jpg';
import review1 from '../../img/review1.png';
import avatar1 from '../../img/avatar1.png';
import answer1 from '../../img/answer1.png';

export default function Reviews() {

   const reviewList = [
      { id: 1, date: '29 июля', image: review1Img, review: review1, reviewPhoto: avatar1, answer: answer1, answerPhoto: avatar1 },
      { id: 2, date: '29 июля', image: review1Img, review: review1, reviewPhoto: avatar1, answer: answer1, answerPhoto: avatar1 },
   ]



   return (
      <div className='reviews' id="reviews">
         <div className="reviews__wrapper">
            <h2>Отзывы</h2>
            <div className="reviews__content">
               {reviewList.map(review =>
                  <ReviewsItem
                     key={review.id}
                     date={review.date}
                     image={review.image}
                     review={review.review}
                     reviewPhoto={review.reviewPhoto}
                     answer={review.answer}
                     answerPhoto={review.answerPhoto}
                  />
               )}
            </div>

         </div>
         <Footer />
      </div>
   )
}
