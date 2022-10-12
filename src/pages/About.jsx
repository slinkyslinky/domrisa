import React from 'react'
import AboutMe from '../components/aboutMe/AboutMe'
import Reviews from '../components/reviews/Reviews'

import { useState } from 'react'
import { useEffect } from 'react'
import ScrollToTop from '../utils/scrollToTop'

export default function About() {




   return (
      <div className="about-page">
         <ScrollToTop>
         <AboutMe />

<Reviews />
         </ScrollToTop>
         
      </div>


   )
}
