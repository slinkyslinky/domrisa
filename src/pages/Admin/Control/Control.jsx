import React, { useRef } from 'react'

import './Control.scss'
import ControlItem from './ControlItem'


export default function Control({shopList}) {
const ref = useRef(null)

 
   return (
     <div className="control">
            {shopList.map( item => {
                return    <ControlItem
                key={item.id}
                id={item.id}
                name={item.name}
                description={item.description}
                image={item.imageList[0].img}
                price={item.price}
                valute={item.valute}
                imageList={item.imageList}
              
               
             />
            })}
     </div>

   )
}
