"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  FolderOpen,
  Mail,
  Calendar,
} from "lucide-react";
import Image from "next/image";
import logo from "@/holfort-logo.jpg";
// Adjust the path as necessary

// Navigation items configuration
const navigationItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Services", href: "/services", icon: Briefcase },
  { name: "Portfolio", href: "/portfolio", icon: FolderOpen },
  { name: "Contact", href: "/contact", icon: Mail },
];

// CTA button configuration
const ctaButton = {
  name: "Book Us",
  href: "/contact",
  icon: Calendar,
};

/**
 * Custom hook to handle click outside functionality
 * Used to close mobile menu when clicking outside
 */
const useClickOutside = (
  ref: React.RefObject<HTMLDivElement | null>,
  callback: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref, callback]);
};

/**
 * Custom hook to handle escape key functionality
 * Used to close mobile menu when pressing Escape
 */
const useEscapeKey = (callback: () => void) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        callback();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [callback]);
};

/**
 * Holfort Media Navbar Component
 * A responsive, accessible navigation bar with mobile hamburger menu
 */
export default function Navbar() {
  // State for mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Get current pathname for active link detection
  const pathname = usePathname();

  // Refs for click outside functionality
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu when clicking outside or pressing escape
  useClickOutside(mobileMenuRef, () => setIsMobileMenuOpen(false));
  useEscapeKey(() => setIsMobileMenuOpen(false));

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  /**
   * Toggle mobile menu state
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  /**
   * Handle keyboard navigation for mobile menu toggle
   */
  const handleMobileMenuKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleMobileMenu();
    }
  };

  /**
   * Check if a link is currently active
   */
  const isActiveLink = (href: string): boolean => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  /**
   * Get CSS classes for navigation links
   */
  const getLinkClasses = (href: string, isCTA = false): string => {
    const baseClasses =
      "text-white font-medium transition-all duration-200 flex items-center gap-2";
    const activeClasses = "text-white border-b-2 border-white";
    const inactiveClasses = "hover:text-gray-200 hover:scale-105";

    if (isCTA) {
      const ctaClasses =
        "px-4 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-200";
      return `${baseClasses} ${ctaClasses}`;
    }

    return `${baseClasses} ${
      isActiveLink(href) ? activeClasses : inactiveClasses
    }`;
  };

  return (
    <nav
      className="sticky top-0 z-50 w-screen bg-black backdrop-blur-md border-b border-gray-800"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            {/* Optional SVG Logo Mark */}
            {/* <Image src={logo} fill alt={""} className=""/> */}

            {/* Text Logo */}
            <Link
              href="/"
              className="text-white text-xl font-bold hover:text-gray-200 transition-colors duration-200"
              aria-label="Holfort Media - Go to homepage"
            >
              <Image src={logo} className="w-8 h-8 rounded-md" alt={"LOGO"} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-8" role="menubar">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name} role="none">
                    <Link
                      href={item.href}
                      className={getLinkClasses(item.href)}
                      role="menuitem"
                      aria-current={
                        isActiveLink(item.href) ? "page" : undefined
                      }
                    >
                      <Icon size={16} />
                      {item.name}
                    </Link>
                  </li>
                );
              })}

              {/* CTA Button */}
              <li role="none">
                <Link
                  href={ctaButton.href}
                  className={getLinkClasses(ctaButton.href, true)}
                  role="menuitem"
                >
                  <ctaButton.icon size={16} />
                  {ctaButton.name}
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 p-2 rounded-md transition-colors duration-200"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              aria-label={
                isMobileMenuOpen ? "Close main menu" : "Open main menu"
              }
              onClick={toggleMobileMenu}
              onKeyDown={handleMobileMenuKeyDown}
            >
              {isMobileMenuOpen ? (
                <X size={24} aria-hidden="true" />
              ) : (
                <Menu size={24} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          id="mobile-menu"
          className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="mobile-menu-button"
        >
          <div className="px-4 py-6 space-y-4">
            <ul className="space-y-4" role="none">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name} role="none">
                    <Link
                      href={item.href}
                      className={`${getLinkClasses(
                        item.href
                      )} text-lg py-2 px-4 block rounded-md hover:bg-gray-800`}
                      role="menuitem"
                      tabIndex={isMobileMenuOpen ? 0 : -1}
                      aria-current={
                        isActiveLink(item.href) ? "page" : undefined
                      }
                    >
                      <Icon size={20} />
                      {item.name}
                    </Link>
                  </li>
                );
              })}

              {/* Mobile CTA Button */}
              <li role="none" className="pt-4 border-t border-gray-700">
                <Link
                  href={ctaButton.href}
                  className={`${getLinkClasses(
                    ctaButton.href,
                    true
                  )} text-lg py-3 px-6 justify-center rounded-md`}
                  role="menuitem"
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                >
                  <ctaButton.icon size={20} />
                  {ctaButton.name}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
