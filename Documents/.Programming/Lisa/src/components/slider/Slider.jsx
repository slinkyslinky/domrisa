import React, { useState } from 'react'
import Arrow from '../arrow/Arrow'
import './Slider.scss'



export default function Slider({ itemList, }) {

   let displayRight, displayLeft;



   const [count, setCount] = useState(0)

   function countInfinite() {
      if (count <= itemList.length - 2) {
         setCount(count + 1)
      } else setCount(0)

   }

   if (count === 0) {
      displayLeft = 'none'
   } else displayLeft = 'block'

   if (count === itemList.length - 1) {
      displayRight = 'none'
   } else displayRight = 'block'




   return (
      <div className="slider">
         <div className="slider__block" onClick={() => countInfinite()}>
            <div className="slider__content" id='sliderContent' style={{ left: "-" + (count * 600) + 'px' }} >
               {itemList.map(item => <img key={item.id} src={item.img} alt={item.alt} />)}
            </div>

         </div>

         <Arrow arrowType='arrow--right' display={displayRight} count={count} onClick={setCount} />
         <Arrow arrowType='arrow--left' display={displayLeft} count={count} onClick={setCount} />

      </div>
   )
}
