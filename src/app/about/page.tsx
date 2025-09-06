"use client";

import React from "react";
import Link from "next/link";
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
import AnimatedContent from "@/blocks/Animations/AnimatedContent/AnimatedContent";
import Video from "next-video";
import Image from "next/image";
import AboutVid from "../../videos/Holfort_mkt_Vid2.mp4";
import AboutVid1 from "../../videos/Holfort_mkt_Vid3.mp4";
import AboutVid2 from "../../videos/Holfort_mkt_Vid4.mp4";
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
    gradient: "from-purple-600/20 to-purple-800/20",
    iconColor: "text-purple-400",
    image: Comfort,
  },
  {
    name: "Oluwaseun Ajayi",
    position: "Chief Operating Officer",
    bio: "Seun's creative vision drives our award-winning campaigns, blending art and strategy to create impactful narratives.",
    gradient: "from-purple-600/20 to-purple-800/20",
    iconColor: "text-purple-400",
    image: seun,
  },
  {
    name: "Adeniji Rachael Omolade",
    position: "Head of Digital Strategy",
    bio: "Rachael specializes in data-driven strategies, helping brands achieve exponential growth through targeted campaigns.",
    gradient: "from-purple-600/20 to-purple-800/20",
    iconColor: "text-purple-400",
    image: adeniji,
  },
  {
    name: "Jemima Olonade",
    position: "Creative Director",
    bio: "Jemima's artistic flair and leadership inspire our creative team to push boundaries and deliver exceptional content.",
    gradient: "from-purple-600/20 to-purple-800/20",
    iconColor: "text-purple-400",
    image: jemima,
  },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30 overflow-hidden">
      {/* Advanced Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_50%_50%,_purple_1px,_transparent_1px)] bg-[length:40px_40px]"></div>

      {/* Floating Elements for Visual Interest */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-200/20 to-purple-300/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-purple-300/15 to-purple-400/15 rounded-full blur-3xl opacity-25 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-purple-200/15 to-purple-300/15 rounded-full blur-3xl opacity-20 animate-pulse delay-500"></div>

      {/* Refined overlay for perfect contrast */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/10 via-transparent to-white/20"></div>

      {/* Content */}
      <div className="relative z-20">
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
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-6">
                  <span className="text-purple-900 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text drop-shadow-sm">
                    About Holfort Media
                  </span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto rounded-full mt-4 mb-6"></div>
                <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
                  Transforming brands through innovative digital solutions and
                  impactful storytelling.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
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
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-purple-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </Link>
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
                  <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border-2 border-purple-200/50 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 rounded-2xl flex items-center justify-center mr-4">
                        <Target className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                        Our Vision
                      </h3>
                    </div>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium">
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
                  <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border-2 border-purple-200/50 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 rounded-2xl flex items-center justify-center mr-4">
                        <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                        Our Mission
                      </h3>
                    </div>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium">
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
                  <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border-2 border-purple-200/50 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Heart className="w-5 h-5 mr-2 text-purple-400" />
                      What We Strive For
                    </h4>
                    <ul className="space-y-3 text-gray-700 text-sm sm:text-base font-medium">
                      <li className="flex items-start">
                        <Star className="w-4 h-4 mt-1 mr-2 text-purple-400 flex-shrink-0" />
                        Empower brands with customized media strategies that
                        drive influence, engagement, and growth
                      </li>
                      <li className="flex items-start">
                        <Star className="w-4 h-4 mt-1 mr-2 text-purple-400 flex-shrink-0" />
                        Leverage data and creativity to produce compelling
                        narratives that leave lasting impressions
                      </li>
                      <li className="flex items-start">
                        <Star className="w-4 h-4 mt-1 mr-2 text-purple-400 flex-shrink-0" />
                        Maximize digital opportunities through social media
                        growth, influencer partnerships, and targeted campaigns
                      </li>
                    </ul>
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
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
                  <div className="relative backdrop-blur-xl rounded-3xl p-3 border border-white/30 shadow-2xl bg-white/60 hover:bg-white/70 transition-all duration-500 transform hover:scale-[1.02]">
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                      <Video
                        src={AboutVid}
                        className="w-full h-auto"
                        loop
                        muted
                        playsInline
                        webkit-playsinline="true"
                      />
                    </div>
                  </div>
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl opacity-80 rotate-12 group-hover:rotate-45 transition-transform duration-500"></div>
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl opacity-60 rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
                  <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-4 sm:p-6 shadow-2xl hover:scale-105 transition-transform duration-300">
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
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                  Our{" "}
                  <span className="text-purple-900 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text drop-shadow-sm">
                    Story
                  </span>
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto rounded-full mb-6"></div>
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
                  <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border-2 border-purple-200/50 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium mb-6">
                      Founded with a vision to revolutionize digital media,
                      Holfort Media emerged from the understanding that brands
                      need more than just visibility—they need transformation.
                      Our journey began with a simple belief: every brand has a
                      unique story worth telling, and every story deserves to
                      reach its intended audience with maximum impact.
                    </p>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium mb-6">
                      From our headquarters, we&apos;ve grown into a powerhouse
                      that combines creativity with data-driven strategies,
                      helping brands navigate the complex digital landscape. Our
                      approach goes beyond traditional media—we craft
                      experiences, build communities, and create lasting
                      connections between brands and their audiences.
                    </p>
                    <div className="flex items-center space-x-4 pt-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full flex items-center justify-center">
                        <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-gray-900 font-semibold text-base sm:text-lg">
                          Global Impact
                        </h4>
                        <p className="text-gray-700 text-xs sm:text-sm font-medium">
                          Transforming brands across continents
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedContent>

              {/* Story Video */}
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
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
                  <div className="relative backdrop-blur-xl rounded-3xl p-3 border border-white/30 shadow-2xl bg-white/60 hover:bg-white/70 transition-all duration-500 transform hover:scale-[1.02]">
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                      <Video
                        src={AboutVid1}
                        className="w-full h-auto"
                        loop
                        muted
                        playsInline
                        webkit-playsinline="true"
                      />
                    </div>
                  </div>
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl opacity-80 rotate-12 group-hover:rotate-45 transition-transform duration-500"></div>
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl opacity-60 rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
                  <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8">
                    <h3 className="text-gray-900 text-xl sm:text-2xl font-bold mb-2">
                      Building the Future
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base font-medium">
                      One brand at a time
                    </p>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4">
                What We Do{" "}
                <span className="text-purple-900 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text drop-shadow-sm">
                  Best
                </span>
              </h2>
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
                        src="https://i.pinimg.com/736x/f8/bb/26/f8bb26f7387644df73e2660ab988ea81.jpg"
                        alt="Media Strategy"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                        priority
                      />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                      Media Strategy
                    </h4>
                    <p className="text-gray-700 text-sm sm:text-base font-medium">
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
                  <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border-2 border-purple-200/50 text-center shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:scale-105">
                    <div className="aspect-video mb-4 bg-gradient-to-br from-purple-100/50 to-purple-200/50 rounded-xl overflow-hidden relative border border-purple-200/30">
                      <Image
                        src="https://i.pinimg.com/736x/d5/2d/7c/d52d7cdd20736a01b0978e04ac276d39.jpg"
                        alt="Content Creation"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                        priority
                      />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                      Content Creation
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
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                  Leadership{" "}
                  <span className="text-purple-900 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text drop-shadow-sm">
                    Team
                  </span>
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto rounded-full mb-6"></div>
                <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto font-medium">
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
                    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border-2 border-purple-200/50 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
                      <div className="relative group mb-6">
                        <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
                        <div
                          className={`aspect-square bg-gradient-to-br ${member.gradient} rounded-2xl overflow-hidden relative border border-purple-200/30`}
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
                        <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl opacity-80 rotate-12 group-hover:rotate-45 transition-transform duration-500"></div>
                        <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl opacity-60 rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                        {member.name}
                      </h3>
                      <p
                        className={`${member.iconColor} font-semibold mb-4 text-sm sm:text-base`}
                      >
                        {member.position}
                      </p>
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium">
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
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                  Our{" "}
                  <span className="text-purple-900 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text drop-shadow-sm">
                    Future Vision
                  </span>
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto rounded-full mb-6"></div>
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
                  <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border-2 border-purple-200/50 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">
                        Global Expansion
                      </h3>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base font-medium">
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
                  <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border-2 border-purple-200/50 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">
                        Tech-Driven Solutions
                      </h3>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base font-medium">
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
                  <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border-2 border-purple-200/50 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <Award className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">
                        Holfort Academy
                      </h3>
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base font-medium">
                      Create a training institute to empower young media
                      professionals and digital creators with hands-on
                      expertise.
                    </p>
                  </div>
                </AnimatedContent>
              </div>

              {/* Future Vision Video */}
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
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
                  <div className="relative backdrop-blur-xl rounded-3xl p-3 border border-white/30 shadow-2xl bg-white/60 hover:bg-white/70 transition-all duration-500 transform hover:scale-[1.02]">
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                      <Video
                        src={AboutVid2}
                        className="w-full h-auto"
                        loop
                        muted
                        playsInline
                        webkit-playsinline="true"
                      />
                    </div>
                  </div>
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl opacity-80 rotate-12 group-hover:rotate-45 transition-transform duration-500"></div>
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl opacity-60 rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
                  <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8">
                    <h3 className="text-gray-900 text-xl sm:text-2xl font-bold mb-2">
                      Building Tomorrow
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base font-medium">
                      Innovation meets impact
                    </p>
                  </div>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </section>

        {/* Video Gallery Section */}
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
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
                    <div className="relative backdrop-blur-xl rounded-3xl p-3 border border-white/30 shadow-2xl bg-white/60 hover:bg-white/70 transition-all duration-500 transform hover:scale-[1.02]">
                      <div className="rounded-2xl overflow-hidden shadow-xl">
                        <Video
                          src={AboutVid1}
                          className="w-full h-auto"
                          loop
                          muted
                          playsInline
                          webkit-playsinline="true"
                        />
                      </div>
                    </div>
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
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
                    <div className="relative backdrop-blur-xl rounded-3xl p-3 border border-white/30 shadow-2xl bg-white/60 hover:bg-white/70 transition-all duration-500 transform hover:scale-[1.02]">
                      <div className="rounded-2xl overflow-hidden shadow-xl">
                        <Video
                          src={AboutVid2}
                          className="w-full h-auto"
                          loop
                          muted
                          playsInline
                          webkit-playsinline="true"
                        />
                      </div>
                    </div>
                    <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl opacity-80 rotate-12 group-hover:rotate-45 transition-transform duration-500"></div>
                    <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl opacity-60 rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
                  </div>
                </AnimatedContent>
              </div>
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400/30 rounded-full animate-pulse"></div>
                <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-500/40 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-purple-600/30 rounded-full animate-pulse delay-500"></div>
              </div>
            </div>
          </AnimatedContent>
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
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                Ready to Transform Your Brand?
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto rounded-full mb-6"></div>
              <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto font-medium">
                Discover our full range of media solutions and join the brands
                already experiencing transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/services"
                  className="group relative inline-flex items-center bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white font-bold px-8 py-4 rounded-2xl hover:from-purple-700 hover:via-purple-800 hover:to-purple-900 transition-all duration-500 shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transform-gpu touch-manipulation overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative mr-3 text-lg">
                    Start Your Journey
                  </span>
                  <ArrowRight className="relative w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
                <Link
                  href="/about"
                  className="group relative inline-flex items-center bg-white/80 backdrop-blur-xl text-gray-900 font-bold px-8 py-4 rounded-2xl border-2 border-purple-200 hover:border-purple-400 hover:bg-white transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 touch-manipulation"
                >
                  <Play className="w-5 h-5 mr-3" />
                  <span className="text-lg">Watch Our Story</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-purple-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </Link>
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
