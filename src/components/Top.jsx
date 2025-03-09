// "use client";
// import Image from "next/image";
// import { Facebook, Twitter, Instagram } from "lucide-react";

// const TopHeader = () => {
//   return (
//     <header className="bg-white shadow">
//       <div className="mx-auto max-w-7xl px-1 py-2 flex flex-wrap items-center justify-between">
//         {/* LEFT: Main logo + Name (and certifications on md+) */}
//         <div className="flex items-center space-x-4">
//           {/* Main Logo + Name */}
//           <div className="flex items-center space-x-2">
//             <Image
//               src="/topcop.png"
//               alt="Company/University Name"
//               width={500}
//               height={100}
//               className="object-contain"
//             />
//           </div>

//           {/* Certification Logos (hidden on mobile) */}
//           <div className="hidden md:flex items-center space-x-2">
//             <Image
//               src="/gov.png"
//               alt="Certification 1"
//               width={170}
//               height={50}
//               className="object-contain"
//             />
//             <Image
//               src="/start.png"
//               alt="Certification 2"
//               width={170}
//               height={50}
//               className="object-contain"
//             />
//             <Image
//               src="/msme.png"
//               alt="Certification 3"
//               width={120}
//               height={50}
//               className="object-contain"
//             />
//             <Image
//               src="/upstart.png"
//               alt="Certification 3"
//               width={120}
//               height={50}
//               className="object-contain"
//             />
//             {/* Add more logos as needed */}
//           </div>
//         </div>

//         <div className="flex items-center space-x-6 mt-2 md:mt-0 text-black">
//           <a
//             href="https://facebook.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:opacity-75 transition"
//           >
//             <Facebook className="w-6 h-6" />
//           </a>
//           <a
//             href="https://twitter.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:opacity-75 transition"
//           >
//             <Twitter className="w-6 h-6" />
//           </a>
//           <a
//             href="https://instagram.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:opacity-75 transition"
//           >
//             <Instagram className="w-6 h-6" />
//           </a>
//           {/* Add more Lucide icons as needed */}
//         </div>

//         {/* CERTIFICATION LOGOS for MOBILE */}
//         <div className="mt-2 w-full md:hidden flex items-center space-x-2">
//           <Image
//             src="/gov.png"
//             alt="Certification 1"
//             width={70}
//             height={40}
//             className="object-contain"
//           />
//           <Image
//             src="/start.png"
//             alt="Certification 2"
//             width={70}
//             height={40}
//             className="object-contain"
//           />
//           <Image
//             src="/msme.png"
//             alt="Certification 3"
//             width={70}
//             height={40}
//             className="object-contain"
//           />
//           <Image
//             src="/upstart.png"
//             alt="Certification 3"
//             width={70}
//             height={40}
//             className="object-contain"
//           />
//           {/* Add more logos as needed */}
//         </div>
//       </div>
//     </header>
//   );
// // };

// // export default TopHeader;

// "use client";
// import Image from "next/image";
// import { Facebook, Twitter, Instagram } from "lucide-react";

// const TopHeader = () => {
//   return (
//     <header className="bg-white shadow">
//       <div className="mx-auto max-w-7xl px-1 py-2 flex flex-wrap items-center justify-between">
//         {/* LEFT: Main logo + Name */}
//         <div className="flex items-center space-x-4">
//           <div className="flex justify-center md:justify-start items-center space-x-2">
//             {/* Main logo / combined brand image */}
//             <Image
//               src="/topcop.png"
//               alt="Company/University Name"
//               width={500}
//               height={100}
//               className="object-contain w-[200px] sm:w-[300px] md:w-[400px]"
//               /*
//                 ^ Adjust these w-[xx] values as needed
//                 e.g. w-48, w-64, etc. for your design
//               */
//             />
//           </div>

//           {/* Certification Logos (hidden on mobile) */}
//           <div className="hidden md:flex items-center space-x-2">
//             <Image
//               src="/gov.png"
//               alt="Certification 1"
//               width={170}
//               height={50}
//               className="object-contain w-20 lg:w-44"
//             />
//             <Image
//               src="/start.png"
//               alt="Certification 2"
//               width={170}
//               height={50}
//               className="object-contain w-20 md:w-28 lg:w-44"
//             />
//             <Image
//               src="/msme.png"
//               alt="Certification 3"
//               width={120}
//               height={50}
//               className="object-contain w-16  md:w-28 lg:w-36"
//             />
//             <Image
//               src="/upstart.png"
//               alt="Certification 4"
//               width={120}
//               height={50}
//               className="object-contain w-16  md:w-28 lg:w-40"
//             />
//             {/* Add more logos similarly if needed */}
//           </div>
//         </div>

//         {/* RIGHT: Social Media Icons */}
//         <div className="hidden md:flex items-center space-x-6 mt-2 md:mt-0 text-black">
//           <a
//             href="https://facebook.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:opacity-75 transition"
//           >
//             <Facebook className="w-6 h-6" />
//           </a>
//           <a
//             href="https://twitter.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:opacity-75 transition"
//           >
//             <Twitter className="w-6 h-6" />
//           </a>
//           <a
//             href="https://instagram.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:opacity-75 transition"
//           >
//             <Instagram className="w-6 h-6" />
//           </a>
//           {/* Add more Lucide icons as needed */}
//         </div>

//         {/* CERTIFICATION LOGOS for MOBILE (shown below md breakpoint) */}
//         <div className="mt-2 w-full md:hidden flex items-center space-x-2">
//           <Image
//             src="/gov.png"
//             alt="Certification 1"
//             width={70}
//             height={40}
//             className="object-contain w-16"
//           />
//           <Image
//             src="/start.png"
//             alt="Certification 2"
//             width={70}
//             height={40}
//             className="object-contain w-16"
//           />
//           <Image
//             src="/msme.png"
//             alt="Certification 3"
//             width={70}
//             height={40}
//             className="object-contain w-16"
//           />
//           <Image
//             src="/upstart.png"
//             alt="Certification 4"
//             width={70}
//             height={40}
//             className="object-contain w-16"
//           />
//           {/* Add more logos similarly if needed */}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default TopHeader;

"use client";
import Image from "next/image";
import { Facebook, Twitter, Instagram } from "lucide-react";

const TopHeader = () => {
  return (
    <header className="bg-white shadow">
      <div
        className="
          mx-auto max-w-7xl 
          px-2 py-2 
          grid 
          grid-cols-1 
          md:grid-cols-2 
          lg:grid-cols-3 
          gap-4 
          items-center
        "
      >
        {/* 1) Main Logo Section */}
        <div className="flex justify-center md:justify-start">
          {/* <Image
            src="/topcop.png"
            alt="Company/University Name"
            width={500}
            height={100}
            className="
              object-contain
              w-[200px] 
              sm:w-[300px] 
              md:w-[400px]
            "
          /> */}
          <Image
            src="/blob.png"
            alt="Company/University Name"
            width={500}
            height={100}
            className="
              object-contain
              w-[30px] 
              sm:w-[50px] 
              md:w-[60px]
            "
          />
          <Image
            src="/cmp.png"
            alt="Company/University Name"
            width={500}
            height={100}
            className="
              object-contain
              w-[100px] 
              sm:w-[150px] 
              md:w-[370px]
            "
          />
        </div>

        {/* 2) Certificates Section */}
        <div className="flex gap-2 items-center justify-center md:justify-start">
          <Image
            src="/gov.png"
            alt="Certification 1"
            width={170}
            height={50}
            className="
              object-contain 
              w-20 
              sm:w-28 
              md:w-28 
              lg:w-44
            "
          />
          <Image
            src="/start.png"
            alt="Certification 2"
            width={170}
            height={50}
            className="
              object-contain 
              w-20 
              sm:w-28 
              md:w-28 
              lg:w-44
            "
          />
          <Image
            src="/msme.png"
            alt="Certification 3"
            width={120}
            height={50}
            className="
              object-contain 
              w-16 
              sm:w-24 
              md:w-28 
              lg:w-36
            "
          />
          <Image
            src="/upstart.png"
            alt="Certification 4"
            width={120}
            height={50}
            className="
              object-contain 
              w-16 
              sm:w-24 
              md:w-28 
              lg:w-40
            "
          />
        </div>

        {/* 3) Social Media (Only visible on lg and up) */}
        <div className="hidden lg:flex justify-end items-center space-x-6 text-black">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition"
          >
            <Instagram className="w-6 h-6" />
          </a>
          {/* Add more Lucide icons as needed */}
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
