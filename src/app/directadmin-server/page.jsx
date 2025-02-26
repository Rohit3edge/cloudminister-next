import FooterCta from "@/components/common/cta/FooterCta";
import WhyBuyDomainHostingard from "@/components/DirectAdmin/WhyBuy";
import HostingOptions from "@/components/CpanelHostingNew/HostingOptions";
import DirectAdminHostingfaq from "@/components/DirectAdmin/DirectAdminHostingfaq"
import DataCenterFeedback from "@/components/dataCenter/DataCenterFeedback";
import DirectAdminHostingFeature from "@/components/DirectAdmin/DirectAdminHostingFeature";
import DirectAdminHostingAdvanceFeature from "@/components/DirectAdmin/DirectAdminHostingAdvanceFeature";
import DirectAdminNoIncreased from "@/components/DirectAdmin/DirectAdminNoIncreased";
import DirectAdminHostingHero from "@/components/DirectAdmin/DirectAdminHostingHero";
import PleskHostingPrice from "@/components/DirectAdmin/DirectAdminHostingPrice";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import WhyChoose from "@/components/DirectAdmin/WhyChoose"
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands"
export const metadata =  {
  title:
    "Professional DirectAdmin Server Management | Hassle-Free Hosting Support",
  description:
    "Dependable DirectAdmin server management services available 24/7. Enhance uptime, secure your servers, and ensure optimal performance with expert support.",
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
      "Professional DirectAdmin Server Management | Hassle-Free Hosting Support",
    description:
      "Dependable DirectAdmin server management services available 24/7. Enhance uptime, secure your servers, and ensure optimal performance with expert support.",
    url: "https://cloudminister.com/directadmin-server/",
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

const DirectAdmin = () => {



  return (
    <>
    <DirectAdminHostingHero/>
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
    <DirectAdminNoIncreased/>
    <PleskHostingPrice/>
    <DirectAdminHostingFeature/>
    <DataHostingDatacenterSupport/> 
    <DirectAdminHostingAdvanceFeature/>
    <WhyBuyDomainHostingard/>
    <WhyChoose/>
    <HostingOptions/>
    <DataCenterFeedback/>
    <DirectAdminHostingfaq/>
    <FooterCta firsttital={"Experience the Power of Direct Admin Server Management Services."} sectital={"7 Days of Risk-Free Trial "} />
    
    </>
  )
};

export default DirectAdmin
