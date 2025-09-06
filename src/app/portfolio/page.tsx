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

// Silk Background Component

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
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center py-20">
          <AnimatedContent
            distance={100}
            direction="vertical"
            reverse={false}
            animateOpacity={true}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
                  Our{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Portfolio
                  </span>
                </h1>
                <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
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
                      animateOpacity={true}
                      threshold={0.1}
                    >
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                        <h3 className="text-3xl font-bold text-white mb-2">
                          {stat.value}
                        </h3>
                        <p className={`text-${stat.color}-400 font-semibold`}>
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
            animateOpacity={true}
            threshold={0.1}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold text-white mb-6">
                  Featured{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Projects
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                    initialOpacity={0}
                    animateOpacity={true}
                    threshold={0.1}
                  >
                    <div className="group relative">
                      <div className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500 hover:scale-[1.02]">
                        <div className="relative w-full">
                          <Video
                            src={project.video}
                            className="w-full h-auto rounded-t-2xl shadow-lg object-cover"
                            // autoPlay
                            // loop
                            muted
                            playsInline
                            webkit-playsinline="true"
                          />
                        </div>
                        <div className="p-8">
                          <div className="flex items-center justify-between mb-3">
                            <span className="bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 rounded-full text-white font-semibold text-sm">
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
                          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                            {project.title}
                          </h3>
                          <p className="text-gray-400 text-sm mb-2">
                            {project.client}
                          </p>
                          <p className="text-gray-200 mb-6 leading-relaxed">
                            {project.description}
                          </p>
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            {Object.entries(project.results).map(
                              ([key, value], resultIndex) => (
                                <div key={resultIndex} className="text-center">
                                  <h4 className="text-white font-bold text-lg">
                                    {value}
                                  </h4>
                                  <p className="text-gray-400 text-sm capitalize">
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
                                className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 border border-white/20"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex gap-3">
                            <button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-2xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group">
                              <span className="mr-2">View Case Study</span>
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                            <button className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/20">
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
            initialOpacity={0}
            animateOpacity={true}
            threshold={0.1}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
                <div>
                  <h2 className="text-4xl font-bold text-white mb-4">
                    All{" "}
                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      Projects
                    </span>
                  </h2>
                  <p className="text-gray-300">
                    Browse through our comprehensive portfolio
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-6 lg:mt-0">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
                    <Filter className="w-5 h-5 text-gray-400" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="bg-transparent text-white border-none outline-none cursor-pointer"
                    >
                      {categories.map((category) => (
                        <option
                          key={category}
                          value={category}
                          className="bg-gray-800"
                        >
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-2xl p-1 border border-white/20">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 rounded-xl transition-all duration-200 ${
                        viewMode === "grid"
                          ? "bg-purple-600 text-white"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      <Grid3X3 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 rounded-xl transition-all duration-200 ${
                        viewMode === "list"
                          ? "bg-purple-600 text-white"
                          : "text-gray-400 hover:text-white"
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
                    initialOpacity={0}
                    animateOpacity={true}
                    threshold={0.1}
                  >
                    <div className="group">
                      <div
                        className={`bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500 hover:scale-[1.02] ${
                          viewMode === "list" ? "flex flex-col md:flex-row" : ""
                        }`}
                      >
                        <div
                          className={`relative ${
                            viewMode === "list" ? "md:w-1/2 w-full" : "w-full"
                          }`}
                        >
                          <Video
                            src={project.video}
                            className="w-full h-auto rounded-t-2xl shadow-lg object-cover"
                            // autoPlay
                            // loop
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
                            <span className="bg-gradient-to-r from-purple-600 to-blue-600 px-3 py-1 rounded-full text-white text-xs font-semibold">
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
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                            {project.title}
                          </h3>
                          <p className="text-gray-400 text-sm mb-3">
                            {project.client}
                          </p>
                          <p className="text-gray-200 mb-4 leading-relaxed">
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
                                <div key={resultIndex} className="text-center">
                                  <h4 className="text-white font-bold">
                                    {value}
                                  </h4>
                                  <p className="text-gray-400 text-xs capitalize">
                                    {key}
                                  </p>
                                </div>
                              ))}
                          </div>
                          <div className="flex flex-wrap gap-1 mb-4">
                            {project.tags.slice(0, 3).map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <button className="w-full bg-gradient-to-r from-purple-600/80 to-blue-600/80 text-white font-semibold py-3 px-6 rounded-2xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center group">
                            <Link href={`/contact`}>
                              <span className="mr-2">Book Us</span>
                            </Link>{" "}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                          </button>
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
            initialOpacity={0}
            animateOpacity={true}
            threshold={0.1}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
                <h3 className="text-4xl font-bold text-white mb-6">
                  Ready to Create Your Success Story?
                </h3>
                <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                  Let&apos;s discuss how we can help you achieve similar results
                  and transform your brand&apos;s digital presence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold px-8 py-4 rounded-2xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group">
                    <Link href="/contact">
                      <span className="mr-3">Start Your Project</span>
                    </Link>

                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
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
