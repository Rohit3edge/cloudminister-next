import FooterCta from "@/components/common/cta/FooterCta";
import WhyBuyDomainHostingard from "@/components/Aws/WhyBuy";
import AwsHostingfaq from "@/components/Aws/AwsHostingfaq";
import AwsNoIncreased from "@/components/Aws/AwsNoIncreased";
import DataCenterFeedback from "@/components/dataCenter/DataCenterFeedback";
import AwsHostingFeature from "@/components/Aws/AwsHostingFeature";
import AwsAdvanceFeature from "@/components/Aws/AwsAdvanceFeature";
import AwsHostingHero from "@/components/Aws/AwsHostingHero";
import AwsHostingPrice from "@/components/Aws/AwsHostingPrice";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands";
import WhyChoose from "@/components/Aws/WhyChoose";
import HostingOptions from "@/components/CpanelHostingNew/HostingOptions";
export const metadata = {
  title:
    "Maximize Performance with AWS Server Management | CloudMinister",
  description:
    "Affordable AWS Server Management Services. Optimize your AWS infrastructure with cost-effective management solutions by CloudMinister. Save time and resources while ensuring top-tier performance.",
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
      "Maximize Performance with AWS Server Management | CloudMinister",
    description:
      "Affordable AWS Server Management Services. Optimize your AWS infrastructure with cost-effective management solutions by CloudMinister. Save time and resources while ensuring top-tier performance.",
    url: "https://cloudminister.com/aws-support/",
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

const AWS = () => {

  return (
    <>
      <AwsHostingHero />
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
      <AwsNoIncreased />
      <AwsHostingPrice />
      <AwsHostingFeature />
      <DataHostingDatacenterSupport />
      <AwsAdvanceFeature />
      <WhyBuyDomainHostingard />
      <WhyChoose />
      <HostingOptions />
      <DataCenterFeedback />
      <AwsHostingfaq />
      <FooterCta
        firsttital={"Experience the Power of Aws-support."}
        sectital={"7 Days of Risk-Free Trial"}
      />
    </>
  );
};

export default AWS;
