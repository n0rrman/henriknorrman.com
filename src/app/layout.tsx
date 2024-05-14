import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "henriknorrman.com",
  description: "Hello 👋, I'm Henrik Norrman.",
  metadataBase: new URL("https://henriknorrman.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: "/opengraph-image.png",
  },
  twitter: {
    images: "/twitter-image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-bgColour">{children}</body>
    </html>
  );
}
