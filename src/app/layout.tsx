import type { Metadata } from "next";
import "./globals.css";
import "./responsive.css";
import GsapAnimations from "../components/layout/GsapAnimations";

export const metadata: Metadata = {
  title: "Responsive Website Development | Easyboyweb",
  description:
    "Responsive website hosting, maintenance, security, updates and support from Easyboyweb.",
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
      <script src="tilt.jquery.js"></script>
    </html>
  );
}
