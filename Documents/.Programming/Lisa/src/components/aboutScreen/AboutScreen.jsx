import React from 'react'
import './aboutScreen.scss'
import AboutProducts from '../aboutProducts/AboutProducts.jsx'

export default function AboutScreen() {





   return (
      <div id='aboutScreen' className='about-screen screen'>

         <div className="container">
            <article className='about-screen__item'>
               <h2>About products</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, vel alias enim ipsa, voluptatibus sint quia commodi sit nostrum tenetur nemo, dolore nam dicta! Iste accusantium atque, numquam maxime quasi quos sint? Corporis impedit quas aliquam hic culpa. Eum aliquid voluptate culpa perferendis adipisci, quidem ullam harum porro voluptatem nesciunt.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, vel alias enim ipsa, voluptatibus sint quia commodi sit nostrum tenetur nemo, dolore nam dicta! Iste accusantium atque, numquam maxime quasi quos sint? Corporis impedit quas aliquam hic culpa. Eum aliquid voluptate culpa perferendis adipisci, quidem ullam harum porro voluptatem nesciunt.</p>
            </article>
            <div className='about-screen__item'>
               <AboutProducts />

            </div>
         </div>


      </div>

   )
}
