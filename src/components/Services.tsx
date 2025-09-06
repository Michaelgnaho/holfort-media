"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Users, Camera, TrendingUp } from "lucide-react";

import AnimatedContent from "@/blocks/Animations/AnimatedContent/AnimatedContent";
import Video from "next-video";
import service1 from "../../videos/project-wedding.mp4";
import service2 from "../../videos/hero-vid.mp4";
import service3 from "../../videos/project_HOA.mp4";

export default function ServicesSection() {
  const featuredServices = [
    {
      icon: Users,
      title: "Social Media Management",
      description:
        "Complete platform optimization and audience growth strategies that build lasting engagement.",
      color: "from-purple-600 to-blue-600",
      bgColor: "from-purple-600/20 to-blue-600/20",
    },
    {
      icon: Camera,
      title: "Content Creation",
      description:
        "High-quality video, graphic, and written content that captures attention and drives results.",
      color: "from-blue-600 to-indigo-600",
      bgColor: "from-blue-600/20 to-indigo-600/20",
    },
    {
      icon: TrendingUp,
      title: "Paid Media & Advertising",
      description:
        "Data-driven campaigns across digital platforms to maximize reach and conversions.",
      color: "from-indigo-600 to-purple-600",
      bgColor: "from-indigo-600/20 to-purple-600/20",
    },
  ];

  return (
    <section className="relative min-h-screen py-16 sm:py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
      {/* Advanced Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_50%_50%,_purple_1px,_transparent_1px)] bg-[length:40px_40px]"></div>

      {/* Floating Elements for Visual Interest */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-200/20 to-blue-200/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-purple-300/15 to-blue-300/15 rounded-full blur-3xl opacity-25 animate-pulse delay-1000"></div>

      {/* Refined overlay for perfect contrast */}
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
          <div className="text-center mt-10 mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[0.9] mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-600 mx-auto rounded-full mt-4"></div>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              Comprehensive digital solutions designed to elevate your brand and
              maximize your impact.
            </p>
          </div>
        </AnimatedContent>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-16 sm:mb-20">
          {/* Left Column - Featured Services */}
          <div className="space-y-6 sm:space-y-8">
            {featuredServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimatedContent
                  key={index}
                  distance={100}
                  direction="horizontal"
                  reverse={false}
                  duration={1.5}
                  initialOpacity={0}
                  animateOpacity={true}
                  scale={1}
                  threshold={0.2}
                >
                  <div
                    className={`bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300 group bg-gradient-to-br ${service.bgColor}`}
                  >
                    <div className="flex items-start mb-6">
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mr-4 sm:mr-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                          {service.title}
                        </h3>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedContent>
              );
            })}
          </div>

          {/* Right Column - Hero Video */}
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
            <div className="relative flex-shrink-0 w-full max-w-[85%] sm:max-w-sm md:max-w-md lg:max-w-sm xl:max-w-md mx-auto lg:mx-0 lg:ml-12">
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 via-purple-600 to-blue-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>

                {/* Video Container with Premium Styling */}
                <div className="relative backdrop-blur-xl rounded-3xl p-3 border border-white/30 shadow-2xl bg-white/60 hover:bg-white/70 transition-all duration-500 transform hover:scale-[1.02]">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <Video
                      src={service2}
                      className="w-full h-auto"
                      loop
                      muted
                      playsInline
                    />
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl opacity-80 rotate-12 group-hover:rotate-45 transition-transform duration-500"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-600 rounded-xl opacity-60 rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>

                {/* Stats Overlay */}
                <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-4 sm:p-6 shadow-2xl hover:scale-105 transition-transform duration-300">
                  <div className="text-center">
                    <h4 className="text-white font-bold text-xl sm:text-2xl">
                      8+
                    </h4>
                    <p className="text-white/90 text-xs sm:text-sm">
                      Core Services
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedContent>
        </div>

        {/* Portfolio Gallery Section */}
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
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
              Our Work in Action
            </h3>
            <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
              {[service1, service2, service3].map((src, index) => (
                <AnimatedContent
                  key={index}
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
                    <div className="relative backdrop-blur-xl rounded-3xl p-3 border border-white/30 shadow-2xl bg-white/60 hover:bg-white/70 transition-all duration-500 transform hover:scale-[1.02]">
                      <div className="rounded-2xl overflow-hidden shadow-xl">
                        <Video
                          src={src}
                          className="w-full h-auto"
                          loop
                          muted
                          playsInline
                        />
                      </div>
                    </div>
                    <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl opacity-80 rotate-12 group-hover:rotate-45 transition-transform duration-500"></div>
                  </div>
                </AnimatedContent>
              ))}
            </div>
          </div>
        </AnimatedContent>

        {/* Call to Action */}
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
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Ready to Elevate Your Brand?
            </h3>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto font-medium">
              Explore our complete service offerings and see how we can
              transform your digital presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/services"
                className="group relative inline-flex items-center bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 text-white font-bold px-10 py-5 rounded-2xl hover:from-purple-700 hover:via-purple-800 hover:to-blue-700 transition-all duration-500 shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transform-gpu touch-manipulation overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative mr-3 text-lg">View All Services</span>
                <ArrowRight className="relative w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              <Link
                href="/contact"
                className="group relative inline-flex items-center bg-white/80 backdrop-blur-xl text-gray-900 font-bold px-10 py-5 rounded-2xl border-2 border-purple-200 hover:border-blue-400 hover:bg-white transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 touch-manipulation"
              >
                <span className="text-lg">Get Started Today</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </Link>
            </div>
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
