import FooterCta from "@/components/linuxresellerHosting/FooterCta";
import DataCenterCustomerBrands from "@/components/dataCenter/DataCenterCustomerBrands";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands";
import DataCenterFeedback from "@/components/dataCenter/DataCenterFeedback";
import SharedHostingFeature from "@/components/linuxresellerHosting/SharedHostingFeature";
import SharedHostingAdvanceFeature from "@/components/linuxresellerHosting/SharedHostingAdvanceFeature";
import SharedHostingHero from "@/components/linuxresellerHosting/SharedHostingHero";
import SharedHostingPrice from "@/components/linuxresellerHosting/SharedHostingPrice";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import LinuxResellerHostingFaq from "@/components/linuxresellerHosting/LinuxResellerHostingFaq";
import LinuxWhyBuyDomainHostingard from "@/components/linuxresellerHosting/LinuxWhyBuyDomainHostingard";
import LinuxOptions from "@/components/common/Panel/LinuxOptions";

export const metadata = {
  title:
    "Managed Linux Reseller Hosting for Seamless Web Hosting Business | CloudMinister",
  description:
    "Looking for the best managed Linux reseller hosting? Get high-speed servers, advanced security, and 24/7 support for your reseller business",
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
      "Managed Linux Reseller Hosting for Seamless Web Hosting Business | CloudMinister",
    description:
      "Looking for the best managed Linux reseller hosting? Get high-speed servers, advanced security, and 24/7 support for your reseller business",
    url: "https://cloudminister.com/linux-reseller-hosting/",
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

const ResellerHosting = () => {
  return (
    <>
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
        <SharedHostingAdvanceFeature />
        <DataCenterCustomerBrands />
        <LinuxWhyBuyDomainHostingard />
        <DataHostingDatacenterSupport />
        <LinuxResellerHostingFaq />
        <DataCenterFeedback />
        <FooterCta />
      </>
    </>
  );
};

export default ResellerHosting;
