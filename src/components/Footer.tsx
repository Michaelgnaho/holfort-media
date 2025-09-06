import React from "react";
import Link from "next/link";
import {
  Home,
  User,
  Briefcase,
  FolderOpen,
  Mail,
  Calendar,
  MapPin,
  Phone,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Music2,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import logo from "@/holfort-logo.jpg";
import { div } from "three/tsl";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: User },
    { name: "Services", href: "/services", icon: Briefcase },
    { name: "Portfolio", href: "/portfolio", icon: FolderOpen },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  const services = [
    "Social Media Management",
    "Content Creation",
    "Paid Media & Advertising",
    "Reputation Management",
    "Influencer Marketing",
    "Corporate Strategy",
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://facebook.com/holfortmedia",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/holfortmedia",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/holfortmedia1/",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/holfortmedia",
    },
    {
      name: "Tiktok",
      icon: Music2,
      href: "https://www.tiktok.com/@holfortmedia?is_from_webapp=1&sender_device=pca",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-50 via-white to-purple-50/30 border-t border-purple-200/30 overflow-hidden">
      {/* Advanced Background Pattern - Same as Hero */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_50%_50%,_purple_1px,_transparent_1px)] bg-[length:40px_40px]"></div>

      {/* Floating Elements for Visual Interest - Same as Hero */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-200/20 to-blue-200/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-purple-300/15 to-pink-300/15 rounded-full blur-3xl opacity-25 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-blue-200/15 to-purple-200/15 rounded-full blur-3xl opacity-20 animate-pulse delay-500"></div>

      {/* Refined overlay for perfect contrast - Same as Hero */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/10 via-transparent to-white/20"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Company Info Column */}
            <div className="lg:col-span-2">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-6">
                <Link
                  href="/"
                  className="text-gray-900 text-xl font-bold hover:text-purple-700 transition-colors duration-200"
                  aria-label="Holfort Media - Go to homepage"
                >
                  <Image
                    src={logo}
                    className="w-14 h-14 rounded-md shadow-lg"
                    alt={"LOGO"}
                  />
                </Link>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-md font-medium">
                Transforming brands through innovative digital solutions,
                strategic media management, and impactful storytelling that
                drives global impact.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">Lagos, Nigeria</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">+2347079405729</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">holfortmedia@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium">
                    Mon - Fri: 9:00 AM - 6:00 PM
                  </span>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="mt-8">
                <h4 className="text-gray-900 font-bold text-lg mb-2">
                  Stay Updated
                </h4>
                {/* Subtle underline accent */}
                <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full mb-4"></div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-white/80 backdrop-blur-xl border-2 border-purple-200/50 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 shadow-lg"
                  />
                  <button className="group relative bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white font-bold px-6 py-3 rounded-xl hover:from-purple-700 hover:via-purple-800 hover:to-purple-900 transition-all duration-500 shadow-xl hover:shadow-purple-500/25 hover:scale-105 flex items-center gap-2 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative">Subscribe</span>
                    <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h4 className="text-gray-900 font-bold text-lg mb-2">
                Quick Links
              </h4>
              {/* Subtle underline accent */}
              <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full mb-6"></div>
              <ul className="space-y-4">
                {navigationLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-700 hover:text-purple-700 transition-colors duration-200 flex items-center gap-3 group font-medium"
                      >
                        <div className="w-6 h-6 bg-gradient-to-r from-purple-200/50 to-purple-300/50 rounded-lg flex items-center justify-center group-hover:from-purple-600 group-hover:to-purple-700 transition-all duration-300">
                          <Icon className="w-3 h-3 text-purple-600 group-hover:text-white transition-colors duration-200" />
                        </div>
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-700 hover:text-purple-700 transition-colors duration-200 flex items-center gap-3 group font-medium"
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-200/50 to-purple-300/50 rounded-lg flex items-center justify-center group-hover:from-purple-600 group-hover:to-purple-700 transition-all duration-300">
                      <Calendar className="w-3 h-3 text-purple-600 group-hover:text-white transition-colors duration-200" />
                    </div>
                    Book Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-gray-900 font-bold text-lg mb-2">
                Our Services
              </h4>
              {/* Subtle underline accent */}
              <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full mb-6"></div>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      href="/services"
                      className="text-gray-700 hover:text-purple-700 transition-colors duration-200 flex items-center gap-3 group font-medium"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Social Links & CTA Section */}
        <div className="border-t border-purple-200/50 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Social Links */}
            <div>
              <h4 className="text-gray-900 font-bold text-lg mb-2">
                Follow Us
              </h4>
              {/* Subtle underline accent */}
              <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full mb-6"></div>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/80 backdrop-blur-xl border-2 border-purple-200/50 rounded-xl flex items-center justify-center text-purple-600 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-700 hover:border-purple-400 transition-all duration-300 group shadow-lg hover:shadow-purple-500/25 hover:scale-110"
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <Icon className="w-5 h-5 transition-transform duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center md:text-right">
              <h4 className="text-gray-900 font-bold text-lg mb-2">
                Ready to Get Started?
              </h4>
              {/* Subtle underline accent */}
              <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full mb-4 mx-auto md:ml-auto md:mr-0"></div>
              <p className="text-gray-700 mb-6 font-medium">
                Let&apos;s transform your brand together
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
                <Link
                  href="/contact"
                  className="group relative bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white font-bold px-6 py-3 rounded-xl hover:from-purple-700 hover:via-purple-800 hover:to-purple-900 transition-all duration-500 shadow-xl hover:shadow-purple-500/25 hover:scale-105 inline-flex items-center gap-2 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Calendar className="relative w-4 h-4" />
                  <span className="relative">Book Consultation</span>
                </Link>
                <Link
                  href="/portfolio"
                  className="group bg-white/80 backdrop-blur-xl text-gray-900 font-bold px-6 py-3 rounded-xl border-2 border-purple-200 hover:border-purple-400 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center gap-2 relative overflow-hidden"
                >
                  <FolderOpen className="w-4 h-4" />
                  <span>View Our Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-200/50 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-600 text-center md:text-left">
              <p>&copy; {currentYear} Holfort Media. All rights reserved.</p>
            </div>

            {/* Legal Links */}
            <div className="flex gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-600 hover:text-purple-700 transition-colors duration-200 font-medium"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-600 hover:text-purple-700 transition-colors duration-200 font-medium"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-gray-600 hover:text-purple-700 transition-colors duration-200 font-medium"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Safe Area Handling for iOS */}
      <style jsx>{`
        @supports (padding: env(safe-area-inset)) {
          footer {
            padding-bottom: calc(env(safe-area-inset-bottom) + 2rem);
          }
        }
      `}</style>
    </footer>
  );
}
