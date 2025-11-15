"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { authService, RegisterData } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function Page() {
  const [role, setRole] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    fullname: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const roles = [
    { value: "STAFF", label: "Staff" },
    { value: "PROJECT_MANAGER", label: "Project Manager" },
    { value: "PARTNER", label: "Partner" },
    { value: "CLIENT", label: "Client" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!role) {
      setError("Please select a role");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const registerData: RegisterData = {
        ...formData,
        role: role as any
      };
      
      await authService.register(registerData);
      router.push("/signin");
    } catch (error: any) {
      setError(error.message || "Registration failed");
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
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 md:text-center text-center">
              SITE SUPERVISE
            </h1>
          </div>
          <p className="text-xl md:text-xl max-w-lg mx-auto mt-auto md:text-center text-center">
            Manage, monitor, and analyze every construction project — all from
            one platform.
          </p>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex items-center justify-center bg-white px-6 md:px-16 py-12">
        <div className="max-w-3xl w-full">
          {/* Top right sign-in */}
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
          <div className="hidden  md:flex items-center gap-12 justify-end mb-6">
            <span className="mr-2 text-md font-medium">
              Already have an account?
            </span>
            <Link href="/signin" className="border border-gray-700 px-4 py-2 rounded text-sm font-medium hover:bg-gray-100 transition">
              Sign in
            </Link>
          </div>

          <h2 className="text-2xl font-bold mb-2 md:text-start text-center text-[#022C4F]">
            Create an Account to Join the Construction Management Platform
          </h2>
          <p className="text-sm font-medium mb-6 md:text-start text-center">
            Access your account and manage your construction activities with the
            right tools for your role.
          </p>

          <form className="space-y-7" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              value={formData.fullname}
              onChange={(e) => setFormData({...formData, fullname: e.target.value})}
              className="w-full border border-gray-300 rounded-full px-6 py-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full border border-gray-300 rounded-full px-6 py-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full border border-gray-300 rounded-full px-6 py-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full border border-gray-300 rounded-full px-6 py-5 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer text-left flex items-center justify-between"
              >
                <span className={role ? "text-gray-900" : "text-gray-500"}>
                  {role
                    ? roles.find((r) => r.value === role)?.label
                    : "Select Role"}
                </span>
                <motion.svg
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl z-50 overflow-hidden"
                  >
                    {roles.map((roleOption, index) => (
                      <motion.button
                        key={roleOption.value}
                        type="button"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => {
                          setRole(roleOption.value);
                          setIsDropdownOpen(false);
                        }}
                        className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors duration-200 text-gray-700 hover:text-[#022C4F] font-medium"
                      >
                        {roleOption.label}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="md:hidden  flex items-center justify-end mb-6">
              <span className="mr-2 text-md font-medium">
                Already have an account?
              </span>
              <Link
                href="/signin"
                className=" rounded text-sm font-bold hover:bg-gray-100 transition text-[#022C4F] underline"
              >
                Login
              </Link>
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}
            <button
              type="submit"
              disabled={loading || !role}
              className="w-full bg-[#022C4F] text-white py-5 rounded-full mt-4 transition disabled:opacity-50"
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>
          <div className="md:hidden  flex items-center justify-center text-center  my-6">
            <p className="px-6 font-bold text-md">
              {" "}
              Manage, monitor, and analyze every construction project — all from
              one platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
