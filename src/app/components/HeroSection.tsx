"use client"

import React from 'react'
import Image from 'next/image'
// import { Link } from "react-scroll/modules"
import Link from 'next/link'
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section id='home'>

        <div className='flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-4 py-4 sm:py-32 md:y-48 md:flex-row md:space-x-4 md:text-left'>
        
        <div className='md:mt-2 md:w-3/5'>
                <h1 className='font-bold text-2xl mt-6 md:mt-0 md:text-5xl'>Muhammad Faizan Tariq</h1>
                <p className='text-lg mt-4 mb-6 md:text-2xl'>Based in Lahore, Pakistan. A passionate  <span className='font-semibold text-yellow-500'>Full-Stack Developer, {" "} </span>
                I excel not only in writing code but also in crafting products with exceptional user experiences and a focus on scalability with logic & structure of coding.
                </p>
                <Link
                href="projects"
                className='text-neutral-100 font-semibold px-6 py-3 bg-yellow-500 rounded shadow hover:bg-black '
                // activeClass="active"
                // spy={true}
                // smooth={true}
                // offset={-100}
                // duration={500}
                >
                Projects
                </Link>
            </div>
            
            <div>
                <Image className='rounded-full shadow-2xl' src="/DP.jpg" alt='Profile Image' width={300} height={300}/>
            </div>

        </div>
        
        <div className="flex flex-row items-center justify-center text-center">
            <Link
            href="address"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            >
            <HiArrowDown size={35} className="animate-bounce hover:text-yellow-500"/>
            </Link>
        </div>

    </section>
  )
}

export default HeroSection