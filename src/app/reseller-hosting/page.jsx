import FooterCta from "@/components/common/cta/FooterCta";
import DataCenterCustomerBrands from "@/components/dataCenter/DataCenterCustomerBrands";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands";
import DataCenterFeedbackWrapper from "@/components/dataCenter/DataCenterFeedbackWrapper";
import SharedHostingFeature from "@/components/MainResellerHosting/SharedHostingFeature";
import SharedHostingHero from "@/components/MainResellerHosting/SharedHostingHero";
import IndiaWeb from "@/components/MainVpsHosting/IndiaWeb";
import HostingOptions from "@/components/MainResellerHosting/HostingOptions";
import SharedHostingPrice from "@/components/MainResellerHosting/SharedHostingPrice";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import ResellerHostingFaq from "@/components/MainResellerHosting/LinuxResellerHostingFaq";
import LinuxWhyBuyDomainHostingard from "@/components/MainResellerHosting/LinuxWhyBuyDomainHostingard";

export const metadata = {
  title:
    "Affordable Reseller Hosting Plans in India with 99.99% Uptime | CloudMinister",
  description:
    "Start your hosting business affordably with Cloud Minister. Enjoy free billing software, unlimited email accounts, and competitive pricing.",
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
      "Affordable Reseller Hosting Plans in India with 99.99% Uptime | CloudMinister",
    description:
      "Start your hosting business affordably with Cloud Minister. Enjoy free billing software, unlimited email accounts, and competitive pricing.",
    url: "https://cloudminister.com/reseller-hosting/",
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

const MainResellerHosting = () => {
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
      <LinuxWhyBuyDomainHostingard />
      <HostingOptions />
      <SharedHostingFeature />
      <DataHostingDatacenterSupport />
      <IndiaWeb />
      <DataCenterFeedbackWrapper />
      <DataCenterCustomerBrands />
      <ResellerHostingFaq />
      <FooterCta
        firsttital={"Experience the Power of Reseller Hosting."}
        sectital={"7 Days of Risk-Free Trial"}
      />
    </>
  );
};

export default MainResellerHosting;
