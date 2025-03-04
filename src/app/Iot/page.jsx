import React from "react";
import IotHero from "@/components/IoT/IotHero";
import IotNoIncreased from "@/components/IoT/IotNoIncreased";
import IotFeature from "@/components/IoT/IotFeature";
import IotStory from "@/components/IoT/IotStory";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands";
import WhyBuy from "@/components/IoT/WhyBuy";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import Iotfaq from "@/components/IoT/Iotfaq";
import FooterCta from "@/components/common/cta/FooterCtatwo.jsx";
import DataCenterFeedbackWrapper from "@/components/dataCenter/DataCenterFeedbackWrapper";

export const metadata = {
  title:
    "Secure IoT Development Services |Power up IoT with Expert Guidance from CloudMinister",
  description:
    "CloudMinister provides IoT consulting to help businesses design, deploy, and scale IoT solutions. Safeguard connected devices, data, and networks with end-to-end security solutions.",
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
      "Secure IoT Development Services |Power up IoT with Expert Guidance from CloudMinister",
    description:
      "CloudMinister provides IoT consulting to help businesses design, deploy, and scale IoT solutions. Safeguard connected devices, data, and networks with end-to-end security solutions.",
    url: "https://cloudminister.com/Iot/",
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

function Iot() {
  return (
    <>
      <IotHero />
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

      <IotNoIncreased />
      <IotFeature />
      <IotStory />
      <WhyBuy />
      <DataHostingDatacenterSupport />
      <DataCenterFeedbackWrapper />
      <Iotfaq />
      <FooterCta
        firsttital={"Book A Free Consultation Today."}
        path={"/contact/"}
        text={"Contact now"}
      />
    </>
  );
}

export default Iot;
