import FooterCta from '@/components/common/cta/FooterCta';
import WhyBuyDomainHostingard from '@/components/VirtualizorSupport/WhyBuy';
import DataCenterBrands from '@/components/dataCenter/DataCenterBrands';
import VirtualizorSupportHostingfaq from '@/components/VirtualizorSupport/VirtualizorSupportHostingfaq';
import DataCenterFeedbackWrapper from '@/components/dataCenter/DataCenterFeedbackWrapper';
import VirtualizorSupportHostingFeature from '@/components/VirtualizorSupport/VirtualizorSupportHostingFeature';
import VirtualizorSupportAdvanceFeature from '@/components/VirtualizorSupport/VirtualizorSupportAdvanceFeature';
import VirtualizorSupportHostingHero from '@/components/VirtualizorSupport/VirtualizorSupportHostingHero';
import VirtualizorSupportHostingPrice from '@/components/VirtualizorSupport/VirtualizorSupportHostingPrice';
import DataHostingDatacenterSupport from '@/components/dataCenter/CloudHostingDatacenterLocation';
import VirtualizorNoIncreased from '@/components/VirtualizorSupport/VirtualizorNoIncreased';
import WhyChoose from '@/components/VirtualizorSupport/WhyChoose';
import HostingOptions from '@/components/CpanelHostingNew/HostingOptions';

export const metadata = {
  title:
    "Expert Virtualizor Server Management Services | Proactive 24/7 Technical Support",
  description:
    "Optimize your Virtualizor hosting with CloudMinister’s expert management services. Benefit from uptime assurance, security, and proactive monitoring.",
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
      "Expert Virtualizor Server Management Services | Proactive 24/7 Technical Support",
    description:
      "Optimize your Virtualizor hosting with CloudMinister’s expert management services. Benefit from uptime assurance, security, and proactive monitoring.",
    url: "https://cloudminister.com/virtualizor-server/",
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
const VirtualizorSupport = () => {

  return (
    <>
      <VirtualizorSupportHostingHero />
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
      <VirtualizorNoIncreased />
      <VirtualizorSupportHostingPrice />
      <VirtualizorSupportHostingFeature />
      <DataHostingDatacenterSupport />
      <VirtualizorSupportAdvanceFeature />
      <WhyBuyDomainHostingard />
      <WhyChoose />
      <HostingOptions />
      <DataCenterFeedbackWrapper />
      <VirtualizorSupportHostingfaq />
      <FooterCta firsttital={'Experience the Power of Virtualizor Server Management.'} sectital={'7 Days of Risk-Free Trial '} />
    </>
  );
};

export default VirtualizorSupport;
