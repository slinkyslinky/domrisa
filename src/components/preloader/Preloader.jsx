import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import './preloader.scss'

export default function Preloader({isFullfield}) {

    const ref = useRef(null)
    useEffect(()=> {
        if (isFullfield) {
            ref.current.style.opacity = 0
            ref.current.style.zIndex = -10
            
            ref.current.children[0].style.scale = '0'
            // ref.current.style.borderRadius = '50%'
           
           
        }
    },[isFullfield])
   

   return (
    <div ref={ref} className="preloader-wrapper" id="preloader">
<div className="preloader" ><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
    
   )
}



