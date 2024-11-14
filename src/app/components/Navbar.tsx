"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="h-20 w-full flex justify-between items-center p-4 bg-[#044E83] md:p-12 relative">
            {/* Logo */}
            <div>
                <Image
                    src="/images/logo.png"
                    alt="Logo"
                    loading="lazy"
                    width="90"
                    height="113"
                    decoding="async"
                    className="mt-4 w-[70px] sm:mt-6 sm:w-[80px] md:w-[90px]"
                    layout="fixed"
                    objectFit="contain"
                />
            </div>

            {/* Subtitle - Centered */}
            <div className="flex-grow text-center">
                <h1 className="text_shadow text-[1.125rem] font-extrabold text-[#B9D8F3]">
                    Tuition Free Education Program on Latest Technologies
                </h1>
            </div>

            {/* Hamburger Icon for Mobile */}
            <button
                className="md:hidden text-[#B9D8F3] focus:outline-none"
                onClick={toggleMenu}
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                </svg>
            </button>

            {/* Nav Links */}
            <ul
                className={`${
                    isMenuOpen ? "flex" : "hidden"
                } flex-col md:flex md:flex-row md:items-center md:gap-10 absolute md:static bg-[#044E83] w-full md:w-auto top-full left-0 md:top-auto md:left-auto transition-all`}
            >
                <li className="p-4 text-[#FAF9F6] cursor-pointer">
                    <Link href="/">Home</Link>
                </li>
                <li className="p-4 text-[#FAF9F6] cursor-pointer">
                    <Link href="/apply">Apply</Link>
                </li>
                <li className="p-4 text-[#FAF9F6] cursor-pointer">
                    <Link href="/job">Job</Link>
                </li>
                <li className="p-4 text-[#FAF9F6] cursor-pointer">
                    <Link href="/result">Result</Link>
                </li>
                <li className="p-4 text-[#FAF9F6] cursor-pointer">
                    <Link href="/courses">Courses</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
