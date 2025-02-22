"use client"; // If using Next.js 13+ app directory, to enable client-side interactivity

import React, { useState } from "react";
import { FaCommentDots } from "react-icons/fa";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
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
          className="fixed bottom-20 right-6 md:bottom-6 md:right-6 w-80 md:w-96 bg-white text-gray-800 shadow-xl rounded-md z-50 border border-gray-300"
          style={{ maxHeight: "80vh" }}
        >
          {/* Header */}
          <div className="bg-blue-100 px-4 py-3 rounded-t-md flex items-center justify-between">
            <div>
              <h2 className="text-md font-semibold text-blue-900">ColpAI</h2>
              <p className="text-sm text-blue-800 mt-1">
                Hi! Let us know how we can help and we’ll respond shortly.
              </p>
            </div>
            {/* Close Button */}
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={toggleChat}
            >
              ✕
            </button>
          </div>

          {/* Form Content */}
          <div className="p-4 overflow-y-auto" style={{ maxHeight: "60vh" }}>
            <form className="flex flex-col space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name*
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email*
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  How can we help?*
                </label>
                <textarea
                  required
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Your message"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Send
              </button>
            </form>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 text-xs text-center text-gray-400 py-2 rounded-b-md">
            Powered by GoDaddy Airo
          </div>
        </div>
      )}
    </>
  );
}
