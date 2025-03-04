import FooterCta from "@/components/common/cta/FooterCta";
import WhyBuyDomainHostingard from "@/components/AkamiCloud/WhyBuy";
import AwsHostingfaq from "@/components/AkamiCloud/AwsHostingfaq";
import AkamiCloudNoIncreased from "@/components/AkamiCloud/AkamiCloudNoIncreased";
import DataCenterFeedbackWrapper from "@/components/dataCenter/DataCenterFeedbackWrapper";
import AkamiCloudHostingFeature from "@/components/AkamiCloud//AkamiCloudHostingFeature";
import Solutions from "@/components/AkamiCloud/Solutions";
import AkamiCloudHero from "@/components/AkamiCloud/AkamiCloudHero";
import AwsStory from "@/components/AkamiCloud/AwsStory";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands";
import WhyChoose from "@/components/AkamiCloud/WhyChoose";

export const metadata = {
  title:
    "Akamai Cloud - Cost-Effective Cloud Computing Solutions | CloudMinister",
  description:
    "Optimize your cloud infrastructure with Akamai’s cost-effective solutions. Reduce operational costs while ensuring high performance and robust security..",
  // keywords: [
  //   "Akamai Cloud Hosting",
  //   "Best Cloud Hosting",
  //   "Secure Web Hosting",
  //   "Fast Website Hosting",
  //   "Cloud Data Solutions",
  //   "Akamai CDN",
  // ],
  openGraph: {
    title:
      "Akamai Cloud - Cost-Effective Cloud Computing Solutions | CloudMinister",
    description:
      "Optimize your cloud infrastructure with Akamai’s cost-effective solutions. Reduce operational costs while ensuring high performance and robust security..",
    url: "https://cloudminister.com/akamai-cloud/",
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

const AkamiCloud = () => {
  return (
    <>
      <AkamiCloudHero />
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
      <AkamiCloudNoIncreased />
      <AkamiCloudHostingFeature />
      <Solutions />
      <AwsStory />
      <WhyBuyDomainHostingard />
      <WhyChoose />
      <DataHostingDatacenterSupport />
      <DataCenterFeedbackWrapper />
      <AwsHostingfaq />
      <FooterCta
        firsttital={"Experience the Power of Akamai Cloud."}
        sectital={"7 Days of Risk-Free Trial"}
      />
    </>
  );
};

export default AkamiCloud;
