import FooterCta from '@/components/common/cta/FooterCta';
import WhyBuyDomainHostingard from '@/components/HyperV/WhyBuy';
import DataCenterBrands from '@/components/dataCenter/DataCenterBrands';
import HyperVHostingfaq from '@/components/HyperV/HyperVHostingfaq';
import DataCenterFeedbackWrapper from '@/components/dataCenter/DataCenterFeedbackWrapper';
import HyperVHostingFeature from '@/components/HyperV/HyperVHostingFeature';
import HyperVAdvanceFeature from '@/components/HyperV/HyperVAdvanceFeature';
import HyperVHostingHero from '@/components/HyperV/HyperVHostingHero';
import HyperVHostingPrice from '@/components/HyperV/HyperVHostingPrice';
import DataHostingDatacenterSupport from '@/components/dataCenter/CloudHostingDatacenterLocation';
import HyperVNoIncreased from '@/components/HyperV/HyperVNoIncreased';
import WhyChoose from '@/components/HyperV/WhyChoose';
import HostingOptions from '@/components/CpanelHostingNew/HostingOptions';
export const metadata = {
  title:
    "Fast, Secure, and Reliable Windows Dedicated Server Hosting | CloudMinister",
  description:
    "Simplify your virtual server operations with CloudMinister's Professional  Hyper-V management Services. Enjoy 24x7 support, secure setups, and tailored solutions.",
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
      "Fast, Secure, and Reliable Windows Dedicated Server Hosting | CloudMinister",
    description:
      "Simplify your virtual server operations with CloudMinister's Professional  Hyper-V management Services. Enjoy 24x7 support, secure setups, and tailored solutions.",
    url: "https://cloudminister.com/hyper-v-server/",
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
const HyperV = () => {
  return (
    <>
      <HyperVHostingHero />
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
      <HyperVNoIncreased />
      <HyperVHostingPrice />
      <HyperVHostingFeature />
      <DataHostingDatacenterSupport />
      <HyperVAdvanceFeature />
      <WhyBuyDomainHostingard />
      <WhyChoose />
      <HostingOptions />
      <DataCenterFeedbackWrapper />
      <HyperVHostingfaq />
      <FooterCta firsttital={'Experience the Power of Hyper-V Server Management.'} sectital={'7 Days of Risk-Free Trial '} />
    </>
  );
};

export default HyperV;
