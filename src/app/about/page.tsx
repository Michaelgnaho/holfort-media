"use client";

import React from "react";
import {
  ArrowRight,
  Target,
  Lightbulb,
  Globe,
  Award,
  Zap,
  Heart,
  Star,
  Play,
} from "lucide-react";
import Image from "next/image";
import AnimatedContent from "@/blocks/Animations/AnimatedContent/AnimatedContent";
import Comfort from "../../../public/team/comfortReal.jpg";
import seun from "../../../public/team/seun.jpg";
import adeniji from "../../../public/team/AdenijiRachaelOmolade.jpg";
import jemima from "../../../public/team/JemimaOlonade.jpg";

// Team Members Data
const teamMembers = [
  {
    name: "Comfort Olafare",
    position: "CEO & Founder",
    bio: "With over 15 years of experience in digital media, Comfort Olafare leads Holfort Media with a passion for innovation and storytelling.",
    gradient: "from-purple-500/20 to-purple-600/20",
    iconColor: "text-purple-400",
    image: Comfort,
  },
  {
    name: "Oluwaseun Ajayi",
    position: "Chief Operating Officer",
    bio: "Seun creative vision drives our award-winning campaigns, blending art and strategy to create impactful narratives.",
    gradient: "from-blue-500/20 to-blue-600/20",
    iconColor: "text-blue-400",
    image: seun,
  },
  {
    name: "Adeniji Rachael Omolade.",
    position: "Head of Digital Strategy",
    bio: " Rachael  specializes in data-driven strategies, helping brands achieve exponential growth through targeted campaigns.",
    gradient: "from-indigo-500/20 to-indigo-600/20",
    iconColor: "text-indigo-400",
    image: adeniji,
  },
  {
    name: "Jemima Olonade",
    position: "Creative Director",
    bio: "Jemima's artistic flair and leadership inspire our creative team to push boundaries and deliver exceptional content.",
    gradient: "from-yellow-500/20 to-yellow-600/20",
    iconColor: "text-yellow-400",
    image: jemima,
  },
];

// Silk Background Component (optimized for mobile)
const SilkBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/30 to-indigo-900/50">
      <div className="absolute inset-0 opacity-20">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  </div>
);

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Silk Background */}
      <SilkBackground />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center py-16 sm:py-20">
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12 sm:mb-16">
                <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 sm:mb-8 tracking-tight">
                  About{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Holfort Media
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Transforming brands through innovative digital solutions and
                  impactful storytelling across the globe.
                </p>
              </div>
            </div>
          </AnimatedContent>
        </section>

        {/* Vision & Mission Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-16 sm:mb-20">
              {/* Vision & Mission Cards */}
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
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl group hover:bg-white/15 transition-all duration-500">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <Target className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        Our Vision
                      </h3>
                    </div>
                    <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
                      &quot;To be the leading media powerhouse, delivering
                      innovative digital solutions that transform brands and
                      drive global impact.&quot;
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
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl group hover:bg-white/15 transition-all duration-500">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        Our Mission
                      </h3>
                    </div>
                    <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
                      &quot;To empower brands with innovative digital solutions,
                      strategic media management, and impactful
                      storytelling.&quot;
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
                  <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-4 flex items-center">
                      <Heart className="w-5 h-5 mr-2 text-purple-400" />
                      What We Strive For
                    </h4>
                    <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
                      <li className="flex items-start">
                        <Star className="w-4 h-4 mt-1 mr-2 text-purple-400 flex-shrink-0" />
                        Empower brands with customized media strategies that
                        drive influence, engagement, and growth
                      </li>
                      <li className="flex items-start">
                        <Star className="w-4 h-4 mt-1 mr-2 text-blue-400 flex-shrink-0" />
                        Leverage data and creativity to produce compelling
                        narratives that leave lasting impressions
                      </li>
                      <li className="flex items-start">
                        <Star className="w-4 h-4 mt-1 mr-2 text-indigo-400 flex-shrink-0" />
                        Maximize digital opportunities through social media
                        growth, influencer partnerships, and targeted campaigns
                      </li>
                    </ul>
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
                  <div className="aspect-[4/3] bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-3xl overflow-hidden border border-white/20 shadow-2xl relative group">
                    <Image
                      src="https://i.pinimg.com/1200x/72/e3/83/72e38320a669ebb2cee4fe17f4fe5d92.jpg"
                      alt="Holfort Media team collaboration"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  </div>
                  <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-4 sm:p-6 shadow-2xl hover:scale-105 transition-transform duration-300">
                    <div className="text-center">
                      <h4 className="text-white font-bold text-xl sm:text-2xl">
                        50+
                      </h4>
                      <p className="text-white/90 text-xs sm:text-sm">
                        Brands Transformed
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                  Our{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Story
                  </span>
                </h2>
              </div>
            </AnimatedContent>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              {/* Story Content */}
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
                <div className="space-y-6">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
                    <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-6">
                      Founded with a vision to revolutionize digital media,
                      Holfort Media emerged from the understanding that brands
                      need more than just visibility—they need transformation.
                      Our journey began with a simple belief: every brand has a
                      unique story worth telling, and every story deserves to
                      reach its intended audience with maximum impact.
                    </p>
                    <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-6">
                      From our headquarters, we&apos;ve grown into a powerhouse
                      that combines creativity with data-driven strategies,
                      helping brands navigate the complex digital landscape. Our
                      approach goes beyond traditional media—we craft
                      experiences, build communities, and create lasting
                      connections between brands and their audiences.
                    </p>
                    <div className="flex items-center space-x-4 pt-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                        <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-base sm:text-lg">
                          Global Impact
                        </h4>
                        <p className="text-gray-400 text-xs sm:text-sm">
                          Transforming brands across continents
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedContent>

              {/* Story Image */}
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
                  <div className="aspect-square bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
                    <Image
                      src="https://i.pinimg.com/736x/3c/0a/af/3c0aafbcd0d04d99fb33628ed0d9205e.jpg"
                      alt="Our journey and growth"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8">
                      <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
                        Building the Future
                      </h3>
                      <p className="text-white/80 text-sm sm:text-base">
                        One brand at a time
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </section>

        {/* Core Services Preview */}
        <section className="py-16 sm:py-20">
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
                What We Do{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Best
                </span>
              </h2>
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
                  <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center group hover:bg-white/10 transition-all duration-300">
                    <div className="aspect-video mb-4 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl overflow-hidden relative">
                      <Image
                        src="https://i.pinimg.com/736x/f8/bb/26/f8bb26f7387644df73e2660ab988ea81.jpg"
                        alt="Media Strategy"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        priority
                      />
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-3">
                      Media Strategy
                    </h4>
                    <p className="text-gray-300 text-sm sm:text-base">
                      Customized media strategies that drive engagement and
                      growth
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
                  <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center group hover:bg-white/10 transition-all duration-300">
                    <div className="aspect-video mb-4 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl overflow-hidden relative">
                      <Image
                        src="https://i.pinimg.com/736x/d5/2d/7c/d52d7cdd20736a01b0978e04ac276d39.jpg"
                        alt="Content Creation"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        priority
                      />
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-3">
                      Content Creation
                    </h4>
                    <p className="text-gray-300 text-sm sm:text-base">
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
                  <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center group hover:bg-white/10 transition-all duration-300">
                    <div className="aspect-video mb-4 bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 rounded-xl overflow-hidden relative">
                      <Image
                        src="https://i.pinimg.com/736x/3a/23/85/3a23856a10e4182f2abb660f1aecfc4b.jpg"
                        alt="Digital Growth"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        priority
                      />
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-3">
                      Digital Growth
                    </h4>
                    <p className="text-gray-300 text-sm sm:text-base">
                      Strategic campaigns that maximize reach and conversions
                    </p>
                  </div>
                </AnimatedContent>
              </div>
            </div>
          </AnimatedContent>
        </section>

        {/* Leadership Team Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                  Leadership{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Team
                  </span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                  Meet the visionaries driving innovation and excellence at
                  Holfort Media
                </p>
              </div>
            </AnimatedContent>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {teamMembers.map((member, index) => (
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
                  <div className="group">
                    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500">
                      <div
                        className={`aspect-square bg-gradient-to-br ${member.gradient} rounded-2xl mb-6 overflow-hidden relative`}
                      >
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          priority
                        />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                        {member.name}
                      </h3>
                      <p
                        className={`${member.iconColor} font-semibold mb-4 text-sm sm:text-base`}
                      >
                        {member.position}
                      </p>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </AnimatedContent>
              ))}
            </div>
          </div>
        </section>

        {/* Future Vision Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                  Our{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Future Vision
                  </span>
                </h2>
              </div>
            </AnimatedContent>

            <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
              {/* Vision Cards */}
              <div className="space-y-6">
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
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 mr-3" />
                      <h3 className="text-lg font-semibold text-white">
                        Global Expansion
                      </h3>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base">
                      Establish Holfort Media as a leading digital media agency
                      in Africa, with international partnerships in Europe and
                      the US.
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
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mr-3" />
                      <h3 className="text-lg font-semibold text-white">
                        Tech-Driven Solutions
                      </h3>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base">
                      Incorporate AI, analytics, and automation to optimize
                      digital campaigns and content strategies.
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
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <Award className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400 mr-3" />
                      <h3 className="text-lg font-semibold text-white">
                        Holfort Academy
                      </h3>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base">
                      Create a training institute to empower young media
                      professionals and digital creators with hands-on
                      expertise.
                    </p>
                  </div>
                </AnimatedContent>
              </div>

              {/* Future Vision Image */}
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
                  <div className="aspect-[4/3] bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
                    <Image
                      src="https://i.pinimg.com/736x/e5/45/d8/e545d8423e84af8325eed1e87308d561.jpg"
                      alt="Future vision and growth"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8">
                      <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
                        Building Tomorrow
                      </h3>
                      <p className="text-white/80 text-sm sm:text-base">
                        Innovation meets impact
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 sm:py-20">
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Brand?
              </h3>
              <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Discover our full range of media solutions and join the brands
                already experiencing transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-2xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group touch-manipulation">
                  <span className="mr-3">Start Your Journey</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/20 group touch-manipulation">
                  <Play className="w-5 h-5 mr-3" />
                  <span>Watch Our Story</span>
                </button>
              </div>
            </div>
          </AnimatedContent>
        </section>
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
    </div>
  );
}
