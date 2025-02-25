import VpsHostingFaqTwo from "@/components/MainGpuServer/VpsHostingFaqTwo";
import VpsHostingFeatures from "@/components/MainGpuServer/VpsHostingFeature";
import OperatingSystemsSection from "@/components/MainGpuServer/CloudHostOperaingSystems";
import VpsHostingHero from "@/components/MainGpuServer/VpsHostingHero";
import VpsHostingPlansOne from "@/components/MainGpuServer/VpsHostingPlansOne";
import HostingOptions from "@/components/MainGpuServer/HostingOptions";
import VpsHostingWhyChoose from "@/components/MainGpuServer/VpsHostingWhyChoose";
import FooterCta from "@/components/common/cta/FooterCta";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands";
import DataCenterFeedback from "@/components/dataCenter/DataCenterFeedback";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import DataCenterCustomerBrands from "@/components/dataCenter/DataCenterCustomerBrands";
import IndiaWeb from "@/components/MainVpsHosting/IndiaWeb";
import { windowsgpupricingData, gpupricingData } from "../../utils/data";

export const metadata = {
  title:
    "High-Performance GPU Servers in India for AI, ML, and Gaming | Cloud Minister",
  description:
    "Get powerful GPU servers with unmatched performance for AI, ML, gaming, and video rendering. CloudMinister’s GPU Server features NVIDIA GPUs, scalable resources, and 24/7 expert support.",
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
      "High-Performance GPU Servers in India for AI, ML, and Gaming | Cloud Minister",
    description:
      "Get powerful GPU servers with unmatched performance for AI, ML, gaming, and video rendering. CloudMinister’s GPU Server features NVIDIA GPUs, scalable resources, and 24/7 expert support.",
    url: "https://cloudminister.com/gpu-server/",
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

const MainGpuServer = () => {
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
        title="CloudMinister GPU Hosting: Power That Delivers"
        price={true}
        linuxPricingData={gpupricingData}
        windowsPricingData={windowsgpupricingData}
        taboption={[
          [
            "Linux A30",
            "Linux L4",
            "Linux V100",
            "GPU A100",
            "GPU L40s",
            "Linux A40",
            "Linux T4",
          ],
          [
            "Windows A100",
            "Windows L40S",
            "Windows L4",
            "Windows A30",
            "Windows A40",
            "Windows V100",
          ],
        ]}
        subtitle="Optimize workflows with reliable GPU servers that offer top-tier speed, security, and performance.
Drive your expansion with unparalleled GPU server performance, designed to manage the most taxing workloads effortlessly
"
      />
      <VpsHostingWhyChoose />
      <HostingOptions />
      <VpsHostingFeatures />
      <DataHostingDatacenterSupport />
      <IndiaWeb />
      <OperatingSystemsSection />
      <DataCenterFeedback />
      <DataCenterCustomerBrands />
      <VpsHostingFaqTwo />
      <FooterCta
        firsttital={"Experience the Power of GPU Servers."}
        sectital={"7 Days of Risk-Free Trial"}
      />
    </>
  );
};

export default MainGpuServer;
