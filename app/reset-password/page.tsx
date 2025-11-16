"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { authService } from "@/lib/auth";

export default function ResetPassword() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!token) {
      setError("Invalid reset token");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch('/api/v1/auth/reset-password/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token: token,
          password: password,
          password_confirm: confirmPassword
        })
      });

      const data = await response.json();
      
      if (response.ok) {
        setMessage("Password reset successfully! Redirecting to login...");
        setTimeout(() => router.push('/signin'), 2000);
      } else {
        setError(data.error || data.detail || "Reset failed");
      }
    } catch (error) {
      setError("Network error occurred");
    } finally {
      setLoading(false);
    }
  };

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
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-center">
              SITE SUPERVISE
            </h1>
          </div>
          <p className="text-xl md:text-xl max-w-lg mx-auto mt-auto text-center">
            Manage, monitor, and analyze every construction project — all from
            one platform.
          </p>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex flex-col bg-white px-6 md:px-16 py-12">
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-3xl w-full">
            {/* Mobile Logo */}
            <div className="flex md:hidden flex-col items-center justify-center mb-8">
              <img
                src="/images/logo.png"
                alt="Site Supervise"
                className="w-16 h-16 mb-4"
              />
              <h1 className="text-2xl text-[#022C4F] font-extrabold text-center">
                SITE SUPERVISE
              </h1>
            </div>

            <h2 className="text-2xl font-bold mb-2 md:text-start text-center text-[#022C4F] mb-9">
              Reset Your Password
            </h2>

            <form className="space-y-7" onSubmit={handleSubmit}>
              <input
                type="password"
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-full px-6 py-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-full px-6 py-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <div className="flex items-center justify-end mb-6">
                <Link
                  href="/signin"
                  className="rounded text-sm font-bold hover:bg-gray-100 transition text-[#022C4F] underline"
                >
                  Back to Sign In
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
                {loading ? "Resetting..." : "Reset Password"}
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