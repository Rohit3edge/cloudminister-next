import FooterCta from "@/components/common/cta/FooterCtatwo.jsx";
import WhyBuyDomainHostingard from "@/components/DataAnalytics/WhyBuy";
import DataAnalyticsfaq from "@/components/DataAnalytics/DataAnalyticsfaq";
import DataAnalyticsNoIncreased from "@/components/DataAnalytics/DataAnalyticsNoIncreased";
import DataCenterFeedbackWrapper from "@/components/dataCenter/DataCenterFeedbackWrapper";
import DataAnalyticsHostingFeature from "@/components/DataAnalytics/DataAnalyticsHostingFeature";
import DataAnalyticsHero from "@/components/DataAnalytics/DataAnalyticsHero";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands";

export const metadata = {
  title:
    "Data Analytics Services to Get Real-Time Data Insights for Faster Decisions | CloudMinister",
  description:
    "CloudMinister helps businesses turn raw data into valuable insights. Develop a clear data strategy to fuel innovation and achieve business goals.",
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
      "Data Analytics Services to Get Real-Time Data Insights for Faster Decisions | CloudMinister",
    description:
      "CloudMinister helps businesses turn raw data into valuable insights. Develop a clear data strategy to fuel innovation and achieve business goals.",
    url: "https://cloudminister.com/data-analytics/",
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

const DataAnalytics = () => {
  return (
    <>
      <DataAnalyticsHero />
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
      <DataAnalyticsNoIncreased />
      <DataAnalyticsHostingFeature />
      <DataHostingDatacenterSupport />
      <WhyBuyDomainHostingard />
      <DataCenterFeedbackWrapper />
      <DataAnalyticsfaq />
      <FooterCta
        firsttital={"Book A Free Consultation Today."}
        path={"/contact/"}
        text={"Contact now"}
      />
    </>
  );
};

export default DataAnalytics;
