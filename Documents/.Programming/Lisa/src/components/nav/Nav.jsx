import React from 'react'
import Logo from '../logo/Logo.jsx'
import './nav.scss'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <li>
                <ul><Link to="/shop/">Магазин</Link></ul>
                <ul><Link to="/"><Logo /></Link></ul>
                <ul><Link to="/about/">Обо мне</Link></ul>
            </li>
        </nav>
    )
}
