import React from 'react'
import './arrow.scss'

export default function Arrow(props) {

   function getDirection() {
      switch (props.arrowType) {
         case 'arrow--right':
            props.setAmountChange(1)
            return props.count + 1
         case 'arrow--left':
            props.setAmountChange(-1)
            return props.count - 1
      }
   }

   return (
      <button style={{ display: props.display }} className={'products__arrow ' + props.arrowType} onClick={() => { props.onClick(getDirection()) }} />


   )
}
