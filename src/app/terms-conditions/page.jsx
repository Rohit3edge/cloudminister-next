import FooterCta from "@/components/common/cta/FooterCtatwo";
import TermsBody from "@/components/terms/TermsBody";
import TermsBreadcrumb from "@/components/terms/TermsBreadcrumb";

export const metadata = {
  title: "Terms & Conditions | Transparent Policies at CloudMinister",
  description:
    "CloudMinister ensures clarity and trust with detailed terms and conditions. Explore our policies for service usage, responsibilities, and agreements.",
  // keywords: [
  //   "Akamai Cloud Hosting",
  //   "Best Cloud Hosting",
  //   "Secure Web Hosting",
  //   "Fast Website Hosting",
  //   "Cloud Data Solutions",
  //   "Akamai CDN",
  // ],
  openGraph: {
    title: "Terms & Conditions | Transparent Policies at CloudMinister",
    description:
      "CloudMinister ensures clarity and trust with detailed terms and conditions. Explore our policies for service usage, responsibilities, and agreements.",
    url: "https://cloudminister.com/terms-conditions/",
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

const TermsCondition = () => {
  return (
    <>
      <TermsBreadcrumb />
      <TermsBody />
      <FooterCta
        firsttital={"Book A Free Consultation Today."}
        path={"/contact/"}
        text={"Contact now"}
      />
    </>
  );
};

export default TermsCondition;
