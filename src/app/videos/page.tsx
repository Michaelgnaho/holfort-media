import React from "react";
import Video from "next-video";
import HeroVid from "../../../videos/hero-vid.mp4";

export default function videos() {
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Our Video Gallery
      </h1>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Video Section - Left Side */}
        <div className="lg:w-1/3 w-full">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Featured Video
            </h2>
            <Video src={HeroVid} className="w-full rounded-lg shadow-sm" />
            <p className="text-sm text-gray-600 mt-3">
              Watch our latest promotional video showcasing our amazing products
              and services.
            </p>
          </div>
        </div>

        {/* Content Section - Right Side */}
        <div className="lg:w-2/3 w-full">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Welcome to Our Video Hub
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                Discover our comprehensive collection of videos designed to
                inform, inspire, and engage our audience. From product
                demonstrations to behind-the-scenes content, we&apos;ve curated
                an exceptional viewing experience.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                What You will Find Here
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2 text-blue-800">
                    Product Showcases
                  </h4>
                  <p className="text-gray-600">
                    Detailed walkthroughs of our latest products, featuring key
                    benefits and real-world applications.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2 text-green-800">
                    Tutorials & Guides
                  </h4>
                  <p className="text-gray-600">
                    Step-by-step instructions to help you make the most of our
                    services and features.
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2 text-purple-800">
                    Company Culture
                  </h4>
                  <p className="text-gray-600">
                    Behind-the-scenes glimpses into our team, values, and
                    workplace environment.
                  </p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2 text-orange-800">
                    Customer Stories
                  </h4>
                  <p className="text-gray-600">
                    Real testimonials and success stories from our satisfied
                    customers and partners.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Why Video Content Matters
              </h3>

              <p className="text-gray-700 mb-4">
                In today&apos;s digital landscape, video content has become the
                most engaging and effective way to communicate complex ideas,
                showcase products, and build meaningful connections with our
                audience.
              </p>

              <p className="text-gray-700 mb-6">
                Our videos are crafted with attention to detail, ensuring
                high-quality production values while maintaining authenticity
                and relevance to your needs.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-lg mb-2 text-gray-800">
                  Coming Soon
                </h4>
                <p className="text-gray-700">
                  We&apos;re constantly expanding our video library. Stay tuned
                  for interactive video experiences, live streaming events, and
                  personalized content recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
