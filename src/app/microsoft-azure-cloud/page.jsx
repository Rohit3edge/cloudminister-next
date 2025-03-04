import FooterCta from "@/components/common/cta/FooterCta";
import WhyBuyDomainHostingard from "@/components/MicroSoftAzureCloud/WhyBuy";
import AwsHostingfaq from "@/components/MicroSoftAzureCloud/AwsHostingfaq";
import MicroSoftAzureCloudNoIncreased from "@/components/MicroSoftAzureCloud/MicroSoftAzureCloudNoIncreased";
import DataCenterFeedbackWrapper from "@/components/dataCenter/DataCenterFeedbackWrapper";
import MicroSoftAzureCloudHostingFeature from "@/components/MicroSoftAzureCloud/MicroSoftAzureCloudHostingFeature";
import Solutions from "@/components/MicroSoftAzureCloud/Solutions";
import MicroSoftAzureCloudHero from "@/components/MicroSoftAzureCloud/MicroSoftAzureCloudHero";
import AwsStory from "@/components/MicroSoftAzureCloud/AwsStory";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands";
import WhyChoose from "@/components/MicroSoftAzureCloud/WhyChoose";

export const metadata = {
  title:
    "Managed Microsoft Azure Cloud Hosting Services in India | CloudMinister",
  description:
    "Transform your business with managed Microsoft Azure hosting. Scalable, flexible, and cost-effective solutions for modern enterprises, eCommerce and SaaS platforms.",
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
      "Managed Microsoft Azure Cloud Hosting Services in India | CloudMinister",
    description:
      "Transform your business with managed Microsoft Azure hosting. Scalable, flexible, and cost-effective solutions for modern enterprises, eCommerce and SaaS platforms.",
    url: "https://cloudminister.com/microsoft-azure-cloud/",
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

const MicroSoftAzureCloud = () => {
  return (
    <>
      <MicroSoftAzureCloudHero />
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
      <MicroSoftAzureCloudNoIncreased />
      <MicroSoftAzureCloudHostingFeature />
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

export default MicroSoftAzureCloud;
