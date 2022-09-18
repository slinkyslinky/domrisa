import React from 'react'
import AboutMe from '../components/aboutMe/AboutMe'
import Reviews from '../components/reviews/Reviews'
import { FullPage, Slide } from 'react-full-page'
import { useState } from 'react'
import { useEffect } from 'react'

export default function About() {




   return (
      <div className="about-page">
         <AboutMe />

         <Reviews />
      </div>


   )
}
