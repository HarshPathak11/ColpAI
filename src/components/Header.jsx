// app/components/HeaderBanner.tsx (or .jsx)
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeaderBanner() {
  return (
    <header className="w-full font-jost">
      {/* Top Bar */}
      <Link href="https://tanprishdynamics-r5ps632.gamma.site/"><div className="bg-[#BCE5F3] text-black text-center py-2 text-sm md:text-base">
        To Learn More About HPV and Cervical Cancer
      </div>
      </Link>

      {/* Main Banner */}
      <div className="relative w-full min-h-[450px] md:min-h-[550px] flex flex-col items-center justify-center bg-white overflow-hidden text-black">
        {/* Background image (wave lines) */}
        <div
          className="
            absolute inset-0 
            bg-[url('/LetterheadTanprish.png')] 
            bg-no-repeat bg-cover bg-[50%_70%]
            opacity-100
          "
        />

        {/* Centered Content */}
        <div className="relative z-10 flex flex-col items-center gap-3 justify-center px-4 text-center">
          {/* Logo */}
          <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4">
            <Image
              src="/blob.png"
              alt="Transparent Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          

          {/* Main Heading */}
          <h1 className="text-xl md:text-5xl font-bold tracking-widest">
            Revolutionising Women&apos;s Health Screening
          </h1>

          {/* Sub-Heading */}
          <p className="mt-2 text-sm md:text-xl max-w-md">
            AI-driven app for early cervical cancer detection and empowerment.
          </p>

          {/* Button */}
          <button
            type="button"
            className="
              mt-6
              border border-black
              bg-transparent
              text-black
               px-12 py-4
               rounded-full
              hover:bg-gray-800 hover:text-white
              transition-colors
            "
          >
            Learn More
          </button>
        </div>
      </div>
    </header>
  );
}
