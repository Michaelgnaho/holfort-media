import React from "react";
import {
  ArrowRight,
  Target,
  Lightbulb,
  Users,
  Globe,
  Award,
  Zap,
  Heart,
  Star,
  Play,
} from "lucide-react";
import Image from "next/image";

// Silk Background Component (simplified version)
const SilkBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/30 to-indigo-900/50">
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
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
        <section className="min-h-screen flex items-center justify-center py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
                About{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Holfort Media
                </span>
              </h1>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Transforming brands through innovative digital solutions and
                impactful storytelling across the globe.
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 mb-20">
              {/* Vision & Mission Cards */}
              <div className="space-y-8">
                {/* Vision Card */}
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl group hover:bg-white/15 transition-all duration-500">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Target className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-gray-200 text-xl leading-relaxed">
                    &quot;To be the leading media powerhouse, delivering
                    innovative digital solutions that transform brands and drive
                    global impact.&quot;
                  </p>
                </div>

                {/* Mission Card */}
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl group hover:bg-white/15 transition-all duration-500">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Lightbulb className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-gray-200 text-xl leading-relaxed">
                    &quot;To empower brands with innovative digital solutions,
                    strategic media management, and impactful
                    storytelling.&quot;
                  </p>
                </div>

                {/* What We Strive For */}
                <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <Heart className="w-5 h-5 mr-2 text-purple-400" />
                    What We Strive For
                  </h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <Star className="w-4 h-4 mt-1 mr-2 text-purple-400 flex-shrink-0" />
                      Empower brands with customized media strategies that drive
                      influence, engagement, and growth
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
              </div>

              {/* Right Column - Main Image */}
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-3xl overflow-hidden border border-white/20 shadow-2xl relative group">
                  <Image
                    src="https://i.pinimg.com/1200x/72/e3/83/72e38320a669ebb2cee4fe17f4fe5d92.jpg"
                    alt="Holfort Media team collaboration"
                    fill
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
                {/* Floating accent card */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 shadow-2xl hover:scale-105 transition-transform duration-300">
                  <div className="text-center">
                    <h4 className="text-white font-bold text-3xl">50+</h4>
                    <p className="text-white/90 text-sm">Brands Transformed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Story
                </span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Story Content */}
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <p className="text-gray-200 text-lg leading-relaxed mb-6">
                    Founded with a vision to revolutionize digital media,
                    Holfort Media emerged from the understanding that brands
                    need more than just visibility—they need transformation. Our
                    journey began with a simple belief: every brand has a unique
                    story worth telling, and every story deserves to reach its
                    intended audience with maximum impact.
                  </p>

                  <p className="text-gray-200 text-lg leading-relaxed mb-6">
                    From our headquarters, we&apos;ve grown into a powerhouse
                    that combines creativity with data-driven strategies,
                    helping brands navigate the complex digital landscape. Our
                    approach goes beyond traditional media—we craft experiences,
                    build communities, and create lasting connections between
                    brands and their audiences.
                  </p>

                  <div className="flex items-center space-x-4 pt-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">
                        Global Impact
                      </h4>
                      <p className="text-gray-400 text-sm">
                        Transforming brands across continents
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Story Image */}
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
                  <Image
                    src="https://i.pinimg.com/736x/3c/0a/af/3c0aafbcd0d04d99fb33628ed0d9205e.jpg"
                    alt="Our journey and growth"
                    fill
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-white text-2xl font-bold mb-2">
                      Building the Future
                    </h3>
                    <p className="text-white/80">One brand at a time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services Preview */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              What We Do{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Best
              </span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Media Strategy */}
              <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center group hover:bg-white/10 transition-all duration-300">
                <div className="aspect-video mb-4 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl overflow-hidden relative">
                  <Image
                    src="https://i.pinimg.com/736x/f8/bb/26/f8bb26f7387644df73e2660ab988ea81.jpg"
                    alt="Media Strategy"
                    fill
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  Media Strategy
                </h4>
                <p className="text-gray-300">
                  Customized media strategies that drive engagement and growth
                </p>
              </div>

              {/* Content Creation */}
              <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center group hover:bg-white/10 transition-all duration-300">
                <div className="aspect-video mb-4 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl overflow-hidden relative">
                  <Image
                    src="https://i.pinimg.com/736x/d5/2d/7c/d52d7cdd20736a01b0978e04ac276d39.jpg"
                    alt="Content Creation"
                    fill
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  Content Creation
                </h4>
                <p className="text-gray-300">
                  Compelling narratives that leave lasting impressions
                </p>
              </div>

              {/* Digital Growth */}
              <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center group hover:bg-white/10 transition-all duration-300">
                <div className="aspect-video mb-4 bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 rounded-xl overflow-hidden relative">
                  <Image
                    src="https://i.pinimg.com/736x/3a/23/85/3a23856a10e4182f2abb660f1aecfc4b.jpg"
                    alt="Digital Growth"
                    fill
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  Digital Growth
                </h4>
                <p className="text-gray-300">
                  Strategic campaigns that maximize reach and conversions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">
                Leadership{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Team
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet the visionaries driving innovation and excellence at
                Holfort Media
              </p>
            </div>

            {/* Team Grid - Placeholder for leadership photos and bios */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 - Placeholder */}
              <div className="group">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500">
                  <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
                    <Users className="w-16 h-16 text-white/60" />
                    {/* Replace with actual leadership photo */}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Leadership Member
                  </h3>
                  <p className="text-purple-400 font-semibold mb-4">
                    Position Title
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Bio and background information will be added here.
                    Leadership experience and expertise details.
                  </p>
                </div>
              </div>

              {/* Team Member 2 - Placeholder */}
              <div className="group">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500">
                  <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
                    <Users className="w-16 h-16 text-white/60" />
                    {/* Replace with actual leadership photo */}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Leadership Member
                  </h3>
                  <p className="text-blue-400 font-semibold mb-4">
                    Position Title
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Bio and background information will be added here.
                    Leadership experience and expertise details.
                  </p>
                </div>
              </div>

              {/* Team Member 3 - Placeholder */}
              <div className="group">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500">
                  <div className="aspect-square bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
                    <Users className="w-16 h-16 text-white/60" />
                    {/* Replace with actual leadership photo */}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Leadership Member
                  </h3>
                  <p className="text-indigo-400 font-semibold mb-4">
                    Position Title
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Bio and background information will be added here.
                    Leadership experience and expertise details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Vision Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Future Vision
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Vision Cards */}
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <Globe className="w-6 h-6 text-purple-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">
                      Global Expansion
                    </h3>
                  </div>
                  <p className="text-gray-300">
                    Establish Holfort Media as a leading digital media agency in
                    Africa, with international partnerships in Europe and the
                    US.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <Zap className="w-6 h-6 text-blue-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">
                      Tech-Driven Solutions
                    </h3>
                  </div>
                  <p className="text-gray-300">
                    Incorporate AI, analytics, and automation to optimize
                    digital campaigns and content strategies.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <Award className="w-6 h-6 text-indigo-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">
                      Holfort Academy
                    </h3>
                  </div>
                  <p className="text-gray-300">
                    Create a training institute to empower young media
                    professionals and digital creators with hands-on expertise.
                  </p>
                </div>
              </div>

              {/* Future Vision Image */}
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
                  <Image
                    src="https://i.pinimg.com/736x/e5/45/d8/e545d8423e84af8325eed1e87308d561.jpg"
                    alt="Future vision and growth"
                    fill
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-white text-2xl font-bold mb-2">
                      Building Tomorrow
                    </h3>
                    <p className="text-white/80">Innovation meets impact</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Brand?
            </h3>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Discover our full range of media solutions and join the brands
              already experiencing transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold px-8 py-4 rounded-2xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group">
                <span className="mr-3">Start Your Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/20 group">
                <Play className="w-5 h-5 mr-3" />
                <span>Watch Our Story</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
