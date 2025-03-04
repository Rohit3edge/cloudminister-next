import FooterCta from "@/components/common/cta/FooterCta";
import WhyBuyDomainHostingard from "@/components/Ocean/WhyBuy";
import OceanHostingfaq from "@/components/Ocean/OceanHostingfaq";
import OceanNoIncreased from "@/components/Ocean/OceanNoIncreased";
import DataCenterFeedbackWrapper from "@/components/dataCenter/DataCenterFeedbackWrapper";
import OceanHostingFeature from "@/components/Ocean/OceanHostingFeature";
import OceanAdvanceFeature from "@/components/Ocean/OceanAdvanceFeature";
import OceanHostingHero from "@/components/Ocean/OceanHostingHero";
import OceanHostingPrice from "@/components/Ocean/OceanHostingPrice";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import WhyChoose from "@/components/Ocean/WhyChoose";
import HostingOptions from "@/components/CpanelHostingNew/HostingOptions";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands";

export const metadata = {
  title:
    "Affordable DigitalOcean Server Management Services | CloudMinister",
  description:
    "Optimize your business infrastructure with CloudMinister’s DigitalOcean server management. Scalable, reliable, and secure solutions tailored to your needs.",
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
      "Affordable DigitalOcean Server Management Services | CloudMinister",
    description:
      "Optimize your business infrastructure with CloudMinister’s DigitalOcean server management. Scalable, reliable, and secure solutions tailored to your needs.",
    url: "https://cloudminister.com/digital-ocean/",
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
const Ocean = () => {


  return (
    <>
      <OceanHostingHero />
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
      <OceanNoIncreased />
      <OceanHostingPrice />
      <OceanHostingFeature />
      <DataHostingDatacenterSupport />
      <OceanAdvanceFeature />
      <WhyBuyDomainHostingard />
      <WhyChoose />
      <HostingOptions />
      <DataCenterFeedbackWrapper />
      <OceanHostingfaq />
      <FooterCta
        firsttital={"Experience the Power of digital-ocean."}
        sectital={"7 Days of Risk-Free Trial"}
      />
    </>
  );
};

export default Ocean;
