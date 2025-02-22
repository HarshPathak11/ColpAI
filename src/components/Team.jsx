"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/**
 * Page 2: Displays the team members and their roles.
 */
export default function TeamSection() {
  const teamMembers = [
    {
      name: "Abhay Dwivedi",
      role: "C.T.O. / M.D. and Co-Founder (49%)",
      functions: "Technology & AI Development, Financial Oversight",
      image: "/dunno.png", // placeholder image path
    },
    {
      name: "Anamika Mishra Pandey",
      role: "C.E.O. / Director and Co-Founder (51%)",
      functions: "Operation Management, Partnerships & Fundraising",
      image: "/anamika.png", // placeholder image path
    },
    // Add more team members here if needed
  ];

  return (
    <div className="p-4 md:p-8 lg:p-12 bg-white">
      {/* Global font import or custom styles (optional) */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");
        body {
          font-family: "Open Sans", sans-serif;
        }
      `}</style>

      <motion.h2
        className="text-3xl md:text-4xl font-bold text-blue-500 mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        Meet Our Team
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-50 rounded-lg p-6 shadow-md"
          >
            {/* Image */}
            <div className="w-32 h-32 mb-4 relative">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover rounded-full"
              />
            </div>
            {/* Name / Role / Functions */}
            <h3 className="text-xl font-semibold text-gray-800">
              {member.name}
            </h3>
            <p className="text-gray-600 text-sm mt-1">{member.role}</p>
            <p className="text-gray-700 text-sm mt-2 text-center">
              {member.functions}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
