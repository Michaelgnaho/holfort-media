"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  ExternalLink,
  Camera,
  Star,
  Filter,
  Grid3X3,
  List,
} from "lucide-react";
import Video from "next-video";
import AnimatedContent from "@/blocks/Animations/AnimatedContent/AnimatedContent";
import wedding from "../../../videos/project-wedding.mp4";
import PVC from "../../../videos/project_igbogbo1.mp4";
import HOA from "../../../videos/project_HOA.mp4";
import AafinCommissioning from "../../../videos/project-aafin-commissioning.mp4";
import Link from "next/link";

// Portfolio data
const portfolioItems = [
  {
    id: 1,
    title: "Igbogbo PVC Campaign",
    category: "Video Coverage",
    type: "event",
    client: "Igbogbo Local Government",
    description:
      "Complete media coverage and live streaming A Message from the Executive Chairman, Igbogbo Baiyeku LCDA on PVC Collection",
    video: PVC,
    results: {
      views: "50K+",
      engagement: "85%",
      reach: "2M+",
      duration: "3 Days",
    },
    tags: ["Live Streaming", "Social Media", "Content Creation"],
    featured: true,
  },
  {
    id: 2,
    title: "Wedding Coverage",
    category: "Event Coverage",
    type: "Wedding",
    client: "Mr & Mrs. Johnson",
    description:
      "Comprehensive wedding coverage including photography, videography, and live streaming for a memorable celebration.",
    video: wedding,
    results: {
      awareness: "+300%",
      leads: "15K+",
      conversion: "12.5%",
      roi: "450%",
    },
    tags: ["Brand Strategy", "Social Media", "Paid Advertising"],
    featured: true,
  },
  {
    id: 3,
    title: "Mentorship Session With HOA",
    category: "Publicity Campaign",
    type: "branding",
    client: "HOA",
    description:
      "Strategic personal branding and PR campaign for HOA, enhancing online presence and engagement.",
    video: HOA,
    results: {
      followers: "+250%",
      mentions: "500+",
      interviews: "25+",
      speaking: "12 Events",
    },
    tags: ["Personal Branding", "PR", "Content Strategy"],
    featured: true,
  },
  {
    id: 4,
    title: "Aafin Adeboruwa Commissioning",
    category: "Event Coverage",
    type: "event",
    client: "Igbogbo Kingdom",
    description:
      "Comprehensive media coverage capturing the historic commissioning of Aafin Adeboruwa, a grand ceremony led by Hon. Kayode Roberts representing the Deputy Governor of Lagos State.",
    video: AafinCommissioning,
    results: {
      views: "75K+",
      engagement: "90%",
      reach: "3M+",
      duration: "1 Day",
    },
    tags: ["Event Coverage", "Photography", "Videography"],
    featured: true,
  },
];

const categories = [
  "All",
  "Event Coverage",
  "Digital Campaign",
  "Personal Branding",
  "Political Media",
  "Growth Strategy",
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid");

  const filteredProjects =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  const featuredProjects = portfolioItems.filter((item) => item.featured);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30 overflow-hidden">
      {/* Advanced Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_50%_50%,_purple_1px,_transparent_1px)] bg-[length:40px_40px]"></div>

      {/* Floating Elements for Visual Interest */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-200/20 to-blue-200/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-purple-300/15 to-pink-300/15 rounded-full blur-3xl opacity-25 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-blue-200/15 to-purple-200/15 rounded-full blur-3xl opacity-20 animate-pulse delay-500"></div>

      {/* Refined overlay for perfect contrast */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/10 via-transparent to-white/20"></div>

      {/* Content */}
      <div className="relative z-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center py-20">
          <AnimatedContent
            distance={100}
            direction="vertical"
            reverse={false}
            duration={1.5}
            initialOpacity={0}
            animateOpacity={true}
            threshold={0.2}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[0.9] mb-6">
                  Our{" "}
                  <span className="text-purple-900 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-900 bg-clip-text drop-shadow-sm">
                    Portfolio
                  </span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto rounded-full mt-4 mb-6"></div>
                <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium mb-8">
                  Discover our most impactful projects, successful campaigns,
                  and transformative brand stories that showcase our expertise
                  in action.
                </p>
                <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                  {[
                    {
                      value: "50+",
                      label: "Projects Delivered",
                      color: "purple",
                    },
                    { value: "2M+", label: "People Reached", color: "blue" },
                    { value: "95%", label: "Success Rate", color: "indigo" },
                    { value: "25+", label: "Awards Won", color: "pink" },
                  ].map((stat, index) => (
                    <AnimatedContent
                      key={index}
                      distance={100}
                      direction="horizontal"
                      reverse={index % 2 === 0}
                      duration={1.5}
                      initialOpacity={0}
                      animateOpacity={true}
                      threshold={0.1}
                    >
                      <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border-2 border-purple-200/50 shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:scale-105">
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                          {stat.value}
                        </h3>
                        <p className="text-gray-700 font-medium">
                          {stat.label}
                        </p>
                      </div>
                    </AnimatedContent>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedContent>
        </section>

        {/* Featured Projects Section */}
        <section className="py-20">
          <AnimatedContent
            distance={100}
            direction="vertical"
            reverse={false}
            duration={1.5}
            initialOpacity={0}
            animateOpacity={true}
            threshold={0.1}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Featured{" "}
                  <span className="text-purple-900 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-900 bg-clip-text">
                    Projects
                  </span>
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto rounded-full mb-6"></div>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto font-medium">
                  Our most impactful and award-winning projects that demonstrate
                  our expertise across industries
                </p>
              </div>
              <div className="grid lg:grid-cols-2 gap-8 mb-16">
                {featuredProjects.slice(0, 2).map((project, index) => (
                  <AnimatedContent
                    key={project.id}
                    distance={100}
                    direction="horizontal"
                    reverse={index % 2 === 0}
                    duration={1.5}
                    initialOpacity={0}
                    animateOpacity={true}
                    threshold={0.1}
                  >
                    <div className="group relative">
                      <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden border-2 border-purple-200/50 shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:scale-[1.02]">
                        <div className="relative w-full">
                          <Video
                            src={project.video}
                            className="w-full h-auto object-contain"
                            muted
                            playsInline
                            webkit-playsinline="true"
                          />
                        </div>
                        <div className="p-8">
                          <div className="flex items-center justify-between mb-3">
                            <span className="bg-gradient-to-r from-purple-600 to-purple-700 px-4 py-2 rounded-full text-white font-semibold text-sm">
                              {project.category}
                            </span>
                            {project.featured && (
                              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 px-3 py-1 rounded-full flex items-center">
                                <Star className="w-4 h-4 text-white mr-1" />
                                <span className="text-white font-semibold text-xs">
                                  Featured
                                </span>
                              </div>
                            )}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-800 transition-colors duration-300">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-2 font-medium">
                            {project.client}
                          </p>
                          <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                            {project.description}
                          </p>
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            {Object.entries(project.results).map(
                              ([key, value], resultIndex) => (
                                <div key={resultIndex} className="text-center">
                                  <h4 className="text-gray-900 font-bold text-lg">
                                    {value}
                                  </h4>
                                  <p className="text-gray-600 text-sm capitalize font-medium">
                                    {key.replace(/([A-Z])/g, " $1")}
                                  </p>
                                </div>
                              )
                            )}
                          </div>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-3 py-1 bg-purple-100/60 border border-purple-200 rounded-full text-sm text-purple-800 font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex gap-3">
                            <button className="flex-1 group bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white font-bold py-3 px-6 rounded-2xl hover:from-purple-700 hover:via-purple-800 hover:to-purple-900 transition-all duration-500 shadow-xl hover:shadow-purple-500/25 hover:scale-105 flex items-center justify-center">
                              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                              <span className="relative mr-2">
                                View Case Study
                              </span>
                              <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                            <button className="bg-white/80 backdrop-blur-sm text-gray-700 p-3 rounded-2xl hover:bg-purple-100/60 border border-purple-200 hover:border-purple-300 transition-all duration-300">
                              <ExternalLink className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedContent>
                ))}
              </div>
            </div>
          </AnimatedContent>
        </section>

        {/* All Projects Section */}
        <section className="py-20">
          <AnimatedContent
            distance={100}
            direction="vertical"
            reverse={false}
            duration={1.5}
            initialOpacity={0}
            animateOpacity={true}
            threshold={0.1}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    All{" "}
                    <span className="text-purple-900 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-900 bg-clip-text">
                      Projects
                    </span>
                  </h2>
                  <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full mb-4"></div>
                  <p className="text-gray-700 font-medium">
                    Browse through our comprehensive portfolio
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-6 lg:mt-0">
                  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-xl rounded-2xl p-2 border-2 border-purple-200/50 shadow-lg">
                    <Filter className="w-5 h-5 text-gray-600" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="bg-transparent text-gray-700 border-none outline-none cursor-pointer font-medium"
                    >
                      {categories.map((category) => (
                        <option
                          key={category}
                          value={category}
                          className="bg-white text-gray-700"
                        >
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-center bg-white/80 backdrop-blur-xl rounded-2xl p-1 border-2 border-purple-200/50 shadow-lg">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 rounded-xl transition-all duration-300 ${
                        viewMode === "grid"
                          ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-md"
                          : "text-gray-600 hover:text-purple-700"
                      }`}
                    >
                      <Grid3X3 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 rounded-xl transition-all duration-300 ${
                        viewMode === "list"
                          ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-md"
                          : "text-gray-600 hover:text-purple-700"
                      }`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={`grid ${
                  viewMode === "grid"
                    ? "md:grid-cols-2 lg:grid-cols-3"
                    : "grid-cols-1"
                } gap-8`}
              >
                {filteredProjects.map((project, index) => (
                  <AnimatedContent
                    key={project.id}
                    distance={100}
                    direction="horizontal"
                    reverse={index % 2 === 0}
                    duration={1.5}
                    initialOpacity={0}
                    animateOpacity={true}
                    threshold={0.1}
                  >
                    <div className="group relative">
                      <div className="bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden border-2 border-purple-200/50 shadow-xl hover:shadow-purple-500/10 transition-all duration-500 hover:scale-[1.02]">
                        <div
                          className={`${
                            viewMode === "list"
                              ? "flex flex-col md:flex-row"
                              : ""
                          }`}
                        >
                          <div
                            className={`relative ${
                              viewMode === "list" ? "md:w-1/2 w-full" : "w-full"
                            }`}
                          >
                            <Video
                              src={project.video}
                              className="w-full h-auto object-contain"
                              muted
                              playsInline
                              webkit-playsinline="true"
                            />
                          </div>
                          <div
                            className={`p-6 ${
                              viewMode === "list" ? "md:w-1/2 w-full" : ""
                            }`}
                          >
                            <div className="flex items-center justify-between mb-3">
                              <span className="bg-gradient-to-r from-purple-600 to-purple-700 px-3 py-1 rounded-full text-white text-xs font-semibold">
                                {project.category}
                              </span>
                              {project.featured && (
                                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 px-3 py-1 rounded-full flex items-center">
                                  <Star className="w-4 h-4 text-white mr-1" />
                                  <span className="text-white font-semibold text-xs">
                                    Featured
                                  </span>
                                </div>
                              )}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-800 transition-colors duration-300">
                              {project.title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-3 font-medium">
                              {project.client}
                            </p>
                            <p className="text-gray-700 mb-4 leading-relaxed font-medium">
                              {project.description}
                            </p>
                            <div
                              className={`grid ${
                                viewMode === "list"
                                  ? "grid-cols-4"
                                  : "grid-cols-2"
                              } gap-3 mb-4`}
                            >
                              {Object.entries(project.results)
                                .slice(0, viewMode === "list" ? 4 : 2)
                                .map(([key, value], resultIndex) => (
                                  <div
                                    key={resultIndex}
                                    className="text-center"
                                  >
                                    <h4 className="text-gray-900 font-bold">
                                      {value}
                                    </h4>
                                    <p className="text-gray-600 text-xs capitalize font-medium">
                                      {key}
                                    </p>
                                  </div>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-1 mb-4">
                              {project.tags.slice(0, 3).map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="px-2 py-1 bg-purple-100/60 border border-purple-200 rounded-full text-xs text-purple-800 font-medium"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <button className="w-full group bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white font-bold py-3 px-6 rounded-2xl hover:from-purple-700 hover:via-purple-800 hover:to-purple-900 transition-all duration-500 shadow-xl hover:shadow-purple-500/25 hover:scale-105 flex items-center justify-center">
                              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                              <Link href={`/contact`}>
                                <span className="relative mr-2">Book Us</span>
                              </Link>
                              <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedContent>
                ))}
              </div>
            </div>
          </AnimatedContent>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <AnimatedContent
            distance={100}
            direction="vertical"
            reverse={false}
            duration={1.5}
            initialOpacity={0}
            animateOpacity={true}
            threshold={0.1}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 border-2 border-purple-200/50 shadow-2xl hover:shadow-purple-500/10">
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Ready to Create Your Success Story?
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto rounded-full mb-6"></div>
                <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto font-medium">
                  Let&apos;s discuss how we can help you achieve similar results
                  and transform your brand&apos;s digital presence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white font-bold px-8 py-4 rounded-2xl hover:from-purple-700 hover:via-purple-800 hover:to-purple-900 transition-all duration-500 shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transform-gpu touch-manipulation"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                    <span className="relative mr-3 text-lg">
                      Start Your Project
                    </span>
                    <ArrowRight className="relative w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedContent>
        </section>
      </div>

      {/* Additional decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-5">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-500/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-purple-600/30 rounded-full animate-pulse delay-500"></div>
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
