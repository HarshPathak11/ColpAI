import React from 'react';

export default function MapAndFooter() {
  return (
    <div className="flex flex-col ">
      {/* Map Section */}
      <section className="relative w-full h-[450px]">
        <iframe
          title="Our Location"
          src="https://www.google.com/maps?q=26.493714,80.3102051&hl=en&z=15&output=embed"
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
    </div>
  );
}
