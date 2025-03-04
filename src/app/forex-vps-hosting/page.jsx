import React from "react";
import Forexfaq from "@/components/ForxsVps/Forexfaq";
import FooterCta from "@/components/common/cta/FooterCta";
import DataCenterFeedbackWrapper from "@/components/dataCenter/DataCenterFeedbackWrapper";
import ForxsVpsHostingHero from "@/components/ForxsVps/ForxsVpsHostingHero";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands";
import ForexHostingPrice from "@/components/ForxsVps/ForexHostingPrice";
import ForexVpsHostingSignup from "@/components/ForxsVps/ForexVpsHostingSignup";
import ForexHostingFeature from "@/components/ForxsVps/ForexHostingFeature";
import HostingOptions from "@/components/ForxsVps/HostingOptions";
import WhyBuy from "@/components/ForxsVps/WhyBuy";
import ForexVpsFeature from "@/components/ForxsVps/ForexVpsFeature";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";

export const metadata = {
  title: "Forex VPS Hosting for Traders | Low Latency & High Performance",
  description:
    "Take your Forex trading to the next level with our VPS hosting. Benefit from ultra-low latency, robust security, high-speed connectivity, and 24/7 technical support.",
  // keywords: [
  //   "Akamai Cloud Hosting",
  //   "Best Cloud Hosting",
  //   "Secure Web Hosting",
  //   "Fast Website Hosting",
  //   "Cloud Data Solutions",
  //   "Akamai CDN",
  // ],
  openGraph: {
    title: "Forex VPS Hosting for Traders | Low Latency & High Performance",
    description:
      "Take your Forex trading to the next level with our VPS hosting. Benefit from ultra-low latency, robust security, high-speed connectivity, and 24/7 technical support.",
    url: "https://cloudminister.com/forex-vps-hosting/",
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

function ForexVps() {
  return (
    <>
      <ForxsVpsHostingHero />
      <section className="domain-container position-relative z-1 overflow-hidden mb-10">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-xl-12">
              <div className="card rounded-4">
                <DataCenterBrands />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ForexHostingPrice />
      <ForexVpsHostingSignup />
      <ForexHostingFeature />
      <HostingOptions />
      <WhyBuy />
      <ForexVpsFeature />
      <DataHostingDatacenterSupport />
      <DataCenterFeedbackWrapper />
      <Forexfaq />
      <FooterCta
        firsttital={"Experience the Power Forex VPS Management."}
        sectital={"7 Days of Risk-Free Trial "}
      />
    </>
  );
}

export default ForexVps;
