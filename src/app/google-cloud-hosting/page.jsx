import FooterCta from "@/components/common/cta/FooterCta";
import WhyBuyDomainHostingard from "@/components/GoogleCloud/WhyBuy";
import AwsHostingfaq from "@/components/GoogleCloud/AwsHostingfaq";
import GoogleCloudNoIncreased from "@/components/GoogleCloud/GoogleCloudNoIncreased";
import DataCenterFeedbackWrapper from "@/components/dataCenter/DataCenterFeedbackWrapper";
import GoogleCloudHostingFeature from "@/components/GoogleCloud//GoogleCloudHostingFeature";
import Solutions from "@/components/GoogleCloud/Solutions";
import GoogleCloudHero from "@/components/GoogleCloud/GoogleCloudHero";
import AwsStory from "@/components/GoogleCloud/AwsStory";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands";
import WhyChoose from "@/components/GoogleCloud/WhyChoose";

export const metadata = {
  title:
    "Managed Google Cloud Hosting in India at affordable Price | CloudMinister",
  description:
    "Empower your business with managed Google cloud web hosting. Enjoy enterprise-grade performance, auto-scaling, 24/7 support, and hassle-free management.",
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
      "Managed Google Cloud Hosting in India at affordable Price | CloudMinister",
    description:
      "Empower your business with managed Google cloud web hosting. Enjoy enterprise-grade performance, auto-scaling, 24/7 support, and hassle-free management.",
    url: "https://cloudminister.com/google-cloud/-hosting/",
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

const GoogleCloud = () => {
  return (
    <>
      <GoogleCloudHero />
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
      <GoogleCloudNoIncreased />
      <GoogleCloudHostingFeature />
      <Solutions />
      <AwsStory />
      <WhyBuyDomainHostingard />
      <WhyChoose />
      <DataHostingDatacenterSupport />
      <DataCenterFeedbackWrapper />
      <AwsHostingfaq />
      <FooterCta
        firsttital={"Experience the Power of Google Cloud Hosting."}
        sectital={"7 Days of Risk-Free Trial"}
      />
    </>
  );
};

export default GoogleCloud;
