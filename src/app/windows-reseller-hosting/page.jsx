import FooterCta from "@/components/common/cta/FooterCta";
import ResellerHostingHero from "@/components/windowsresellerHosting/ResellerHostingHero";
import ResellerHostingPrice from "@/components/windowsresellerHosting/ResellerHostingPrice";
import ResellerHostingFeature from "@/components/windowsresellerHosting/ResellerHostingFeature";
import ResellerHostingFaq from "@/components/windowsresellerHosting/ResellerHostingFaq";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands";
import DataCenterFeedback from "@/components/dataCenter/DataCenterFeedback";
import DataCenterCustomerBrands from "@/components/dataCenter/DataCenterCustomerBrands";
import ResellerHostingWhyChoose from "@/components/windowsresellerHosting/ResellerHostingWhyChoose";
import ResellerHostingSayHello from "@/components/windowsresellerHosting/ResellerHostingSayHello";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import WindowsOptions from "@/components/common/Panel/WindowsOptions";

export const metadata = {
  title:
    "Affordable Windows Reseller Hosting | Start Your Hosting Business with CloudMinister",
  description:
    "CloudMinister offers reliable and scalable Windows Reseller Hosting with Plesk control panel, secure servers, and competitive pricing. Launch your business today!",
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
      "Affordable Windows Reseller Hosting | Start Your Hosting Business with CloudMinister",
    description:
      "CloudMinister offers reliable and scalable Windows Reseller Hosting with Plesk control panel, secure servers, and competitive pricing. Launch your business today!",
    url: "https://cloudminister.com/windows-reseller-hosting/",
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

const WindowsResellerHosting = () => {
  return (
    <>
      <ResellerHostingHero />
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
      <ResellerHostingPrice />
      <ResellerHostingFeature />
      <WindowsOptions />
      <ResellerHostingSayHello />
      <DataCenterCustomerBrands />
      <ResellerHostingWhyChoose />
      <DataHostingDatacenterSupport />
      <ResellerHostingFaq />
      <DataCenterFeedback />
      <FooterCta
        firsttital={"Experience the Power of Windows Reselling Hosting"}
        sectital={"7 Days of Risk-Free Trial"}
      />
    </>
  );
};

export default WindowsResellerHosting;
