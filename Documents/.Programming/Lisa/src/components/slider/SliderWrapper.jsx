import React, { useState } from 'react'
import Slider from './Slider'
import SliderPreview from './SliderPreview'

export default function SliderWrapper({ imageList, size, hasPreview = false }) {

   const [count, setCount] = useState(0)

   function getCount(value) {
      setCount(value)
   }

   if (hasPreview) {

      return (
         <div className='slider-extended'>
            <Slider itemList={imageList} count={count} getCount={getCount} size={size} />
            <SliderPreview itemList={imageList} count={count} getCount={getCount} />
         </div>
      )
   } else return (

      <Slider itemList={imageList} count={count} getCount={getCount} size={size} />


   )
}
