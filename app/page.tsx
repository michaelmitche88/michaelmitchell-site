"use client";

import { useState } from "react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Passions />
      <Contact />
      <Footer />
    </main>
  );
}

/* -------------------- NAV -------------------- */

function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-paper/80 backdrop-blur-md border-b border-[#e5e4e0]">
      <div className="max-w-site mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-medium text-ink tracking-tight">
          Michael Mitchell
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-ink-soft">
          <a href="#about" className="link-underline">About</a>
          <a href="#services" className="link-underline">Services</a>
          <a href="#experience" className="link-underline">Experience</a>
          <a href="#contact" className="link-underline">Contact</a>
        </div>
        
          href="#contact"
          className="hidden md:inline-block text-sm bg-ink text-paper px-4 py-2 rounded-md hover:bg-ink-soft transition-colors"
        >
          Let's work together
        </a>
      </div>
    </nav>
  );
}

/* -------------------- HERO -------------------- */

function Hero() {
  return (
    <section id="top" className="max-w-site mx-auto px-6 md:px-10 pt-20 md:pt-32 pb-20">
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
        <div className="md:flex-1 max-w-narrow">
          <p className="section-label mb-6">Available for consulting</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-ink mb-6">
            Senior integrations engineer, ServiceNow developer, and Workday administrator.
          </h1>
          <p className="text-lg md:text-xl text-ink-soft leading-relaxed mb-10 max-w-[640px]">
            I help companies connect the systems that run their business.
            Twelve years across ServiceNow, Workday, and the messy middle in between.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
            
              href="#contact"
              className="inline-flex items-center justify-center bg-ink text-paper px-6 py-3 rounded-md hover:bg-ink-soft transition-colors font-medium"
            >
              Let's work together
            </a>
            <p className="text-sm text-ink-soft">
              Currently available for consulting and contract engagements.
            </p>
          </div>
        </div>
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden flex-shrink-0 border border-[#e5e4e0]">
          <img
            src="/headshot.png"
            alt="Michael Mitchell"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

/* -------------------- ABOUT -------------------- */

function About() {
  return (
    <section id="about" className="max-w-site mx-auto px-6 md:px-10 py-20 border-t border-[#e5e4e0]">
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-3">
          <p className="section-label">About</p>
        </div>
        <div className="md:col-span-9 max-w-[640px]">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-8">
            Twelve years of building, fixing, and connecting enterprise systems.
          </h2>
          <div className="space-y-5 text-ink-soft leading-relaxed text-[17px]">
            <p>
              I started my career in 2014 building integrations between asset management
