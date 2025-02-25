import FooterCta from "@/components/common/cta/FooterCta";
import WhyBuyCloud from "@/components/CloudHostingNew/WhyBuyCloud";
import DataCenterCustomerBrands from "@/components/dataCenter/DataCenterCustomerBrands";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands";
import CloudHostingfaq from "@/components/CloudHostingNew/CloudHostingfaq";
import DataCenterFeedback from "@/components/dataCenter/DataCenterFeedback";
import SharedHostingFeature from "@/components/CloudHostingNew/SharedHostingFeature";
import CloudHostingTechPartner from "@/components/CloudHostingNew/CloudHostingTechPartner";
import SharedHostingHero from "@/components/CloudHostingNew/SharedHostingHero";
import SharedHostingPrice from "@/components/CloudHostingNew/SharedHostingPrice";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";

export const metadata = {
  title: "Affordable Cloud Hosting with Premium Feature | CloudMinister",
  description:
    "Scale your hosting with ease using CloudMinister’s cloud hosting. Tailored for startups, businesses, and high-traffic websites with real-time scalability and reliability.",
  // keywords: [
  //   "Amazon Cloud Hosting",
  //   "Best Cloud Hosting",
  //   "Secure Web Hosting",
  //   "Fast Website Hosting",
  //   "Cloud Data Solutions",
  //   "Amazon CDN",
  // ],
  openGraph: {
    title: "Affordable Cloud Hosting with Premium Feature | CloudMinister",
    description:
      "Scale your hosting with ease using CloudMinister’s cloud hosting. Tailored for startups, businesses, and high-traffic websites with real-time scalability and reliability.",
    url: "https://cloudminister.com/cloud-hosting/",
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

const CloudHosting = () => {
  return (
    <>
      <SharedHostingHero />
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
      <SharedHostingPrice />
      <CloudHostingTechPartner />
      <SharedHostingFeature />
      <DataCenterCustomerBrands />
      <WhyBuyCloud />
      <DataHostingDatacenterSupport />
      <CloudHostingfaq />
      <DataCenterFeedback />
      <FooterCta
        firsttital={"Experience the Power of Cloud Hosting."}
        sectital={"7 Days of Risk-Free Trial"}
      />
    </>
  );
};

export default CloudHosting;
