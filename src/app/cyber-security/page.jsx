import React from "react";
import CyberHero from "@/components/CyberSecurity/CyberHero";
import CyberNoIncreased from "@/components/CyberSecurity/CyberNoIncreased";
import CyberFeature from "@/components/CyberSecurity/CyberFeature";
import CyberStory from "@/components/CyberSecurity/CyberStory";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands";
import WhyBuy from "@/components/CyberSecurity/WhyBuy";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import Newfaq from "@/components/CyberSecurity/faq";
import FooterCta from "@/components/common/cta/FooterCtatwo.jsx";
import DataCenterFeedbackWrapper from "@/components/dataCenter/DataCenterFeedbackWrapper";

export const metadata = {
  title:
    "Enterprise-Grade Cybersecurity Solutions Provider | Protect Your Business with CloudMinister",
  description:
    "Leverage the power of AI to detect, prevent, and mitigate cyber threats. CloudMinister delivers cutting-edge cybersecurity solutions for modern businesses.",
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
      "Enterprise-Grade Cybersecurity Solutions Provider | Protect Your Business with CloudMinister",
    description:
      "Leverage the power of AI to detect, prevent, and mitigate cyber threats. CloudMinister delivers cutting-edge cybersecurity solutions for modern businesses.",
    url: "https://cloudminister.com/cyber-security/",
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

function CyberSecurity() {
  return (
    <>
      <CyberHero />

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

      <CyberNoIncreased />
      <CyberFeature />
      <CyberStory />
      <WhyBuy />
      <DataHostingDatacenterSupport />
      <DataCenterFeedbackWrapper />
      <Newfaq />
      <FooterCta
        firsttital={"Book A Free Consultation Today."}
        path={"/contact/"}
        text={"Contact now"}
      />
    </>
  );
}

export default CyberSecurity;
