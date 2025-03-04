import DataCenterHero from "@/components/dataCenter/DataCenterHero";
import AboutUsStory from "@/components/dataCenter/AboutUsStory";
import DataCenterCustomerBrands from "@/components/dataCenter/DataCenterCustomerBrands";
import DataCenterServices from "@/components/dataCenter/DataCenterServices";
import DataCenterWhyChoose from "@/components/dataCenter/DataCenterWhyChoose";
import DataCenterFeedbackWrapper from "@/components/dataCenter/DataCenterFeedbackWrapper";
import DataCenterBlog from "@/components/dataCenter/DataCenterBlog";
import DataCenterCta from "@/components/dataCenter/DataCenterCta";
import DataCenterServer from "@/components/dataCenter/DataCenterServer";
import SpecificSection from "@/components/dataCenter/SpecificSection";
import DataCenterFeature from "@/components/dataCenter/DataCenterFeature";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";

export const metadata = {
  title:
    "CloudMinister | Reliable Web, Cloud Hosting & Server Management Solutions in India",
  description:
    "CloudMinister offers secure, high-performance Web hosting, VPS , Dedicated Server,  cloud hosting, server management, and IT solutions. Get 24/7 support and scalable cloud infrastructure for your business.",
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
      "CloudMinister | Reliable Web, Cloud Hosting & Server Management Solutions in India",
    description:
      "CloudMinister offers secure, high-performance Web hosting, VPS , Dedicated Server,  cloud hosting, server management, and IT solutions. Get 24/7 support and scalable cloud infrastructure for your business.",
    url: "https://cloudminister.com/",
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
export default function Home() {
  return (
    <>
      <DataCenterHero />
      <DataCenterFeature />
      <SpecificSection />
      <DataCenterServer />
      <DataCenterServices />
      <AboutUsStory />
      <DataCenterWhyChoose />
      <DataHostingDatacenterSupport />
      <DataCenterFeedbackWrapper />
      <DataCenterCustomerBrands />
      <DataCenterBlog />
      <DataCenterCta />
    </>
  );
}

