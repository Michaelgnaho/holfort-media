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
  Youtube,
  ArrowRight,
} from "lucide-react";

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
      href: "https://instagram.com/holfortmedia",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/company/holfortmedia",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "https://youtube.com/holfortmedia",
    },
  ];

  return (
    <footer className="relative bg-black/95 backdrop-blur-md border-t border-gray-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Company Info Column */}
            <div className="lg:col-span-2">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <div className="w-5 h-5 bg-gray-900 rounded-full"></div>
                </div>
                <h3 className="text-white text-2xl font-bold">Holfort Media</h3>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md">
                Transforming brands through innovative digital solutions,
                strategic media management, and impactful storytelling that
                drives global impact.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span>Lagos, Nigeria</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>+234 (0) 123 456 7890</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-indigo-400" />
                  <span>hello@holfortmedia.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Clock className="w-5 h-5 text-purple-400" />
                  <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="mt-8">
                <h4 className="text-white font-semibold text-lg mb-4">
                  Stay Updated
                </h4>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
                  />
                  <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center gap-2 font-medium">
                    Subscribe
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {navigationLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-3 group"
                      >
                        <Icon className="w-4 h-4 text-purple-400 group-hover:text-white transition-colors duration-200" />
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-3 group"
                  >
                    <Calendar className="w-4 h-4 text-blue-400 group-hover:text-white transition-colors duration-200" />
                    Book Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">
                Our Services
              </h4>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      href="/services"
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-3 group"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Social Links & CTA Section */}
        <div className="border-t border-gray-800 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Social Links */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center text-gray-300 hover:text-white hover:border-purple-400 transition-all duration-300 group"
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center md:text-right">
              <h4 className="text-white font-bold text-lg mb-4">
                Ready to Get Started?
              </h4>
              <p className="text-gray-300 mb-6">
                Let&apos;s transform your brand together
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Book Consultation
                </Link>
                <Link
                  href="/portfolio"
                  className="bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 inline-flex items-center gap-2"
                >
                  <FolderOpen className="w-4 h-4" />
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-400 text-center md:text-left">
              <p>&copy; {currentYear} Holfort Media. All rights reserved.</p>
            </div>

            {/* Legal Links */}
            <div className="flex gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
