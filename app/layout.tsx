import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FLA Reels | Professional DSLR Reels & Instant Editing",
  description: "Get professional DSLR shooting, Mac Studio editing, and instant reel delivery in minutes. We help brands, creators, and events publish stunning vertical content in record time.",
  keywords: ["FLA Reels", "Link in Bio", "Reel Production", "Event Reels", "DSLR Shoots", "Instant Video Editing", "Mac Studio Editing", "Wedding Reels"],
  authors: [{ name: "FLA Reels Team" }],
  openGraph: {
    title: "FLA Reels | Professional DSLR Reels & Instant Editing",
    description: "Get professional DSLR shooting, Mac Studio editing, and instant reel delivery in minutes.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col bg-[#050505] text-[#f3f4f6] font-sans antialiased overflow-x-hidden selection:bg-gold selection:text-black">
        {children}
      </body>
    </html>
  );
}

