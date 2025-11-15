"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
// import {logo_group} from "@/components/index.js"

const CTA_BUTTON =
  "px-6 py-3 rounded-sm text-sm font-semibold inline-flex items-center gap-2 shadow-sm";
const OUTLINE =
  "border border-slate-700 bg-white text-slate-900 hover:bg-slate-900 hover:text-white transition";
const SOLID = "bg-slate-900 text-white hover:bg-black transition";

export default function Page() {
  return (
    <main className="font-sans antialiased overflow-hidden relative">
      {/* Top right rectangle - 45 degrees tilted, half inside screen */}
      <div className="absolute lg:-top-90 lg:-right-30 -top-15 md:-top-50 left-150 md:-right-30 w-[20rem] lg:w-[60rem] h-[20rem] md:h-[30rem] lg:h-[60rem] bg-[#001b33] rotate-45 pointer-events-none -z-10"></div>
      <div className="h-[2rem] bg-[#022C4F] z-10"></div>
      <div className="py-8 md:pb-15 px-3 md:px-[6rem] flex items-center gap-3 relative overflow-hidden">
        <div className="w-20 h-20 flex items-center justify-center">
          <Image
            src="https://res.cloudinary.com/depeqzb6z/image/upload/v1763210692/logo_myiwr5.png"
            alt="Site Supervise Logo"
            width={60}
            height={60}
            className="object-contain"
          />
        </div>
        <span className="font-extrabold text-xl mr-10 lg:text-xl text-[#022C4F] tracking-wide flex flex-col md:flex-row">
          SITE <span>SUPERVISE</span>
        </span>
        {/* Mobile Menu Toggle beside logo */}
        <div className="lg:hidden ml-auto relative ">
          <MobileMenuButton />
        </div>
      </div>
      <div className="m-0  lg:mr-[9rem] ">
        <div className="w-full flex justify-center align-center ">
          <Navbar />
        </div>

        <Hero />
      </div>
      <section id="features" className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col gap-12 ml-13">
          <div className="flex justify-center md:justify-between w-full">
            <div>
              <img src="https://res.cloudinary.com/depeqzb6z/image/upload/v1763214914/Group_9_n3o2kh.png"  alt="" />
           

              <h2 className="text-xl md:text-2xl font-bold mr-10 text-slate-900 leading-tight mb-4">
                Why Choose Our Construction Dashboard?
              </h2>
            </div>

            <div className="hidden md:flex justify-center items-center ">
              <button className={`${CTA_BUTTON} ${SOLID} mr-20 h-12  `}>
                Get Started
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-2">
            <FeatureCard
              image="https://res.cloudinary.com/depeqzb6z/image/upload/v1763210700/control-system_1_dn88cf.svg"
              title="Centralized Control of All Construction Activities"
              desc="Manage multiple projects, workers, and resources from one unified platform. Gain complete visibility into every stage of construction."
            />
            <FeatureCard
              image="https://res.cloudinary.com/depeqzb6z/image/upload/v1763210699/bin_wswhyj.svg"
              title="Reduced Material Wastage and Cost Overruns"
              desc="Track material usage and expenses accurately to prevent shortages, overstocking, and unnecessary spending."
            />
            <FeatureCard
              image="https://res.cloudinary.com/depeqzb6z/image/upload/v1763210693/multiple-users-silhouette_1_zgma62.svg"
              title="Improved Staff Accountability and Efficiency"
              desc="Monitor attendance, task completion, and performance metrics to ensure every team member stays productive and responsible."
            />
            <FeatureCard
              image="https://res.cloudinary.com/depeqzb6z/image/upload/v1763210693/presentation_bl9ltw.svg"
              title="Accurate Project Performance Analytics"
              desc="Access detailed charts and KPIs that show progress, resource usage, and overall performance for smarter management decisions."
            />
            <FeatureCard
              image="https://res.cloudinary.com/depeqzb6z/image/upload/v1763210701/insight_1_wdx9wt.svg"
              title="Faster Decision-Making Through Real-Time Insights"
              desc="Receive instant data updates from your sites, helping you address issues quickly and keep projects on schedule."
            />
            <FeatureCard
              image="https://res.cloudinary.com/depeqzb6z/image/upload/v1763210697/promotion_1_h6qjrq.svg"
              title="Easy Communication Between Site Workers and Management"
              desc="Enhance collaboration with built-in messaging and project update features that keep every team member informed and connected."
            />
          </div>
        </div>
        <div className="mt-6 md:hidden w-full flex items-center  ">
          <button className={`${CTA_BUTTON} ${SOLID} py-4 px-4 mx-auto`}>
            Get Started
          </button>
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

function MobileMenuButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        className="p-2 rounded bg-[#001b33] text-white hover:bg-[#002244] transition-all"
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

      {/* Mobile Slide-in Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setIsOpen(false)}
            />
            {/* Slide Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50"
            >
              <div className="p-6">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 p-2 text-gray-600 hover:text-gray-900"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <nav className="flex flex-col mt-8 space-y-4">
                  <a
                    href="#home"
                    className="text-lg text-gray-700 hover:text-[#001b33] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </a>
                  <a
                    href="#features"
                    className="text-lg text-gray-700 hover:text-[#001b33] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Features
                  </a>
                  <a
                    href="#solutions"
                    className="text-lg text-gray-700 hover:text-[#001b33] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Solutions
                  </a>
                  <a
                    href="#resources"
                    className="text-lg text-gray-700 hover:text-[#001b33] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Resources
                  </a>
                  <a
                    href="#contact"
                    className="text-lg text-gray-700 hover:text-[#001b33] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </a>
                  <Link href="/signin" className="mt-6 bg-[#001b33] text-white px-6 py-3 rounded text-sm font-semibold hover:bg-[#002244] transition-all text-center">
                    LOGIN / SIGN UP
                  </Link>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function Navbar() {
  return (
    <header className="bg-[#022C4F] text-white shadow-md w-7xl absolute z-20 -mt-10 hidden lg:block">
      <div className="max-w-7xl mx-auto h-22 flex items-center justify-between ">
        {/* Desktop Navigation */}
        <nav className="flex items-center gap-20 px-6 mx-auto">
          <a href="#home" className="text-sm hover:text-sky-400 transition-colors">
            Home
          </a>
          <a href="#features" className="text-sm hover:text-sky-400 transition-colors">
            Features
          </a>
          <a href="#solutions" className="text-sm hover:text-sky-400 transition-colors">
            Solutions 
          </a>
          <a href="#resources" className="text-sm hover:text-sky-400 transition-colors">
            Resources
          </a>
          <a href="#contact" className="text-sm hover:text-sky-400 transition-colors">
            Contact
          </a>
        </nav>

        {/* Desktop CTA - Full height */}
        <div className="flex h-full">
          <Link href="/signin" className="bg-white text-slate-900 px-5 h-full text-sm font-semibold  hover:bg-slate-200 transition-all text-nowrap flex items-center">
            LOGIN / SIGN UP
          </Link>
        </div>
      </div>
    </header>
  );
}

/* ------------------------------- Hero Section ------------------------------ */

function Hero() {
  return (
    <section id="home" className="relative bg-white overflow-hidden">
      {/* <Navbar/> */}
      <div
        className="relative min-h-screen lg:h-[90vh] flex items-center bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url(https://res.cloudinary.com/depeqzb6z/image/upload/v1763210703/bg-hero_mvvqi1.png)",
        }}
      >
        {/* Angled dark overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 -skew-x-12 origin-top-left">
            <div className="bg-gradient-to-r from-[#001b33]/95 to-transparent w-full h-full" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full  mx-16 px-6 md:px-10 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 items-center gap-10">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              <p className="text-[12px] top-30 sm:text-xl text-white font-bold">
                Manage, Monitor and
              </p>
              <h1 className="text-2xl sm:text-4xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-white drop-shadow-sm">
                Optimize <span className="text-[#001220]">Every Construction</span> <span className="text-[#022C4F]">Project From One Dashboard</span>
              </h1>

              <p className="mt-6 text-slate-200 text-base md:text-lg max-w-xl leading-relaxed mx-auto lg:mx-0">
               A complete web solution for project control, staff management, 
                material tracking, and performance analytics designed to simplify 
                construction operations.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  
                  className={` hover:bg-[#022C4F] w-70 h-20 text-sm text-white px-2 sm:px-20 py-4 sm:py-5 rounded-md  bg-[#0F181F]  sm:text-lg`}
                >
                  <p className="text-[12px]"> Get Started</p>
                </button>
                <button
                  className={`hover:bg-[#0F181F]   w-70 h-20 border border-[#0F181F] text-white px-8 sm:px-20 py-4 sm:py-5 rounded-md sm:text-lg`}
                >
                  <p className="text-[12px]">Request a Demo</p>
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
          <h4 className="font-semibold md:text-lg text-sm text-slate-900">
            {title}
          </h4>
          <p className="md:text-md text-sm text-slate-600 mt-2">{desc}</p>
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
      Image: "https://res.cloudinary.com/depeqzb6z/image/upload/v1763210697/user_2_lklnai.svg",
    },
    {
      title: "Add your team",
      desc: "Assign roles for managers, engineers, and workers.",
      Image: "https://res.cloudinary.com/depeqzb6z/image/upload/v1763210700/group-chat_opjikf.svg",
    },
    {
      title: "Track and monitor",
      desc: "Follow project progress, costs, and site activity in real time.",
      Image: "https://res.cloudinary.com/depeqzb6z/image/upload/v1763210696/track_kan7wj.svg",
    },
    {
      title: "Analyze and reports",
      desc: "Generate automated reports and performance summaries.",
      Image: "https://res.cloudinary.com/depeqzb6z/image/upload/v1763210697/analyzing_qmkva8.svg",
    },
  ];

  return (
    <section id="solutions" className="bg-slate-50 py-14">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 md:gap-8 lg:gap-15 items-center">
        <div className="hidden md:inline-flex">
          <Image
            src="/images/helmet.png"
            alt="steps"
            width={700}
            height={560}
            className=""
          />
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 text-center md:text-start">
            Simple Steps to Smarter Site Management
          </h3>
          <div className="space-y-4">
            {steps.map((s, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-start text-center sm:text-left items-center gap-4"
                initial={{ opacity: 0, x: 6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20  bg-slate-400 flex items-center justify-center text-slate-900 font-bold">
                  <img src={s.Image} alt="" />
                </div>
                <div className="my-auto">
                  <h4 className="font-semibold text-slate-900 text-lg sm:text-2xl">
                    {s.title}
                  </h4>
                  <p className="text-sm sm:text-md font-medium text-slate-600">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 w-full md:justify-start flex justify-center items-center ">
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
    <section id="resources" className="relative bg-[#022C4F] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row gap-12 items-center">
        <div className="flex justify-center lg:justify-start">
          <Image
            src="https://res.cloudinary.com/depeqzb6z/image/upload/v1763210694/Laptop-Screen-mockup_1_wjlmmh.png"
            alt="laptop"
            width={700}
            height={500}
            className="mx-auto"
          />
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 text-center md:text-left">
            <i> Your Projects at a Glance</i>
          </h3>
          <p className="text-slate-300 max-w-md mb-6 text-center md:text-left">
            Get a complete visual overview of your construction sites, project
            timelines, and workforce data. Stay ahead with live reports and
            alerts that help you make informed decisions every day.
          </p>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Contact -------------------------------- */

function Contact() {
  return (
    <section id="contact" className="relative -mt-40 z-10">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-slate-900 text-white overflow-hidden flex flex-col md:flex-row">
          <div className="p-16 flex-1">
            <h4 className="text-4xl  sm:text-5xl font-bold">Contact Us</h4>
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
                <button className={` py-4 bg-[#022C4F] w-full text-center `}>
                  SEND
                </button>
              </div>
            </form>
          </div>
          <div
            className="flex-1 flex justify-center items-center w-full relative"
            style={{
              backgroundImage: "url(/images/Rectangle 26.svg)",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute right-0 top-0 w-35 h-full bg-[#D9D9D9] hidden md:block"></div>
            <div className="absolute bottom-0 left-0 w-full h-20 bg-[#D9D9D9] md:hidden"></div>
            <div className="p-8 border-l md:border-l border-slate-800 h-80 w-4/5 md:w-full bg-[#022C4F] z-20 mx-auto md:ml-0">
              {/* Small rectangle on right side */}
              <div className="mb-8">
                <h5 className="font-semibold text-xl">Info</h5>
              </div>

              <div className="flex items-center gap-3 text-white mb-6">
                <Mail className="w-7 h-7 text-white" />
                <span>info@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-white mb-6">
                <Phone className="w-7 h-7 text-white" />
                <span>+234 0000 000</span>
              </div>

              <div className="flex items-start gap-3 text-white">
                <MapPin className="w-7 h-7 text-white" />
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
