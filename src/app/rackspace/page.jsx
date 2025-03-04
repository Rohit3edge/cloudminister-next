import FooterCta from "@/components/common/cta/FooterCta";
import WhyBuyDomainHostingard from "@/components/RackSpace/WhyBuy";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands";
import RackSpacefaq from "@/components/RackSpace/RackSpacefaq";
import DataCenterFeedbackWrapper from "@/components/dataCenter/DataCenterFeedbackWrapper";
import RackSpaceHostingFeature from "@/components/RackSpace/RackSpaceHostingFeature";
import RackSpaceHostingAdvanceFeature from "@/components/RackSpace/RackSpaceHostingAdvanceFeature";
import RackSpaceHero from "@/components/RackSpace/RackSpaceHero";
import RackSpaceHostingPrice from "@/components/RackSpace/RackSpaceHostingPrice";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import WhyChoose from "@/components/RackSpace/WhyChoose";
import RackspaceNoIncreased from "@/components/RackSpace/RackspaceNoIncreased";
import HostingOptions from "@/components/CpanelHostingNew/HostingOptions";
export const metadata =  {
  title:
    "Professional Rackspace Server Management Services | CloudMinister",
  description:
    "Simplify your Rackspace server performance with expert management by CloudMinister. Enjoy uptime assurance, regular updates, and 24/7 support.",
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
      "Professional Rackspace Server Management Services | CloudMinister",
    description:
      "Simplify your Rackspace server performance with expert management by CloudMinister. Enjoy uptime assurance, regular updates, and 24/7 support.",
    url: "https://cloudminister.com/rackspace/",
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
}
const Rackspace = () => {

  return (
    <>
      <RackSpaceHero />
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
      <RackspaceNoIncreased />
      <RackSpaceHostingPrice />

      <RackSpaceHostingFeature />

      <DataHostingDatacenterSupport />

      <RackSpaceHostingAdvanceFeature />
      <WhyBuyDomainHostingard />
      <WhyChoose />

      <HostingOptions />
      <DataCenterFeedbackWrapper />
      <RackSpacefaq />
      <FooterCta
        firsttital={"Experience the Power of Rackspace Server Management."}
        sectital={"7 Days of Risk-Free Trial "}
      />
    </>
  );
};

export default Rackspace;
