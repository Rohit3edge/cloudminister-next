"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; 
import { Plus_Jakarta_Sans, Public_Sans } from "next/font/google";
import { Providers } from "./providers";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../public/assets/css/vendors/swiper-bundle.min.css";
import "line-awesome/dist/line-awesome/css/line-awesome.min.css";
import Layout from "@/components/common/layout/Layout";
import ContactButtons from "@/components/common/others/ContactButtons";
import ChatWidget from "@/components/common/others/ChatWidget";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function Loader() {
  return (
    <div className="loader-container">
      <img src="/img/logo-light.webp" alt="Loading..." className="loader-logo" />
    </div>
  );
}

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname(); // Get current route

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); // Simulate loading time

    return () => clearTimeout(timer); // Cleanup
  }, [pathname]); // Runs when the route changes

  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} ${publicSans.variable}`}>
        {loading && <Loader />}
        <Providers>
          <Layout>
            <ContactButtons />
            <ChatWidget />
            {children}
          </Layout>
        </Providers>
      </body>
    </html>
  );
}
