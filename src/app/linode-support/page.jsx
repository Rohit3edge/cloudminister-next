import FooterCta from '@/components/common/cta/FooterCta';
import WhyBuyDomainHostingard from '@/components/Linodesupport/WhyBuy';
import DataCenterBrands from '@/components/dataCenter/DataCenterBrands';
import PleskHostingfaq from '@/components/Linodesupport/PleskHostingfaq';
import DataCenterFeedbackWrapper from '@/components/dataCenter/DataCenterFeedbackWrapper';
import LinodesupportHostingFeature from '@/components/Linodesupport//LinodesupportHostingFeature';
import LinodesupportHostingAdvanceFeature from '@/components/Linodesupport/LinodesupportHostingAdvanceFeature';
import LinodesupportHero from '@/components/Linodesupport/LinodesupportHero';
import LinodesupportHostingPrice from '@/components/Linodesupport/LinodesupportHostingPrice';
import DataHostingDatacenterSupport from '@/components/dataCenter/CloudHostingDatacenterLocation';
import WhyChoose from '@/components/Linodesupport/WhyChoose';
import LinodesupportNoIncreased from '@/components/Linodesupport/LinodesupportNoIncreased';
import HostingOptions from '@/components/CpanelHostingNew/HostingOptions';
export const metadata = {
  title:
    "Best Linode Cloud Management Solutions | Expert Support Services",
  description:
    "Leave Linode cloud management to the experts! Ensure high availability, scalability, and cost-effectiveness with 24/7 support.",
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
      "Best Linode Cloud Management Solutions | Expert Support Services",
    description:
      "Leave Linode cloud management to the experts! Ensure high availability, scalability, and cost-effectiveness with 24/7 support.",
    url: "https://cloudminister.com/linode-support/",
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
const Linodesupport = () => {

  return (
    <>
      <LinodesupportHero />
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
      <LinodesupportNoIncreased />
      <LinodesupportHostingPrice />

      <LinodesupportHostingFeature />

      <DataHostingDatacenterSupport />

      <LinodesupportHostingAdvanceFeature />
      <WhyBuyDomainHostingard />
      <WhyChoose />

      <HostingOptions />
      <DataCenterFeedbackWrapper />
      <PleskHostingfaq />
      <FooterCta firsttital={'Experience the Power Linode Cloud Management.'} sectital={'7 Days of Risk-Free Trial '} />
    </>
  );
};

export default Linodesupport;
