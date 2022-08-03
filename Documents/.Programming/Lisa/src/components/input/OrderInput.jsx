import React from 'react';
import './OrderInput.scss'

export default function OrderInput(props) {
   return (
      <input className='order-input' type={props.type} placeholder={props.placeholder} />
   )
}
