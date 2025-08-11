import React from "react";
import Link from "next/link";
import { ArrowRight, Target, Lightbulb, Users, TrendingUp } from "lucide-react";
import Silk from "@/blocks/Backgrounds/Silk/Silk";

export default function AboutSection() {
  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Silk Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute  inset-0 z-0">
          <Silk
            speed={3.5}
            scale={0.2}
            color="#582EFF"
            noiseIntensity={3.3}
            rotation={0.35}
          />
        </div>{" "}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
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

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Vision & Mission */}
          <div className="space-y-8">
            {/* Vision Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-gray-200 text-lg leading-relaxed">
                &quot;To be the leading media powerhouse, delivering innovative
                digital solutions that transform brands and drive global
                impact.&quot;
              </p>
            </div>

            {/* Mission Card */}
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
          </div>

          {/* Right Column - Main Image */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <Users className="w-16 h-16 text-white/60 mx-auto mb-4" />
                  <p className="text-white/60 font-medium text-lg">
                    Team Collaboration
                  </p>
                </div>
              </div>
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 shadow-2xl">
              <div className="text-center">
                <h4 className="text-white font-bold text-2xl">50+</h4>
                <p className="text-white/90 text-sm">Brands Transformed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values - Simplified */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            What We Do Best
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
              <Users className="w-10 h-10 text-purple-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-3">
                Brand Strategy
              </h4>
              <p className="text-gray-300">
                Customized media strategies that drive engagement and growth
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
              <Lightbulb className="w-10 h-10 text-blue-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-3">
                Creative Content
              </h4>
              <p className="text-gray-300">
                Compelling narratives that leave lasting impressions
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
              <TrendingUp className="w-10 h-10 text-indigo-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-3">
                Digital Growth
              </h4>
              <p className="text-gray-300">
                Strategic campaigns that maximize reach and conversions
              </p>
            </div>
          </div>
        </div>

        {/* Image Gallery Section */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Image 1 */}
            <div className="relative group">
              <div className="aspect-[16/10] bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-2xl overflow-hidden border border-white/20 shadow-xl">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <Target className="w-12 h-12 text-white/60 mx-auto mb-3" />
                    <p className="text-white/60 font-medium">
                      Strategic Planning
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative group">
              <div className="aspect-[16/10] bg-gradient-to-br from-blue-600/30 to-indigo-600/30 rounded-2xl overflow-hidden border border-white/20 shadow-xl">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="w-12 h-12 text-white/60 mx-auto mb-3" />
                    <p className="text-white/60 font-medium">
                      Results Delivery
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
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
      </div>
    </section>
  );
}
