import React from 'react'
import './SliderPreview.scss'

export default function SliderPreview({ itemList }) {

   return (
      <div className='slider-preview'>
         <div className="slider-preview__content">
            {itemList.map(item =>
               <picture>
                  <img key={item.id} src={item.img} />
               </picture>)
            }
         </div>
      </div>
   )

} 
