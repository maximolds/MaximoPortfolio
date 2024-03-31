"use client";

import React from 'react'
import { Inter } from "next/font/google";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const TransitionProvider = ({ children }) => {

    const pathName = usePathname()

    return (
        <AnimatePresence mode="wait">
            <div key={pathName} className=''>
                <motion.div
                    className='w-screen h-screen top-0 fixed bg-white rounded-b-[100px] z-[200]'
                    animate={{ height: "0vh" }} // This will show the element at the start
                    exit={{ height: "140vh" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                />
                 <motion.div
                    className='fixed m-auto top-0 bottom-0 left-0 right-0 text-black text-8xl cursor-default z-[250] w-fit h-fit'
                    initial={{ opacity: 1 }} 
                    animate={{ opacity: 0 }} // This will show the element at the start
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {pathName.substring(1)}
                </motion.div>
                 <motion.div
                    className='w-screen h-screen rotate-180 fixed bg-white rounded-b-[100px] bottom-0 z-[200]'
                    initial={{ height: "150vh" }} // This will show the element at the start
                    animate={{ height: "0vh", transition:{delay: 0.5} }}
                    
                />
               
                <Navbar />
                {children}
                <StarsCanvas />
                <Footer />

            </div>
        </AnimatePresence>
    )
}

export default TransitionProvider