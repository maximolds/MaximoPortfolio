"use client"

import Image from "next/image";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Encryption from "@/components/main/Encryption";
import Projects from "@/components/main/Projects";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
      <main className="mt-0 md:mt-20 mb-0 md:mb-20 ">
        <Hero />
      </main>
    </motion.div>

  );
}
