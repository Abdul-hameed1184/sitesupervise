"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Page() {
  const [role, setRole] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const roles = [
    { value: "manager", label: "Manager" },
    { value: "engineer", label: "Engineer" },
    { value: "worker", label: "Worker" },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Image + Text */}
      <div
        className="hidden md:flex flex-1 bg-cover bg-center relative items-center justify-center text-white"
        style={{
          backgroundImage: "url('/images/site.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative text-center px-6 flex flex-col justify-center h-full py-12">
          <div className="flex-1 flex flex-col justify-center">
            <img
              src="/images/white_logo.svg"
              alt="Site Supervise"
              className="mx-auto mb-6 w-28 h-auto"
            />
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4  text-center">
              SITE SUPERVISE
            </h1>
          </div>
          <p className="text-xl md:text-xl max-w-lg mx-auto mt-auto md:text-start text-center">
            Manage, monitor, and analyze every construction project — all from
            one platform.
          </p>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex flex-col bg-white px-6 md:px-16 py-12">
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-3xl w-full">
          
          

          <h2 className="text-2xl font-bold mb-2 md:text-start text-center text-[#022C4F] mb-9">
            Forgot Password
          </h2>
         

          <form className="space-y-7">

            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-full px-6 py-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          
            <div className="  flex items-center justify-end mb-6">
             
              <Link
                href="/signin"
                className=" rounded text-sm font-bold hover:bg-gray-100 transition text-[#022C4F] underline"
              >
                Remembered your Password
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-[#022C4F] text-white py-5 rounded-full mt-4  transition"
            >
              Send Email
            </button>
          </form>
          </div>
        </div>
        
        <div className="md:hidden flex items-center justify-center text-center mt-auto">
          <p className="px-6 font-bold text-md">
            Manage, monitor, and analyze every construction project — all from
            one platform.
          </p>
        </div>
      </div>
    </div>
  );
}
