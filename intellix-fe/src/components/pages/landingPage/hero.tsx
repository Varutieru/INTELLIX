"use-client";

import { CTAGlass } from "@/components/ui/CTAbutton/ctaGlass";
import { CTAWhite } from "@/components/ui/CTAbutton/ctaWhite";
import React from "react";

export const Hero = () => {
    return (
        <section className="relative w-full h-screen flex items-end px-[5vw] pb-[5vh] overflow-hidden">

            {/* Contents */}
            <div className="relative z-10 flex flex-col gap-8 justify-end items-start max-w-7xl w-full">

                <div className="inline-flex items-center px-5 py-2 border border-white/30 rounded-full backdrop-blur-sm">
                    <span className="text-white/90 text-sm font-inter-regular tracking-wider">
                        NEXT-GEN AI
                    </span>
                </div>

                <h1 className="font-sora-regular text-white text-6xl leading-none max-w-2xl">
                    Access <br/>
                    Intelligence <br/>
                    Beyond Today
                </h1>

                <p className="text-white/80 text-lg font-inter-light max-w-[25vw] leading-tight">
                    A Powerful AI Platform Built To Help Teams Think Deeper, Move Faster, And Unlock What's Next.
                </p>

                <div className="flex flex-col gap-2">

                    <div className="flex flex-row gap-5">

                    <CTAWhite
                        label="Enter The Platform" 
                        href="/"    
                    />
                    <CTAGlass
                        label="Learn More" 
                        href="/"
                    />

                    </div>

                    <p className="text-white/50 text-xs font-inter-light leading-tight">
                        *No Credit Card Required
                    </p>


                </div>
                

            </div>

        </section>
    )
};

export default Hero;