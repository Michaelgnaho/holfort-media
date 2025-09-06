"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Target,
  TrendingUp,
  Users,
  Edit3,
  Shield,
  Building,
  Megaphone,
  Video,
  BarChart3,
  Globe,
  Zap,
  Star,
  Play,
  CheckCircle,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";
import AnimatedContent from "@/blocks/Animations/AnimatedContent/AnimatedContent";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Media Consulting & Strategy",
    icon: Target,
    description:
      "Bespoke media strategies that align with business goals, target audiences, and industry trends to maximize brand visibility and impact for long.",
    features: [
      "Strategic media planning and analysis",
      "Audience research and targeting",
      "Competitive landscape assessment",
      "ROI optimization strategies",
      "Cross-platform integration planning",
    ],
    image:
      "https://i.pinimg.com/1200x/73/43/47/734347b360f96243f453eb930a94f958.jpg",
    gradient: "from-purple-600 to-purple-700",
    accentColor: "purple",
  },
  {
    id: 2,
    title: "Social Media Management & Growth",
    icon: TrendingUp,
    description:
      "Complete management, optimization, and growth of social media platforms for businesses, public figures, and corporate brands.",
    features: [
      "Platform-specific content strategies",
      "Community management and engagement",
      "Growth hacking techniques",
      "Analytics and performance tracking",
      "Brand voice development",
    ],
    image:
      "https://i.pinimg.com/736x/5b/fb/e5/5bfbe5192b71b5140287205a98c6540f.jpg",
    gradient: "from-blue-600 to-blue-700",
    accentColor: "blue",
  },
  {
    id: 3,
    title: "Influencer Marketing & Brand Partnerships",
    icon: Users,
    description:
      "Strategic connections between brands and relevant influencers, thought leaders, and digital personalities to amplify reach.",
    features: [
      "Influencer identification and vetting",
      "Campaign strategy development",
      "Partnership negotiation",
      "Performance monitoring",
      "Long-term relationship building",
    ],
    image:
      "https://i.pinimg.com/736x/6a/3f/8f/6a3f8fd7163c1885132a781e5d8d7c57.jpg",
    gradient: "from-indigo-600 to-indigo-700",
    accentColor: "indigo",
  },
  {
    id: 4,
    title: "Content Creation & Brand Storytelling",
    icon: Edit3,
    description:
      "High-quality video, graphic, and written content that drives engagement and builds a strong digital presence.",
    features: [
      "Visual content creation",
      "Video production and editing",
      "Copywriting and storytelling",
      "Brand narrative development",
      "Multi-format content adaptation",
    ],
    image:
      "https://i.pinimg.com/736x/7e/fc/17/7efc17f38f5b493cb010f7dcade8d0ef.jpg",
    gradient: "from-pink-600 to-pink-700",
    accentColor: "pink",
  },
  {
    id: 5,
    title: "Reputation Management & Digital PR",
    icon: Shield,
    description:
      "Protect and enhance online reputation for high-profile individuals, corporate brands, and public figures through proactive strategies.",
    features: [
      "Online reputation monitoring",
      "Crisis communication management",
      "Positive content amplification",
      "Review management strategies",
      "Brand sentiment analysis",
    ],
    image:
      "https://i.pinimg.com/736x/00/09/bb/0009bb9acaa35e8ab41e5360c2fdc947.jpg",
    gradient: "from-green-600 to-green-700",
    accentColor: "green",
  },
  {
    id: 6,
    title: "Corporate & Political Media Strategy",
    icon: Building,
    description:
      "Specialized media advisory, campaign strategy, and digital storytelling for corporate organizations, government bodies, and political figures.",
    features: [
      "Strategic communication planning",
      "Public affairs management",
      "Stakeholder engagement strategies",
      "Policy communication",
      "Executive positioning",
    ],
    image:
      "https://i.pinimg.com/736x/1f/32/65/1f3265e0dbc326823947dd41fe57d638.jpg",
    gradient: "from-teal-600 to-teal-700",
    accentColor: "teal",
  },
  {
    id: 7,
    title: "Paid Media & Digital Advertising",
    icon: Megaphone,
    description:
      "Data-driven advertising campaigns on Google, social media, and digital platforms to maximize reach, lead generation, and conversions.",
    features: [
      "Multi-platform campaign management",
      "Advanced targeting and optimization",
      "A/B testing and analytics",
      "Budget optimization",
      "Conversion tracking and reporting",
    ],
    image:
      "https://i.pinimg.com/736x/04/bd/00/04bd00cec760d9dd7d4c1585ee9c521f.jpg",
    gradient: "from-orange-600 to-orange-700",
    accentColor: "orange",
  },
  {
    id: 8,
    title: "Event Media Coverage & Live Streaming",
    icon: Video,
    description:
      "Professional media coverage, live streaming, and digital amplification for events, ensuring broad visibility and audience engagement.",
    features: [
      "Multi-camera live streaming setup",
      "Real-time social media coverage",
      "Post-event content creation",
      "Audience engagement strategies",
      "Technical production support",
    ],
    image:
      "https://i.pinimg.com/736x/29/65/14/2965149b4df80430362cc03200df17da.jpg",
    gradient: "from-red-600 to-red-700",
    accentColor: "red",
  },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30 overflow-hidden">
      {/* Advanced Background Pattern - Same as About Section */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_50%_50%,_purple_1px,_transparent_1px)] bg-[length:40px_40px]"></div>

      {/* Floating Elements for Visual Interest - Same as About Section */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-200/20 to-blue-200/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-purple-300/15 to-pink-300/15 rounded-full blur-3xl opacity-25 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-blue-200/15 to-purple-200/15 rounded-full blur-3xl opacity-20 animate-pulse delay-500"></div>

      {/* Refined overlay for perfect contrast - Same as About Section */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/10 via-transparent to-white/20"></div>

      {/* Content */}
      <div className="relative z-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center py-20">
          <AnimatedContent
            distance={100}
            direction="vertical"
            reverse={false}
            initialOpacity={0}
            animateOpacity={true}
            threshold={0.1}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-8">
                  Our{" "}
                  <span className="text-purple-900 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-900 bg-clip-text drop-shadow-sm">
                    Services
                  </span>
                </h1>
                {/* Subtle underline accent - Same as About Section */}
                <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto rounded-full mt-4 mb-8"></div>
                <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium mb-8">
                  Comprehensive digital media solutions designed to transform
                  your brand and amplify your impact across all channels.
                </p>
                <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                  {[
                    { icon: BarChart3, title: "Strategy", color: "purple" },
                    { icon: Globe, title: "Growth", color: "blue" },
                    { icon: Zap, title: "Innovation", color: "indigo" },
                    { icon: Star, title: "Excellence", color: "pink" },
                  ].map((category, index) => (
                    <AnimatedContent
                      key={index}
                      distance={100}
                      direction="horizontal"
                      reverse={index % 2 === 0}
                      initialOpacity={0}
                      animateOpacity={true}
                      threshold={0.1}
                    >
                      <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-4 border-2 border-purple-200/50 shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
                        <category.icon
                          className={`w-8 h-8 text-purple-600 mx-auto mb-2`}
                        />
                        <p className="text-gray-900 font-bold">
                          {category.title}
                        </p>
                      </div>
                    </AnimatedContent>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedContent>
        </section>

        {/* Services Grid Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <AnimatedContent
                    key={service.id}
                    distance={100}
                    direction="horizontal"
                    reverse={index % 2 === 0}
                    initialOpacity={0}
                    animateOpacity={true}
                    threshold={0.1}
                  >
                    <div
                      className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border-2 border-purple-200/50 shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:scale-[1.02]"
                      onMouseEnter={() => setActiveService(service.id)}
                      onMouseLeave={() => setActiveService(null)}
                    >
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center">
                          <div
                            className={`w-14 h-14 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                          >
                            <IconComponent className="w-7 h-7 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-purple-800 group-hover:bg-clip-text transition-all duration-300">
                              {service.title}
                            </h3>
                          </div>
                        </div>
                        <div
                          className={`w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                        >
                          <ArrowUpRight className={`w-4 h-4 text-purple-600`} />
                        </div>
                      </div>

                      <div className="relative group">
                        {/* Glow Effect - Same as About Section */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>

                        <div className="relative backdrop-blur-xl rounded-2xl p-2 border border-white/30 shadow-xl bg-white/60 hover:bg-white/70 transition-all duration-500">
                          <div className="aspect-video rounded-xl overflow-hidden shadow-lg relative">
                            <Image
                              src={service.image}
                              alt={service.title}
                              fill
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200">
                                <Play className="w-8 h-8 text-white ml-1" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 text-lg leading-relaxed mb-6 font-medium mt-6">
                        {service.description}
                      </p>
                      <div className="space-y-3 mb-6">
                        <h4 className="text-gray-900 font-bold flex items-center">
                          <CheckCircle
                            className={`w-5 h-5 mr-2 text-purple-600`}
                          />
                          Key Features:
                        </h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-start text-gray-700 font-medium transform translate-x-2 opacity-80 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
                              style={{
                                transitionDelay: `${featureIndex * 50}ms`,
                              }}
                            >
                              <Star
                                className={`w-4 h-4 mt-0.5 mr-2 text-purple-600 flex-shrink-0`}
                              />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button
                        className={`w-full bg-gradient-to-r ${service.gradient} text-white font-bold py-3 px-6 rounded-2xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105 flex items-center justify-center`}
                      >
                        <Link href={`/contact`}>
                          <span className="mr-2">Book Us</span>
                        </Link>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                      <div
                        className={`absolute -top-2 -right-2 w-4 h-4 bg-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse`}
                      ></div>
                    </div>
                  </AnimatedContent>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
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
              <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-[0.9] text-gray-900 mb-6">
                  Our{" "}
                  <span className="text-purple-900 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-900 bg-clip-text drop-shadow-sm">
                    Process
                  </span>
                </h2>
                {/* Subtle underline accent */}
                <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto rounded-full mb-6"></div>
                <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto font-medium">
                  A proven methodology that delivers exceptional results for
                  every client
                </p>
              </div>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  {
                    step: "01",
                    title: "Discovery",
                    description:
                      "Understanding your brand, goals, and challenges",
                    icon: Target,
                  },
                  {
                    step: "02",
                    title: "Strategy",
                    description: "Developing customized solutions and roadmaps",
                    icon: BarChart3,
                  },
                  {
                    step: "03",
                    title: "Execute",
                    description:
                      "Implementing campaigns with precision and creativity",
                    icon: Zap,
                  },
                  {
                    step: "04",
                    title: "Optimize",
                    description:
                      "Continuous monitoring and performance enhancement",
                    icon: TrendingUp,
                  },
                ].map((process, index) => {
                  const IconComponent = process.icon;
                  return (
                    <AnimatedContent
                      key={index}
                      distance={100}
                      direction="horizontal"
                      reverse={index % 2 === 0}
                      initialOpacity={0}
                      animateOpacity={true}
                      threshold={0.1}
                    >
                      <div className="text-center group">
                        <div className="relative mb-6">
                          <div className="w-20 h-20 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                            <IconComponent className="w-10 h-10 text-white" />
                          </div>
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-purple-200">
                            <span className="text-purple-600 text-sm font-bold">
                              {process.step}
                            </span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-purple-800 group-hover:bg-clip-text transition-all duration-300">
                          {process.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed font-medium">
                          {process.description}
                        </p>
                      </div>
                    </AnimatedContent>
                  );
                })}
              </div>
            </div>
          </AnimatedContent>
        </section>

        {/* Why Choose Us Section */}
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
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-[0.9] text-gray-900 mb-8">
                    Why Choose{" "}
                    <span className="text-purple-900 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-900 bg-clip-text drop-shadow-sm">
                      Holfort Media?
                    </span>
                  </h2>
                  <div className="space-y-6">
                    {[
                      {
                        title: "Proven Excellence",
                        description:
                          "50+ brands transformed with measurable results and industry recognition.",
                        icon: Star,
                        gradient:
                          "from-purple-600 via-purple-700 to-purple-800",
                      },
                      {
                        title: "Innovation First",
                        description:
                          "Cutting-edge strategies that leverage the latest technologies and trends.",
                        icon: Zap,
                        gradient:
                          "from-purple-600 via-purple-700 to-purple-800",
                      },
                      {
                        title: "Dedicated Partnership",
                        description:
                          "Personal attention and customized solutions for every client's unique needs.",
                        icon: Users,
                        gradient:
                          "from-purple-600 via-purple-700 to-purple-800",
                      },
                    ].map((item, index) => (
                      <AnimatedContent
                        key={index}
                        distance={100}
                        direction="horizontal"
                        reverse={false}
                        initialOpacity={0}
                        animateOpacity={true}
                        threshold={0.1}
                      >
                        <div className="flex items-start">
                          <div
                            className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center mr-4 flex-shrink-0`}
                          >
                            <item.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                              {item.title}
                            </h3>
                            <p className="text-gray-700 font-medium">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </AnimatedContent>
                    ))}
                  </div>
                </div>
                <AnimatedContent
                  distance={100}
                  direction="horizontal"
                  reverse={true}
                  initialOpacity={0}
                  animateOpacity={true}
                  threshold={0.1}
                >
                  <div className="relative group">
                    {/* Glow Effect - Same as About Section */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>

                    <div className="relative backdrop-blur-xl rounded-3xl p-3 border border-white/30 shadow-2xl bg-white/60 hover:bg-white/70 transition-all duration-500 transform hover:scale-[1.02]">
                      <div className="aspect-square rounded-2xl overflow-hidden shadow-xl relative">
                        <Image
                          src="https://i.pinimg.com/736x/3c/0a/af/3c0aafbcd0d04d99fb33628ed0d9205e.jpg"
                          alt="Why choose Holfort Media"
                          fill
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                        <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md rounded-2xl p-4 border-2 border-purple-200">
                          <div className="text-center">
                            <h4 className="text-gray-900 font-bold text-2xl">
                              50+
                            </h4>
                            <p className="text-gray-600 text-sm font-medium">
                              Success Stories
                            </p>
                          </div>
                        </div>
                        <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md rounded-2xl p-4 border-2 border-purple-200">
                          <div className="text-center">
                            <h4 className="text-gray-900 font-bold text-2xl">
                              100%
                            </h4>
                            <p className="text-gray-600 text-sm font-medium">
                              Client Satisfaction
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Decorative Elements - Same as About Section */}
                    <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl opacity-80 rotate-12 group-hover:rotate-45 transition-transform duration-500"></div>
                    <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl opacity-60 rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
                  </div>
                </AnimatedContent>
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
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 border-2 border-purple-200/50 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  Ready to Elevate Your Brand?
                </h3>
                {/* Subtle underline accent */}
                <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto rounded-full mb-6"></div>
                <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto font-medium">
                  Let&apos;s discuss how our services can transform your digital
                  presence and drive meaningful results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="group inline-flex items-center bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white font-bold px-8 py-4 rounded-2xl hover:from-purple-700 hover:via-purple-800 hover:to-purple-900 transition-all duration-500 shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transform-gpu touch-manipulation">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                    <span className="relative mr-3 text-lg">
                      Get Started Today
                    </span>
                    <ArrowRight className="relative w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                  <button className="group inline-flex items-center bg-white/80 backdrop-blur-xl text-gray-900 font-bold px-8 py-4 rounded-2xl border-2 border-purple-200/50 hover:border-purple-400 hover:bg-white transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 touch-manipulation">
                    <Target className="w-5 h-5 mr-3" />
                    <span className="text-lg">Schedule Consultation</span>
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
