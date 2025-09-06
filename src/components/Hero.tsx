"use client";

import TextType from "@/blocks/TextAnimations/TextType/TextType";
import Link from "next/link";
import Video from "next-video";
import HeroVid from "../../videos/Holfort_mkt_Vid1.mp4";
import { ArrowRight } from "lucide-react";
import AnimatedContent from "@/blocks/Animations/AnimatedContent/AnimatedContent";

export default function Hero() {
  return (
    <div className="relative w-screen min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
      {/* Advanced Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_50%_50%,_purple_1px,_transparent_1px)] bg-[length:40px_40px]"></div>

      {/* Floating Elements for Visual Interest */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-200/20 to-blue-200/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-purple-300/15 to-pink-300/15 rounded-full blur-3xl opacity-25 animate-pulse delay-1000"></div>

      {/* Refined overlay for perfect contrast */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/10 via-transparent to-white/20"></div>

      {/* Main Content Container */}
      <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between w-full min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Left Column - Text Content */}
        <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0 lg:pr-8">
          {/* Main Heading with Gradient */}
          <div className="mb-8 text-purple-900 ">
            <h1 className="text-4xl text-purple-900 sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-2">
              <span className="text-purple-900 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-900 bg-clip-text drop-shadow-sm">
                <TextType
                  text={["WELCOME TO", "HOLFORT MEDIA!"]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  className="text-purple-900"
                  textColors={[
                    "text-gradient-to-r from-purple-600 via-purple-700 to-purple-900",
                  ]}
                />
              </span>
            </h1>
            {/* Subtle underline accent */}
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto lg:mx-0 rounded-full mt-4"></div>
          </div>

          {/* Professional Subtitle */}
          <div className="mb-12 space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Professional Media Solutions
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              Transforming brands through innovative digital strategies,
              creative content, and impactful storytelling that drives
              measurable results and lasting growth.
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mb-12 justify-center lg:justify-start">
            <Link
              href="/services"
              className="group relative inline-flex items-center bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white font-bold px-10 py-5 rounded-2xl hover:from-purple-700 hover:via-purple-800 hover:to-purple-900 transition-all duration-500 shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transform-gpu touch-manipulation overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative mr-3 text-lg">
                Explore Our Services
              </span>
              <ArrowRight className="relative w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>

            <Link
              href="/portfolio"
              className="group relative inline-flex items-center bg-white/80 backdrop-blur-xl text-gray-900 font-bold px-10 py-5 rounded-2xl border-2 border-purple-200 hover:border-purple-400 hover:bg-white transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 touch-manipulation"
            >
              <span className="text-lg">View Our Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </Link>
          </div>

          {/* Professional Trust Indicators */}
          <div className="flex flex-wrap items-center gap-8 justify-center lg:justify-start text-sm text-gray-600 font-medium">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Award-Winning Design</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Global Clientele</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Proven Results</span>
            </div>
          </div>
        </div>

        {/* Right Column - Enhanced Hero Video */}
        <div className="flex-shrink-0 w-full max-w-[85%] sm:max-w-sm md:max-w-md lg:max-w-sm xl:max-w-md mx-auto lg:mx-0 lg:ml-12">
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>

            {/* Video Container with Premium Styling */}
            <div className="relative backdrop-blur-xl rounded-3xl p-3 border border-white/30 shadow-2xl bg-white/60 hover:bg-white/70 transition-all duration-500 transform hover:scale-[1.02]">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Video
                  src={HeroVid}
                  className="w-full h-auto"
                  autoPlay
                  muted
                  playsInline
                />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl opacity-80 rotate-12 group-hover:rotate-45 transition-transform duration-500"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl opacity-60 rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom CTA Section */}
      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={false}
        duration={1.5}
        initialOpacity={0}
        animateOpacity={true}
        scale={1}
        threshold={0.2}
      >
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
          <div className="text-center">
            <Link
              href="/contact"
              className="group inline-flex items-center bg-white/90 backdrop-blur-xl text-gray-900 font-semibold px-8 py-4 rounded-xl border border-purple-200/50 hover:border-purple-400 hover:bg-white hover:shadow-xl transition-all duration-300 text-base group touch-manipulation"
            >
              <span className="mr-3">Book a Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </Link>
          </div>
        </div>
      </AnimatedContent>

      {/* Safe Area Handling for iOS */}
      <style jsx>{`
        @supports (padding: env(safe-area-inset)) {
          .relative.w-screen.min-h-screen {
            padding-top: env(safe-area-inset-top);
            padding-bottom: env(safe-area-inset-bottom);
            padding-left: env(safe-area-inset-left);
            padding-right: env(safe-area-inset-right);
          }
        }
      `}</style>
    </div>
  );
}
