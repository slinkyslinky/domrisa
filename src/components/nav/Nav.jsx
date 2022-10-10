import React, { useRef, useEffect, useState } from 'react'
import Logo from '../logo/Logo.jsx'
import './nav.scss'
import { Link } from 'react-router-dom'
import Contacts from '../contacts/Contacts.jsx'

export default function Nav() {

    const [navType, setNavType] = useState(0)
    const navbar = useRef(null)

    if (navType === 0 && window.innerWidth < 992) {
        setNavType(1)
    } else if (navType === 1 && window.innerWidth > 992) {
        setNavType(0)
    }

    window.onresize = () => {
        if (navType === 0 && window.innerWidth < 992) {
            setNavType(1)
        } else if (navType === 1 && window.innerWidth > 992) {
            setNavType(0)
        }
    }

    let prevOffset = window.scrollY;
    
    window.addEventListener('scroll', ()=> {
        
        if (prevOffset <= window.scrollY ) {
            navbar.current.classList.add('nav--hidden');
        } else 
   
        
        {navbar.current.classList.remove('nav--hidden')}

        prevOffset = window.scrollY;
    }
       
    )
    



    if (navType === 0) {

        return (
            <nav ref={navbar}>


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
            <nav ref={navbar}>


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
