import FooterCta from "@/components/common/cta/FooterCta";
import WhyBuyDomainHostingard from "@/components/Google/WhyBuy";
import GoogleHostingfaq from "@/components/Google/GoogleHostingfaq";
import GoogleNoIncreased from "@/components/Google/GoogleNoIncreased";
import DataCenterFeedbackWrapper from "@/components/dataCenter/DataCenterFeedbackWrapper";
import GoogleFeature from "@/components/Google/GoogleFeature";
import GoogleAdvanceFeature from "@/components/Google/GoogleAdvanceFeature";
import GoogleHero from "@/components/Google/GoogleHero";
import GooglePrice from "@/components/Google/GooglePrice";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands";
import WhyChoose from "@/components/Google/WhyChoose";
import HostingOptions from "@/components/CpanelHostingNew/HostingOptions";

export const metadata = {
  title:
    "Google Cloud Managed Services | Enterprise-Grade GCP Management by Industry experts -  CloudMinister",
  description:
    "Leverage Cloudminister’s fully managed Google Cloud services for seamless cloud operations. Get security, scalability, and 24/7 expert support.",
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
      "Google Cloud Managed Services | Enterprise-Grade GCP Management by Industry experts -  CloudMinister",
    description:
      "Leverage Cloudminister’s fully managed Google Cloud services for seamless cloud operations. Get security, scalability, and 24/7 expert support.",
    url: "https://cloudminister.com/google-cloud/",
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
const GoogleCloud = () => {


  return (
    <>
    <GoogleHero/>
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
    <GoogleNoIncreased/>
    <GooglePrice/>
    <GoogleFeature/>
    <DataHostingDatacenterSupport/>
    <GoogleAdvanceFeature/>
    <WhyBuyDomainHostingard/>
    <WhyChoose/>
    <HostingOptions/>
    <DataCenterFeedbackWrapper/>
    <GoogleHostingfaq/>
    <FooterCta/>
    
    </>
  );
};

export default GoogleCloud;
