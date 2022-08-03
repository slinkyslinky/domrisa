import React, { useRef, useEffect } from 'react'
import Logo from '../logo/Logo.jsx'
import './nav.scss'
import { Link } from 'react-router-dom'

export default function Nav() {

    return (
        <nav>
            <ul>
                <li><Link to="/shop/">Магазин</Link></li>
                <li><Link to="/"><Logo /></Link></li>
                <li><Link to="/about/">Обо мне</Link></li>
            </ul>
        </nav>
    )
}
