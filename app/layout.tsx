import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { agencyConfig } from "@/data/agency";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: agencyConfig.fullTitle,
  description: agencyConfig.heroSubheadline,
  keywords: [
    "Digital Agency",
    "Digital Product Design",
    "Brand Strategy",
    "UX/UI Design Studio",
    "AI Product Development",
    "Enterprise Technology",
    "Headless Commerce",
    "Activ8",
  ],
  authors: [{ name: agencyConfig.name }],
  openGraph: {
    title: agencyConfig.fullTitle,
    description: agencyConfig.heroSubheadline,
    url: "https://activ8.digital",
    siteName: agencyConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: agencyConfig.fullTitle,
    description: agencyConfig.heroSubheadline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#00685B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" className={`${inter.variable} font-sans dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: agencyConfig.name,
              url: "https://activ8.digital",
              logo: "https://activ8.digital/logo.png",
              description: agencyConfig.heroSubheadline,
              email: agencyConfig.contactEmail,
              sameAs: agencyConfig.socials.map((s) => s.url),
            }),
          }}
        />
      </head>
      <body className="antialiased bg-[var(--bg-main)] text-[var(--text-primary)] relative transition-colors duration-400">
        <ThemeProvider>
          <CustomCursor />
          <NoiseOverlay />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
