"use client";
import FooterCta from "@/components/common/cta/FooterCta";
import WhyBuyDomainHostingard from "@/components/MainSharedHosting/WhyBuyDomainHostingard";
import DataCenterCustomerBrands from "@/components/dataCenter/DataCenterCustomerBrands";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands";
import SharedHostingfaq from "@/components/MainSharedHosting/SharedHostingfaq";
import DataCenterFeedback from "@/components/dataCenter/DataCenterFeedback";
import IndiaWeb from "@/components/MainVpsHosting/IndiaWeb";
import HostingOptions from "@/components/MainSharedHosting/HostingOptions";
import SharedHostingAdvanceFeature from "@/components/MainSharedHosting/SharedHostingAdvanceFeature";
import SharedHostingHero from "@/components/MainSharedHosting/SharedHostingHero";
import SharedHostingPrice from "@/components/MainSharedHosting/SharedHostingPrice";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";

export const metadata = {
  title:
    "Affordable Shared Hosting Plans in India with SSD Storage | CloudMinister",
  description:
    "Get reliable and affordable shared hosting with CloudMinister. Enjoy free SSL, unlimited bandwidth, 99.9% uptime, and 24/7 expert support for your website.",
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
      "Affordable Shared Hosting Plans in India with SSD Storage | CloudMinister",
    description:
      "Get reliable and affordable shared hosting with CloudMinister. Enjoy free SSL, unlimited bandwidth, 99.9% uptime, and 24/7 expert support for your website.",
    url: "https://cloudminister.com/shared-hosting/",
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

const MainSharedHosting = () => {
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
      <SharedHostingAdvanceFeature />
      <DataHostingDatacenterSupport />
      <IndiaWeb />
      <DataCenterFeedback />
      <DataCenterCustomerBrands />
      <SharedHostingfaq />
      <FooterCta
        firsttital={"Experience the Power of Shared Hosting."}
        sectital={"7 Days of Risk-Free Trial"}
      />
    </>
  );
};

export default MainSharedHosting;
