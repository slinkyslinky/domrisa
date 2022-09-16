import React, { useRef, useEffect, useState } from 'react'
import Logo from '../logo/Logo.jsx'
import './nav.scss'
import { Link } from 'react-router-dom'
import Contacts from '../contacts/Contacts.jsx'

export default function Nav() {

    const [navType, setNavType] = useState(0)

    if (navType === 0 && window.innerWidth < 992) {
        setNavType(1)
    } else if (navType === 1 && window.innerWidth > 992) {
        setNavType(0)
    }

    // window.onresize = () => {
    //     if (navType === 0 && window.innerWidth < 992) {
    //         setNavType(1)
    //     } else if (navType === 1 && window.innerWidth > 992) {
    //         setNavType(0)
    //     }
    // }

    if (navType === 0) {

        return (
            <nav>


                <ul>
                    <li><Link to="/shop/">Магазин</Link></li>
                    <li>
                        <Link to="/"><Logo /></Link>
                    </li>
                    <li><Link to="/about/">Обо мне</Link></li>
                </ul>
            </nav>
        )
    } else {
        return (
            <nav>


                <ul>
                    <li><Link to="/shop/">Магазин</Link></li>
                    <li>
                        <Link to="/"><Logo /></Link>
                    </li>
                    <li><Link to="/about/">Обо мне</Link></li>
                </ul>
                <Contacts />
            </nav>
        )
    }
}
