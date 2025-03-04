
// import { useEffect } from "react";
import { Plus_Jakarta_Sans, Public_Sans } from "next/font/google";
import { Providers } from "./providers";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../public/assets/css/vendors/swiper-bundle.min.css";
import "line-awesome/dist/line-awesome/css/line-awesome.min.css";
import Layout from "@/components/common/layout/Layout";
import ContactButtons from "@/components/common/others/ContactButtons";
// import ChatWidget from "@/components/common/others/ChatWidget";

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

export const metadata = {
  title: "CloudMinister | Reliable Web, Cloud Hosting & Server Management Solutions in India",
  description:
    "CloudMinister offers secure, high-performance Web hosting, VPS, Dedicated Server, cloud hosting, server management, and IT solutions. Get 24/7 support and scalable cloud infrastructure for your business.",
};

export default function RootLayout({ children }) {
  // useEffect(() => {
  //   import("bootstrap/dist/js/bootstrap.bundle.min.js").then(() => {
  //     console.log("Bootstrap JS loaded");
  //   });
  // }, []);

  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} ${publicSans.variable}`}>
        <Providers>
          <Layout>
            <ContactButtons/>
            {/* <ChatWidget/> */}
          {children}
          </Layout>
        </Providers>
      </body>
    </html>
  );
}
