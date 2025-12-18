"use client";

import React from "react";

interface CTAButtonProps {
    label: string;
    onClick?: () => void;
    href?: string;
    className?: string;
}

export const CTAGlass: React.FC<CTAButtonProps> = ({ 
    label, 
    onClick, 
    href,
    className = "" 
}) => {
    const baseClasses = `
        flex justify-center items-center
        px-5 py-2
        bg-white/10 
        backdrop-blur-md 
        border border-white 
        text-white 
        font-inter-regular
        transition-all 
        duration-300 
        hover:bg-white/20 
        hover:shadow-lg 
        hover:shadow-white/20
        ${className}
    `.trim().replace(/\s+/g, ' ');

    if (href) {
        return (
            <a 
                href={href} 
                className={baseClasses}
                onClick={onClick}
            >
                {label}
            </a>
        );
    }

    return (
        <button 
            onClick={onClick} 
            className={baseClasses}
        >
            {label}
        </button>
    );
};

export default CTAGlass;