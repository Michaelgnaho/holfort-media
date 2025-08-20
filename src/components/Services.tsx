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
import Silk from "@/blocks/Backgrounds/Silk/Silk";
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
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Silk Background */}
      <div className="absolute inset-0 z-0">
        <Silk
          speed={1.6}
          scale={0.4}
          color="#582EFF"
          noiseIntensity={0.5}
          rotation={1.5}
        />
        <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-indigo-900/30" />
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
              Our{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions designed to elevate your brand and
              maximize your impact.
            </p>
          </div>
        </AnimatedContent>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Featured Services */}
          <div className="space-y-8">
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
                    className={`bg-gradient-to-br ${service.bgColor} backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300 group`}
                  >
                    <div className="flex items-start mb-6">
                      <div
                        className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-3">
                          {service.title}
                        </h3>
                        <p className="text-gray-200 text-lg leading-relaxed">
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
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 shadow-2xl">
                <div className="text-center">
                  <h4 className="text-white font-bold text-2xl">8+</h4>
                  <p className="text-white/90 text-sm">Core Services</p>
                </div>
              </div>
            </div>
          </AnimatedContent>
        </div>

        {/* Additional Services Preview */}
        {/* <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">More Services We Offer</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
              <Shield className="w-10 h-10 text-purple-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-3">Reputation Management</h4>
              <p className="text-gray-300">Digital PR and online reputation protection</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
              <Users className="w-10 h-10 text-blue-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-3">Influencer Marketing</h4>
              <p className="text-gray-300">Strategic partnerships and brand amplification</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
              <Globe className="w-10 h-10 text-indigo-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-3">Corporate Strategy</h4>
              <p className="text-gray-300">Media advisory for organizations and leaders</p>
            </div>
          </div>
        </div> */}

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
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Our Work in Action
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
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
                          className="w-full rounded-xl shadow-xl  object-contain"
                          autoPlay
                          muted
                          loop
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
                          className="w-full rounded-xl shadow-xl object-contain"
                          autoPlay
                          muted
                          loop
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
                          className="w-full rounded-xl shadow-xl  object-contain"
                          autoPlay
                          muted
                          loop
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
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Elevate Your Brand?
            </h3>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Explore our complete service offerings and see how we can
              transform your digital presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold px-8 py-4 rounded-2xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group"
              >
                <span className="mr-3">View All Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-2xl border-2 border-white/20 hover:bg-white/20 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
