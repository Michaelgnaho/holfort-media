"use client";
import React, { useState, useEffect } from "react";
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
  Youtube,
  ExternalLink,
  Star,
  Zap,
  Target,
} from "lucide-react";
import AnimatedContent from "@/blocks/Animations/AnimatedContent/AnimatedContent";

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
  const [error, setError] = useState("");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Validate required fields
      if (
        !formData.name ||
        !formData.email ||
        !formData.service ||
        !formData.message
      ) {
        throw new Error("Please fill in all required fields");
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error("Please enter a valid email address");
      }

      // Send request to correct API route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Handle response
      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(
          errorData?.error ||
            `Server error: ${response.status} ${response.statusText}`
        );
      }

      const result = await response.json();
      console.log("Success:", result);

      // Show success message
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
    } catch (error) {
      console.error("Error submitting form:", error);
      setError(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
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
        <section className="pt-20 pb-10">
          <AnimatedContent
            distance={100}
            direction="vertical"
            reverse={false}
            duration={1.5}
            initialOpacity={0}
            animateOpacity={true}
            scale={1}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[0.9] mb-6">
                  Let&apos;s{" "}
                  <span className="text-purple-900 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-900 bg-clip-text drop-shadow-sm">
                    Connect
                  </span>
                </h1>
                {/* Subtle underline accent */}
                <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto rounded-full mt-4 mb-6"></div>
                <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium mb-8">
                  Ready to transform your brand? Get in touch with our team and
                  let&apos;s discuss how we can elevate your digital presence.
                </p>
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  {[
                    {
                      icon: Phone,
                      title: "Call Us",
                      value: "+2347013805937",
                      color: "purple",
                    },
                    {
                      icon: Mail,
                      title: "Email Us",
                      value: "holfortmedia@gmail.com",
                      color: "blue",
                    },
                    {
                      icon: Clock,
                      title: "Response Time",
                      value: "Within 24 Hours",
                      color: "indigo",
                    },
                  ].map((contact, index) => (
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
                      <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border-2 border-purple-200/50 shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:scale-105">
                        <contact.icon
                          className={`w-8 h-8 text-purple-600 mx-auto mb-3`}
                        />
                        <h3 className="text-gray-900 font-semibold mb-2">
                          {contact.title}
                        </h3>
                        <p className="text-gray-700 font-medium">
                          {contact.value}
                        </p>
                      </div>
                    </AnimatedContent>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedContent>
        </section>

        {/* Main Contact Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
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
                  {/* Glow Effect - Same as About Section */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>

                  {/* Form Container with Premium Styling - Same as About Section */}
                  <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border-2 border-purple-200/50 shadow-2xl hover:shadow-purple-500/10 transition-all duration-500">
                    <div className="mb-8">
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                        Start Your{" "}
                        <span className="text-purple-900 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-900 bg-clip-text">
                          Project
                        </span>
                      </h2>
                      {/* Subtle underline accent */}
                      <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full mb-4"></div>
                      <p className="text-gray-700 text-lg font-medium">
                        Fill out the form below and we&apos;ll get back to you
                        within 24 hours with a customized proposal.
                      </p>
                    </div>

                    {isSubmitted && (
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
                        <div className="mb-6 bg-green-100/80 border-2 border-green-200 rounded-2xl p-4 flex items-center">
                          <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                          <div>
                            <h3 className="text-green-800 font-semibold">
                              Message Sent Successfully!
                            </h3>
                            <p className="text-green-700 text-sm font-medium">
                              We&apos;ll get back to you within 24 hours.
                            </p>
                          </div>
                        </div>
                      </AnimatedContent>
                    )}

                    {error && (
                      <div className="mb-6 bg-red-100/80 border-2 border-red-200 rounded-2xl p-4">
                        <p className="text-red-800 font-semibold">{error}</p>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Project Type Selection */}
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
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <label
                            className={`cursor-pointer p-4 rounded-2xl border-2 transition-all duration-300 ${
                              formData.projectType === "consultation"
                                ? "border-purple-400 bg-purple-100/60"
                                : "border-purple-200/50 bg-white/40"
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
                              <MessageSquare className="w-5 h-5 text-purple-600 mr-2" />
                              <span className="text-gray-900 font-semibold">
                                Consultation
                              </span>
                            </div>
                            <p className="text-gray-700 text-sm mt-1 font-medium">
                              Free strategy session
                            </p>
                          </label>

                          <label
                            className={`cursor-pointer p-4 rounded-2xl border-2 transition-all duration-300 ${
                              formData.projectType === "project"
                                ? "border-blue-400 bg-blue-100/60"
                                : "border-purple-200/50 bg-white/40"
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
                              <Zap className="w-5 h-5 text-blue-600 mr-2" />
                              <span className="text-gray-900 font-semibold">
                                New Project
                              </span>
                            </div>
                            <p className="text-gray-700 text-sm mt-1 font-medium">
                              Full service engagement
                            </p>
                          </label>
                        </div>
                      </AnimatedContent>

                      {/* Name and Email */}
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
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-gray-900 font-semibold mb-2 flex items-center">
                              <User className="w-4 h-4 mr-2 text-purple-600" />
                              Full Name *
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="w-full bg-white/60 border-2 border-purple-200/50 rounded-2xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-purple-400 focus:bg-white/80 transition-all duration-300 outline-none font-medium"
                              placeholder="John Doe"
                            />
                          </div>

                          <div>
                            <label className="text-gray-900 font-semibold mb-2 flex items-center">
                              <Mail className="w-4 h-4 mr-2 text-blue-600" />
                              Email Address *
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="w-full bg-white/60 border-2 border-purple-200/50 rounded-2xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-400 focus:bg-white/80 transition-all duration-300 outline-none font-medium"
                              placeholder="john@company.com"
                            />
                          </div>
                        </div>
                      </AnimatedContent>

                      {/* Company and Phone */}
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
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-gray-900 font-semibold mb-2 flex items-center">
                              <Building className="w-4 h-4 mr-2 text-indigo-600" />
                              Company Name
                            </label>
                            <input
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleInputChange}
                              className="w-full bg-white/60 border-2 border-purple-200/50 rounded-2xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-indigo-400 focus:bg-white/80 transition-all duration-300 outline-none font-medium"
                              placeholder="Your Company"
                            />
                          </div>

                          <div>
                            <label className="text-gray-900 font-semibold mb-2 flex items-center">
                              <Phone className="w-4 h-4 mr-2 text-pink-600" />
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="w-full bg-white/60 border-2 border-purple-200/50 rounded-2xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-pink-400 focus:bg-white/80 transition-all duration-300 outline-none font-medium"
                              placeholder="+234 (0) 123 456 789"
                            />
                          </div>
                        </div>
                      </AnimatedContent>

                      {/* Service Selection */}
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
                          <label className="text-gray-900 font-semibold mb-2 flex items-center">
                            <Target className="w-4 h-4 mr-2 text-purple-600" />
                            Service of Interest *
                          </label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-white/60 border-2 border-purple-200/50 rounded-2xl px-4 py-3 text-gray-900 focus:border-purple-400 focus:bg-white/80 transition-all duration-300 outline-none font-medium"
                          >
                            <option value="" className="bg-white">
                              Select a service...
                            </option>
                            {services.map((service, index) => (
                              <option
                                key={index}
                                value={service}
                                className="bg-white"
                              >
                                {service}
                              </option>
                            ))}
                          </select>
                        </div>
                      </AnimatedContent>

                      {/* Budget and Timeline */}
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
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-gray-900 font-semibold mb-2">
                              Project Budget
                            </label>
                            <select
                              name="budget"
                              value={formData.budget}
                              onChange={handleInputChange}
                              className="w-full bg-white/60 border-2 border-purple-200/50 rounded-2xl px-4 py-3 text-gray-900 focus:border-blue-400 focus:bg-white/80 transition-all duration-300 outline-none font-medium"
                            >
                              <option value="" className="bg-white">
                                Select budget range...
                              </option>
                              {budgetRanges.map((budget, index) => (
                                <option
                                  key={index}
                                  value={budget}
                                  className="bg-white"
                                >
                                  {budget}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="text-gray-900 font-semibold mb-2 flex items-center">
                              <Calendar className="w-4 h-4 mr-2 text-indigo-600" />
                              Timeline
                            </label>
                            <select
                              name="timeline"
                              value={formData.timeline}
                              onChange={handleInputChange}
                              className="w-full bg-white/60 border-2 border-purple-200/50 rounded-2xl px-4 py-3 text-gray-900 focus:border-indigo-400 focus:bg-white/80 transition-all duration-300 outline-none font-medium"
                            >
                              <option value="" className="bg-white">
                                Select timeline...
                              </option>
                              {timelines.map((timeline, index) => (
                                <option
                                  key={index}
                                  value={timeline}
                                  className="bg-white"
                                >
                                  {timeline}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </AnimatedContent>

                      {/* Message */}
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
                          <label className="text-gray-900 font-semibold mb-2 flex items-center">
                            <MessageSquare className="w-4 h-4 mr-2 text-blue-600" />
                            Project Details *
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={5}
                            className="w-full bg-white/60 border-2 border-purple-200/50 rounded-2xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-400 focus:bg-white/80 transition-all duration-300 outline-none resize-none font-medium"
                            placeholder="Tell us about your project goals, target audience, and any specific requirements..."
                          />
                        </div>
                      </AnimatedContent>

                      {/* Submit Button */}
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
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full group bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white font-bold py-4 px-8 rounded-2xl hover:from-purple-700 hover:via-purple-800 hover:to-purple-900 transition-all duration-500 shadow-2xl hover:shadow-purple-500/25 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                              <span className="relative">
                                Sending Message...
                              </span>
                            </>
                          ) : (
                            <>
                              <span className="relative mr-3">
                                Send Message
                              </span>
                              <Send className="relative w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </>
                          )}
                        </button>
                      </AnimatedContent>
                    </form>
                  </div>

                  {/* Decorative Elements - Same as About Section */}
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl opacity-80 rotate-12 group-hover:rotate-45 transition-transform duration-500"></div>
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl opacity-60 rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
                </div>
              </AnimatedContent>

              {/* Contact Information Panel */}
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
                <div className="space-y-8">
                  {/* Office Information */}
                  <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border-2 border-purple-200/50 shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center">
                      <MapPin className="w-6 h-6 mr-3 text-purple-600" />
                      Our Office
                    </h3>
                    {/* Subtle underline accent */}
                    <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full mb-6"></div>
                    <div className="space-y-4 text-gray-700">
                      <p className="flex items-start font-medium">
                        <MapPin className="w-5 h-5 mr-3 mt-1 text-blue-600 flex-shrink-0" />
                        <span>
                          Lagos, Nigeria
                          <br />
                          Available for meetings by appointment
                        </span>
                      </p>
                      <p className="flex items-center font-medium">
                        <Phone className="w-5 h-5 mr-3 text-purple-600" />
                        <span>+2347079405729</span>
                      </p>
                      <p className="flex items-center font-medium">
                        <Mail className="w-5 h-5 mr-3 text-blue-600" />
                        <span>holfortmedia@gmail.com</span>
                      </p>
                      <p className="flex items-center font-medium">
                        <Clock className="w-5 h-5 mr-3 text-indigo-600" />
                        <span>Mon - Fri: 9:00 AM - 6:00 PM WAT</span>
                      </p>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border-2 border-purple-200/50 shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center">
                      <Globe className="w-6 h-6 mr-3 text-blue-600" />
                      Follow Us
                    </h3>
                    {/* Subtle underline accent */}
                    <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full mb-6"></div>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { icon: Instagram, name: "Instagram", color: "pink" },
                        { icon: Twitter, name: "Twitter", color: "blue" },
                        { icon: Linkedin, name: "LinkedIn", color: "indigo" },
                        { icon: Youtube, name: "YouTube", color: "red" },
                      ].map((social, index) => (
                        <a
                          key={index}
                          href="#"
                          className="bg-white/40 hover:bg-purple-100/60 border-2 border-purple-200/50 hover:border-purple-300 rounded-2xl p-4 transition-all duration-300 flex items-center group"
                        >
                          <social.icon
                            className={`w-5 h-5 text-purple-600 mr-3`}
                          />
                          <span className="text-gray-900 group-hover:text-purple-800 font-medium">
                            {social.name}
                          </span>
                          <ExternalLink className="w-4 h-4 ml-auto text-gray-600 group-hover:text-purple-700" />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Why Choose Us */}
                  <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border-2 border-purple-200/50 shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center">
                      <Star className="w-6 h-6 mr-3 text-yellow-500" />
                      Why Choose Us?
                    </h3>
                    {/* Subtle underline accent */}
                    <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full mb-6"></div>
                    <div className="space-y-4">
                      {[
                        "24-hour response guarantee",
                        "Customized strategy for every client",
                        "Proven track record in digital media",
                        "Transparent communication",
                        "Results-driven approach",
                      ].map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center text-gray-700"
                        >
                          <CheckCircle className="w-5 h-5 mr-3 text-green-600 flex-shrink-0" />
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </section>
      </div>

      {/* Additional decorative elements - Same as About Section */}
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
