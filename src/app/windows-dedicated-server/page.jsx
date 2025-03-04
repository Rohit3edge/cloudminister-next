import FooterCta from "@/components/common/cta/FooterCta";
import WhyBuyDomainHostingard from "@/components/dedicatedwindowshosting/WhyBuyDomainHostingard";
import DataCenterCustomerBrands from "@/components/dataCenter/DataCenterCustomerBrands";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands";
import LinuxDedicatedfaq from "@/components/dedicatedwindowshosting/LinuxDedicatedfaq";
import DataCenterFeedbackWrapper from "@/components/dataCenter/DataCenterFeedbackWrapper";
import SharedHostingFeature from "@/components/dedicatedwindowshosting/SharedHostingFeature";
import SharedHostingHero from "@/components/dedicatedwindowshosting/SharedHostingHero";
import SharedHostingPrice from "@/components/dedicatedwindowshosting/SharedHostingPrice";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import BrandCardsSection from "@/components/dedicatedwindowshosting/BrandCardsSection";
import EnterpriseServer from "@/components/dedicatedwindowshosting/EnterpriseServer";
import WindowsOptions from "@/components/common/Panel/WindowsOptions";

export const metadata = {
  title:
    "Fast, Secure, and Reliable Windows Dedicated Server Hosting | CloudMinister",
  description:
    "Get secure and scalable Windows Dedicated Hosting at CloudMinister. Powerful servers with 24/7 support, guaranteed uptime, and affordable pricing plans.",
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
      "Fast, Secure, and Reliable Windows Dedicated Server Hosting | CloudMinister",
    description:
      "Get secure and scalable Windows Dedicated Hosting at CloudMinister. Powerful servers with 24/7 support, guaranteed uptime, and affordable pricing plans.",
    url: "https://cloudminister.com/windows-dedicated-server/",
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

const Dedicatedwindowshosting = () => {
  return (
    <>
      <SharedHostingHero />
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

      <SharedHostingPrice />

      <SharedHostingFeature />

      <WindowsOptions />
      <WhyBuyDomainHostingard />
      <DataCenterCustomerBrands />
      <BrandCardsSection />
      <EnterpriseServer />
      <DataHostingDatacenterSupport />
      <LinuxDedicatedfaq />
      <DataCenterFeedbackWrapper />
      <FooterCta
        firsttital={"Experience the Power of Windows Dedicated Server."}
        sectital={"7 Days of Risk-Free Trial"}
      />
    </>
  );
};

export default Dedicatedwindowshosting;
