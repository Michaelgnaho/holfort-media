"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Camera,
  TrendingUp,
  Megaphone,
  Shield,
  Globe,
} from "lucide-react";

import AnimatedContent from "@/blocks/Animations/AnimatedContent/AnimatedContent";
import Image from "next/image";
import service1 from "../../videos/project-wedding.mp4";
import service2 from "../../videos/hero-vid.mp4";
import service3 from "../../videos/project_HOA.mp4";
import Video from "next-video";

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
    <section className="relative min-h-screen py-16 sm:py-20 overflow-hidden">
      {/* Silk Background - Optimized for mobile */}

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="text-center mb-12  sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-10 mb-6 tracking-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
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
                    className={`bg-gradient-to-br ${service.bgColor} backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300 group`}
                  >
                    <div className="flex items-start mb-6">
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mr-4 sm:mr-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                          {service.title}
                        </h3>
                        <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedContent>
              );
            })}
          </div>

          {/* Right Column - Hero Image */}
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
            <div className="relative">
              <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-4 sm:p-6 shadow-2xl">
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
            <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
              Our Work in Action
            </h3>
            <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
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
                  <div className="aspect-square bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-2xl overflow-hidden border border-white/20 shadow-xl">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <Video
                          src={service1}
                          className="w-full h-auto rounded-2xl shadow-lg"
                          // autoPlay
                          loop
                          muted
                          playsInline
                        />
                      </div>
                    </div>
                  </div>
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
                <div className="relative group">
                  <div className="aspect-square bg-gradient-to-br from-blue-600/30 to-indigo-600/30 rounded-2xl overflow-hidden border border-white/20 shadow-xl">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <Video
                          src={service2}
                          className="w-full h-auto rounded-2xl shadow-lg"
                          // autoPlay
                          loop
                          muted
                          playsInline
                        />
                      </div>
                    </div>
                  </div>
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
                <div className="relative group">
                  <div className="aspect-square bg-gradient-to-br from-indigo-600/30 to-purple-600/30 rounded-2xl overflow-hidden border border-white/20 shadow-xl">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <Video
                          src={service3}
                          className="w-full h-auto rounded-2xl shadow-lg"
                          autoPlay
                          // loop
                          muted
                          playsInline
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedContent>
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
          <div className="text-center  mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Ready to Elevate Your Brand?
            </h3>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Explore our complete service offerings and see how we can
              transform your digital presence.
            </p>
            <div className="flex flex-col mb-8 sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-2xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group touch-manipulation"
              >
                <span className="mr-3">View All Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-2xl border-2 border-white/20 hover:bg-white/20 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 touch-manipulation"
              >
                Get Started Today
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
