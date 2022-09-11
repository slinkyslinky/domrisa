import React from 'react';
import './OrderInput.scss'

export default function OrderInput(props) {


   return (
      <input className='order-input' type={props.type} minLength={props.minLength} placeholder={props.placeholder} required onInput={props.validation} autoFocus={props.autofocus} />
   )
}
