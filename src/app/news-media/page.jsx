import FooterCta from "@/components/common/cta/FooterCtatwo";
import RefundBody from "@/components/NewsMedia/RefundBody";
import RefundBreadCrumb from "@/components/NewsMedia/RefundBreadCrumb";

export const metadata = {
  title: "CloudMinister News & Media | Latest Updates, Announcements & Insights",
  description:
    "Stay informed with the latest news, media coverage, and updates from CloudMinister. Discover insights on cloud hosting, server management, and IT trends",
  // keywords: [
  //   "Akamai Cloud Hosting",
  //   "Best Cloud Hosting",
  //   "Secure Web Hosting",
  //   "Fast Website Hosting",
  //   "Cloud Data Solutions",
  //   "Akamai CDN",
  // ],
  openGraph: {
    title: "CloudMinister News & Media | Latest Updates, Announcements & Insights",
    description:
      "Stay informed with the latest news, media coverage, and updates from CloudMinister. Discover insights on cloud hosting, server management, and IT trends",
    url: "https://cloudminister.com/news-media/",
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

const RefundPolicy = () => {
  return (
    <>
      <RefundBreadCrumb />
      <RefundBody />
      <FooterCta
        firsttital={"Book A Free Consultation Today."}
        path={"/contact/"}
        text={"Contact now"}
      />
    </>
  );
};

export default RefundPolicy;
