import React from 'react'
import './orderButton.scss'

export default function OrderButton({ styles }) {
   return (
      <button style={styles} className='order-button'>
         заказать
      </button>
   )
}
