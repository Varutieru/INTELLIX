"use client";
import Header from "@/components/layout/header";
import { Hero } from "@/components/pages/landingPage/hero";

export default function Main() {
  return (
    <main className="bg-[#000000] relative max-w-screen min-h-screen">
      
      <div className="w-full fixed z-100">
        <Header />
      </div>

      <div className="relative w-full h-screen">
        <Hero />
      </div>
      
    </main>
  );
}
