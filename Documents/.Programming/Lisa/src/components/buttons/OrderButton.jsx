import React from 'react'
import './orderButton.scss'

export default function OrderButton({ styles, text }) {
   return (
      <button style={styles} className='order-button'>
         {text}
      </button>
   )
}
