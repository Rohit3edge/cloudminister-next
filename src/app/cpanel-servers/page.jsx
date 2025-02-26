import FooterCta from '@/components/common/cta/FooterCta';
import WhyBuyDomainHostingard from '@/components/CpanelHostingNew/WhyBuy';
import CpanelHostingfaq from '@/components/CpanelHostingNew/CpanelHostingfaq';
import AdvanceFeature from '@/components/CpanelHostingNew/AdvanceFeature';
import DataCenterFeedback from '@/components/dataCenter/DataCenterFeedback';
import SharedHostingFeature from '@/components/CpanelHostingNew/SharedHostingFeature';
import CpanelNoIncreased from '@/components/CpanelHostingNew/CpanelNoIncreased';
import CpanelHostingHero from '@/components/CpanelHostingNew/CpanelHostingHero';
import CpanelHostingPricing from '@/components/CpanelHostingNew/CpanelHostingPricing';
import DataHostingDatacenterSupport from '@/components/dataCenter/CloudHostingDatacenterLocation';
import HostingOptions from '@/components/CpanelHostingNew/HostingOptions';
import WhyChoose from '@/components/CpanelHostingNew/WhyChoose';
import DataCenterBrands from '@/components/dataCenter/DataCenterBrands';
export const metadata ={
  title:
    "Affordable cPanel Server Management Services | 24x7 Server Management",
  description:
    "Streamline your hosting with professional cPanel server management services. Enjoy round-the-clock monitoring, updates, and server optimization.",
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
      "Affordable cPanel Server Management Services | 24x7 Server Management",
    description:
      "Streamline your hosting with professional cPanel server management services. Enjoy round-the-clock monitoring, updates, and server optimization.",
    url: "https://cloudminister.com/cpanel-servers/",
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
const CpanelHosting = () => {

  return (
    <>
      <CpanelHostingHero />
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
      <AdvanceFeature />
      <WhyBuyDomainHostingard />
      <WhyChoose />
      <HostingOptions />
      <DataCenterFeedback />
      {/* <DataCenterBrands/> */}
      <CpanelHostingfaq />
      <FooterCta firsttital={'Experience the Power of cPanel Server Management.'} sectital={'7 Days of Risk-Free Trial '} />
    </>
  );
};

export default CpanelHosting;
