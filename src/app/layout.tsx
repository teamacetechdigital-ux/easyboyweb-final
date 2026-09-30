import type { Metadata } from "next";
import "./globals.css";
import "./responsive.css";
import "./motion.css";
import "./quality.css";
import GsapAnimations from "../components/layout/GsapAnimations";

export const metadata: Metadata = {
  title: "Easyboyweb | Websites, Mobile Apps & Custom Software",
  description:
    "Strategy, design and development for ambitious businesses. Custom websites, mobile apps and software from Easyboyweb in Greenville, SC and Atlanta, GA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <GsapAnimations>{children}</GsapAnimations>
      </body>
    </html>
  );
}
