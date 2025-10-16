"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gray-300">
        <img
          src="/modern-digital-marketing-workspace-with-social-med.jpg"
          alt="Digital workspace"
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-white shadow-2xl flex items-center justify-center p-8">
            <img src="/si-logo-new.png" alt="S.I. Digital Solutions Logo" className="w-full h-full object-contain" />
          </div>
        </div>
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-800 mb-8 max-w-3xl mx-auto leading-relaxed text-balance drop-shadow-md font-medium">
          Elevate your brand with expert social media management and talent representation
        </p>
        <p className="text-base md:text-lg text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow">
          We help businesses and creators grow their digital presence through strategic marketing, paid advertising, and
          dedicated team support.
        </p>
        <Button
          size="lg"
          className="bg-primary text-white hover:bg-primary/90 text-lg px-8 py-6 h-auto shadow-xl hover:shadow-2xl transition-all"
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-gray-600/70 rounded-full" />
        </div>
      </div>
    </section>
  )
}
