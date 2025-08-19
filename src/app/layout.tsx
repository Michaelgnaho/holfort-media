import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
  // Add Google verification here
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Holfort Media",
              url: "https://www.holfortmedia.com.ng", // Fixed double .ng
              logo: "https://www.holfortmedia.com.ng/logo.png", // Fixed double .ng
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
            }),
          }}
        />
        {/* Structured Data for Breadcrumbs */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.holfortmedia.com.ng", // Fixed double .ng
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Services",
                  item: "https://www.holfortmedia.com.ng/services", // Fixed double .ng
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Portfolio",
                  item: "https://www.holfortmedia.com.ng/portfolio", // Fixed double .ng
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Contact",
                  item: "https://www.holfortmedia.com.ng/contact", // Fixed double .ng
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
