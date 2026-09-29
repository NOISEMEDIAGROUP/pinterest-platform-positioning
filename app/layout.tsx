import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"], weight: ["400", "500", "700"] });
const barlowCondensed = Barlow_Condensed({ variable: "--font-barlow-condensed", subsets: ["latin"], weight: ["600", "700"] });

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://noisemediagroup.github.io/pinterest-platform-positioning/"),
  title: "Pinterest Presents 2026 | Noise event recap",
  description: "A story-led internal recap of Pinterest Presents 2026: what happened, Pinterest's view of AI, product announcements, brand examples, measurement and trends.",
  openGraph: {
    title: "Pinterest Presents 2026 | Noise event recap",
    description: "What happened, what Pinterest announced and how it described the future of visual discovery, AI and advertising.",
    images: [{ url: "og.png", width: 1730, height: 909, alt: "Pinterest wants to turn intention into action - Noise internal event recap" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pinterest Presents 2026 | Noise event recap",
    description: "What happened, what Pinterest announced and how it described the future of visual discovery, AI and advertising.",
    images: ["og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${dmSans.variable} ${barlowCondensed.variable}`}>{children}</body></html>;
}
