import React from 'react'
import './reviews.scss'

import ReviewsItem from '../reviewsItem/ReviewsItem';
import Footer from '../footer/Footer'

import review1Img from '../../img/reviews/pict1.jpg';
import review1 from '../../img/reviews/review1.png';
import avatar1 from '../../img/reviews/avatar1.png';
import answer1 from '../../img/reviews/answer1.png';

import review2Img from '../../img/reviews/pict2.jpg';
import review2 from  '../../img/reviews/review2.png';
import avatar2 from  '../../img/reviews/avatar2.png';
import answer2 from  '../../img/reviews/answer2.png';

import review3Img from '../../img/reviews/pict3.jpg';
import review3 from  '../../img/reviews/review3.png';
import avatar3 from  '../../img/reviews/avatar3.png';
import answer3 from  '../../img/reviews/answer3.png';

export default function Reviews() {

   const reviewList = [
      { id: 1, date: '22 июля', image: review1Img, review: review1, avatar: avatar1, answer: answer1},
      { id: 2, date: '29 июля', image: review2Img, review: review2, avatar: avatar2, answer: answer2},
      { id: 3, date: '14 августа', image: review3Img, review: review3, avatar: avatar3, answer: answer3},
   ]



   return (
      <div className='reviews' id="reviews">
         <div className="container">
            <div className="reviews__wrapper">
               <h2>Отзывы</h2>
               <div className="reviews__content">
                  {reviewList.map(review =>
                     <ReviewsItem
                        key={review.id}
                        date={review.date}
                        image={review.image}
                        review={review.review}
                        avatar={review.avatar}
                        answer={review.answer}
                        
                     />
                  )}
               </div>

            </div>

         </div>

      </div>
   )
}
