import React from 'react'
import HeroSection from "./components/HeroSection"
import AboutSection from './components/AboutSection'
import ProjectSection from './components/ProjectSection'

export default function page() {
  return (
    <main className='mx-auto'>
    <HeroSection/>
    <AboutSection/>
    <ProjectSection/>
    </main>
  )
}
