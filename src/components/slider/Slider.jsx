import React from 'react'
import Arrow from '../arrow/Arrow'
import './Slider.scss'



export default function Slider({ itemList, count, getCount }) {

   let displayRight, displayLeft;

   function countInfinite() {
      if (count <= itemList.length - 2) {
         getCount(count + 1)
      } else getCount(0)
   }

   if (count === 0) {
      displayLeft = 'none'
   } else displayLeft = 'block'

   if (count === itemList.length - 1) {
      displayRight = 'none'
   } else displayRight = 'block'

   return (
      <div className="slider" id='slider-product' >
         <div className="slider__block" onClick={() => countInfinite()}>
            <div className="slider__content" id='sliderContent' style={{ left: "-" + (count * 100) + '%' }} >
               {itemList.map(item => <img key={item.id} src={`../../img/${item.img}`} alt={item.alt} />)}
            </div>
         </div>

         <Arrow arrowType='arrow--right' display={displayRight} count={count} onClick={getCount} />
         <Arrow arrowType='arrow--left' display={displayLeft} count={count} onClick={getCount} />
      </div>
   )
}
