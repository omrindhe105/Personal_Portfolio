import { SparklesCore } from "@/components/ui/sparkles";
import React from "react";
import Socials from "./Socials";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div
      id="home"
      className="bg-[#03040B] flex flex-col items-center justify-center pt-44 lg:pt-36 pb-40 lg:pb-10"
    >
      <div className="space-y-1">
        <h2 className="z-10 text-3xl font-bold text-center text-transparent duration-1000 bg-white cursor-default text-stroke animate-title sm:text-5xl md:text-6xl whitespace-nowrap bg-clip-text pb-10">
          Welcome to my Portfolio
        </h2>
        <h1 className="z-10 text-4xl font-bold text-center text-transparent duration-1000 bg-white cursor-default sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text bg-gradient-to-r from-purple-300 to-purple-800 animate-fade-in-3">
          Om Rindhe
        </h1>
      </div>
      <Socials />
      <div className="hidden lg:block w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-purple-800 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-purple-800 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-300 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-300 to-transparent h-px w-1/4" />
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1.5}
          particleDensity={400}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-[#03040B] [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      <Link
        href="#"
        target="_blank"
        className="flex items-center text-white mt-10 py-2 px-6 rounded-full border border-purple-400 shadow-md cursor-default hover:shadow-lg shadow-amber-600 transition duration-300 ease-in-out"
      >
        Download CV
        <ArrowDown />
      </Link>
    </div>
  );
};

export default HeroSection;
