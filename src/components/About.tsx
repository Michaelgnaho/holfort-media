"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Target, Lightbulb, Users, TrendingUp } from "lucide-react";

import Image from "next/image";
import AnimatedContent from "@/blocks/Animations/AnimatedContent/AnimatedContent";
import Video from "next-video";
import AboutVid from "../../videos/Holfort_mkt_Vid2.mp4";
import AboutVid1 from "../../videos/Holfort_mkt_Vid3.mp4";
import AboutVid2 from "../../videos/Holfort_mkt_Vid4.mp4";

export default function AboutSection() {
  return (
    <section className="relative min-h-screen py-16 sm:py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
      {/* Advanced Background Pattern - Same as Hero */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_50%_50%,_purple_1px,_transparent_1px)] bg-[length:40px_40px]"></div>

      {/* Floating Elements for Visual Interest - Same as Hero */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-200/20 to-blue-200/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-purple-300/15 to-pink-300/15 rounded-full blur-3xl opacity-25 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-blue-200/15 to-purple-200/15 rounded-full blur-3xl opacity-20 animate-pulse delay-500"></div>

      {/* Refined overlay for perfect contrast - Same as Hero */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/10 via-transparent to-white/20"></div>

      {/* Content Overlay */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
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
          <div className="text-center mb-12 mt-10 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[0.9] mb-6">
              About{" "}
              <span className="text-purple-900 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-900 bg-clip-text drop-shadow-sm">
                Holfort Media
              </span>
            </h2>
            {/* Subtle underline accent - Same as Hero */}
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto rounded-full mt-4 mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              Transforming brands through innovative digital solutions and
              impactful storytelling.
            </p>
          </div>
        </AnimatedContent>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-16 sm:mb-20">
          {/* Left Column - Vision & Mission */}
          <div className="space-y-6 sm:space-y-8">
            <AnimatedContent
              distance={100}
              direction="horizontal"
              reverse={false}
              duration={1.5}
              initialOpacity={0}
              animateOpacity={true}
              scale={1}
              threshold={0.2}
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border-2 border-purple-200/50 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 rounded-2xl flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Our Vision
                  </h3>
                </div>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium">
                  &quot;To be the leading media powerhouse, delivering
                  innovative digital solutions that transform brands and drive
                  global impact.&quot;
                </p>
              </div>
            </AnimatedContent>

            <AnimatedContent
              distance={100}
              direction="horizontal"
              reverse={false}
              duration={1.5}
              initialOpacity={0}
              animateOpacity={true}
              scale={1}
              threshold={0.2}
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border-2 border-purple-200/50 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 rounded-2xl flex items-center justify-center mr-4">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Our Mission
                  </h3>
                </div>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium">
                  &quot;To empower brands with innovative digital solutions,
                  strategic media management, and impactful storytelling.&quot;
                </p>
              </div>
            </AnimatedContent>
          </div>

          {/* Right Column - Main Video */}
          <AnimatedContent
            distance={100}
            direction="horizontal"
            reverse={true}
            duration={1.5}
            initialOpacity={0}
            animateOpacity={true}
            scale={1}
            threshold={0.2}
          >
            <div className="relative group">
              {/* Glow Effect - Same as Hero */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>

              {/* Video Container with Premium Styling - Same as Hero */}
              <div className="relative backdrop-blur-xl rounded-3xl p-3 border border-white/30 shadow-2xl bg-white/60 hover:bg-white/70 transition-all duration-500 transform hover:scale-[1.02]">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <Video
                    src={AboutVid}
                    className="w-full h-auto"
                    // autoPlay
                    loop
                    muted
                    playsInline
                    webkit-playsinline="true"
                  />
                </div>
              </div>

              {/* Decorative Elements - Same as Hero */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl opacity-80 rotate-12 group-hover:rotate-45 transition-transform duration-500"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl opacity-60 rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
            </div>
          </AnimatedContent>
        </div>

        {/* Core Values - Updated with Hero Theme */}
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
          <div className="mb-16 mt-10 sm:mb-20">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-4">
              What We Do Best
            </h3>
            {/* Subtle underline accent */}
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto rounded-full mb-12"></div>
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              <AnimatedContent
                distance={100}
                direction="horizontal"
                reverse={false}
                duration={1.5}
                initialOpacity={0}
                animateOpacity={true}
                scale={1}
                threshold={0.2}
              >
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border-2 border-purple-200/50 text-center shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:scale-105">
                  <div className="aspect-video mb-4 bg-gradient-to-br from-purple-100/50 to-purple-200/50 rounded-xl overflow-hidden relative border border-purple-200/30">
                    <Image
                      src="https://i.pinimg.com/736x/3a/23/85/3a23856a10e4182f2abb660f1aecfc4b.jpg"
                      alt="Brand Strategy"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                    Brand Strategy
                  </h4>
                  <p className="text-gray-700 text-sm sm:text-base font-medium">
                    Customized media strategies that drive engagement and growth
                  </p>
                </div>
              </AnimatedContent>

              <AnimatedContent
                distance={100}
                direction="horizontal"
                reverse={false}
                duration={1.5}
                initialOpacity={0}
                animateOpacity={true}
                scale={1}
                threshold={0.2}
              >
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border-2 border-purple-200/50 text-center shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:scale-105">
                  <div className="aspect-video mb-4 bg-gradient-to-br from-purple-100/50 to-purple-200/50 rounded-xl overflow-hidden relative border border-purple-200/30">
                    <Image
                      src="https://i.pinimg.com/736x/d5/2d/7c/d52d7cdd20736a01b0978e04ac276d39.jpg"
                      alt="Creative Content"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                    Creative Content
                  </h4>
                  <p className="text-gray-700 text-sm sm:text-base font-medium">
                    Compelling narratives that leave lasting impressions
                  </p>
                </div>
              </AnimatedContent>

              <AnimatedContent
                distance={100}
                direction="horizontal"
                reverse={false}
                duration={1.5}
                initialOpacity={0}
                animateOpacity={true}
                scale={1}
                threshold={0.2}
              >
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border-2 border-purple-200/50 text-center shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:scale-105">
                  <div className="aspect-video mb-4 bg-gradient-to-br from-purple-100/50 to-purple-200/50 rounded-xl overflow-hidden relative border border-purple-200/30">
                    <Image
                      src="https://i.pinimg.com/736x/3a/23/85/3a23856a10e4182f2abb660f1aecfc4b.jpg"
                      alt="Digital Growth"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                    Digital Growth
                  </h4>
                  <p className="text-gray-700 text-sm sm:text-base font-medium">
                    Strategic campaigns that maximize reach and conversions
                  </p>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </AnimatedContent>

        {/* Image Gallery Section */}
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
          <div className="mb-24 sm:mb-32">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 max-w-7xl mx-auto px-6">
              <AnimatedContent
                distance={100}
                direction="horizontal"
                reverse={false}
                duration={1.5}
                initialOpacity={0}
                animateOpacity={true}
                scale={1}
                threshold={0.2}
              >
                <div className="relative group">
                  {/* Glow Effect - Same as Hero */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>

                  {/* Video Container with Premium Styling - Same as Hero */}
                  <div className="relative backdrop-blur-xl rounded-3xl p-3 border border-white/30 shadow-2xl bg-white/60 hover:bg-white/70 transition-all duration-500 transform hover:scale-[1.02]">
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                      <Video
                        src={AboutVid1}
                        className="w-full h-auto"
                        // autoPlay
                        loop
                        muted
                        playsInline
                        webkit-playsinline="true"
                      />
                    </div>
                  </div>

                  {/* Decorative Elements - Same as Hero */}
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl opacity-80 rotate-12 group-hover:rotate-45 transition-transform duration-500"></div>
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl opacity-60 rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
                </div>
              </AnimatedContent>

              <AnimatedContent
                distance={100}
                direction="horizontal"
                reverse={true}
                duration={1.5}
                initialOpacity={0}
                animateOpacity={true}
                scale={1}
                threshold={0.2}
              >
                <div className="relative group">
                  {/* Glow Effect - Same as Hero */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>

                  {/* Video Container with Premium Styling - Same as Hero */}
                  <div className="relative backdrop-blur-xl rounded-3xl p-3 border border-white/30 shadow-2xl bg-white/60 hover:bg-white/70 transition-all duration-500 transform hover:scale-[1.02]">
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                      <Video
                        src={AboutVid2}
                        className="w-full h-auto"
                        // autoPlay
                        loop
                        muted
                        playsInline
                        webkit-playsinline="true"
                      />
                    </div>
                  </div>

                  {/* Decorative Elements - Same as Hero */}
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl opacity-80 rotate-12 group-hover:rotate-45 transition-transform duration-500"></div>
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl opacity-60 rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
                </div>
              </AnimatedContent>
            </div>

            {/* Additional decorative elements with Hero theme */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400/30 rounded-full animate-pulse"></div>
              <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-500/40 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-purple-600/30 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </AnimatedContent>

        {/* Call to Action - Updated with Hero Theme */}
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
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Ready to Transform Your Brand?
            </h3>
            {/* Subtle underline accent */}
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto rounded-full mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto font-medium">
              Discover our full range of media solutions and success stories.
            </p>
            <Link
              href="/about"
              className="group inline-flex items-center bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white font-bold px-8 py-4 rounded-2xl hover:from-purple-700 hover:via-purple-800 hover:to-purple-900 transition-all duration-500 shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transform-gpu touch-manipulation"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <span className="relative mr-3 text-lg">Learn More About Us</span>
              <ArrowRight className="relative w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </AnimatedContent>
      </div>

      {/* Safe Area Handling for iOS */}
      <style jsx>{`
        @supports (padding: env(safe-area-inset)) {
          .relative.min-h-screen {
            padding-top: env(safe-area-inset-top);
            padding-bottom: env(safe-area-inset-bottom);
            padding-left: env(safe-area-inset-left);
            padding-right: env(safe-area-inset-right);
          }
        }
      `}</style>
    </section>
  );
}
