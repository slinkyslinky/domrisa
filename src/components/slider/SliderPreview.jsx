import React, { useState } from 'react'
import { useEffect } from 'react'
import './SliderPreview.scss'

export default function SliderPreview({ itemList, count, getCount }) {

   const [contentShift, setContentShift] = useState(0)

   useEffect(() => {
      const obj = document.getElementById('slider-preview__picture-' + count)
      for (const item of obj.parentNode.children) {
         item.classList.remove('slider-preview__picture--active');
      };
      obj.classList.add('slider-preview__picture--active');
      if (count > 1) {
         if (count < itemList.length - 2) {
            setContentShift(2 - count);
         }
      } else setContentShift(0)
   }, [count])
   let width = 100;
   if (window.innerWidth > 640) {
      width = 100;
   } else {
      width = 50
   }

   return (
      <div className='slider-preview' style={{ width: (itemList.length) * width }}>
         <div className="slider-preview__content" style={{ left: contentShift * width }}>
            {itemList.map(item =>
               <picture className='slider-preview__picture' id={'slider-preview__picture-' + (item.id - 1)} key={item.id} onClick={() => getCount(item.id - 1)}>
                  <img src={`../../img/${item.img}`} />
               </picture>)
            }
         </div>
      </div>
   )

} 
