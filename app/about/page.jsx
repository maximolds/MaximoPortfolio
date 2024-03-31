"use client"

import React from 'react'
import { motion } from "framer-motion"

const AboutPage = () => {
  return (
    <motion.div className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      style={{ pointerEvents: "auto" }}>

      {/* Container */}
      <div className='mt-28 mb-28 h-full overflow-scroll overflow-y-scroll overflow-x-hidden lg:flex'>
        {/* Text Container */}
        <div className='text-white px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-50 lg:w-2/3 lg:pr-0 xl:1/2'>
          {/* Biography Container */}
          <div className='flex flex-col gap-12 justify-center'>
            <h1 className='font-bold text-2xl'>BIOGRAPHY</h1>
            <p className='text-lg text-justify'>
            As a freshly graduated Mechatronics Engineer from Bulacan State University, I am proud to have earned Latin Honors for my dedication and academic excellence. From a young age, my fascination with computers and gadgets has driven me to develop numerous projects, fueling my passion for design and programming. At 22 years old, I am committed to delivering high-quality projects within tight deadlines, guided by the motto, "Do what you can do today, that your future self would thank you." With a steadfast belief in efficiency and excellence, I eagerly embark on new challenges, striving to leave a lasting impact in the field of engineering.
            </p>
            <span className='italic'>
              - @maximolds
            </span>
            {/* E signature */}
            <div></div>

            {/* SVG */}
            <div>
              {/* Your SVG code goes here */}
              {/* For demonstration purposes, I'm adding a simple SVG */}
              <svg
                viewBox='0 0 24 24'
                fill="white"
                xmlns='http://www.w3.org/2000/svg'
                width={50}
                height={50}
              >
                {/* SVG Path */}
              </svg>
            </div>
          </div>
          {/* Skills Container */}
          <div className=''>
            <h1 className='font-bold text-2xl mb-5'>SKILLS</h1>
            {/* Skill List */}
            <div className='flex gap-4 flex-wrap'>
              <div className='z-[400] rounded p-2 text-sm cursor-pointer bg-white text-black hover:bg-[#33095b] hover:text-white'>MYSQL</div>
              <div className='z-[400] rounded p-2 text-sm cursor-pointer bg-white text-black hover:bg-[#33095b] hover:text-white'>JavaScript</div>
              <div className='z-[400] rounded p-2 text-sm cursor-pointer bg-white text-black hover:bg-[#33095b] hover:text-white'>ReactJS</div>
              <div className='z-[400] rounded p-2 text-sm cursor-pointer bg-white text-black hover:bg-[#33095b] hover:text-white'>NextJS</div>
              <div className='z-[400] rounded p-2 text-sm cursor-pointer bg-white text-black hover:bg-[#33095b] hover:text-white'>NodeJS</div>
              <div className='z-[400] rounded p-2 text-sm cursor-pointer bg-white text-black hover:bg-[#33095b] hover:text-white'>Python</div>
              <div className='z-[400] rounded p-2 text-sm cursor-pointer bg-white text-black hover:bg-[#33095b] hover:text-white'>PLC</div>
              <div className='z-[400] rounded p-2 text-sm cursor-pointer bg-white text-black hover:bg-[#33095b] hover:text-white'>Matlab</div>
              <div className='z-[400] rounded p-2 text-sm cursor-pointer bg-white text-black hover:bg-[#33095b] hover:text-white'>Java</div>
              <div className='z-[400] rounded p-2 text-sm cursor-pointer bg-white text-black hover:bg-[#33095b] hover:text-white'>PHP</div>
              <div className='z-[400] rounded p-2 text-sm cursor-pointer bg-white text-black hover:bg-[#33095b] hover:text-white'>Computer Aided Design</div>
              <div className='z-[400] rounded p-2 text-sm cursor-pointer bg-white text-black hover:bg-[#33095b] hover:text-white'>Figma</div>
              <div className='z-[400] rounded p-2 text-sm cursor-pointer bg-white text-black hover:bg-[#33095b] hover:text-white'>PhotoShop</div>
              <div className='z-[400] rounded p-2 text-sm cursor-pointer bg-white text-black hover:bg-[#33095b] hover:text-white'>Data Analysis</div>
              <div className='z-[400] rounded p-2 text-sm cursor-pointer bg-white text-black hover:bg-[#33095b] hover:text-white'>Machine Learning</div>
              <div className='z-[400] rounded p-2 text-sm cursor-pointer bg-white text-black hover:bg-[#33095b] hover:text-white'>Robotic Process Automation</div>
              <div className='z-[400] rounded p-2 text-sm cursor-pointer bg-white text-black hover:bg-[#33095b] hover:text-white'>Circuit Design</div>
              <div className='z-[400] rounded p-2 text-sm cursor-pointer bg-white text-black hover:bg-[#33095b] hover:text-white'>Motion Control</div>
              <div className='z-[400] rounded p-2 text-sm cursor-pointer bg-white text-black hover:bg-[#33095b] hover:text-white'>Instrumentation and Control System</div>
              <div className='z-[400] rounded p-2 text-sm cursor-pointer bg-white text-black hover:bg-[#33095b] hover:text-white'>Mechatronics</div>
              <div className='z-[400] rounded p-2 text-sm cursor-pointer bg-white text-black hover:bg-[#33095b] hover:text-white'>Robotics</div>
            </div>

            {/* Skill Scroll SVG */}
            <div></div>
          </div>



          {/* Experience Container */}
          <div className='flex flex-col gap-12 justify-center pb-48'>
            <h1 className='font-bold text-2xl'>EXPERIENCE</h1>
            {/*Experience list */}
            <div className=''>

              {/* Experience List Item */}
              <div className='flex justify-between h-48 '>
                {/* Left */}
                <div className='w-1/3'>
                  {/* Job Title */}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg text-black'>Maintenance Service Engineer</div>
                  {/* Job desc */}
                  <div className='p-3 text-sm italic'>As a Maintenance Service Engineer, I worked on broad fields from handling manufacturing robots, correcting errors, lead management projects, and developing Inventory Management System Application.</div>
                  {/* Job Date */}
                  <div className='p-3 text-red-400 text-sm font-semibold'>2023-2024</div>
                  {/* Job Company */}
                  <div className='p-1 rounded bg-white text-sm font-semibold text-orange-600 w-fit'>Asia Integrated Machine Inc. - Monde Nissin</div>

                </div>
                {/* Center */}
                <div className='w-1/6 flex items-center justify-center'>
                  {/* Line */}
                  <div className='w-1 h-full bg-white rounded relative'>
                    {/*Circle */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-[#58109b] bg-white -left-2'></div>
                  </div>
                </div>
                {/* Right */}
                <div className='w-1/3 '></div>
              </div>

              {/* Experience List Item */}
              <div className='flex justify-between h-48 '>
                {/* Left */}
                <div className='w-1/3'>


                </div>
                {/* Center */}
                <div className='w-1/6 flex item-center justify-center'>
                  {/* Line */}
                  <div className='w-1 h-full bg-white rounded relative'>
                    {/*Circle */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-[#58109b] bg-white -left-2'></div>
                  </div>
                </div>
                {/* Right */}
                <div className='w-1/3 '>
                  {/* Job Title */}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg text-black'>Student Developer</div>
                  {/* Job desc */}
                  <div className='p-3 text-sm italic'>Student Developer role is develop a Robot that requires such skills as Electronics, 3D printing, 3D Designing, and Programming.</div>
                  {/* Job Date */}
                  <div className='p-3 text-red-400 text-sm font-semibold'>2022-2023</div>
                  {/* Job Company */}
                  <div className='p-1 rounded bg-white text-sm font-semibold text-orange-600 w-fit'>Sentrify Inc.</div>
                </div>
              </div>


            </div>

          </div>

        </div>
        {/* SVG Container */}
        <div className='hidden lg:block w-1/3 xl:1/2'></div>
      </div>
    </motion.div>

  )
}

export default AboutPage