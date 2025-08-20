"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  ExternalLink,
  Camera,
  Video as VideoIcon,
  Star,
  Filter,
  Grid3X3,
  List,
  Award,
} from "lucide-react";
import Image from "next/image";
import Video from "next-video";
import HeroVid from "../../../videos/hero-vid.mp4";
import AnimatedContent from "@/blocks/Animations/AnimatedContent/AnimatedContent";

// Silk Background Component
const SilkBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/30 to-indigo-900/50">
      <div className="absolute inset-0 opacity-20">
        {[...Array(30)].map((_, i) => (
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

// Portfolio data
const portfolioItems = [
  {
    id: 1,
    title: "Global Tech Summit 2024",
    category: "Event Coverage",
    type: "event",
    client: "TechVision Corp",
    description:
      "Complete media coverage and live streaming for Africa's largest technology conference, reaching 50K+ viewers worldwide.",
    image:
      "https://i.pinimg.com/736x/3c/0a/af/3c0aafbcd0d04d99fb33628ed0d9205e.jpg",
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
    title: "EcoGreen Brand Launch Campaign",
    category: "Digital Campaign",
    type: "campaign",
    client: "EcoGreen Solutions",
    description:
      "Comprehensive digital campaign launch for sustainable technology brand, achieving 300% increase in brand awareness.",
    image:
      "https://i.pinimg.com/736x/d5/2d/7c/d52d7cdd20736a01b0978e04ac276d39.jpg",
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
    title: "CEO Executive Positioning",
    category: "Personal Branding",
    type: "branding",
    client: "Fortune 500 Executive",
    description:
      "Strategic personal branding campaign for C-suite executive, establishing thought leadership in fintech industry.",
    image:
      "https://i.pinimg.com/736x/f8/bb/26/f8bb26f7387644df73e2660ab988ea81.jpg",
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
    title: "Fashion Week Lagos Coverage",
    category: "Event Coverage",
    type: "event",
    client: "Lagos Fashion Week",
    description:
      "Real-time social media coverage and content creation for Africa's premier fashion event.",
    image:
      "https://i.pinimg.com/736x/e5/45/d8/e545d8423e84af8325eed1e87308d561.jpg",
    results: {
      posts: "200+",
      engagement: "95%",
      hashtag: "#1 Trending",
      coverage: "Live Updates",
    },
    tags: ["Social Media", "Content Creation", "Influencer Marketing"],
    featured: false,
  },
  {
    id: 5,
    title: "Political Campaign Strategy",
    category: "Political Media",
    type: "campaign",
    client: "State Government Campaign",
    description:
      "Comprehensive digital strategy and reputation management for gubernatorial campaign.",
    image:
      "https://i.pinimg.com/736x/3a/23/85/3a23856a10e4182f2abb660f1aecfc4b.jpg",
    results: {
      reach: "5M+",
      sentiment: "+65%",
      volunteers: "10K+",
      outcome: "Victory",
    },
    tags: ["Political Strategy", "Digital PR", "Crisis Management"],
    featured: true,
  },
  {
    id: 6,
    title: "Startup Growth Campaign",
    category: "Growth Strategy",
    type: "campaign",
    client: "FinTech Startup",
    description:
      "360-degree growth strategy including influencer partnerships and viral content creation.",
    image:
      "https://i.pinimg.com/736x/72/e3/83/72e38320a669ebb2cee4fe17f4fe5d92.jpg",
    results: {
      users: "+500%",
      downloads: "100K+",
      funding: "$2M Raised",
      valuation: "+400%",
    },
    tags: ["Growth Hacking", "Influencer Marketing", "Content Strategy"],
    featured: false,
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
      {/* Silk Background */}
      <SilkBackground />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center py-20">
          <AnimatedContent
            distance={100}
            direction="vertical"
            reverse={false}
            duration={1.5}
            initialOpacity={0}
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
                      duration={1.5}
                      initialOpacity={0}
                      animateOpacity={true}
                      scale={1}
                      threshold={0.2}
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
            duration={1.5}
            initialOpacity={0}
            animateOpacity={true}
            scale={1}
            threshold={0.2}
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
                    duration={1.5}
                    initialOpacity={0}
                    animateOpacity={true}
                    scale={1}
                    threshold={0.2}
                  >
                    <div className="group relative">
                      <div className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500 hover:scale-[1.02]">
                        <div className="aspect-[16/10] relative overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                          <div className="absolute top-6 left-6 bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 rounded-full">
                            <span className="text-white font-semibold text-sm">
                              {project.category}
                            </span>
                          </div>
                          <div className="absolute top-6 right-6 bg-gradient-to-r from-yellow-500 to-orange-500 px-3 py-1 rounded-full flex items-center">
                            <Star className="w-4 h-4 text-white mr-1" />
                            <span className="text-white font-semibold text-xs">
                              Featured
                            </span>
                          </div>
                        </div>
                        <div className="p-8">
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
            duration={1.5}
            initialOpacity={0}
            animateOpacity={true}
            scale={1}
            threshold={0.2}
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
                    duration={1.5}
                    initialOpacity={0}
                    animateOpacity={true}
                    scale={1}
                    threshold={0.2}
                  >
                    <div className="group">
                      <div
                        className={`bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500 hover:scale-[1.02] ${
                          viewMode === "list" ? "flex" : ""
                        }`}
                      >
                        <div
                          className={`${
                            viewMode === "list"
                              ? "w-80 flex-shrink-0"
                              : "aspect-video"
                          } relative overflow-hidden`}
                        >
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                          <div className="absolute top-4 left-4">
                            <span className="bg-gradient-to-r from-purple-600 to-blue-600 px-3 py-1 rounded-full text-white text-xs font-semibold">
                              {project.category}
                            </span>
                          </div>
                          {project.featured && (
                            <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 p-2 rounded-full">
                              <Star className="w-4 h-4 text-white" />
                            </div>
                          )}
                        </div>
                        <div className="p-6 flex-1">
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
                            <span className="mr-2">View Details</span>
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

        {/* Case Study Spotlight */}
        <section className="py-20">
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
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold text-white mb-6">
                  Case Study{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Spotlight
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Deep dive into our most successful campaigns and their
                  measurable impact
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-600/10 to-blue-600/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 mb-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
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
                    <div>
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-purple-400 font-semibold">
                          Award-Winning Campaign
                        </span>
                      </div>
                      <h3 className="text-4xl font-bold text-white mb-4">
                        EcoGreen Digital Transformation
                      </h3>
                      <p className="text-gray-200 text-lg mb-6 leading-relaxed">
                        How we transformed a traditional manufacturing company
                        into a digital-first sustainable brand, achieving
                        record-breaking engagement and sales growth within 6
                        months.
                      </p>
                      <div className="grid grid-cols-2 gap-6 mb-8">
                        {[
                          {
                            value: "+450%",
                            label: "ROI Increase",
                            color: "purple",
                          },
                          {
                            value: "2.1M",
                            label: "Total Reach",
                            color: "blue",
                          },
                          {
                            value: "15K+",
                            label: "Quality Leads",
                            color: "indigo",
                          },
                          {
                            value: "6 Months",
                            label: "Timeline",
                            color: "pink",
                          },
                        ].map((metric, index) => (
                          <AnimatedContent
                            key={index}
                            distance={100}
                            direction="horizontal"
                            reverse={index % 2 === 0}
                            duration={1.5}
                            initialOpacity={0}
                            animateOpacity={true}
                            scale={1}
                            threshold={0.2}
                          >
                            <div className="text-center p-4 bg-white/5 rounded-2xl border border-white/10">
                              <h4 className="text-3xl font-bold text-white mb-2">
                                {metric.value}
                              </h4>
                              <p className={`text-${metric.color}-400`}>
                                {metric.label}
                              </p>
                            </div>
                          </AnimatedContent>
                        ))}
                      </div>
                      <button className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold px-8 py-4 rounded-2xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group">
                        <span className="mr-3">Read Full Case Study</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
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
                    <div className="relative w-full max-w-full mx-auto">
                      <div className="aspect-[4/3] sm:aspect-[16/9] bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                        <Video
                          src={HeroVid}
                          className="w-full h-full object-cover rounded-3xl"
                          autoPlay
                          muted
                          loop
                          playsInline
                        />
                        <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/20">
                          <VideoIcon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                  </AnimatedContent>
                </div>
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
            scale={1}
            threshold={0.2}
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
                    <span className="mr-3">Start Your Project</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <button className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/20 group">
                    <Camera className="w-5 h-5 mr-3" />
                    <span>View More Projects</span>
                  </button>
                </div>
              </div>
            </div>
          </AnimatedContent>
        </section>
      </div>
    </div>
  );
}
