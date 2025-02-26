import React from "react";
import ReactJSfaq from "@/components/Reactjs/ReactJSfaq";
import FooterCta from "@/components/common/cta/FooterCta";
import DataCenterFeedback from "@/components/dataCenter/DataCenterFeedback";
import ReactjsHostingHero from "@/components/Reactjs/ReactjsHostingHero";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands";
import ReactjsHostingPrice from "@/components/Reactjs/ReactjsHostingPrice";
import ReactjsVpsHostingSignup from "@/components/Reactjs/ReactjsVpsHostingSignup";
import WhyBuy from "@/components/Reactjs/WhyBuy";
import ReactjsVpsFeature from "@/components/Reactjs/ReactjsVpsFeature";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";

export const metadata = {
  title:
    "Reliable React.js Server Hosting in India | Fast & Reliable Solutions by CloudMinister",
  description:
    "Deploy and scale React.js apps effortlessly with CloudMinister’s React.js hosting. Enjoy high-speed hosting, enhanced security, and round-the-clock support.",
  // keywords: [
  //   "Akamai Cloud Hosting",
  //   "Best Cloud Hosting",
  //   "Secure Web Hosting",
  //   "Fast Website Hosting",
  //   "Cloud Data Solutions",
  //   "Akamai CDN",
  // ],
  openGraph: {
    title:
      "Reliable React.js Server Hosting in India | Fast & Reliable Solutions by CloudMinister",
    description:
      "Deploy and scale React.js apps effortlessly with CloudMinister’s React.js hosting. Enjoy high-speed hosting, enhanced security, and round-the-clock support.",
    url: "https://cloudminister.com/reactjs-hosting/",
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

function Reactjs() {
  return (
    <>
      <ReactjsHostingHero />
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
      <ReactjsHostingPrice />
      <ReactjsVpsHostingSignup />
      <ReactjsVpsFeature />
      <WhyBuy />
      <DataHostingDatacenterSupport />
      <DataCenterFeedback />
      <ReactJSfaq />
      <FooterCta
        firsttital={"Experience the Power ReactJS Hosting Management."}
        sectital={"7 Days of Risk-Free Trial "}
      />
    </>
  );
}

export default Reactjs;
