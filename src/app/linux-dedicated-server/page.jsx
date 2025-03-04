import FooterCta from "@/components/common/cta/FooterCta";
import WhyBuyDomainHostingard from "@/components/dedicatedlinuxhosting/WhyBuyDomainHostingard";
import BrandCardsSection from "@/components/dedicatedlinuxhosting/BrandCardsSection";
import DataCenterCustomerBrands from "@/components/dataCenter/DataCenterCustomerBrands";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands";
import LinuxDedicatedfaq from "@/components/common/faq/LinuxDedicatedfaq";
import DataCenterFeedbackWrapper from "@/components/dataCenter/DataCenterFeedbackWrapper";
import SharedHostingFeature from "@/components/dedicatedlinuxhosting/SharedHostingFeature";
import SharedHostingHero from "@/components/dedicatedlinuxhosting/SharedHostingHero";
import EnterpriseServer from "@/components/dedicatedlinuxhosting/EnterpriseServer";
import SharedHostingPrice from "@/components/dedicatedlinuxhosting/SharedHostingPrice";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import LinuxOptions from "@/components/common/Panel/LinuxOptions";

export const metadata = {
  title:
    "Linux Dedicated Server Hosting in India with Full Root Access |  CloudMinister",
  description:
    "Get powerful and reliable Linux Dedicated Servers from CloudMinister with full root access, high-speed performance, and 24/7 expert support. Ideal for businesses needing scalability and security.",
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
      "Linux Dedicated Server Hosting in India with Full Root Access |  CloudMinister",
    description:
      "Get powerful and reliable Linux Dedicated Servers from CloudMinister with full root access, high-speed performance, and 24/7 expert support. Ideal for businesses needing scalability and security.",
    url: "https://cloudminister.com/linux-dedicated-server/",
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

const LinuxDedicated = () => {
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
      <LinuxOptions />
      <WhyBuyDomainHostingard />
      <DataCenterCustomerBrands />
      <BrandCardsSection />
      <EnterpriseServer />
      <DataHostingDatacenterSupport />
      <LinuxDedicatedfaq />
      <DataCenterFeedbackWrapper />
      <FooterCta
        firsttital={"Experience the Power of Linux Dedicated Server."}
        sectital={"7 Days of Risk-Free Trial"}
      />
    </>
  );
};

export default LinuxDedicated;
