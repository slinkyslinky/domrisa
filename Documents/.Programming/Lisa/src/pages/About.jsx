import React from 'react'
import AboutMe from '../components/aboutMe/AboutMe'
import Reviews from '../components/reviews/Reviews'
import { FullPage, Slide } from 'react-full-page'
import { useState } from 'react'
import { useEffect } from 'react'

export default function About() {


   // // const [scrollMode, setScrollMode] = useState("full-page")
   // const [scrolled, setScrolled] = useState(false)




   // // function getMode(e) {
   // function scrolling() {

   //    if (window.scrollY === 1) {

   //       window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })

   //    }
   //    setScrolled(true)
   //    window.removeEventListener('scroll', scrolling)

   // }


   // //    if (window.scrollY >= window.innerHeight) {
   // //       setScrollMode("normal")
   // //    } else { setScrollMode("full-page"); }
   // // }
   // useEffect(() => {
   //    if (!scrolled) {
   //       window.addEventListener('scroll', scrolling)
   //    }
   // }, []
   // )



   // window.onscroll = getMode;

   return (
      <FullPage controls={false} scrollMode={"normal"} >
         <Slide>
            <AboutMe />
         </Slide>
         <Slide >
            <Reviews />
         </Slide>

      </FullPage >
   )
}
