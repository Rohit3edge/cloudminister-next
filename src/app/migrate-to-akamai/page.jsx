import React from "react";
import MigrateAkamaiHero from "@/components/MigrateAkamai/MigrateAkamaiHero";
import WhyChoose from "@/components/MigrateAkamai/WhyChoose";
import ItWorks from "@/components/MigrateAkamai/ItWorks";
import DataCenterCustomerBrands from "@/components/dataCenter/DataCenterCustomerBrands";
import EndSale from "@/components/MigrateAkamai/EndSale";
import FeatureCard from "@/components/MigrateAkamai/FeatureCard";

export const metadata = {
  title:
    "Migrate to Akamai with CloudMinister | Fast & Secure Website Migration",
  description:
    "Seamlessly migrate to Akamai with CloudMinister’s expert support. Enhance website speed, security, and performance with zero downtime.",
  // keywords: [
  //   "Amazon Cloud Hosting",
  //   "Best Cloud Hosting",
  //   "Secure Web Hosting",
  //   "Fast Website Hosting",
  //   "Cloud Data Solutions",
  //   "Amazon CDN",
  // ],
  openGraph: {
    title:
      "Migrate to Akamai with CloudMinister | Fast & Secure Website Migration",
    description:
      "Seamlessly migrate to Akamai with CloudMinister’s expert support. Enhance website speed, security, and performance with zero downtime.",
    url: "https://cloudminister.com/migrate-to-akamai/",
    siteName: "cloudminister",
    // images: [
    //   {
    //     url: "https://yourwebsite.com/images/akamicloud-banner.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Akamai Cloud Hosting Banner",
    //   },
    // ],
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Akamai Cloud Hosting - Secure & Fast Web Hosting",
  //   description:
  //     "Experience secure, fast, and reliable cloud hosting with Akamai. Try it risk-free for 7 days!",
  //   images: ["https://yourwebsite.com/images/akamicloud-banner.jpg"],
  // },
  robots: "index, follow",
};

const MigrateAkamai = () => {
  return (
    <>
      <MigrateAkamaiHero />
      <WhyChoose />
      <ItWorks />
      <FeatureCard />
      <EndSale />
      <DataCenterCustomerBrands />
    </>
  );
};

export default MigrateAkamai;
