import Silk from "@/blocks/Backgrounds/Silk/Silk";
import React from "react";
import TextType from "@/blocks/TextAnimations/TextType/TextType";

export default function Hero() {
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

      {/* Overlay for better text readability (optional) */}

      {/* Content Layer - Text and other content */}
      <div className="relative z-20 flex items-center justify-center w-full h-full">
        <h1 className="text-6xl md:text-8xl font-bold text-white text-center tracking-wider drop-shadow-2xl">
          <TextType
            text={["WELCOME TO", "HOLFORT MEDIA!"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </h1>
      </div>

      {/* Optional: Additional content overlay */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <p className="text-white text-lg text-center opacity-90">
          Professional Media Solutions
        </p>
      </div>
    </div>
  );
}
