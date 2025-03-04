import VpsHostingFaqTwo from "@/components/WindowsvpsHosting/VpsHostingFaqTwo";
import VpsHostingFeatures from "@/components/WindowsvpsHosting/VpsHostingFeature";
import VpsHostingHero from "@/components/WindowsvpsHosting/VpsHostingHero";
import VpsHostingPlansOne from "@/components/WindowsvpsHosting/VpsHostingPlansOne";
import ControlPanel from "@/components/WindowsvpsHosting/ControlPanel";
import VpsHostingTechPartner from "@/components/WindowsvpsHosting/VpsHostingTechPartner";
import VpsHostingWhyChoose from "@/components/WindowsvpsHosting/VpsHostingWhyChoose";
import FooterCta from "@/components/common/cta/FooterCta";
import DataCenterFeedbackWrapper from "@/components/dataCenter/DataCenterFeedbackWrapper";
import DataCenterCustomerBrands from "@/components/dataCenter/DataCenterCustomerBrands";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands";
import DataHostingDatacenterSupport from "@/components/WindowsvpsHosting//CloudHostingDatacenterLocation";
import AdvanceFeature from "@/components/WindowsvpsHosting/AdvanceFeature";
import { windowsvpspricingData } from "../../utils/data";
import WindowsOptions from "@/components/common/Panel/WindowsOptions";

export const metadata = {
  title:
    "Fully Managed Windows VPS Server Hosting | Reliable and Affordable Solutions | CloudMinister",
  description:
    "Discover reliable Windows VPS servers with 99.9% uptime, SSD storage, and affordable pricing. Perfect for developers and businesses. Get started today!",
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
      "Fully Managed Windows VPS Server Hosting | Reliable and Affordable Solutions | CloudMinister",
    description:
      "Discover reliable Windows VPS servers with 99.9% uptime, SSD storage, and affordable pricing. Perfect for developers and businesses. Get started today!",
    url: "https://cloudminister.com/windows-vps-server/",
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

const WindowVpsHosting = () => {
  return (
    <>
      <VpsHostingHero />
      <section className=" position-relative z-1 overflow-hidden mb-8 extra-domain-container">
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
      <VpsHostingPlansOne
        title="Affordable and Reliable Windows VPS Hosting Plans in India"
        price={true}
        pricingData={windowsvpspricingData}
        subtitle="CloudMinister offers reliable and affordable Windows VPS hosting in India. Enjoy highly reliable performance, flexibility, and security with our Windows VPS servers. Choose your plans with trusted partner for VPS Windows solutions!"
      />

      <VpsHostingWhyChoose />
      {/* <VpsHostingTechPartner/> */}
      <VpsHostingFeatures />
      <DataHostingDatacenterSupport />
      <WindowsOptions />
      <ControlPanel />
      <AdvanceFeature />
      <DataCenterFeedbackWrapper />
      <DataCenterCustomerBrands />
      <VpsHostingFaqTwo />
      <FooterCta
        firsttital={"Experience the Power of VPS Server Hosting"}
        sectital={"7 Days of Risk-Free Trial"}
      />
    </>
  );
};

export default WindowVpsHosting;
