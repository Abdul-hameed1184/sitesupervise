"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
// import {logo_group} from "@/components/index.js"

const CTA_BUTTON =
  "px-6 py-3 rounded-md text-sm font-semibold inline-flex items-center gap-2 shadow-sm";
const OUTLINE =
  "border border-slate-700 bg-white text-slate-900 hover:bg-slate-900 hover:text-white transition";
const SOLID = "bg-slate-900 text-white hover:bg-black transition";

export default function Page() {
  return (
    <main className="font-sans antialiased">
      <Navbar />

      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col gap-12">
          <div className="flex justify-between w-full">
            <div>
              <img src="/images/logo-group.png" alt="" />

              <h2 className="text-xl md:text-2xl font-medium text-slate-900 leading-tight mb-4">
                Why Choose Our Construction Dashboard?
              </h2>
            </div>

            <div className="flex justify-center items-center ">
              <button className={`${CTA_BUTTON} ${SOLID} mr-4 h-12  `}>
                Get Started
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              image="/images/control-system 1.svg"
              title="Centralized Control of All Construction Activities"
              desc="Manage multiple projects, workers, and resources from one unified platform. Gain complete visibility into every stage of construction."
            />
            <FeatureCard
              image="/images/bin.svg"
              title="Reduced Material Wastage and Cost Overruns"
              desc="Track material usage and expenses accurately to prevent shortages, overstocking, and unnecessary spending."
            />
            <FeatureCard
              image="/images/multiple-users-silhouette 1.svg"
              title="Improved Staff Accountability and Efficiency"
              desc="Monitor attendance, task completion, and performance metrics to ensure every team member stays productive and responsible."
            />
            <FeatureCard
              image="/images/presentation.svg"
              title="Accurate Project Performance Analytics"
              desc="Access detailed charts and KPIs that show progress, resource usage, and overall performance for smarter management decisions."
            />
            <FeatureCard
              image="/images/insight 1.svg"
              title="Faster Decision-Making Through Real-Time Insights"
              desc="Receive instant data updates from your sites, helping you address issues quickly and keep projects on schedule."
            />
            <FeatureCard
              image="/images/promotion 1.svg"
              title="Easy Communication Between Site Workers and Management"
              desc="Enhance collaboration with built-in messaging and project update features that keep every team member informed and connected."
            />
          </div>
        </div>
      </section>

      <Steps />

      <Projects />

      <Contact />

      <Footer />
    </main>
  );
}

/* --------------------------------- Navbar --------------------------------- */

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  return (
 <header className="bg-[#001b33] text-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-7 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="Site Supervise Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <span className="font-bold text-lg tracking-wide">
            SITE SUPERVISE
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm hover:text-sky-400 transition-colors">
            Home
          </a>
          <a href="#" className="text-sm hover:text-sky-400 transition-colors">
            Features
          </a>
          <a href="#" className="text-sm hover:text-sky-400 transition-colors">
            Solutions
          </a>
          <a href="#" className="text-sm hover:text-sky-400 transition-colors">
            Resources
          </a>
          <a href="#" className="text-sm hover:text-sky-400 transition-colors">
            Contact
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <button className="bg-white text-slate-900 px-5 py-2 text-sm font-semibold rounded hover:bg-slate-200 transition-all">
            LOGIN / SIGN UP
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded bg-white/10 hover:bg-white/20 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#00264d] border-t border-white/10"
          >
            <nav className="flex flex-col space-y-3 px-6 py-4 text-sm">
              <a href="#" className="hover:text-sky-400">
                Home
              </a>
              <a href="#" className="hover:text-sky-400">
                Features
              </a>
              <a href="#" className="hover:text-sky-400">
                Solutions
              </a>
              <a href="#" className="hover:text-sky-400">
                Resources
              </a>
              <a href="#" className="hover:text-sky-400">
                Contact
              </a>

              <button className="mt-3 bg-white text-slate-900 px-4 py-2 rounded text-sm font-semibold hover:bg-slate-200 transition-all">
                LOGIN / SIGN UP
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ------------------------------- Hero Section ------------------------------ */

function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
  <div
    className="relative min-h-screen lg:h-[90vh] flex items-center bg-center bg-no-repeat bg-cover"
    style={{
      backgroundImage: "url(/images/bg-hero.png)",
    }}
  >
    {/* Angled dark overlay */}
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 -skew-x-12 origin-top-left">
        <div className="bg-gradient-to-r from-[#001b33]/95 to-transparent w-full h-full" />
      </div>
    </div>

    {/* Content */}
    <div className="relative z-10 w-full  mx-auto px-6 md:px-10 py-20 lg:py-28">
      <div className="grid lg:grid-cols-2 items-center gap-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center lg:text-left"
        >
            <p className="text-xl text-white font-bold">
            Manage, Monitor and
              </p> 
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-sm">
              Optimize
              Every Construction
            Project From One Dashboard
          </h1>

          <p className="mt-6 text-slate-200 text-base md:text-lg max-w-xl leading-relaxed mx-auto lg:mx-0">
            A complete web solution for project control, staff management,
            material tracking, and performance analytics — all designed to
            simplify your construction operations.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
            <button className={`bg-black text-white px-20 py-5 rounded-md text-lg`}>
              Get Started
            </button>
            <button className={`hover:bg-black border border-black text-white px-20 py-5 rounded-md text-lg`}>
              Request a Demo
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
</section>

  );
}

/* ------------------------------ Feature Card ------------------------------- */

function FeatureCard({
  image,
  title,
  desc,
}: {
  image: string;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      className="p-6 bg-white"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center md:items-start gap-6">
        <img src={image} alt="" />
        <div className="text-center md:text-left">
          <h4 className="font-semibold text-lg text-slate-900">{title}</h4>
          <p className="text-md text-slate-600 mt-2">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------------------------- Steps --------------------------------- */

function Steps() {
  const steps = [
    {
      title: "Create an account",
      desc: "Register your company and add your projects.",
      Image: "/images/user (2).svg",
    },
    {
      title: "Add your team",
      desc: "Assign roles for managers, engineers, and workers.",
      Image: "/images/group-chat.svg",
    },
    {
      title: "Track and monitor",
      desc: "Follow project progress, costs, and site activity in real time.",
      Image: "/images/track.svg",
    },
    {
      title: "Analyze and reports",
      desc: "Generate automated reports and performance summaries.",
      Image: "/images/analyzing.svg",
    },
  ];

  return (
    <section className="bg-slate-50 py-14">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-15 items-center">
        <div>
          <Image
            src="/images/helmet.png"
            alt="steps"
            width={700}
            height={560}
            className=""
          />
        </div>

        <div>
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            Simple Steps to Smarter Site Management
          </h3>
          <div className="space-y-4">
            {steps.map((s, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: 6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20  bg-slate-400 flex items-center justify-center text-slate-900 font-bold">
                  <img src={s.Image} alt="" />
                </div>
                <div className="my-auto">
                  <h4 className="font-semibold text-slate-900 text-2xl">
                    {s.title}
                  </h4>
                  <p className="text-md font-medium text-slate-600">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6">
            <button className={`${CTA_BUTTON} ${SOLID} py-4 px-4`}>
              Start Managing Project Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Projects -------------------------------- */

function Projects() {
  return (
    <section className="relative bg-[#022C4F] text-white py-16 pb-32">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row gap-12 items-center">
        <div className="flex justify-center lg:justify-start">
          <Image
            src="/images/Laptop-Screen-mockup 1.png"
            alt="laptop"
            width={700}
            height={500}
            className="mx-auto"
          />
        </div>

        <div>
          <h3 className="text-3xl font-extrabold mb-4">
            
            <i> Your Projects at a Glance</i>
          </h3>
          <p className="text-slate-300 max-w-md mb-6">
            Get a complete visual overview of your construction sites, project
            timelines, and workforce data. Stay ahead with live reports and
            alerts that help you make informed decisions every day.
          </p>

          <div>
            <button className={`${CTA_BUTTON} ${SOLID}`}>Request a Demo</button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Contact -------------------------------- */

function Contact() {
  return (
    <section className="relative -mt-40 z-10">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-slate-900 text-white overflow-hidden flex flex-col md:flex-row">
          <div className="p-8 flex-1">
            <h4 className="text-5xl font-semibold">Contact Us</h4>
            <p className="text-slate-300 mt-2">Start building smarter today.</p>

            <form
              className="mt-6 space-y-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label className="sr-only">Name</label>
                <input
                  placeholder="Name"
                  className="w-full border-b-2 outline-none  border-slate-100 bg-transparent px-3 py-4 text-white text-xl"
                />
              </div>

              <div>
                <label className="sr-only">Email</label>
                <input
                  placeholder="Email"
                  className="w-full border-b-2 outline-none  border-slate-100 bg-transparent px-3 py-4 text-white text-xl"
                />
              </div>

              <div>
                <label className="sr-only">Message</label>
                <input
                  placeholder="Message"
                  className="w-full border-b-2 outline-none  border-slate-100 bg-transparent px-3 py-4 text-white text-xl"
                />
              </div>

              <div>
                <button className={` py-4 bg-[#022C4F] w-full text-center `}>SEND</button>
              </div>
            </form>
          </div>
          <div 
            className="flex-1 flex justify-center items-center w-full"
            style={{
              backgroundImage: 'url(/images/Rectangle 26.svg)',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="p-8 border-l border-slate-800 h-fit w-full bg-[#022C4F]">
              <div className="mb-4">
                <h5 className="font-semibold text-3xl">Info</h5>
              </div>

              <div className="flex items-center gap-3 text-slate-300 mb-3">
                <Mail className="w-7 h-7 text-slate-300" />
                <span>info@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 mb-3">
                <Phone className="w-7 h-7 text-slate-300" />
                <span>+234 0000 000</span>
              </div>

              <div className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-7 h-7" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Footer --------------------------------- */

function Footer() {
  return (
    <footer className="bg-[#022C4A] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-3 flex  items-center justify-center gap-4">
        <p className="text-white">Copyright@Reserved 2025</p>
      </div>
    </footer>
  );
}
