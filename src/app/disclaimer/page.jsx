import FooterCta from "@/components/common/cta/FooterCtatwo";
import RefundBody from "@/components/Disclaimer/RefundBody";
import RefundBreadCrumb from "@/components/Disclaimer/RefundBreadCrumb";
import DataCenterCustomerBrands from "@/components/dataCenter/DataCenterCustomerBrands";

export const metadata = {
  title: "Disclaimer | Accuracy & Limitations of CloudMinister Services",
  description:
    "CloudMinister outlines the scope and limitations of service and website information in this disclaimer. Ensure clarity on data usage and liabilities.",
  // keywords: [
  //   "Akamai Cloud Hosting",
  //   "Best Cloud Hosting",
  //   "Secure Web Hosting",
  //   "Fast Website Hosting",
  //   "Cloud Data Solutions",
  //   "Akamai CDN",
  // ],
  openGraph: {
    title: "Disclaimer | Accuracy & Limitations of CloudMinister Services",
    description:
      "CloudMinister outlines the scope and limitations of service and website information in this disclaimer. Ensure clarity on data usage and liabilities.",
    url: "https://cloudminister.com/disclaimer/",
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

const Disclaimer = () => {
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

export default Disclaimer;
