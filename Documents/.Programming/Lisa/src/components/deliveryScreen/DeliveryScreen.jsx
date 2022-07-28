import React from 'react'
import './deliveryScreen.scss'

export default function DeliveryScreen() {
   return (
      <div className="delivery-screen">
         <div className="container container--wide">
            <div className="delivery-grid">
               <picture className='delivery-grid__item'>
                  <img src="https://placehold.jp/800x800.png" alt="first image" />
               </picture>
               <article className='delivery-grid__item'>
                  <h2>Упаковка</h2>
                  <p>Вы можете не переживать за сохранность своего заказа при пересылке его почтой или курьерской службой, потому что каждое изделие я бережно и надежно упаковываю перед отправкой.</p>
               </article>
               <article className='delivery-grid__item'>
                  <h2>Способы доставки</h2>
                  <p>Доставка курьерской службой СДЭК — от 300 рублей, рассчитывается индивидуально.

                     Доставка Почтой России — от 300 рублей, рассчитывается индивидуально.</p>
               </article>
               <picture className='delivery-grid__item'>
                  <img src="https://placehold.jp/800x800.png" alt="second image" />
               </picture>

            </div>
         </div>
      </div>
   )
}
