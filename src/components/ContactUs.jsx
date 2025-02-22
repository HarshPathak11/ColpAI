import Image from 'next/image';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function ContactUsSection() {
  return (
    <section className="py-10 px-4 md:px-12 bg-white rounded-lg shadow-md font-jost">
      {/* Heading */}
      {/* <h2 className="text-3xl font-bold text-gray-800 text-center">Contact Us</h2> */}

      {/* Content Row */}
      <div className="mt-8 flex flex-col md:flex-row gap-8 items-start">
        {/* Left Side: Text and Button */}
        <div className="md:w-1/2 text-left">
          <h3 className="text-2xl font-semibold text-gray-800">
            Better yet, see us in person!
          </h3>
          <p className="mt-2 text-gray-700">
            We love our customers, so feel free to visit during normal business hours.
          </p>

          <a
            href="https://wa.me/917905194574"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-900 transition-colors"
          >
            Message us on WhatsApp {<FaWhatsapp className='inline w-6 h-6 md:ml-1 ' fill='#10f427'/>}
          </a>

          <div className="mt-6 text-gray-700">
            <p className="font-semibold">TanPrish Dynamics Private Limited</p>
            <p>
              HBTU East Campus, HBIT East Campus, Nawabganj, Kanpur, 
              Uttar Pradesh 208002, India
            </p>
            <p className="mt-2 font-semibold">+91 7905194574</p>
            <p className="mt-2">
              Today: <span className="font-semibold">By Appointment</span>
            </p>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/profile1.webp" 
            alt="TanPrish Dynamics Private Limited"
            width={400}
            height={400}
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
