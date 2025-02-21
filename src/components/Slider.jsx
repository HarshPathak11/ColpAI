// 'use client';

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';



// // Example data for each slide
// const slides= [
//   {
//     image: '/girls.jpg', // Replace with your actual image path
//     title: 'Slide 1 Heading',
//     text: 'Short description for slide 1 goes here.',
//   },
//   {
//     image: '/girls.jpg',
//     title: 'ColpAI Why?',
//     text: 'The application addresses limited access to regular cervical cancer screenings in the need for affordable, accurate testing',
//   },
//   {
//     image: '/girls.jpg',
//     title: 'ColpAI What?',
//     text: 'A cost-effective AI app facilitates early and accurate cervical cancer detection, empowering women with reducing cancer rates ',
//   },
//   {
//     image: '/girls.jpg',
//     title: 'ColpAI How?',
//     text: 'AI based Application working seamlessly with all Android devices and IOS devices to remove Intermediatery Colposcope ',
//   },
//   {
//     image: '/girls.jpg',
//     title: 'ColpAI Where?',
//     text: 'Women\'s all across the Globe with limited access to resources especially in Low Income Economies\' and Third World Countries',
//   },
// ];

// export default function Slider() {
//   return (
//     <div className="relative w-full max-w-screen-xl mx-auto">
//       <Swiper
//         modules={[Navigation, Autoplay]}
//         navigation
//         autoplay={{ delay: 4000, disableOnInteraction: false }}
//         loop
//         speed={1000} // Slow transition speed (in ms)
//         slidesPerView={1}
//         className="w-full h-[400px] md:h-[500px] overflow-hidden"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             {/* Slide Background */}
//             <div
//               className="
//                 relative w-full h-full
//                 bg-cover bg-center
//                 flex flex-col items-center justify-center
//                 text-white
//               "
//               style={{ backgroundImage: `url(${slide.image})` }}
//             >
//               {/* Overlay (optional, for darker background contrast) */}
//               <div className="absolute inset-0 bg-black/40" />

//               {/* Slide Content */}
//               <div className="relative z-10 flex flex-col items-center px-4 gap-4">
//                 <h2 className="text-2xl md:text-4xl font-bold mb-2">
//                   {slide.title}
//                 </h2>
//                 {slide.text && (
//                   <p className="px-40 md:px-64 lg:px-96 text-center text-xl md:text-lg mb-4">{slide.text}</p>
//                 )}
//                 <button
//                   type="button"
//                   className="
//                     border-2 border-white
//                     text-white px-6 py-2
//                     rounded-full
//                     hover:bg-white hover:text-black
//                     transition-colors
//                   "
//                 >
//                   Know More
//                 </button>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }
'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    image: '/girls.jpg',
    title: 'ColpAI',
  },
  {
    image: '/girls.jpg',
    title: 'ColpAI Why?',
    text: 'The application addresses limited access to regular cervical cancer screenings in the need for affordable, accurate testing',
  },
  {
    image: '/girls.jpg',
    title: 'ColpAI What?',
    text: 'A cost-effective AI app facilitates early and accurate cervical cancer detection, empowering women with reducing cancer rates ',
  },
  {
    image: '/girls.jpg',
    title: 'ColpAI How?',
    text: 'AI based Application working seamlessly with all Android devices and IOS devices to remove Intermediatery Colposcope ',
  },
  {
    image: '/girls.jpg',
    title: 'ColpAI Where?',
    text: "Women's all across the Globe with limited access to resources especially in Low Income Economies' and Third World Countries",
  },
];

export default function Slider() {
  return (
    <div className="relative w-full max-w-screen-xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: '.customNext',
          prevEl: '.customPrev',
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        speed={1000}
        slidesPerView={1}
        className="w-full h-[400px] md:h-[500px] overflow-hidden relative"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full font-jost">
              {/* Background image with blur and lower opacity */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover filter blur-sm opacity-90"
              />
              {/* Dark overlay to enhance text legibility */}
              <div className="absolute inset-0 bg-black/40" />
              
              {/* Slide content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4  gap-8">
                <h2 className="text-2xl md:text-5xl font-bold">{slide.title}</h2>
                {slide.text && (
                  <p className="px-1 md:px-64 lg:px-80 text-center text-lg md:text-xl">
                    {slide.text}
                  </p>
                )}
                <button
                  type="button"
                  className="border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors"
                >
                  Know More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* Custom Navigation Arrows */}
        <button
          className="customPrev absolute top-1/2 left-4 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
        >
          &lsaquo;
        </button>
        <button
          className="customNext absolute top-1/2 right-4 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
        >
          &rsaquo;
        </button>
      </Swiper>

      {/* Global styles to override default pagination colors */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.7;
        }
        .swiper-pagination-bullet-active {
          background: white !important;
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
