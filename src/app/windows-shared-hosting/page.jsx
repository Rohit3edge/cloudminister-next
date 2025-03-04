import FooterCta from "@/components/common/cta/FooterCta";
import WhyBuyDomainHostingard from "@/components/WindowsSharedHosting/WhyBuyDomainHostingard";
import DataCenterCustomerBrands from "@/components/dataCenter/DataCenterCustomerBrands";
import DataCenterFeedbackWrapper from "@/components/dataCenter/DataCenterFeedbackWrapper";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands";
import SharedHostingfaq from "@/components/WindowsSharedHosting/SharedHostingfaq";
import SharedHostingFeature from "@/components/WindowsSharedHosting/SharedHostingFeature";
import SharedHostingAdvanceFeature from "@/components/WindowsSharedHosting/SharedHostingAdvanceFeature";
import SharedHostingHero from "@/components/WindowsSharedHosting/SharedHostingHero";
import SharedHostingPrice from "@/components/WindowsSharedHosting/SharedHostingPrice";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import WindowsOptions from "@/components/common/Panel/WindowsOptions";

export const metadata = {
  title:
    "Affordable Windows Shared Hosting Plans with ASP .NET & MSSQL | CloudMinister",
  description:
    "Looking for reliable Windows hosting? CloudMinister offers fast servers, free SSL, and seamless support for ASP.NET and MSSQL. Get started today!",
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
      "Affordable Windows Shared Hosting Plans with ASP .NET & MSSQL | CloudMinister",
    description:
      "Looking for reliable Windows hosting? CloudMinister offers fast servers, free SSL, and seamless support for ASP.NET and MSSQL. Get started today!",
    url: "https://cloudminister.com/windows-shared-hosting/",
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

const WindowsSharedHosting = () => {
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
      <SharedHostingFeature />
      <WindowsOptions />
      <SharedHostingAdvanceFeature />
      <DataCenterCustomerBrands />
      <WhyBuyDomainHostingard />
      <DataHostingDatacenterSupport />
      <SharedHostingfaq />
      <DataCenterFeedbackWrapper />
      <FooterCta
        firsttital={"Experience the Power of Windows Shared Hosting."}
        sectital={"7 Days of Risk-Free Trial"}
      />
    </>
  );
};

export default WindowsSharedHosting;
