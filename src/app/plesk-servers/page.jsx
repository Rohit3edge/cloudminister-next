import FooterCta from '@/components/common/cta/FooterCta';
import WhyBuyDomainHostingard from '@/components/PleskSupport/WhyBuy';
import DataCenterBrands from '@/components/dataCenter/DataCenterBrands';
import PleskHostingfaq from '@/components/PleskSupport/PleskHostingfaq';
import DataCenterFeedbackWrapper from '@/components/dataCenter/DataCenterFeedbackWrapper';
import PleskHostingFeature from '@/components/PleskSupport/PleskHostingFeature';
import PleskHostingAdvanceFeature from '@/components/PleskSupport/PleskHostingAdvanceFeature';
import PleskHostingHero from '@/components/PleskSupport/PleskHostingHero';
import PleskHostingPrice from '@/components/PleskSupport/PleskHostingPrice';
import DataHostingDatacenterSupport from '@/components/dataCenter/CloudHostingDatacenterLocation';
import WhyChoose from '@/components/PleskSupport/WhyChoose';
import PleskNoIncreased from '@/components/PleskSupport/PleskNoIncreased';
import HostingOptions from '@/components/CpanelHostingNew/HostingOptions';
export const metadata = {
  title:
    "Plesk Server Management Services | 24/7 Server Support by Experts",
  description:
    "Get cost-effective and reliable Plesk Server Management. From server optimization to troubleshooting, we ensure your hosting runs smoothly.",
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
      "Plesk Server Management Services | 24/7 Server Support by Experts",
    description:
      "Get cost-effective and reliable Plesk Server Management. From server optimization to troubleshooting, we ensure your hosting runs smoothly.",
    url: "https://cloudminister.com/plesk-servers/",
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

const PleskSupport = () => {

  return (
    <>
      <PleskHostingHero />
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

      <PleskNoIncreased />
      <PleskHostingPrice />

      <PleskHostingFeature />

      <DataHostingDatacenterSupport />

      <PleskHostingAdvanceFeature />
      <WhyBuyDomainHostingard />
      <WhyChoose />

      <HostingOptions />
      <DataCenterFeedbackWrapper />
      <PleskHostingfaq />
      <FooterCta firsttital={'Experience the Power of Plesk Server Management.'} sectital={'7 Days of Risk-Free Trial'} />
    </>
  );
};

export default PleskSupport;
