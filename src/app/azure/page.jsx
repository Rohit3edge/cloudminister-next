import FooterCta from '@/components/common/cta/FooterCta';
import WhyBuyDomainHostingard from '@/components/Azure/WhyBuy';
import DataCenterBrands from '@/components/dataCenter/DataCenterBrands';
import AzureHostingfaq from '@/components/Azure/AzureHostingfaq';
import DataCenterFeedback from '@/components/dataCenter/DataCenterFeedback';
import AzureHostingFeature from '@/components/Azure/AzureHostingFeature';
import AzureAdvanceFeature from '@/components/Azure/AzureAdvanceFeature';
import AzureHostingHero from '@/components/Azure/AzureHostingHero';
import AzureHostingPricing from '@/components/Azure/AzureHostingPricing';
import DataHostingDatacenterSupport from '@/components/dataCenter/CloudHostingDatacenterLocation';
import WhyChoose from '@/components/Azure/WhyChoose';
import AzureNoIncreased from '@/components/Azure/AzureNoIncreased';
import HostingOptions from '@/components/CpanelHostingNew/HostingOptions';
export const metadata =  {
  title:
    "Microsoft Azure Cloud Management Services | Secure & Optimized Cloud Solutions",
  description:
    "Simplify cloud management with CloudMinister’s Microsoft Azure Cloud Management Services. Enhance security, scalability, and cost efficiency with expert 24/7 cloud support.",
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
      "Microsoft Azure Cloud Management Services | Secure & Optimized Cloud Solutions",
    description:
      "Simplify cloud management with CloudMinister’s Microsoft Azure Cloud Management Services. Enhance security, scalability, and cost efficiency with expert 24/7 cloud support.",
    url: "https://cloudminister.com/azure/",
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
const Azure = () => {
  return (
    <>
      <AzureHostingHero />
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
      <AzureNoIncreased />
      <AzureHostingPricing />

      <AzureHostingFeature />

      <DataHostingDatacenterSupport />

      <AzureAdvanceFeature />
      <WhyBuyDomainHostingard />
      <WhyChoose />

      <HostingOptions />
      <DataCenterFeedback />
      <AzureHostingfaq />
      <FooterCta firsttital={'Experience the Power of azure.'} sectital={'7 Days of Risk-Free Trial'} />
    </>
  );
};

export default Azure;
