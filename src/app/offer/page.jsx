import VpsHostingFaqTwo from '@/components/Offer/VpsHostingFaqTwo';
import VpsHostingFeatures from '@/components/Offer/VpsHostingFeature';
import VpsHostingHero from '@/components/Offer/VpsHostingHero';
import ControlPanel from '@/components/Offer/ControlPanel';
import VpsHostingPlansOne from '@/components/Offer/VpsHostingPlansOne';
import VpsHostingWhyChoose from '@/components/Offer/VpsHostingWhyChoose';
import FooterCta from '@/components/Offer/FooterCta';
import DataCenterBrands from '@/components/dataCenter/DataCenterBrands';
import DataCenterFeedbackWrapper from '@/components/dataCenter/DataCenterFeedbackWrapper';
import DataHostingDatacenterSupport from '@/components/dataCenter/CloudHostingDatacenterLocation';
import DataCenterCustomerBrands from '@/components/dataCenter/DataCenterCustomerBrands';
import AdvanceFeature from '@/components/Offer/AdvanceFeature';
import { OfferpricingData } from '../../utils/data';
import LinuxOptions from '@/components/Offer/LinuxOptions';

export const metadata = {
  title: 'CloudMinister Special Offers | Affordable Solutions for Startups & Enterprises',
  description: 'Explore CloudMinister’s offers for businesses of all sizes. Get cost-effective deals on cloud hosting, server management, and cloud migration services',
  // keywords: [
  //   "Amazon Cloud Hosting",
  //   "Best Cloud Hosting",
  //   "Secure Web Hosting",
  //   "Fast Website Hosting",
  //   "Cloud Data Solutions",
  //   "Amazon CDN",
  // ],
  openGraph: {
    title: 'CloudMinister Special Offers | Affordable Solutions for Startups & Enterprises',
    description: 'Explore CloudMinister’s offers for businesses of all sizes. Get cost-effective deals on cloud hosting, server management, and cloud migration services',
    url: 'https://cloudminister.com/offer/',
    siteName: 'cloudminister',
    // images: [
    //   {
    //     url: "https://yourwebsite.com/images/akamicloud-banner.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Akamai Cloud Hosting Banner",
    //   },
    // ],
    type: 'website',
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Akamai Cloud Hosting - Secure & Fast Web Hosting",
  //   description:
  //     "Experience secure, fast, and reliable cloud hosting with Akamai. Try it risk-free for 7 days!",
  //   images: ["https://yourwebsite.com/images/akamicloud-banner.jpg"],
  // },
  robots: 'index, follow',
};

const VpsHosting = () => {
  return (
    <>
      <VpsHostingHero />
      <section className=" position-relative z-1 overflow-hidden mb-8 extra-domain-container">
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
      <VpsHostingPlansOne
        title="Choose your best VPS Hosting Plan"
        price={true}
        pricingData={OfferpricingData}
        // subtitle="Looking for reliable Linux VPS hosting that fits your budget? CloudMinister offers powerful, secure, and flexible servers to boost your website's performance—all at unbeatable vps server prices."
      />

      <VpsHostingWhyChoose />
      {/* <VpsHostingTechPartner /> */}
      <VpsHostingFeatures />
      <DataHostingDatacenterSupport />
      <LinuxOptions />
      <ControlPanel />
      <AdvanceFeature />
      <DataCenterFeedbackWrapper />
      <DataCenterCustomerBrands />
      <VpsHostingFaqTwo />
      <FooterCta />
    </>
  );
};

export default VpsHosting;
