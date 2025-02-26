import FooterCta from "@/components/common/cta/FooterCtatwo";
import PrivacyBody from "@/components/privacy/PrivacyBody";
import PrivacyBreadCrumb from "@/components/privacy/PrivacyBreadCrumb";

export const metadata = {
  title:
    "Privacy Policy | Secure & Transparent Data Practices at CloudMinister",
  description:
    "CloudMinister is committed to data protection and GDPR compliance. Review our privacy policy for complete transparency on how we manage your data.",
  // keywords: [
  //   "Akamai Cloud Hosting",
  //   "Best Cloud Hosting",
  //   "Secure Web Hosting",
  //   "Fast Website Hosting",
  //   "Cloud Data Solutions",
  //   "Akamai CDN",
  // ],
  openGraph: {
    title:
      "Privacy Policy | Secure & Transparent Data Practices at CloudMinister",
    description:
      "CloudMinister is committed to data protection and GDPR compliance. Review our privacy policy for complete transparency on how we manage your data.",
    url: "https://cloudminister.com/privacy-policy/",
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

const PrivacyPolicy = () => {
  return (
    <>
      <PrivacyBreadCrumb />
      <PrivacyBody />
      <FooterCta
        firsttital={"Book A Free Consultation Today."}
        path={"/contact/"}
        text={"Contact now"}
      />
    </>
  );
};

export default PrivacyPolicy;
