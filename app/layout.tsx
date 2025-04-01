import type { Metadata } from "next";
import { Inter, Onest } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}`),

  title: {
    template: "%s | Initify - Digital Solutions for Businesses",
    default: "Initify | Web Development, Design, Cloud & More",
  },

  description:
    "Initify is a premier freelancing agency providing cutting-edge web development, UI/UX design, cloud solutions, AI automation, and digital growth strategies. Scale your business with expert technology solutions.",

  keywords: [
    "Initify",
    "Initify Agency",
    "Initify Freelancing",
    "Initify Technologies",
    "web development",
    "UI/UX design",
    "graphic design",
    "cloud solutions",
    "AWS",
    "Google Cloud",
    "Azure",
    "AI automation",
    "digital transformation",
    "mobile app development",
    "custom software development",
    "business growth",
    "startup solutions",
    "e-commerce development",
    "website optimization",
    "frontend development",
    "backend development",
    "full-stack development",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "API development",
    "DevOps",
    "SEO services",
    "branding",
    "logo design",
    "Ankit Kumar Chowdhury",
    "Ankit Chowdhury",
    "Ankit K.C.",
    "Subid Das",
    "Subid",
    "Niladri Sekhar Adhikary",
    "Niladri Adhikary",
    "Niladri",
    "Subid Niladri Ankit",
  ],

  authors: [
    { name: "Subid Das", url: "https://devsubid.vercel.app/" },
    { name: "Ankit Kumar Chowdhury", url: "https://www.myselfankit.tech/" },
    { name: "Niladri Adhikary", url: "https://niladri-adhikary.vercel.app/" },
  ],

  publisher: "Initify",

  openGraph: {
    title: "Initify - Web Development, UI/UX, Cloud & Digital Solutions",
    description:
      "Power your business with Initify - expert solutions in web development, UI/UX design, cloud computing, AI automation, and more.",
    url: `https://${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}`,
    siteName: "Initify",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `https://${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Initify - Web Development, Design & Digital Solutions",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  twitter: {
    card: "summary_large_image",
    title: "Initify - Web Development, UI/UX, Cloud & More",
    description:
      "Launch and scale your business with Initify - web development, design, cloud solutions, AI automation, and digital growth strategies.",
    images: [
      `https://${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/images/og-image.png`,
    ],
    creator: "@InitifyTech", // todo
  },

  icons: {
    shortcut: `https://${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/favicon.ico`,
  },

  alternates: {
    canonical: `https://${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${onest.variable} antialiased`}>
        {children}
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
