import React from 'react'
import './orderButton.scss'
import { Link } from "react-router-dom"

export default function OrderButton({ styles, text, link, form, onClick }) {
   return (
      <Link className='order-button' style={styles} to={link} onClick={onClick} form={form}> <span>{text}</span></Link>

   )
}
