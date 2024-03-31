"use client";

import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const ContactPage = () => {

  const text = "Sup! Contact me."
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setError(false);

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then(
        () => {
          setSuccess(true)
          form.current.reset()
        },
        (error) => {
          setError(true)
        },
      );
  };

  return (
    <motion.div className='h-full'
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className='mt-20 mb-28 h-full flex flex-col items-center justify-center lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        {/*Text Container */}
        <div className='h-1/2 lg:h-full mr-10 lg:w-1/2 flex items-center justify-center font-bold text-[50px] text-white'>
          <motion.div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
                >{letter}
              </motion.span>
            ))}
          </motion.div>
        </div>
        {/* Form Container */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className='h-1/2 lg:h-full lg:w-1/2 bg-red-50 shadow-2xl shadow-[#3c2d58] rounded-xl text-xl flex flex-col gap-8 justify-center p-24'>
          <span>Dear Emman Maximo, </span>
          <textarea rows={2}
            name='user_message'
            className='bg-transparent border-b-2 border-b-black outline-none resize-none'></textarea>
          <span>My Email Address is: </span>
          <input
            name='user_email'
            type="text"
            className='bg-transparent border-b-2 border-b-black outline-none' />
          <span>Regards</span>
          <button className='bg-[#2A0E61] hover:bg-slate-500 hover:text-black rounded font-semibold text-white p-4'>Send</button>
          {success && <span className='text-green-600 font-semibold'>Your message has been sent successfully!</span>}
          {error && <span className='text-red-600 font-semibold'>Something went wrong!</span>}
        </form>
      </div>
    </motion.div>


  )
}

export default ContactPage