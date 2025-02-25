import FooterCta from "@/components/common/cta/FooterCta";
import WhyBuyDomainHostingard from "@/components/MainDedicated/WhyBuyDomainHostingard";
import BrandCardsSection from "@/components/MainDedicated/BrandCardsSection";
import DataCenterCustomerBrands from "@/components/dataCenter/DataCenterCustomerBrands";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands";
import DedicatedFaq from "@/components/MainDedicated/DedicatedFaq";
import DataCenterFeedback from "@/components/dataCenter/DataCenterFeedback";
import HostingOptions from "@/components/MainDedicated/HostingOptions";
import SharedHostingFeature from "@/components/MainDedicated/SharedHostingFeature";
import SharedHostingHero from "@/components/MainDedicated/SharedHostingHero";
import EnterpriseServer from "@/components/MainDedicated/EnterpriseServer";
import SharedHostingPrice from "@/components/MainDedicated/SharedHostingPrice";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import IndiaWeb from "@/components/MainVpsHosting/IndiaWeb";

export const metadata = {
  title: "High-Performance Dedicated Server Hosting in India | CloudMinister",
  description:
    "CloudMinister delivers enterprise-level dedicated server hosting with top-tier performance, root access, flexible configurations, 24/7 support, and robust security.",
  // keywords: [
  //   "Amazon Cloud Hosting",
  //   "Best Cloud Hosting",
  //   "Secure Web Hosting",
  //   "Fast Website Hosting",
  //   "Cloud Data Solutions",
  //   "Amazon CDN",
  // ],
  openGraph: {
    title: "High-Performance Dedicated Server Hosting in India | CloudMinister",
    description:
      "CloudMinister delivers enterprise-level dedicated server hosting with top-tier performance, root access, flexible configurations, 24/7 support, and robust security.",
    url: "https://cloudminister.com/dedicated-server/",
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

const MainDedicated = () => {
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
      <WhyBuyDomainHostingard />
      <HostingOptions />
      <SharedHostingFeature />
      <DataHostingDatacenterSupport />
      <IndiaWeb />
      <EnterpriseServer />
      <BrandCardsSection />
      <DataCenterFeedback />
      <DataCenterCustomerBrands />
      <DedicatedFaq />
      <FooterCta
        firsttital={"Experience the Power of Dedicated Servers."}
        sectital={"7 Days of Risk-Free Trial"}
      />
    </>
  );
};

export default MainDedicated;
