import FooterCta from "@/components/common/cta/FooterCta";
import WhyBuyDomainHostingard from "@/components/AWSCloud/WhyBuy";
import AwsHostingfaq from "@/components/AWSCloud/AwsHostingfaq";
import AwsNoIncreased from "@/components/AWSCloud/AwsNoIncreased";
import DataCenterFeedbackWrapper from "@/components/dataCenter/DataCenterFeedbackWrapper";
import AwsHostingFeature from "@/components/AWSCloud/AwsHostingFeature";
import Solutions from "@/components/AWSCloud/Solutions";
import AwsHostingHero from "@/components/AWSCloud/AwsHostingHero";
import AwsStory from "@/components/AWSCloud/AwsStory";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands";
import WhyChoose from "@/components/AWSCloud/WhyChoose";

export const metadata = {
  title:
    "Managed Amazon Cloud Hosting in India with CloudMinister | Scalable & Reliable Solutions",
  description:
    "Managed AWS Services. Optimize your applications with Cloudminister’s managed Amazon cloud hosting. Scalable AWS solutions with robust security and round-the-clock expert support.",
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
      "Managed Amazon Cloud Hosting in India with CloudMinister | Scalable & Reliable Solutions",
    description:
      "Managed AWS Services. Optimize your applications with Cloudminister’s managed Amazon cloud hosting. Scalable AWS solutions with robust security and round-the-clock expert support.",
    url: "https://cloudminister.com/amazon-cloud-hosting/",
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

const AWSCloud = () => {
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
      <AwsHostingFeature />
      <Solutions />
      <AwsStory />
      <WhyBuyDomainHostingard />
      <WhyChoose />
      <DataHostingDatacenterSupport />
      <DataCenterFeedbackWrapper />
      <AwsHostingfaq />
      <FooterCta
        firsttital={"Experience the Power of amazon-cloud-hosting."}
        sectital={"7 Days of Risk-Free Trial"}
      />
    </>
  );
};

export default AWSCloud;
