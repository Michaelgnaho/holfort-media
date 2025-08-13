"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  User,
  Building,
  Calendar,
  MessageSquare,
  Globe,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  Youtube,
  ExternalLink,
  Star,
  Zap,
  Award,
  Target,
} from "lucide-react";

// Silk Background Component
const SilkBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/30 to-indigo-900/50">
      <div className="absolute inset-0 opacity-20">
        {[...Array(25)].map((_, i) => (
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
    projectType: "consultation",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          service: "",
          budget: "",
          timeline: "",
          message: "",
          projectType: "consultation",
        });
      }, 3000);
    }, 2000);
  };

  const services = [
    "Media Consulting & Strategy",
    "Social Media Management",
    "Influencer Marketing",
    "Content Creation",
    "Reputation Management",
    "Political Media Strategy",
    "Paid Media & Advertising",
    "Event Coverage & Streaming",
  ];

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $15,000",
    "$15,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000+",
  ];

  const timelines = [
    "ASAP - Rush Project",
    "Within 1 Month",
    "1-3 Months",
    "3-6 Months",
    "6+ Months",
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Silk Background */}
      <SilkBackground />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
                Let&apos;s{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Connect
                </span>
              </h1>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Ready to transform your brand? Get in touch with our team and
                let&apos;s discuss how we can elevate your digital presence.
              </p>

              {/* Quick Contact Info */}
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300">
                  <Phone className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Call Us</h3>
                  <p className="text-gray-300">+234 (0) 123 456 789</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300">
                  <Mail className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Email Us</h3>
                  <p className="text-gray-300">hello@holfortmedia.com</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300">
                  <Clock className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">
                    Response Time
                  </h3>
                  <p className="text-gray-300">Within 24 Hours</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="mb-8">
                  <h2 className="text-4xl font-bold text-white mb-4">
                    Start Your{" "}
                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      Project
                    </span>
                  </h2>
                  <p className="text-gray-200 text-lg">
                    Fill out the form below and we&apos;ll get back to you
                    within 24 hours with a customized proposal.
                  </p>
                </div>

                {/* Success Message */}
                {isSubmitted && (
                  <div className="mb-6 bg-green-600/20 border border-green-600/30 rounded-2xl p-4 flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                    <div>
                      <h3 className="text-green-400 font-semibold">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-green-200 text-sm">
                        We&apos;ll get back to you within 24 hours.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Project Type Selection */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <label
                      className={`cursor-pointer p-4 rounded-2xl border-2 transition-all duration-300 ${
                        formData.projectType === "consultation"
                          ? "border-purple-400 bg-purple-400/10"
                          : "border-white/20 bg-white/5"
                      }`}
                    >
                      <input
                        type="radio"
                        name="projectType"
                        value="consultation"
                        checked={formData.projectType === "consultation"}
                        onChange={handleInputChange}
                        className="hidden"
                      />
                      <div className="flex items-center">
                        <MessageSquare className="w-5 h-5 text-purple-400 mr-2" />
                        <span className="text-white font-semibold">
                          Consultation
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm mt-1">
                        Free strategy session
                      </p>
                    </label>

                    <label
                      className={`cursor-pointer p-4 rounded-2xl border-2 transition-all duration-300 ${
                        formData.projectType === "project"
                          ? "border-blue-400 bg-blue-400/10"
                          : "border-white/20 bg-white/5"
                      }`}
                    >
                      <input
                        type="radio"
                        name="projectType"
                        value="project"
                        checked={formData.projectType === "project"}
                        onChange={handleInputChange}
                        className="hidden"
                      />
                      <div className="flex items-center">
                        <Zap className="w-5 h-5 text-blue-400 mr-2" />
                        <span className="text-white font-semibold">
                          New Project
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm mt-1">
                        Full service engagement
                      </p>
                    </label>
                  </div>

                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className=" text-white font-semibold mb-2 flex items-center">
                        <User className="w-4 h-4 mr-2 text-purple-400" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:bg-white/15 transition-all duration-300 outline-none"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className=" text-white font-semibold mb-2 flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-blue-400" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:bg-white/15 transition-all duration-300 outline-none"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className=" text-white font-semibold mb-2 flex items-center">
                        <Building className="w-4 h-4 mr-2 text-indigo-400" />
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-white placeholder-gray-400 focus:border-indigo-400 focus:bg-white/15 transition-all duration-300 outline-none"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label className=" text-white font-semibold mb-2 flex items-center">
                        <Phone className="w-4 h-4 mr-2 text-pink-400" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-white placeholder-gray-400 focus:border-pink-400 focus:bg-white/15 transition-all duration-300 outline-none"
                        placeholder="+234 (0) 123 456 789"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className=" text-white font-semibold mb-2 flex items-center">
                      <Target className="w-4 h-4 mr-2 text-purple-400" />
                      Service of Interest *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-white focus:border-purple-400 focus:bg-white/15 transition-all duration-300 outline-none"
                    >
                      <option value="" className="bg-gray-800">
                        Select a service...
                      </option>
                      {services.map((service, index) => (
                        <option
                          key={index}
                          value={service}
                          className="bg-gray-800"
                        >
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget and Timeline */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Project Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-white focus:border-blue-400 focus:bg-white/15 transition-all duration-300 outline-none"
                      >
                        <option value="" className="bg-gray-800">
                          Select budget range...
                        </option>
                        {budgetRanges.map((budget, index) => (
                          <option
                            key={index}
                            value={budget}
                            className="bg-gray-800"
                          >
                            {budget}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className=" text-white font-semibold mb-2 flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-indigo-400" />
                        Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-white focus:border-indigo-400 focus:bg-white/15 transition-all duration-300 outline-none"
                      >
                        <option value="" className="bg-gray-800">
                          Select timeline...
                        </option>
                        {timelines.map((timeline, index) => (
                          <option
                            key={index}
                            value={timeline}
                            className="bg-gray-800"
                          >
                            {timeline}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className=" text-white font-semibold mb-2 flex items-center">
                      <MessageSquare className="w-4 h-4 mr-2 text-blue-400" />
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:bg-white/15 transition-all duration-300 outline-none resize-none"
                      placeholder="Tell us about your project goals, target audience, and any specific requirements..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 px-8 rounded-2xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span className="mr-3">Send Message</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Information & Map */}
              <div className="space-y-8">
                {/* Office Information */}
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <h3 className="text-3xl font-bold text-white mb-6">
                    Visit Our{" "}
                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      Office
                    </span>
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">
                          Head Office
                        </h4>
                        <p className="text-gray-200">
                          123 Media Hub Street
                          <br />
                          Victoria Island, Lagos
                          <br />
                          Nigeria, 100001
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">
                          Business Hours
                        </h4>
                        <p className="text-gray-200">
                          Monday - Friday: 9:00 AM - 6:00 PM
                          <br />
                          Saturday: 10:00 AM - 4:00 PM
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">
                          Contact Details
                        </h4>
                        <p className="text-gray-200">
                          Phone: +234 (0) 123 456 789
                          <br />
                          Email: hello@holfortmedia.com
                          <br />
                          Emergency: +234 (0) 987 654 321
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interactive Map */}
                <div className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                  <div className="p-6 pb-0">
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                      <MapPin className="w-6 h-6 mr-2 text-purple-400" />
                      Find Us On Map
                    </h3>
                  </div>
                  <div className="aspect-video bg-gradient-to-br from-gray-800/50 to-gray-900/50 relative">
                    {/* Map placeholder - you would integrate with Google Maps or similar */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-800/30">
                      <div className="text-center">
                        <MapPin className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                        <h4 className="text-white font-semibold mb-2">
                          Interactive Map
                        </h4>
                        <p className="text-gray-300 text-sm">
                          Victoria Island, Lagos, Nigeria
                        </p>
                        <button className="mt-4 inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold px-6 py-3 rounded-2xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View on Google Maps
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Globe className="w-6 h-6 mr-2 text-blue-400" />
                    Follow Us
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href="#"
                      className="flex items-center p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-all duration-300 group"
                    >
                      <Instagram className="w-6 h-6 text-pink-400 mr-3" />
                      <div>
                        <h4 className="text-white font-semibold group-hover:text-pink-400 transition-colors">
                          Instagram
                        </h4>
                        <p className="text-gray-400 text-sm">@holfortmedia</p>
                      </div>
                    </a>

                    <a
                      href="#"
                      className="flex items-center p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-all duration-300 group"
                    >
                      <Linkedin className="w-6 h-6 text-blue-400 mr-3" />
                      <div>
                        <h4 className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                          LinkedIn
                        </h4>
                        <p className="text-gray-400 text-sm">Holfort Media</p>
                      </div>
                    </a>

                    <a
                      href="#"
                      className="flex items-center p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-all duration-300 group"
                    >
                      <Twitter className="w-6 h-6 text-sky-400 mr-3" />
                      <div>
                        <h4 className="text-white font-semibold group-hover:text-sky-400 transition-colors">
                          Twitter
                        </h4>
                        <p className="text-gray-400 text-sm">@holfortmedia</p>
                      </div>
                    </a>

                    <a
                      href="#"
                      className="flex items-center p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-all duration-300 group"
                    >
                      <Youtube className="w-6 h-6 text-red-400 mr-3" />
                      <div>
                        <h4 className="text-white font-semibold group-hover:text-red-400 transition-colors">
                          YouTube
                        </h4>
                        <p className="text-gray-400 text-sm">Holfort Media</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "How quickly can you start my project?",
                  answer:
                    "We typically begin new projects within 1-2 weeks after contract signing. For urgent projects, we offer rush services with 48-72 hour turnaround.",
                },
                {
                  question: "Do you work with international clients?",
                  answer:
                    "Yes! We work with clients globally and have experience managing projects across different time zones and cultural contexts.",
                },
                {
                  question: "What's included in your consultation?",
                  answer:
                    "Our free consultation includes a brand audit, strategy recommendations, timeline planning, and a customized proposal for your specific needs.",
                },
                {
                  question: "How do you measure campaign success?",
                  answer:
                    "We use comprehensive analytics including engagement rates, conversion tracking, brand sentiment analysis, and ROI measurements tailored to your specific goals.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="p-6">
                    <h3 className="text-white font-semibold text-lg mb-3 flex items-center">
                      <Star className="w-5 h-5 mr-3 text-purple-400" />
                      {faq.question}
                    </h3>
                    <p className="text-gray-300 leading-relaxed pl-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
