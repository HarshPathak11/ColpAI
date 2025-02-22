"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CervicalCancerPage() {
  return (
    <div className="font-jost">
      {/* 1) WHAT IS CERVICAL CANCER? */}
      <motion.section
        className="p-4 md:p-8 lg:p-12 bg-blue-50"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4 text-center">
          What is Cervical Cancer?
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left: Text */}
          <div className="flex-1 text-gray-800 leading-relaxed order-2 md:order-1">
            <p className="text-lg mb-4">
              Cervical cancer occurs in the cells of the cervix. In over{" "}
              <strong>99% of cases</strong>, it's linked to{" "}
              <strong>HPV infection</strong>. Early detection is crucial to
              improving survival rates, yet awareness and screening remain low
              in many parts of the world.
            </p>
            <div className="bg-white border-l-4 border-blue-500 p-4 rounded shadow-sm">
              <ul className="list-disc list-inside text-sm text-gray-700">
                <li>
                  <strong>1 out of 4</strong> women who die from cervical cancer
                  worldwide is Indian
                </li>
                <li>
                  Every <strong>7 minutes</strong>, an Indian woman dies of
                  cervical cancer
                </li>
              </ul>
            </div>
          </div>
          {/* Right: Image */}
          <div className="flex-1 order-1 md:order-2">
            <Image
              src="/cerv.png" // replace with actual image
              alt="Cervical Cancer"
              width={400}
              height={300}
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </motion.section>

      {/* 2) WHAT IS HPV? */}
      <motion.section
        className="p-4 md:p-8 lg:p-12 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4 text-center">
          What is HPV?
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left: Image */}
          <div className="flex-1">
            <Image
              src="/aree.jpg" // replace with actual image
              alt="HPV"
              width={400}
              height={300}
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
          {/* Right: Text */}
          <div className="flex-1 text-gray-800 leading-relaxed">
            <p className="text-lg">
              HPV (Human Papillomavirus) is a <strong>common</strong> sexually
              transmitted virus. Certain strains can lead to cervical cancer if
              the infection persists. Awareness about HPV’s role in cancer
              development is key to prevention and early intervention.
            </p>
            <div className="mt-4">
              <p className="text-sm text-gray-700">
                <strong>Key Takeaway:</strong> Regular screening, vaccination,
                and safe practices can significantly reduce HPV-related cancer
                risks.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3) WHY COLPOSCOPY? */}
      <motion.section
        className="p-4 md:p-8 lg:p-12 bg-gray-50"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4 text-center">
          Why Colposcopy?
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left: Text */}
          <div className="flex-1 text-gray-800 leading-relaxed order-2 md:order-1">
            <p className="text-lg mb-4">
              Colposcopy is a key diagnostic procedure that allows doctors to
              visually inspect the cervix for potential abnormalities. However,
              traditional colposcopy faces numerous challenges:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Limited resources and high cost in many low-income areas</li>
              <li>Subjective interpretation leading to inconsistent results</li>
              <li>Training deficits for healthcare providers</li>
              <li>Potential for false positives or negatives</li>
            </ul>
          </div>
          {/* Right: Image */}
          <div className="flex-1 order-1 md:order-2">
            <Image
              src="/th.jpeg.jpg" // replace with actual image
              alt="Why Colposcopy"
              width={400}
              height={300}
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </motion.section>

      {/* 4) HOW COLPAI SOLVES THE PROBLEM */}
      <motion.section
        className="p-6 md:p-12 lg:p-16 bg-white"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4 text-center">
          How ColpAI Assists
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 items-center">
          {/* Left: Text */}
          <div className="text-gray-800 leading-relaxed order-2 md:order-1">
            <p className="text-lg mb-4">
              <strong>ColpAI</strong> integrates{" "}
              <strong>AI-driven imaging and diagnostics</strong> to enhance
              accuracy in cervical cancer screening. By reducing human error and
              making the process cost-effective, it’s ideal for resource-limited
              settings.
            </p>
            <div className="border-l-4 border-blue-500 bg-gray-50 p-4 text-sm rounded shadow-sm">
              <p className="mb-2">
                <strong>Key Benefits of ColpAI:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Lower cost (~70–90% cheaper than existing solutions)</li>
                <li>Enhanced diagnostic accuracy (up to 95% sensitivity)</li>
                <li>
                  Minimizes false results with consistent quality control
                </li>
                <li>Scalable for large communities and remote clinics</li>
              </ul>
            </div>
          </div>
          {/* Right: Image */}
        </div>
      </motion.section>
    </div>
  );
}
