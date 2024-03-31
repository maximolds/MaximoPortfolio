"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion"
import Image from 'next/image'
import Link from 'next/link'

const items = [
  {
    id: 1,
    color: "",
    title: "AIM-IMS",
    desc: "AIM-IMS is a tailored inventory management system for Asia Integrated Machine Inc., utilizing Google Firebase and Google App Sheet. Automated email functionality ensures timely notifications for inventory events, while analytics capabilities offer insights for strategic decision-making. It streamlines inventory operations, providing efficient management for machine parts inventory.",
    img: "/aim.png"
  },
  {
    id: 2,
    color: "",
    title: "MaintAIM",
    desc: "MaintAIM is a specialized project designed for Monde Nissin and Asia Integrated Machine Inc., focusing on monitoring Manufacturing Robots and Machine Conditions, along with tracking technical staff activities. It boasts a range of features including QR code scanning, Checklist monitoring, Email integration, Scheduling functionalities, and more. MaintAIM provides comprehensive solutions for efficiently managing and monitoring manufacturing processes, enhancing operational efficiency and ensuring smooth technical operations for both organizations.",
    img: "/maintaim.png"
  },
  {
    id: 3,
    color: "",
    title: "Wall-Bal",
    desc: "WALL-BAL is an innovative self-balancing robot controlled wirelessly via Bluetooth, complemented by its dedicated Android application. This robot offers a seamless and intuitive user experience, allowing users to control it remotely with ease. With its cutting-edge technology and user-friendly interface, WALL-BAL represents a significant advancement in robotics, offering endless possibilities for exploration and application in various contexts.",
    img: "/wall.png"
  },
  {
    id: 4,
    color: "",
    title: "Kinemechatronics",
    desc: "Kinemechatronics, a gear-driven robot, is controllable wirelessly through Bluetooth or WiFi, offering mobility and gripping capabilities. Its versatility extends to its dedicated Android application, providing users with intuitive control and seamless interaction. With its advanced features and companion app, Kinemechatronics opens up a myriad of possibilities for efficient and flexible robotic operations in diverse settings.",
    img: "/kineme.png"
  }
]

const achievements = [
  {
    id: 1,
    color: "",
    title: "Latin Honors",
    desc: "Graduating with Summa Cum Laude from Bulacan State University marks the culmination of a challenging yet immensely rewarding journey. Despite the obstacles encountered along the way, I persevered and acquired the knowledge necessary to excel in my college life. This achievement not only symbolizes academic excellence but also serves as a testament to my dedication and determination to succeed in my educational endeavors.",
    img: "/Latin.png"
  },
  {
    id: 2,
    color: "",
    title: "NATCON Placer",
    desc: "Our participation in the Process and Instrumentation Control National Contest was a thrilling journey, competing against esteemed schools from across the Philippines. Despite the fierce competition, we proudly secured the 5th place, showcasing our expertise as mechatronics engineers. The experience served as a refreshing reminder of our capabilities and ignited our passion for advancing in the field of process and instrumentation control.",
    img: "/Placer.png"
  },
  {
    id: 3,
    color: "",
    title: "Robotics Champion",
    desc: "Our Robotic Champion Achievement is a testament to our team's resilience and dedication as we triumphed over more than 20 formidable opponents to claim the top spot. Our outstanding performance not only secured the championship title but also caught the attention of the city mayor, who recognized our team for our remarkable accomplishment. It's a moment we'll forever cherish, solidifying our legacy as pioneers of robotics excellence within our community.",
    img: "/Champ.png"
  },
]

const PortfolioPage = () => {

  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref })
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const refAchievements = useRef();
  const { scrollYProgress: scrollYProgressAchievements } = useScroll({ target: refAchievements });
  const xAchievements = useTransform(scrollYProgressAchievements, [0, 1], ["-100%", "20%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      <div className='h-[600vh]' ref={ref}>
        <div className='w-screen h-[calc(100vh-6rem)] flex items-center justify-center font-semibold text-8xl text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>My Works</div>
        <div className='sticky top-0 flex h-screen gap-4 items-center'>
          <motion.div style={{ x }} className='flex'>
            <div className='h-screen w-screen flex items-center justify-center'></div>
            {items.map(item => (
              <div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}>
                <div className='flex flex-col gap-5 text-white'>
                  { /*<h1 className='flex items-center justify-center text-xl md:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-0'>{item.title}</h1> */}
                  <div className='relative w-80 h-56 md:w-96 md:h-64 lg:w-[550px] lg:h-[350px] xl:w-[650px] xl:h-[420px] overflow-hidden rounded-lg shadow-lg border-[3px] border-[#2A0E61]'>
                    <Image src={item.img} alt={item.title} fill />
                  </div>
                  <p className='text-[8px] md:text-[12px] relative w-80 md:w-96lg:w-[550px] xl:w-[650px] mt-2 text-justify text-gray-300'>{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

        
          <div className='relative'>
            <svg viewBox='0 0 300 300'>
            </svg>

            <Link
              href="/contact"
              className="w-16 h-16 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-white text-black rounded-full"
            >Hire Me</Link>
          </div>

        </div>
      </div>

      <div className='h-[600vh]' ref={refAchievements}>
        <div className='w-screen h-[calc(100vh-6rem)] flex items-center justify-center font-semibold text-8xl text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>My Achievements</div>
        <div className='sticky top-0 flex h-screen gap-4 items-center'>
          <motion.div style={{ x: xAchievements }} className='flex'>
            <div className='h-screen w-screen flex items-center justify-center'></div>
            {achievements.map(item => (
              <div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`} key={item.id}>
                <div className='flex flex-col gap-5 text-white'>
                  <div className='relative w-80 h-56 md:w-96 md:h-64 lg:w-[550px] lg:h-[350px] xl:w-[650px] xl:h-[420px] overflow-hidden rounded-lg shadow-lg border-[3px] border-[#2A0E61]'>
                    <Image src={item.img} alt={item.title} fill />
                  </div>
                  <p className='text-[8px] md:text-[12px] relative w-80 md:w-96 lg:w-[550px] xl:w-[650px] mt-2 text-justify text-gray-300'>{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
          <div className='relative'>
            <svg viewBox='0 0 300 300'></svg>
            <Link
              href="/contact"
              className="w-16 h-16 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-white text-black rounded-full"
            >Hire Me</Link>
          </div>
        </div>
      </div>
    </motion.div>

  )
}

export default PortfolioPage