import React from "react";
import NodeJSfaq from "@/components/Nodejs/NodeJSfaq";
import FooterCta from "@/components/common/cta/FooterCta";
import DataCenterFeedbackWrapper from "@/components/dataCenter/DataCenterFeedbackWrapper";
import NodejsHostingHero from "@/components/Nodejs/NodejsHostingHero";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands";
import NodejsHostingPrice from "@/components/Nodejs/NodejsHostingPrice";
import NodejsVpsHostingSignup from "@/components/Nodejs/NodejsVpsHostingSignup";
import WhyBuy from "@/components/Nodejs/WhyBuy";
import NodejsVpsFeature from "@/components/Nodejs/NodejsVpsFeature";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";

export const metadata = {
  title: "Host Node.js Applications with Nodejs VPS Hosting | CloudMinister",
  description:
    "Get Scalable Node.js VPS Hosting for Node.js applications with CloudMinister. Ensure Latest Node.js version, fast loading speeds, secure environments, and 24/7 technical support.",
  // keywords: [
  //   "Akamai Cloud Hosting",
  //   "Best Cloud Hosting",
  //   "Secure Web Hosting",
  //   "Fast Website Hosting",
  //   "Cloud Data Solutions",
  //   "Akamai CDN",
  // ],
  openGraph: {
    title: "Host Node.js Applications with Nodejs VPS Hosting | CloudMinister",
    description:
      "Get Scalable Node.js VPS Hosting for Node.js applications with CloudMinister. Ensure Latest Node.js version, fast loading speeds, secure environments, and 24/7 technical support.",
    url: "https://cloudminister.com/nodejs-hosting/",
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

function Nodejs() {
  return (
    <>
      <NodejsHostingHero />

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

      <NodejsHostingPrice />
      <NodejsVpsHostingSignup />
      <NodejsVpsFeature />
      <WhyBuy />
      <DataHostingDatacenterSupport />
      <DataCenterFeedbackWrapper />
      <NodeJSfaq />
      <FooterCta
        firsttital={"Experience the Power NodeJS Hosting Management."}
        sectital={"7 Days of Risk-Free Trial "}
      />
    </>
  );
}

export default Nodejs;
