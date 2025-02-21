'use client';
import React from 'react';
import Image from 'next/image';

export default function CompanyShowcase() {
  return (
    <div className="p-4 md:p-8 lg:p-12 bg-white">
      {/* Global Font Import (Open Sans) */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');
        body {
          font-family: 'Open Sans', sans-serif;
        }
      `}</style>

      {/* Our Mission */}
      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-500 mb-8">
          Our Mission
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left: Image */}
          <div className="flex-1">
            <Image
              src="/profile2.webp" 
              alt="Mission"
              width={200}
              height={200}
              className="w-full h-autoshadow-md object-cover"
            />
          </div>
          {/* Right: Text */}
          <div className="flex-1 font-jost text-gray-700 leading-relaxed">
            <p className="text-lg">
              TanPrish Dynamics is revolutionizing society by leveraging
              <strong> MedTech innovations</strong>, particularly in the field
              of cervical cancer detection. They utilize
              <strong> 3D printing technology</strong> to create accessible and
              affordable home testing kits for early diagnosis. Their
              AI-driven application guides users through self-collection tests,
              ensuring accurate and timely results.
            </p>
          </div>
        </div>
      </section>

      {/* Our Planned Products */}
      <section className="mb-16">
        <h2 className="text-3xl font-jost md:text-4xl font-bold text-center  text-blue-500 mb-8">
          Our Planned Products
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left: Bullet List */}
          <div className="flex-1 text-gray-700 leading-relaxed">
            <ol className="list-decimal list-inside text-lg space-y-2">
              <li>ColpAI</li>
              <li>3D Printed Colposcopic Attachment for Mobile Devices</li>
              <li>Design of Personalized 3D Printed Medical Implants</li>
              <li>3D Printed Wearable Devices</li>
            </ol>
          </div>
          {/* Right: Image */}
          <div className="flex-1">
            <Image
              src="/hand.webp" // Replace with your image
              alt="3D Printing"
              width={200}
              height={200}
              className="w-full h-auto  shadow-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section>
        <h2 className="text-3xl font-jost md:text-4xl font-bold text-center  text-blue-500 mb-8">
          Our Services
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left: Image */}
          <div className="flex-1 order-2 md:order-1">
            <Image
              src="/services.webp" // Replace with your image
              alt="Services"
              width={200}
              height={200}
              className="w-full h-auto shadow-md object-cover"
            />
          </div>
          {/* Right: Bullet List */}
          <div className="flex-1 font-jost order-1 md:order-2 text-gray-700 leading-relaxed">
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>3D Printing and Allied Services</li>
              <li>All 3D Design and Drawing Solutions</li>
              <li>All Analysis Solutions for Mechanical Engineers</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
