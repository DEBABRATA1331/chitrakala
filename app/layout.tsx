import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://chitrakala-studio.vercel.app"),
  title: "Chitrakala Graphics Studio | Logo Design & Branding",
  description:
    "Futuristic creative studio specializing in logo design, brand identity, flex printing, visiting cards, and social media creatives. Fast delivery, premium quality.",
  keywords: [
    "graphic designer",
    "logo design",
    "brand identity",
    "printing services",
    "visiting card design",
    "banner printing",
    "social media creatives",
    "branding studio",
    "Chitrakala Graphics Studio",
  ],
  authors: [{ name: "Chitrakala Graphics Studio" }],
  creator: "Chitrakala Graphics Studio",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://chitrakala-studio.vercel.app",
    siteName: "Chitrakala Graphics Studio",
    title: "Chitrakala Graphics Studio | Logo Design & Branding",
    description:
      "Complete designing & printing solutions. Logo design, visiting cards, flex banners, social media creatives.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chitrakala Graphics Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chitrakala Graphics Studio | Logo Design & Branding",
    description: "Complete designing & printing solutions for businesses.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Chitrakala Graphics Studio",
              description:
                "Complete designing & printing solutions for businesses. Logo design, visiting cards, flex banners, social media creatives.",
              url: "https://chitrakala-studio.vercel.app",
              telephone: "+91XXXXXXXXXX",
              sameAs: [
                "https://www.instagram.com/chitrakala_graphics_studio",
              ],
              openingHours: "Mo-Sa 09:00-20:00",
              priceRange: "₹₹",
              currenciesAccepted: "INR",
              paymentAccepted: "Cash, UPI, Bank Transfer",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
