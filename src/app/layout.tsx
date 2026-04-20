import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceWorkerRegistrar from "@/components/ServiceWorkerRegistrar";

export const metadata: Metadata = {
  title: "Imperial Stayz | Premium Hotels in Gurugram | Where Elegance Meets Comfort",
  description:
    "Imperial Stayz offers premium rooms across multiple properties in Gurugram. Corporate stays, events, dining & more. Book your luxury experience today.",
  keywords: "Imperial Stayz, hotels Gurugram, corporate stay, premium hotels, Sector 45, Sector 46, Sector 51, Sector 42",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#0C5DCD",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Palanquin:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/icon-192.png" />
      </head>
      <body className="min-h-screen flex flex-col">
        <ServiceWorkerRegistrar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
