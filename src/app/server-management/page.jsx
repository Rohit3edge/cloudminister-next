import FooterCta from '@/components/common/cta/FooterCta';
import CpanelHostingfaq from '@/components/ServerManagement/CpanelHostingfaq';
import DataCenterFeedbackWrapper from '@/components/dataCenter/DataCenterFeedbackWrapper';
import SharedHostingFeature from '@/components/ServerManagement/SharedHostingFeature';
import CpanelNoIncreased from '@/components/ServerManagement/CpanelNoIncreased';
import ServerManagementHero from '@/components/ServerManagement/ServerManagementHero';
import CpanelHostingPricing from '@/components/ServerManagement/CpanelHostingPricing';
import DataHostingDatacenterSupport from '@/components/dataCenter/CloudHostingDatacenterLocation';
import WhyChoose from '@/components/ServerManagement/WhyChoose';
import DataCenterBrands from '@/components/dataCenter/DataCenterBrands';
import CpanelHostingFeature from '@/components/ServerManagement/CpanelHostingFeature';

export const metadata = {
  title:
    "Professional Server Management Services by Industry Experts | Cloud Minister",
  description:
    "Optimize your server performance & Security with Cloud Minister’s professional server management services. Outsourced Hosting Support, and management for 24/7 monitoring, security, and maintenance by experts.",
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
      "Professional Server Management Services by Industry Experts | Cloud Minister",
    description:
      "Optimize your server performance & Security with Cloud Minister’s professional server management services. Outsourced Hosting Support, and management for 24/7 monitoring, security, and maintenance by experts.",
    url: "https://cloudminister.com/server-management/",
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
const ServerManagement = () => {
  return (
    <>
      <ServerManagementHero />
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

      <CpanelNoIncreased />
      <CpanelHostingPricing />
      <SharedHostingFeature />
      <DataHostingDatacenterSupport />
      <WhyChoose />
      <CpanelHostingFeature />
      <CpanelHostingfaq />
      <DataCenterFeedbackWrapper />
      <FooterCta firsttital={'Experience the Power of Server Management.'} sectital={'7 Days of Risk-Free Trial'} />
    </>
  );
};

export default ServerManagement;
