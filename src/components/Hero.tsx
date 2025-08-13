"use client";

import Silk from "@/blocks/Backgrounds/Silk/Silk";
import React, { useState } from "react";
import TextType from "@/blocks/TextAnimations/TextType/TextType";
import Link from "next/link";
import Video from "next-video";
import HeroVid from "../../videos/hero-vid.mp4";
import { ArrowRight, Play, Pause, Volume2 } from "lucide-react";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayVideo = () => {
    setShowVideo(true);
    setIsPlaying(true);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
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
      <div className="relative z-20 flex items-center justify-between w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left Column - Text Content */}
        <div className="flex-1 max-w-2xl">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl items-center justify-center font-bold text-white mb-6 tracking-tight leading-none">
            <TextType
              text={["WELCOME TO", "HOLFORT MEDIA!"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              // cursorCharacter="|"
            />
          </h1>

          {/* Subtitle */}
          <div className="mb-8">
            <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed">
              Professional Media Solutions
            </p>
            <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
              Transforming brands through innovative digital strategies,
              creative content, and impactful storytelling that drives real
              results.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
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
              <Play className="w-5 h-5 mr-3" />
              <span>View Our Work</span>
            </Link>
          </div>
        </div>

        {/* Right Column - Hero Video */}
        <div className="hidden lg:block flex-1 max-w-xl ml-12">
          <div className="relative">
            {/* Main Video Container */}
            <div className="relative bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video">
                {/* Video Player */}
                <div className="relative w-full h-full">
                  <Video
                    src={HeroVid}
                    className="w-full h-full object-cover rounded-2xl"
                    autoPlay={showVideo}
                    muted={true}
                    loop={true}
                    playsInline={true}
                  />

                  {/* Video Overlay Controls */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl">
                    {/* Top Bar */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                      <div className="bg-red-600/90 backdrop-blur-sm rounded-lg px-3 py-1">
                        <span className="text-white text-xs font-medium flex items-center">
                          <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                          LIVE
                        </span>
                      </div>
                      <div className="bg-black/40 backdrop-blur-sm rounded-lg px-3 py-1">
                        <span className="text-white text-xs font-medium flex items-center">
                          <Volume2 className="w-3 h-3 mr-1" />
                          HD
                        </span>
                      </div>
                    </div>

                    {/* Center Play Button - Only show if video hasn't started */}
                    {!showVideo && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button
                          onClick={handlePlayVideo}
                          className="group relative"
                        >
                          <div className="relative">
                            <Play
                              className="w-20 h-20 text-white/90 group-hover:text-white transition-colors duration-300"
                              fill="currentColor"
                            />
                            <div className="absolute -inset-4 border-2 border-white/30 rounded-full group-hover:border-white/50 transition-colors duration-300 animate-pulse"></div>
                            <div className="absolute -inset-8 border border-white/20 rounded-full group-hover:border-white/30 transition-colors duration-300"></div>
                          </div>
                        </button>
                      </div>
                    )}

                    {/* Bottom Info Bar */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex justify-between items-center">
                        <div className="bg-black/40 backdrop-blur-sm rounded-lg px-3 py-1">
                          <span className="text-white text-sm font-medium">
                            Media Solutions Preview
                          </span>
                        </div>
                        {showVideo && (
                          <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="bg-white/20 backdrop-blur-sm rounded-lg p-2 hover:bg-white/30 transition-colors duration-300"
                          >
                            {isPlaying ? (
                              <Pause className="w-4 h-4 text-white" />
                            ) : (
                              <Play
                                className="w-4 h-4 text-white"
                                fill="currentColor"
                              />
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Animated Background Pattern (shows before video starts) */}
                  {!showVideo && (
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/40 to-blue-600/40 rounded-2xl">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 animate-pulse"></div>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)] animate-ping"></div>
                    </div>
                  )}
                </div>
              </div>

              {/* Video Description */}
              <div className="mt-4 text-center">
                <p className="text-white/80 text-sm">
                  {showVideo
                    ? "Now Playing: Our Story"
                    : "Click to watch our story"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 mt-20">
        <div className="text-center pt-10">
          <Link
            href="/contact"
            className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white font-medium px-6 py-3 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 text-sm group"
          >
            <span className="mr-2">Book a Consultation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 right-8 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
