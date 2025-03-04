import FooterCta from "@/components/common/cta/FooterCtatwo";
import RefundBody from "@/components/Sla/RefundBody";
import RefundBreadCrumb from "@/components/Sla/RefundBreadCrumb";
import DataCenterCustomerBrands from "@/components/dataCenter/DataCenterCustomerBrands";

export const metadata = {
  title: "Service Level Agreement (SLA) | CloudMinister’s Uptime Assurance",
  description:
    "CloudMinister guarantees 99.9% uptime and top-notch service quality in our SLA. Read our terms to understand how we ensure consistent performance.",
  // keywords: [
  //   "Akamai Cloud Hosting",
  //   "Best Cloud Hosting",
  //   "Secure Web Hosting",
  //   "Fast Website Hosting",
  //   "Cloud Data Solutions",
  //   "Akamai CDN",
  // ],
  openGraph: {
    title: "Service Level Agreement (SLA) | CloudMinister’s Uptime Assurance",
    description:
      "CloudMinister guarantees 99.9% uptime and top-notch service quality in our SLA. Read our terms to understand how we ensure consistent performance.",
    url: "https://cloudminister.com/service-level-agreement/",
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

const Sla = () => {
  return (
    <>
      <RefundBreadCrumb />
      <RefundBody />
      <DataCenterCustomerBrands />
      <FooterCta
        firsttital={"Book A Free Consultation Today."}
        path={"/contact/"}
        text={"Contact now"}
      />
    </>
  );
};

export default Sla;
