import VpsHostingFaqTwo from "@/components/WindowsGpuServer/VpsHostingFaqTwo";
import VpsHostingFeatures from "@/components/WindowsGpuServer/VpsHostingFeature";
import OperatingSystemsSection from "@/components/WindowsGpuServer/CloudHostOperaingSystems";
import VpsHostingHero from "@/components/WindowsGpuServer/VpsHostingHero";
import WindowsVpsHostingPlansOne from "@/components/WindowsGpuServer/WindowsVpsHostingPlansOne";
import VpsHostingTechPartner from "@/components/WindowsGpuServer/VpsHostingTechPartner";
import VpsHostingWhyChoose from "@/components/WindowsGpuServer/VpsHostingWhyChoose";
import FooterCta from "@/components/common/cta/FooterCta";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands";
import DataCenterFeedbackWrapper from "@/components/dataCenter/DataCenterFeedbackWrapper";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import DataCenterCustomerBrands from "@/components/dataCenter/DataCenterCustomerBrands";
import { windowsgpupricingData } from "../../utils/data";
import WindowsOptions from "@/components/common/Panel/WindowsOptions";

export const metadata = {
  title:
    "High-Performance Windows GPU Servers for AI, ML & Gaming | CloudMinister",
  description:
    "Unlock advanced computing power with CloudMinister's Windows GPU servers, ideal for AI, ML, gaming, and 3D rendering. Enjoy scalable performance and 24/7 expert support.",
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
      "High-Performance Windows GPU Servers for AI, ML & Gaming | CloudMinister",
    description:
      "Unlock advanced computing power with CloudMinister's Windows GPU servers, ideal for AI, ML, gaming, and 3D rendering. Enjoy scalable performance and 24/7 expert support.",
    url: "https://cloudminister.com/windows-gpu-server/",
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

const WindowsGpuServer = () => {
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
      <WindowsVpsHostingPlansOne
        title="Boost AI & ML Productivity with Powerful Windows GPU Servers Plans"
        price={true}
        pricingData={windowsgpupricingData}
        subtitle="Unlock our Windows Dedicated GPU Server Hosting to achieve optimal performance. Savor devoted resources, strong security, outstanding speed, and unparalleled uptime. Our hosting, which is customized to your requirements according to the business, guarantees smooth scalability and effectiveness for the expansion of your company in the industry."
      />

      <VpsHostingFeatures />
      <WindowsOptions />
      <VpsHostingWhyChoose />
      <OperatingSystemsSection />
      <DataHostingDatacenterSupport />
      <VpsHostingTechPartner />
      <DataCenterCustomerBrands />
      {/* <AdvanceFeature/> */}
      <DataCenterFeedbackWrapper />
      <VpsHostingFaqTwo />
      <FooterCta
        firsttital={"Experience the Power of Windows GPU Server."}
        sectital={"7 Days of Risk-Free Trial"}
      />
    </>
  );
};

export default WindowsGpuServer;
