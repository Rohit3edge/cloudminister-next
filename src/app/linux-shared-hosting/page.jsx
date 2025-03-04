import FooterCta from "@/components/sharedHosting/FooterCta";
import WhyBuyDomainHostingard from "@/components/common/domain/WhyBuyDomainHostingard";
import DataCenterCustomerBrands from "@/components/dataCenter/DataCenterCustomerBrands";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands";
import SharedHostingfaq from "@/components/common/faq/SharedHostingfaq";
import DataCenterFeedbackWrapper from "@/components/dataCenter/DataCenterFeedbackWrapper";
import SharedHostingFeature from "@/components/sharedHosting/SharedHostingFeature";
import SharedHostingAdvanceFeature from "@/components/sharedHosting/SharedHostingAdvanceFeature";
import SharedHostingHero from "@/components/sharedHosting/SharedHostingHero";
import SharedHostingPrice from "@/components/sharedHosting/SharedHostingPrice";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import LinuxOptions from "@/components/common/Panel/LinuxOptions";

export const metadata = {
  title:
    "Affordable Linux Shared Hosting Solutions for Small and Medium Websites | CloudMinister",
  description:
    "Choose affordable Linux shared hosting in India for fast, secure, and cost-effective web hosting. Ideal for blogs, small businesses, and startups.",
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
      "Affordable Linux Shared Hosting Solutions for Small and Medium Websites | CloudMinister",
    description:
      "Choose affordable Linux shared hosting in India for fast, secure, and cost-effective web hosting. Ideal for blogs, small businesses, and startups.",
    url: "https://cloudminister.com/linux-shared-hosting/",
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

const SharedHosting = () => {
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
      <SharedHostingPrice/>
      <SharedHostingFeature />
      <LinuxOptions />
      <SharedHostingAdvanceFeature />
      <DataCenterCustomerBrands />
      <WhyBuyDomainHostingard />
      <DataHostingDatacenterSupport />
      <SharedHostingfaq />
      <DataCenterFeedbackWrapper />
      <FooterCta />
    </>
  );
};

export default SharedHosting;
