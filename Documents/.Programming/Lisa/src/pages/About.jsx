import React from 'react'
import AboutMe from '../components/aboutMe/AboutMe'
import Reviews from '../components/reviews/Reviews'
import { FullPage, Slide } from 'react-full-page'

export default function About() {
   return (
      <FullPage controls={false} >
         <Slide>
            <AboutMe />
         </Slide>
         <Slide>
            <Reviews />
         </Slide>

      </FullPage>
   )
}
