import React, { useRef } from 'react'

// import './Control.scss'


export default function ControlItem({id, name, description, price, valute, imageList}) {


 
   return (
     <div className="control__item">
       <span>{id}</span>
       <span>{name}</span>
       <span>{description}</span>

       <span>{price}</span>
       <span>{valute}</span>
        {imageList.map( item => {
            return <span>{item.img}</span>
        })}
     </div>

   )
}
