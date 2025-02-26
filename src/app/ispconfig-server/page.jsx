import FooterCta from "@/components/common/cta/FooterCta";
import WhyBuyDomainHostingard from "@/components/IspConfig/WhyBuy";
import IspConfigHostingfaq from "@/components/IspConfig/IspConfigHostingfaq"
import IspNoIncreased from "@/components/IspConfig/IspNoIncreased";
import DataCenterFeedback from "@/components/dataCenter/DataCenterFeedback";
import IspConfigFeature from "@/components/IspConfig/IspConfigFeature";
import IspConfigAdvanceFeature from "@/components/IspConfig/IspConfigAdvanceFeature";
import IspConfigHero from "@/components/IspConfig/IspConfigHero";
import IspConfigPrice from "@/components/IspConfig/IspConfigPrice";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands"
import WhyChoose from "@/components/IspConfig/WhyChoose"
import HostingOptions from "@/components/CpanelHostingNew/HostingOptions";
export const metadata ={
  title:
    "Professional ISPConfig Server Management Services in India | CloudMinister",
  description:
    "Trust CloudMinister for reliable ISPConfig server management. Enjoy tailored solutions, proactive monitoring, uptime,  and 24x7 technical support.",
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
      "Professional ISPConfig Server Management Services in India | CloudMinister",
    description:
      "Trust CloudMinister for reliable ISPConfig server management. Enjoy tailored solutions, proactive monitoring, uptime,  and 24x7 technical support.",
    url: "https://cloudminister.com/ispconfig-server/",
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

const IspConfig = () => {

  return (
    <>
    <IspConfigHero/>
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
    <IspNoIncreased/>
    <IspConfigPrice/>
    <IspConfigFeature/>
    <DataHostingDatacenterSupport/>
    <IspConfigAdvanceFeature/>
    <WhyBuyDomainHostingard/>
    <WhyChoose/>
    <HostingOptions/>
    <DataCenterFeedback/>
    <IspConfigHostingfaq/>
    <FooterCta firsttital={'Experience the Power of Virtualizor Server Management.'} sectital={'7 Days of Risk-Free Trial '}/>
    
    </>
  )
};

export default IspConfig
