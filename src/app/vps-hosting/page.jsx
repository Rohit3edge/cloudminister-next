import VpsHostingFaqTwo from "@/components/MainVpsHosting/VpsHostingFaqTwo";
import VpsHostingFeatures from "@/components/MainVpsHosting/VpsHostingFeature";
import VpsHostingHero from "@/components/MainVpsHosting/VpsHostingHero";
import IndiaWeb from "@/components/MainVpsHosting/IndiaWeb";
import VpsHostingPlansOne from "@/components/MainVpsHosting/VpsHostingPlansOne";
import HostingOptions from "@/components/MainVpsHosting/HostingOptions";
import VpsHostingWhyChoose from "@/components/MainVpsHosting/VpsHostingWhyChoose";
import FooterCta from "@/components/MainVpsHosting/FooterCta";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands";
import DataCenterFeedback from "@/components/dataCenter/DataCenterFeedback";
import DataHostingDatacenterSupport from "../../components/dataCenter/CloudHostingDatacenterLocation";
import DataCenterCustomerBrands from "@/components/dataCenter/DataCenterCustomerBrands";
import AdvanceFeature from "@/components/MainVpsHosting/AdvanceFeature";
import { testingpricingData, windowsvpspricingData } from "../../utils/data";

export const metadata = {
  title:
    "VPS Hosting | Buy Affordable VPS Server with full root Access in India | CloudMinister",
  description:
    "Affordable VPS hosting in India. CloudMinister offers secure, scalable, and high-performance Virtual Private Servers (VPS) solutions for your website. Compare VPS plans and choose the best fit.",
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
      "VPS Hosting | Buy Affordable VPS Server with full root Access in India | CloudMinister",
    description:
      "Affordable VPS hosting in India. CloudMinister offers secure, scalable, and high-performance Virtual Private Servers (VPS) solutions for your website. Compare VPS plans and choose the best fit.",
    url: "https://cloudminister.com/vps-hosting/",
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

const MainVpsHosting = () => {
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
        title="Affordable VPS Hosting Plans for Your Business | High Performance Guaranteed"
        price={true}
        linuxPricingData={testingpricingData}
        windowsPricingData={windowsvpspricingData}
        subtitle=""
      />
      <VpsHostingWhyChoose />
      <HostingOptions />
      <VpsHostingFeatures />
      <DataHostingDatacenterSupport />
      <IndiaWeb />
      {/* <ControlPanel/> */}
      <AdvanceFeature />
      <DataCenterFeedback />
      <DataCenterCustomerBrands />
      <VpsHostingFaqTwo />
      <FooterCta />
    </>
  );
};

export default MainVpsHosting;
