"use client";

import Silk from "@/blocks/Backgrounds/Silk/Silk";
import TextType from "@/blocks/TextAnimations/TextType/TextType";
import Link from "next/link";
import Video from "next-video";
import HeroVid from "../../videos/Holfort_mkt_Vid1.mp4";
import { ArrowRight } from "lucide-react";
import AnimatedContent from "@/blocks/Animations/AnimatedContent/AnimatedContent";

export default function Hero() {
  return (
    <div className="relative w-screen min-h-screen overflow-hidden">
      {/* Background Layer - Silk Animation */}
      <div className="absolute inset-0 z-0">
        <Silk
          speed={5}
          scale={1}
          color="#582EFF"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      {/* Subtle overlay for better contrast */}
      <div className="absolute inset-0 z-10 bg-black/20"></div>

      {/* Main Content Container */}
      <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between w-full min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Left Column - Text Content */}
        <AnimatedContent
          distance={100}
          direction="horizontal"
          reverse={true}
          duration={1.5}
          initialOpacity={0}
          animateOpacity={true}
          threshold={0.2}
        >
          <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-none">
              <TextType
                text={["WELCOME TO", "HOLFORT MEDIA!"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
              />
            </h1>

            {/* Subtitle */}
            <div className="mb-8">
              <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed">
                Professional Media Solutions
              </p>
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Transforming brands through innovative digital strategies,
                creative content, and impactful storytelling that drives real
                results.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              <Link
                href="/services"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold px-8 py-4 rounded-2xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group"
              >
                <span className="mr-3">Explore Our Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-2xl border-2 border-white/20 hover:bg-white/20 transition-all duration-300 shadow-xl hover:shadow-2xl group"
              >
                <span>View Our Work</span>
              </Link>
            </div>
          </div>
        </AnimatedContent>

        {/* Right Column - Hero Video (Portrait) */}
        <AnimatedContent
          distance={100}
          direction="horizontal"
          reverse={false}
          duration={1.5}
          initialOpacity={0}
          animateOpacity={true}
          scale={1}
          threshold={0.2}
          delay={0.3}
        >
          <div className="flex-shrink-0 w-full max-w-[80%] sm:max-w-xs md:max-w-sm lg:max-w-xs xl:max-w-sm mx-auto lg:mx-0 lg:ml-8">
            <div className="relative">
              {/* Video Container - Responsive aspect ratio */}
              <div className="relative  backdrop-blur-sm rounded-2xl p-2 border  shadow-2xl">
                <Video
                  src={HeroVid}
                  className="w-full rounded-xl shadow-xl  object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </div>
          </div>
        </AnimatedContent>
      </div>

      {/* Bottom CTA Section */}
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
        <div className="absolute pt-10 bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white font-medium px-6 py-3 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 text-sm group"
            >
              <span className="mr-2">Book a Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </AnimatedContent>
    </div>
  );
}
