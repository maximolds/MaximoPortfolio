"use client"

import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { Socials } from "@/constants";
import NavLink from "@/components/sub/NavLink";
import { motion } from 'framer-motion';

const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" }

];

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const topVariants = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: 45,
            backgroundColor: "rgb(255,0,0)"
        }
    }

    const centerVariants = {
        closed: {
            opacity: 1,
        },
        opened: {
            opacity: 0,
        }
    }

    const botVariants = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: -45,
            backgroundColor: "rgb(255,0,0)"
        }
    }

    const listVariants = {
        closed: {
            x: "100vw"
        },
        opened: {
            x: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2,
            }
        }
    }

    const listItemVariants = {
        closed: {
            x: -10,
            opacity: 0,
        },
        opened: {
            x: 0,
            opacity: 1,
        }
    }

    return (
        <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
            <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px] text-xl">
                <div className='hidden md:flex gap-4 text-white '>
                    {links.map(link => (
                        <div className='hover:bg-[#2A0E61] hover:rounded-md active:bg-white active:text-black '>
                            <NavLink link={link} key={link.title} />
                        </div>

                    ))}
                </div>

                {/* Logo */}
                <div className='md:hidden lg:flex justify-center'>
                    <Link href="/"
                        className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'>
                        <span className='text-white mr-1'>Emman</span>
                        <span className='w-14 h-8 rounded bg-white text-black flex items-center justify-center'>Maximo</span>
                    </Link>
                </div>

                {/* Socials */}

                <div className="flex flex-row gap-5">
                    {Socials.map((social) => (
                        <Image
                            src={social.src}
                            alt={social.name}
                            key={social.name}
                            width={24}
                            height={24}
                        />
                    ))}
                </div>

                {/*Responsive Menu */}

                <div className='md:hidden'>
                    {/* Menu button */}

                    <button className='w-10 h-8 flex flex-col justify-between z-[100] relative'
                        onClick={() => setOpen((prev) => !(prev))}
                    >

                        <motion.div variants={topVariants}
                            animate={open ? "opened" : "closed"}
                            className='w-10 h-1 bg-white rounded origin-left'></motion.div>
                        <motion.div variants={centerVariants}
                            animate={open ? "opened" : "closed"}
                            className='w-10 h-1 bg-white rounded'></motion.div>
                        <motion.div variants={botVariants}
                            animate={open ? "opened" : "closed"}
                            className='w-10 h-1 bg-white rounded origin-left'></motion.div>

                    </button>
                </div>

                {/* Menu List */}
                {open && (
                    <motion.div
                        variants={listVariants}
                        initial="closed"
                        animate="opened"
                        className='z-50 absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl'>

                        {links.map(link => (
                            <motion.div variants={listItemVariants}>
                                <Link href={link.url} key={link.title}>{link.title}</Link>
                            </motion.div>

                        ))}
                    </motion.div>
                )}



            </div>

        </div>

    )
}

export default Navbar