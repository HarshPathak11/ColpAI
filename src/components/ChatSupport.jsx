// "use client";
// import React, { useState } from "react";
// import { FaCommentDots } from "react-icons/fa";

// // MUI Components
// import { TextField, Button } from "@mui/material";

// export default function ChatWidget() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleChat = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       {/* Floating Button */}
//       <button
//         className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-colors"
//         onClick={toggleChat}
//       >
//         <FaCommentDots className="w-6 h-6" />
//       </button>

//       {/* Chat Form Overlay */}
//       {isOpen && (
//         <div
//           className="
//             fixed 
//             font-jost
//             bottom-20 right-6 
//             md:bottom-6 md:right-6 
//             w-80 md:w-96 
//             bg-white text-gray-800 
//             shadow-xl rounded-lg 
//             z-50 border border-gray-300
//             flex flex-col
//           "
//           style={{ maxHeight: "80vh" }}
//         >
//           {/* Top Section with Blue Background & Chat Bubble */}
//           <div className="bg-[#bfe9f8] rounded-t-lg p-6 relative">
//             {/* Title */}
//             <h2 className="text-xl font-light text-black">TanPrish Dynamics</h2>

//             {/* Chat Bubble */}
//             <div className="relative bg-white text-gray-700 text-sm p-3 mt-2 rounded-md shadow-sm max-w-sm">
//               {/* Triangle Tail */}
//               <div
//                 className="
//                   absolute 
//                   -top-2 left-4 
//                   w-0 h-0 
//                   border-l-8 border-l-transparent 
//                   border-r-8 border-r-transparent 
//                   border-b-8 border-b-white
//                 "
//               />
//               Hi! Let us know how we can help and we’ll respond shortly.
//             </div>

//             {/* Close Button */}
//             <button
//               className="absolute top-2 right-2 text-black hover:text-gray-700 text-xl"
//               onClick={toggleChat}
//               aria-label="Close Chat"
//             >
//               &times;
//             </button>
//           </div>

//           {/* Scrollable Form Area */}
//           <div
//             className="p-6 overflow-y-auto"
//             style={{ maxHeight: "70vh" }}
//           >
//             <form className="flex flex-col space-y-6">
//               {/* Name Field */}
//               <TextField
//                 label="Name"
//                 variant="outlined"
//                 required
//                 fullWidth
//                 InputLabelProps={{ style: { color: "gray" } }}
//                 inputProps={{ style: { color: "black" } }}
//               />

//               {/* Email Field */}
//               <TextField
//                 label="Email"
//                 variant="outlined"
//                 required
//                 fullWidth
//                 type="email"
//                 InputLabelProps={{ style: { color: "gray" } }}
//                 inputProps={{ style: { color: "black" } }}
//               />

//               {/* Message Field (Multiline) */}
//               <TextField
//                 label="How can we help ?"
//                 variant="outlined"
//                 required
//                 fullWidth
//                 multiline
//                 rows={7}
//                 InputLabelProps={{ style: { color: "gray" } }}
//                 inputProps={{ style: { color: "black" } }}
//               />

//               {/* Send Button */}
//               <Button
//                 variant="outlined"
//                 sx={{
//                   borderColor: "black",
//                   color: "black",
//                   borderRadius: "9999px", // Pill-shaped
//                   textTransform: "none",   // Keep normal text
//                   "&:hover": {
//                     backgroundColor: "black",
//                     color: "white",
//                   },
//                 }}
//               >
//                 Send
//               </Button>
//             </form>
//           </div>

//           {/* Footer / reCAPTCHA Notice */}
//           <div className="bg-white text-xs text-center text-gray-500 py-2 rounded-b-lg border-t border-gray-200">
//             This site is protected by reCAPTCHA and the Google{" "}
//             <a
//               href="https://policies.google.com/privacy"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="underline hover:text-gray-700"
//             >
//               Privacy Policy
//             </a>{" "}
//             and{" "}
//             <a
//               href="https://policies.google.com/terms"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="underline hover:text-gray-700"
//             >
//               Terms of Service
//             </a>{" "}
//             apply.
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// "use client";
// import React, { useState } from "react";
// import { FaCommentDots } from "react-icons/fa";

// export default function ChatWidget() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const toggleChat = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("/api/send-email", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to send message");
//       }

//       // Clear form or show success message
//       alert("Your message was sent successfully!");
//       setFormData({ name: "", email: "", message: "" });
//       setIsOpen(false);
//     } catch (error) {
//       console.error(error);
//       alert("There was an error sending your message.");
//     }
//   };

//   return (
//     <>
//       {/* Floating Button */}
//       <button
//         className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-colors"
//         onClick={toggleChat}
//       >
//         <FaCommentDots className="w-6 h-6" />
//       </button>

//       {/* Chat Form Overlay */}
//       {isOpen && (
//         <div className="fixed bottom-20 right-6 md:bottom-6 md:right-6 w-80 md:w-96 bg-white text-gray-800 shadow-xl rounded-md z-50 border border-gray-300">
//           {/* Header */}
//           <div className="bg-blue-100 px-4 py-3 rounded-t-md flex items-center justify-between">
//             <div>
//               <h2 className="text-md font-semibold text-blue-900">ColpAI</h2>
//               <p className="text-sm text-blue-800 mt-1">
//                 Hi! Let us know how we can help and we’ll respond shortly.
//               </p>
//             </div>
//             {/* Close Button */}
//             <button
//               className="text-gray-500 hover:text-gray-700"
//               onClick={toggleChat}
//             >
//               ✕
//             </button>
//           </div>

//           {/* Form Content */}
//           <div className="p-4 overflow-y-auto" style={{ maxHeight: "60vh" }}>
//             <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Name*
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
//                   placeholder="Your name"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Email*
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
//                   placeholder="Your email"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   How can we help?*
//                 </label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows={3}
//                   className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
//                   placeholder="Your message"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
//               >
//                 Send
//               </button>
//             </form>
//           </div>

//           {/* Footer */}
//           <div className="bg-gray-50 text-xs text-center text-gray-400 py-2 rounded-b-md">
//             This site is protected by reCAPTCHA and the Google Privacy Policy and
//             Terms of Service apply.
//           </div>
//         </div>
//       )}
//     </>
//   );
// }


"use client";
import React, { useState } from "react";
import { FaCommentDots } from "react-icons/fa";
import { TextField, Button } from "@mui/material";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  // Local state for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Toggle the chat widget
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      alert("Your message has been sent successfully!");

      // Clear form & close widget
      setName("");
      setEmail("");
      setMessage("");
      setIsOpen(false);
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Sorry, we couldn't send your message. Please try again later.");
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-colors"
        onClick={toggleChat}
      >
        <FaCommentDots className="w-6 h-6" />
      </button>

      {/* Chat Form Overlay */}
      {isOpen && (
        <div
          className="
            fixed 
            font-jost
            bottom-20 right-6 
            md:bottom-6 md:right-6 
            w-80 md:w-96 
            bg-white text-gray-800 
            shadow-xl rounded-lg 
            z-50 border border-gray-300
            flex flex-col
          "
          style={{ maxHeight: "80vh" }}
        >
          {/* Top Section with Blue Background & Chat Bubble */}
          <div className="bg-[#bfe9f8] rounded-t-lg p-6 relative">
            {/* Title */}
            <h2 className="text-xl font-light text-black">TanPrish Dynamics</h2>

            {/* Chat Bubble */}
            <div className="relative bg-white text-gray-700 text-sm p-3 mt-2 rounded-md shadow-sm max-w-sm">
              {/* Triangle Tail */}
              <div
                className="
                  absolute 
                  -top-2 left-4 
                  w-0 h-0 
                  border-l-8 border-l-transparent 
                  border-r-8 border-r-transparent 
                  border-b-8 border-b-white
                "
              />
              Hi! Let us know how we can help and we’ll respond shortly.
            </div>

            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-black hover:text-gray-700 text-xl"
              onClick={toggleChat}
              aria-label="Close Chat"
            >
              &times;
            </button>
          </div>

          {/* Scrollable Form Area */}
          <div className="p-6 overflow-y-auto" style={{ maxHeight: "70vh" }}>
            <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
              {/* Name Field */}
              <TextField
                label="Name"
                variant="outlined"
                required
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                InputLabelProps={{ style: { color: "gray" } }}
                inputProps={{ style: { color: "black" } }}
              />

              {/* Email Field */}
              <TextField
                label="Email"
                variant="outlined"
                required
                fullWidth
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputLabelProps={{ style: { color: "gray" } }}
                inputProps={{ style: { color: "black" } }}
              />

              {/* Message Field (Multiline) */}
              <TextField
                label="How can we help ?"
                variant="outlined"
                required
                fullWidth
                multiline
                rows={7}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                InputLabelProps={{ style: { color: "gray" } }}
                inputProps={{ style: { color: "black" } }}
              />

              {/* Send Button */}
              <Button
                type="submit"
                variant="outlined"
                sx={{
                  borderColor: "black",
                  color: "black",
                  borderRadius: "9999px", // Pill-shaped
                  textTransform: "none", // Keep normal text
                  "&:hover": {
                    backgroundColor: "black",
                    color: "white",
                  },
                }}
              >
                Send
              </Button>
            </form>
          </div>

          {/* Footer / reCAPTCHA Notice */}
          <div className="bg-white text-xs text-center text-gray-500 py-2 rounded-b-lg border-t border-gray-200">
            This site is protected by reCAPTCHA and the Google{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-700"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-700"
            >
              Terms of Service
            </a>{" "}
            apply.
          </div>
        </div>
      )}
    </>
  );
}
