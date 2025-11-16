"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { authService } from "@/lib/auth";

export default function Page() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await authService.forgotPassword(email);
      if (response.email_sent === false) {
        setError("Failed to send email. Please try again.");
      } else {
        setMessage(response.message || "Password reset email sent successfully!");
      }
    } catch (error: any) {
      setError(error.message || "Failed to send reset email");
    } finally {
      setLoading(false);
    }
  };

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
         

          <form className="space-y-7" onSubmit={handleSubmit}>

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-full px-6 py-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          
            <div className="  flex items-center justify-end mb-6">
             
              <Link
                href="/signin"
                className=" rounded text-sm font-bold hover:bg-gray-100 transition text-[#022C4F] underline"
              >
                Remembered your Password
              </Link>
            </div>

            {message && (
              <div className="text-green-500 text-sm text-center">{message}</div>
            )}
            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#022C4F] text-white py-5 rounded-full mt-4 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Reset Email"}
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
