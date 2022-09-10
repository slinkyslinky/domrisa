import React from 'react'
import './orderButton.scss'
import { Link } from "react-router-dom"

export default function OrderButton({ styles, text, link }) {
   return (
      <Link className='order-button' style={styles} to="/order/"><span>{text}</span></Link>

   )
}
