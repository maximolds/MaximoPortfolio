import React from "react";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
} from "react-icons/rx";

import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">


                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Community</div>
                        <Link
                            href="https://www.linkedin.com/in/emmanuel-maximo-970a90279/"
                        >
                            <p className="flex flex-row items-center my-[15px] cursor-pointer">
                                <FaLinkedin />
                                <span className="text-[15px] ml-[6px]">Linkedin</span>
                            </p>
                        </Link>
                        <Link
                            href="https://github.com/maximolds"
                        >
                            <p className="flex flex-row items-center my-[15px] cursor-pointer">
                                <RxGithubLogo />
                                <span className="text-[15px] ml-[6px]">Github</span>
                            </p>
                        </Link>
                        <Link
                            href=""
                        >
                            <p className="flex flex-row items-center my-[15px] cursor-pointer">
                                <RxDiscordLogo />
                                <span className="text-[15px] ml-[6px]">Discord</span>
                            </p>
                        </Link>

                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Social Media</div>
                        <Link
                            href="https://www.facebook.com/Maximo.Emman/"
                        >
                            <p className="flex flex-row items-center my-[15px] cursor-pointer">
                                <FaFacebook />
                                <span className="text-[15px] ml-[6px]">Facebook</span>
                            </p>
                        </Link>

                        <Link
                            href="https://www.instagram.com/emn.maximo/"
                        >
                            <p className="flex flex-row items-center my-[15px] cursor-pointer">
                                <FaInstagram />
                                <span className="text-[15px] ml-[6px]">Instagram</span>
                            </p>
                        </Link>


                        <Link
                            href="https://www.linkedin.com/in/emmanuel-maximo-970a90279/"
                        >
                            <p className="flex flex-row items-center my-[15px] cursor-pointer">
                                <FaLinkedin />
                                <span className="text-[15px] ml-[6px]">Linkedin</span>
                            </p>
                        </Link>

                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">About</div>
                        <Link
                            href="/contact"
                        >
                            <p className="flex flex-row items-center my-[15px] cursor-pointer">

                                <span className="text-[15px] ml-[6px]">Contact Me</span>
                            </p>
                        </Link>

                        <Link href="/about">
                            <p className="flex flex-row items-center my-[15px] cursor-pointer">

                                <span className="text-[15px] ml-[6px]">Learning about me</span>
                            </p>
                        </Link>


                        <p className="flex flex-row items-center my-[15px] cursor-pointer">

                            <span className="text-[15px] ml-[6px]">emmanuel.maximo03@gmail.com</span>
                        </p>
                    </div>
                </div>

                <div className="mb-[20px] mt-[20px] text-[15px] text-center">
                    &copy; Emmanuel Maximo 2024. All rights reserved
                </div>
            </div>
        </div>
    )
}

export default Footer