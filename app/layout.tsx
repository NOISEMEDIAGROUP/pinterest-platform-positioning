import type { Metadata } from "next";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://noisemediagroup.github.io/pinterest-platform-positioning/"),
  title: "Pinterest Presents 2026 | Noise event recap",
  description: "An internal Noise recap of Pinterest's platform pitch, product signals and the gates for a useful client test.",
  openGraph: {
    title: "Pinterest Presents 2026 | Noise event recap",
    description: "What changed, what Pinterest claims and what Noise should test.",
    images: [{ url: "og.png", width: 1730, height: 909, alt: "Pinterest Presents 2026 internal Noise event recap" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pinterest Presents 2026 | Noise event recap",
    description: "What changed, what Pinterest claims and what Noise should test.",
    images: ["og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
