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

// Fixed Silk Background Component
// const SilkBackground = () => {
//   const [particles, setParticles] = useState<
//     Array<{
//       id: number;
//       left: string;
//       top: string;
//       width: string;
//       height: string;
//       animationDelay: string;
//       animationDuration: string;
//     }>
//   >([]);

//   useEffect(() => {
//     // Generate particles only on client side to avoid hydration mismatch
//     const generatedParticles = [...Array(25)].map((_, i) => ({
//       id: i,
//       left: `${Math.random() * 100}%`,
//       top: `${Math.random() * 100}%`,
//       width: `${Math.random() * 4 + 1}px`,
//       height: `${Math.random() * 4 + 1}px`,
//       animationDelay: `${Math.random() * 3}s`,
//       animationDuration: `${Math.random() * 3 + 2}s`,
//     }));

//     setParticles(generatedParticles);
//   }, []);

//   return (
//     <div className="absolute inset-0 overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/30 to-indigo-900/50">
//         <div className="absolute inset-0 opacity-20">
//           {particles.map((particle) => (
//             <div
//               key={particle.id}
//               className="absolute rounded-full bg-white/10 animate-pulse"
//               style={{
//                 left: particle.left,
//                 top: particle.top,
//                 width: particle.width,
//                 height: particle.height,
//                 animationDelay: particle.animationDelay,
//                 animationDuration: particle.animationDuration,
//               }}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

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
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Silk Background */}
      {/* <SilkBackground /> */}

      {/* Content */}
      <div className="relative z-10">
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
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300">
                        <contact.icon
                          className={`w-8 h-8 text-${contact.color}-400 mx-auto mb-3`}
                        />
                        <h3 className="text-white font-semibold mb-2">
                          {contact.title}
                        </h3>
                        <p className="text-gray-300">{contact.value}</p>
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
                    </AnimatedContent>
                  )}

                  {error && (
                    <div className="mb-6 bg-red-600/20 border border-red-600/30 rounded-2xl p-4">
                      <p className="text-red-400 font-semibold">{error}</p>
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
                          <label className="text-white font-semibold mb-2 flex items-center">
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
                          <label className="text-white font-semibold mb-2 flex items-center">
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
                          <label className="text-white font-semibold mb-2 flex items-center">
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
                          <label className="text-white font-semibold mb-2 flex items-center">
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
                        <label className="text-white font-semibold mb-2 flex items-center">
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
                          <label className="text-white font-semibold mb-2 flex items-center">
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
                        <label className="text-white font-semibold mb-2 flex items-center">
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
                    </AnimatedContent>
                  </form>
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
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                    <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                      <MapPin className="w-6 h-6 mr-3 text-purple-400" />
                      Our Office
                    </h3>
                    <div className="space-y-4 text-gray-200">
                      <p className="flex items-start">
                        <MapPin className="w-5 h-5 mr-3 mt-1 text-blue-400 flex-shrink-0" />
                        <span>
                          Lagos, Nigeria
                          <br />
                          Available for meetings by appointment
                        </span>
                      </p>
                      <p className="flex items-center">
                        <Phone className="w-5 h-5 mr-3 text-purple-400" />
                        <span>+2347079405729</span>
                      </p>
                      <p className="flex items-center">
                        <Mail className="w-5 h-5 mr-3 text-blue-400" />
                        <span>holfortmedia@gmail.com</span>
                      </p>
                      <p className="flex items-center">
                        <Clock className="w-5 h-5 mr-3 text-indigo-400" />
                        <span>Mon - Fri: 9:00 AM - 6:00 PM WAT</span>
                      </p>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                    <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                      <Globe className="w-6 h-6 mr-3 text-blue-400" />
                      Follow Us
                    </h3>
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
                          className={`bg-white/5 hover:bg-${social.color}-600/20 border border-white/10 hover:border-${social.color}-400/30 rounded-2xl p-4 transition-all duration-300 flex items-center group`}
                        >
                          <social.icon
                            className={`w-5 h-5 text-${social.color}-400 mr-3`}
                          />
                          <span className="text-white group-hover:text-white">
                            {social.name}
                          </span>
                          <ExternalLink className="w-4 h-4 ml-auto text-gray-400 group-hover:text-white" />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Why Choose Us */}
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                    <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                      <Star className="w-6 h-6 mr-3 text-yellow-400" />
                      Why Choose Us?
                    </h3>
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
                          className="flex items-center text-gray-200"
                        >
                          <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
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
    </div>
  );
}
