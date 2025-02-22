// 'use client';
// import React from 'react';
// import Image from 'next/image';

// export default function CompanyShowcase() {
//   return (
//     <div className="p-4 md:p-8 lg:p-12 bg-white font-jost">

//       {/* Our Mission */}
//       <section className="mb-16">
//         <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-500 mb-8">
//           Our Mission
//         </h2>
//         <div className="flex flex-col md:flex-row items-center gap-8">
//           {/* Left: Image */}
//           <div className="flex-1">
//             <Image
//               src="/profile2.webp" 
//               alt="Mission"
//               width={200}
//               height={200}
//               className="w-full h-autoshadow-md object-cover"
//             />
//           </div>
//           {/* Right: Text */}
//           <div className="flex-1 font-jost text-gray-700 leading-relaxed">
//             <p className="text-lg">
//               TanPrish Dynamics is revolutionizing society by leveraging
//               <strong> MedTech innovations</strong>, particularly in the field
//               of cervical cancer detection. They utilize
//               <strong> 3D printing technology</strong> to create accessible and
//               affordable home testing kits for early diagnosis. Their
//               AI-driven application guides users through self-collection tests,
//               ensuring accurate and timely results.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Our Planned Products */}
//       <section className="mb-16">
//         <h2 className="text-3xl font-jost md:text-4xl font-bold text-center  text-blue-500 mb-8">
//           Our Planned Products
//         </h2>
//         <div className="flex flex-col md:flex-row items-center gap-8">
//           {/* Left: Bullet List */}
//           <div className="flex-1 text-gray-700 leading-relaxed">
//             <ol className="list-decimal list-inside text-lg space-y-2">
//               <li>ColpAI</li>
//               <li>3D Printed Colposcopic Attachment for Mobile Devices</li>
//               <li>Design of Personalized 3D Printed Medical Implants</li>
//               <li>3D Printed Wearable Devices</li>
//             </ol>
//           </div>
//           {/* Right: Image */}
//           <div className="flex-1">
//             <Image
//               src="/hand.webp" // Replace with your image
//               alt="3D Printing"
//               width={200}
//               height={200}
//               className="w-full h-auto  shadow-md object-cover"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Our Services */}
//       <section>
//         <h2 className="text-3xl font-jost md:text-4xl font-bold text-center  text-blue-500 mb-8">
//           Our Services
//         </h2>
//         <div className="flex flex-col md:flex-row items-center gap-8">
//           {/* Left: Image */}
//           <div className="flex-1 order-2 md:order-1">
//             <Image
//               src="/services.webp" // Replace with your image
//               alt="Services"
//               width={200}
//               height={200}
//               className="w-full h-auto shadow-md object-cover"
//             />
//           </div>
//           {/* Right: Bullet List */}
//           <div className="flex-1 font-jost order-1 md:order-2 text-gray-700 leading-relaxed">
//             <ul className="list-disc list-inside text-lg space-y-2">
//               <li>3D Printing and Allied Services</li>
//               <li>All 3D Design and Drawing Solutions</li>
//               <li>All Analysis Solutions for Mechanical Engineers</li>
//             </ul>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

"use client";
import React from "react";
import Image from "next/image";
// 1. Import motion from framer-motion
import { motion } from "framer-motion";

export default function CompanyShowcase() {
  return (
    <div className="p-4 md:p-8 lg:p-10 font-jost">

      {/* Our Mission */}
      {/* 2. Wrap section with motion.section */}
      <motion.section
        className="mb-16"
        initial={{ opacity: 0, x: -50 }} // start invisible & slightly left
        whileInView={{ opacity: 1, x: 0 }} // animate to fully visible
        transition={{ duration: 0.8 }} // animation speed
        viewport={{ once: true, amount: 0.2 }} // triggers only once, when ~20% of element is in view
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-500 mb-8">
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
            <p className="md:p-6 text-lg md:text-xl">
              TanPrish Dynamics is revolutionizing society by leveraging
              <strong> MedTech innovations</strong>, particularly in the field
              of cervical cancer detection. They utilize
              <strong> 3D printing technology</strong> to create accessible and
              affordable home testing kits for early diagnosis. Their AI-driven
              application guides users through self-collection tests, ensuring
              accurate and timely results.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Our Planned Products */}
      <motion.section
        className="mb-16"
        initial={{ opacity: 0, y: 50 }} // start invisible & slightly below
        whileInView={{ opacity: 1, y: 0 }} // animate to fully visible
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-4xl font-jost md:text-5xl font-bold text-center text-blue-500 mb-8">
          Our Planned Products
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left: Bullet List */}
          <div className="flex-1 text-gray-700 leading-relaxed md:p-6">
            <ul className="list-disc list-inside text-lg md:text-xl space-y-2">
              <li>ColpAI</li>
              <li>3D Printed Colposcopic Attachment for Mobile Devices</li>
              <li>Design of Personalized 3D Printed Medical Implants</li>
              <li>3D Printed Wearable Devices</li>
            </ul>
          </div>
          {/* Right: Image */}
          <div className="flex-1">
            <Image
              src="/hand.webp"
              alt="3D Printing"
              width={200}
              height={200}
              className="w-full h-auto shadow-md object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* Our Services */}
      <motion.section
        className="mb-16"
        initial={{ opacity: 0, x: 50 }} // start invisible & slightly right
        whileInView={{ opacity: 1, x: 0 }} // animate to fully visible
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-4xl font-jost md:text-5xl font-bold text-center text-blue-500 mb-8">
          Our Services
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left: Image */}
          <div className="flex-1 order-2 md:order-1">
            <Image
              src="/services.webp"
              alt="Services"
              width={200}
              height={200}
              className="w-full h-auto shadow-md object-cover"
            />
          </div>
          {/* Right: Bullet List */}
          <div className="md:p-6 flex-1 font-jost order-1 md:order-2 text-gray-700 leading-relaxed">
            <ul className="list-disc list-inside text-lg md:text-xl space-y-2">
              <li>3D Printing and Allied Services</li>
              <li>All 3D Design and Drawing Solutions</li>
              <li>All Analysis Solutions for Mechanical Engineers</li>
            </ul>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
