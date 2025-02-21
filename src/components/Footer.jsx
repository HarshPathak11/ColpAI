import React from 'react';

export default function MapAndFooter() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Map Section */}
      <section className="relative w-full h-[450px]">
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14247.814616179946!2d80.32526824501041!3d26.486492845863366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c3865e63e7bc1%3A0x1719b21a71bf62e8!2sHBTU%20East%20Campus%2C%20Nawabganj%2C%20Kanpur%2C%20Uttar%20Pradesh%20208002!5e0!3m2!1sen!2sin!4v1677078789016!5m2!1sen!2sin"
        // src = "src=""
        className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        {/* Get Directions Button */}
        <div className="absolute top-4 left-4">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=HBTU+East+Campus%2C+Nawabganj%2C+Kanpur%2C+Uttar+Pradesh+208002"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-gray-700 font-semibold py-2 px-4 rounded shadow-md hover:bg-gray-100"
          >
            Get directions
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-black text-white py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center">
          <p className="text-sm">
            Copyright © 2025 <span className="font-semibold">ColpAI</span>.
            All Rights Reserved.
          </p>
          <p className="text-sm mt-1">
            Powered by <span className="font-semibold">GoDaddy</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
