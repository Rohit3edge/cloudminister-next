import FooterCta from "@/components/common/cta/FooterCtatwo";
import RefundBody from "@/components/Refund/RefundBody";
import RefundBreadCrumb from "@/components/Refund/RefundBreadCrumb";

export const metadata = {
  title: "CloudMinister Refund Policy | Transparent & Customer-Centric",
  description:
    "Learn about CloudMinister’s clear and transparent refund policy. Understand the terms, conditions, and eligibility for refunds on our services.",
  // keywords: [
  //   "Akamai Cloud Hosting",
  //   "Best Cloud Hosting",
  //   "Secure Web Hosting",
  //   "Fast Website Hosting",
  //   "Cloud Data Solutions",
  //   "Akamai CDN",
  // ],
  openGraph: {
    title: "CloudMinister Refund Policy | Transparent & Customer-Centric",
    description:
      "Learn about CloudMinister’s clear and transparent refund policy. Understand the terms, conditions, and eligibility for refunds on our services.",
    url: "https://cloudminister.com/refund-policy/",
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
