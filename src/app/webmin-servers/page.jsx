import FooterCta from '@/components/common/cta/FooterCta';
import WhyBuyDomainHostingard from '@/components/webminservers/WhyBuy';
import DataCenterBrands from '@/components/dataCenter/DataCenterBrands';
import PleskHostingfaq from '@/components/webminservers/PleskHostingfaq';
import DataCenterFeedbackWrapper from '@/components/dataCenter/DataCenterFeedbackWrapper';
import WebminHostingFeature from '@/components/webminservers/WebminHostingFeature';
import WebminHostingAdvanceFeature from '@/components/webminservers/WebminHostingAdvanceFeature';
import WebminserversHero from '@/components/webminservers/WebminserversHero';
import WebinHostingPrice from '@/components/webminservers/WebinHostingPrice';
import DataHostingDatacenterSupport from '@/components/dataCenter/CloudHostingDatacenterLocation';
import WhyChoose from '@/components/webminservers/WhyChoose';
import WebminserversNoIncreased from '@/components/webminservers/WebminserversNoIncreased';
import HostingOptions from '@/components/CpanelHostingNew/HostingOptions';
export const metadata =  {
  title:
    "Affordable Webmin Server Management Services | CloudMinister",
  description:
    "Let CloudMinister handle your Webmin servers with 24/7 expert support, proactive monitoring, and performance optimization for worry-free management.",
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
      "Affordable Webmin Server Management Services | CloudMinister",
    description:
      "Let CloudMinister handle your Webmin servers with 24/7 expert support, proactive monitoring, and performance optimization for worry-free management.",
    url: "https://cloudminister.com/webmin-servers/",
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
const Webminservers = () => {
  return (
    <>
      <WebminserversHero />
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
      <WebminserversNoIncreased />
      <WebinHostingPrice />

      <WebminHostingFeature />

      <DataHostingDatacenterSupport />

      <WebminHostingAdvanceFeature />
      <WhyBuyDomainHostingard />
      <WhyChoose />
      <HostingOptions />
      <DataCenterFeedbackWrapper />
      <PleskHostingfaq />
      <FooterCta firsttital={'Experience the Power Webmin Server Management.'} sectital={'7 Days of Risk-Free Trial '} />
    </>
  );
};

export default Webminservers;
