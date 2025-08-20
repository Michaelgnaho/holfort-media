"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Target, Lightbulb, Users, TrendingUp } from "lucide-react";
import Silk from "@/blocks/Backgrounds/Silk/Silk";
import Image from "next/image";
import AnimatedContent from "@/blocks/Animations/AnimatedContent/AnimatedContent";
import Video from "next-video";
import AboutVid from "../../videos/Holfort_mkt_Vid2.mp4";
import AboutVid1 from "../../videos/Holfort_mkt_Vid3.mp4";
import AboutVid2 from "../../videos/Holfort_mkt_Vid4.mp4";

export default function AboutSection() {
  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Silk Background */}
      <div className="absolute inset-0 z-0">
        <Silk
          speed={3.5}
          scale={0.2}
          color="#582EFF"
          noiseIntensity={3.3}
          rotation={0.35}
        />
      </div>

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
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              About{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Holfort Media
              </span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Transforming brands through innovative digital solutions and
              impactful storytelling.
            </p>
          </div>
        </AnimatedContent>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Vision & Mission */}
          <div className="space-y-8">
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
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                </div>
                <p className="text-gray-200 text-lg leading-relaxed">
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
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center mr-4">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                </div>
                <p className="text-gray-200 text-lg leading-relaxed">
                  &quot;To empower brands with innovative digital solutions,
                  strategic media management, and impactful storytelling.&quot;
                </p>
              </div>
            </AnimatedContent>
          </div>

          {/* Right Column - Main Image */}
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
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-3xl overflow-hidden border border-white/20 shadow-2xl relative">
                <Video
                  src={AboutVid}
                  className="w-full h-full rounded-xl shadow-xl  object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </div>
          </AnimatedContent>
        </div>

        {/* Core Values - Updated with Image Spaces */}
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
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              What We Do Best
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
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
                <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
                  <div className="aspect-video mb-4 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl overflow-hidden relative">
                    <Image
                      src="https://i.pinimg.com/736x/3a/23/85/3a23856a10e4182f2abb660f1aecfc4b.jpg"
                      alt="Brand Strategy"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    Brand Strategy
                  </h4>
                  <p className="text-gray-300">
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
                <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
                  <div className="aspect-video mb-4 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl overflow-hidden relative">
                    <Image
                      src="https://i.pinimg.com/736x/d5/2d/7c/d52d7cdd20736a01b0978e04ac276d39.jpg"
                      alt="Creative Content"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    Creative Content
                  </h4>
                  <p className="text-gray-300">
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
                <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
                  <div className="aspect-video mb-4 bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 rounded-xl overflow-hidden relative">
                    <Image
                      src="https://i.pinimg.com/736x/3a/23/85/3a23856a10e4182f2abb660f1aecfc4b.jpg"
                      alt="Digital Growth"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    Digital Growth
                  </h4>
                  <p className="text-gray-300">
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
          <div className="mb-32">
            <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto px-6">
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
                <div className="group relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative">
                    <div className="aspect-[16/10] rounded-3xl overflow-hidden relative border border-white/10 shadow-2xl backdrop-blur-sm">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/40 via-purple-600/30 to-blue-600/40 opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                      <Video
                        src={AboutVid2}
                        className="w-full h-full rounded-xl shadow-xl object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-2xl font-bold mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                          Strategic Planning
                        </h3>
                        <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                          Comprehensive strategic solutions for sustainable
                          growth
                        </p>
                      </div>
                    </div>
                    <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-purple-400/50 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-blue-400/50 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
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
                <div className="group relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative">
                    <div className="aspect-[16/10] rounded-3xl overflow-hidden relative border border-white/10 shadow-2xl backdrop-blur-sm">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 via-blue-600/30 to-indigo-600/40 opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                      <Video
                        src={AboutVid2}
                        className="w-full h-full rounded-xl shadow-xl object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-2xl font-bold mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                          Results Delivery
                        </h3>
                        <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                          Measurable outcomes that drive business transformation
                        </p>
                      </div>
                    </div>
                    <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-blue-400/50 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-indigo-400/50 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </AnimatedContent>
            </div>

            {/* Additional decorative elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400/30 rounded-full animate-pulse"></div>
              <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400/40 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-indigo-400/30 rounded-full animate-pulse delay-500"></div>
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
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Brand?
            </h3>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Discover our full range of media solutions and success stories.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold px-8 py-4 rounded-2xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group"
            >
              <span className="mr-3">Learn More About Us</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
