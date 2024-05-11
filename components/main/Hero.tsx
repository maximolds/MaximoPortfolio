"use client"

import React from "react"
import HeroContent from "../sub/HeroContent"
import Image from "next/image"
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col h-full lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 mb-0">
      {/* Image Container */}

      <div className="h-1/2 flex lg:h-full lg:w-1/2 pt-[-100px] mr-20 items-center justify-center">
        <Image
          height={200}
          width={500}
          className="object-contain md:mt-[-150px] mt-0 mb-20 md:mb-0"
          src="/Emman1.png"
          alt="Emman"

        />
      </div>

      {/* Text container */}

      <div className="z-30 h-1/2 lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          <span>
            Hi! I"m 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Emmanuel Maximo{" "}
            </span>
            
          </span>
        </h1>
        {/* Description*/}
        <p className="text-white text-justify">
          I&apos;m a Full Stack Software Engineer and Mechatronics Engineer with experience in Website,
          Mobile development, Software development, Robotic Process Automation, Robot and Electronics development, and Instrumentation and Control System.
          Check out my projects and skills.
        </p>
        {/* Buttons */}
        <div className="w-full flex gap-4">
          <Link
            href="/portfolio"
            className="p-4 rounded-lg ring-1 ring-black bg-white hover:bg-[#4190c9] text-black hover:text-white"
          >View my work
          </Link>
          <Link
            href="/contact"
            className="p-4 rounded-lg ring-1 ring-black bg-[#2e0b51] hover:bg-[#4190c9] hover:text-white text-white"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero