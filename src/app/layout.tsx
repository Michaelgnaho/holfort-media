import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Improves font loading performance
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Holfort Media | Digital Media Agency for Innovative Brand Solutions",
  description:
    "Holfort Media transforms brands with innovative digital strategies, social media management, influencer marketing, content creation, and more. Discover our expert media consulting and storytelling services to drive engagement and growth.",
  keywords: [
    "digital media agency",
    "media consulting",
    "social media management",
    "influencer marketing",
    "content creation",
    "reputation management",
    "digital advertising",
    "event media coverage",
    "brand storytelling",
    "corporate media strategy",
    "Holfort Media",
    "Lagos media agency",
  ],
  robots: "index, follow",
  verification: {
    google: "2nwzSeikUG3mM5NWPUfaTZh69XFWxBD8E5GytLCPbOw",
  },
  openGraph: {
    title: "Holfort Media | Innovative Digital Media Solutions",
    description:
      "Empowering brands with bespoke media strategies, creative content, and data-driven campaigns to maximize digital impact and growth.",
    url: "https://www.holfortmedia.com.ng",
    siteName: "Holfort Media",
    images: [
      {
        url: "https://www.holfortmedia.com.ng/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Holfort Media - Digital Media Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Holfort Media | Innovative Digital Media Solutions",
    description:
      "Transform your brand with Holfort Media's expert digital strategies, content creation, and media consulting services.",
    images: ["https://www.holfortmedia.com.ng/twitter-image.jpg"],
  },
  // Add other metadata for better SEO and caching
  generator: "Next.js",
  applicationName: "Holfort Media",
  authors: [{ name: "Holfort Media Team" }],
  creator: "Holfort Media",
  publisher: "Holfort Media",
};

// Structured data as a separate constant for better performance
const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Holfort Media",
  url: "https://www.holfortmedia.com.ng",
  logo: "https://www.holfortmedia.com.ng/logo.png",
  description:
    "Holfort Media is a leading digital media agency in Lagos, Nigeria, offering innovative media consulting, social media management, influencer marketing, content creation, and more to transform brands globally.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Media Hub Street, Victoria Island",
    addressLocality: "Lagos",
    addressCountry: "Nigeria",
    postalCode: "100001",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+234123456789",
    contactType: "Customer Service",
    email: "hello@holfortmedia.com",
  },
  sameAs: [
    "https://www.instagram.com/holfortmedia",
    "https://www.linkedin.com/company/holfortmedia",
    "https://twitter.com/holfortmedia",
    "https://www.youtube.com/holfortmedia",
  ],
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.holfortmedia.com.ng",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://www.holfortmedia.com.ng/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Portfolio",
      item: "https://www.holfortmedia.com.ng/portfolio",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Contact",
      item: "https://www.holfortmedia.com.ng/contact",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />

        {/* Preconnect to external origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Critical resource hints */}
        <link rel="prefetch" href="/about" />
        <link rel="prefetch" href="/services" />
        <link rel="prefetch" href="/portfolio" />
        <link rel="prefetch" href="/contact" />

        {/* Preload critical images */}
        <link
          rel="preload"
          href="/logo.png"
          as="image"
          type="image/png"
          fetchPriority="high"
        />
        <link rel="preload" href="/og-image.jpg" as="image" type="image/jpeg" />

        {/* Service Worker for caching (if you have one) */}
        {process.env.NODE_ENV === "production" && (
          <link rel="manifest" href="/manifest.json" />
        )}

        {/* Cache control meta tags */}
        <meta
          httpEquiv="Cache-Control"
          content="public, max-age=31536000, immutable"
        />

        {/* Viewport optimization */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />

        {/* Theme color for PWA */}
        <meta name="theme-color" content="#000000" />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Optimized Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbStructuredData),
          }}
        />

        {/* Critical CSS inlining hint */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Critical CSS for above-the-fold content */
              body { 
                margin: 0; 
                font-family: var(--font-geist-sans), -apple-system, BlinkMacSystemFont, sans-serif;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
              }
              /* Hide content until fonts are loaded to prevent FOUT */
              .font-loading { visibility: hidden; }
              .fonts-loaded .font-loading { visibility: visible; }
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-loading`}
        suppressHydrationWarning={true}
      >
        {/* Font loading optimization script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Font loading optimization
              if ('fonts' in document) {
                Promise.all([
                  document.fonts.load('400 1em Geist'),
                  document.fonts.load('500 1em Geist'),
                  document.fonts.load('400 1em "Geist Mono"')
                ]).then(() => {
                  document.body.classList.add('fonts-loaded');
                  document.body.classList.remove('font-loading');
                }).catch(() => {
                  // Fallback if font loading fails
                  document.body.classList.add('fonts-loaded');
                  document.body.classList.remove('font-loading');
                });
              } else {
                // Fallback for browsers without Font Loading API
                setTimeout(() => {
                  document.body.classList.add('fonts-loaded');
                  document.body.classList.remove('font-loading');
                }, 1000);
              }
              
              // Service Worker registration for caching
              if ('serviceWorker' in navigator && '${process.env.NODE_ENV}' === 'production') {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js')
                    .then((registration) => {
                      console.log('SW registered: ', registration);
                    })
                    .catch((registrationError) => {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
