"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { CTAGlass } from "@/components/ui/CTAbutton/ctaGlass";

const navItems = [
    { label: "Product", href:"/product" },
    { label: "Features", href:"/features" },
    { label: "Use Cases", href:"/usecases" },
    { label: "Pricing", href:"/pricing" },
    { label: "About", href:"/about" },
    { label: "Blog", href:"/blog" },
];

export const Header = () => {
    return (
        <header className="w-full h-auto flex justify-between items-center px-[5vw] pt-[2vw] gap-full">
            {/* Logo */}
            <div>
                <Image
                    src="/assets/logo/logo.svg"
                    alt="Intellix Logo"
                    width={150}
                    height={50}
                    className="object-contain"
                />
            </div>

            {/* Navigation Items */}
            <nav className="absolute left-1/2 transform -translate-x-1/2 flex justify-between items-center gap-12">
                {navItems.map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        className="relative text-white font-inter-light group"
                    >
                        {item.label}
                        <span className="absolute left-0 bottom-0 w-0 h-[0.25px] bg-white transition-all duration-300 group-hover:w-full">

                        </span>
                    </a>
                ))}
            </nav>

            {/* Call to Action */}
            <div>
                <CTAGlass
                    className="ml-full"
                    label="Request Access" 
                    href="/"
                />  
            </div>

        </header>
    )
};

export default Header;