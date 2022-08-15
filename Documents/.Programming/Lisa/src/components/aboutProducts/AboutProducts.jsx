import React, { useState } from 'react'
import Arrow from '../arrow/Arrow'
import './aboutProducts.scss'
import img1 from '../../img/item1.png'
import img2 from '../../img/py4u3x9Z--Y.jpg'

export default function AboutProducts() {

   let displayRight, displayLeft;

   const imageList = [
      { id: 1, img: img1, alt: 'Image of the product' },
      { id: 2, img: img2, alt: 'Image of the product' },
      { id: 3, img: '', alt: 'Image of the product' },
   ]

   const [count, setCount] = useState(0)

   function countInfinite() {
      if (count <= imageList.length - 2) {
         setCount(count + 1)
      } else setCount(0)

   }

   if (count === 0) {
      displayLeft = 'none'
   } else displayLeft = 'block'

   if (count === imageList.length - 1) {
      displayRight = 'none'
   } else displayRight = 'block'

   return (
      <div className="about-products">
         <div className="slider" onClick={() => countInfinite()}>
            <div className="slider__content" id='sliderContent' style={{ left: "-" + (count * 600) + 'px' }} >
               {imageList.map(image => <img key={image.id} src={image.img} alt={image.alt} />)}
            </div>

         </div>

         <Arrow arrowType='arrow--right' display={displayRight} count={count} onClick={setCount} />
         <Arrow arrowType='arrow--left' display={displayLeft} count={count} onClick={setCount} />
      </div>
   )
}


