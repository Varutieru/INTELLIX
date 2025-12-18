"use client";

import React from "react";

interface CTAButtonProps {
    label: string;
    onClick?: () => void;
    href?: string;
    className?: string;
}

export const CTAWhite: React.FC<CTAButtonProps> = ({ 
    label, 
    onClick, 
    href,
    className = "" 
}) => {
    const baseClasses = `
        flex justify-center items-center
        px-5 py-2 
        bg-white
        border border-white 
        text-black
        font-inter-regular
        transition-all 
        duration-300 
        hover:bg-white/90
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

export default CTAWhite;