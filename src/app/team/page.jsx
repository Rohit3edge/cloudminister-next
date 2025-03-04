import FooterCta from "@/components/common/cta/FooterCtatwo";
import AboutUsTeam from "@/components/Team/AboutUsTeam";
import RefundBreadCrumb from "@/components/Team/RefundBreadCrumb";

export const metadata = {
  title: "Meet the CloudMinister Team | Experts in Cloud & Server Management",
  description:
    "Meet the skilled professionals behind CloudMinister’s success. Our cloud architects, engineers, and support specialists ensure top-notch hosting solutions.",
  // keywords: [
  //   "Akamai Cloud Hosting",
  //   "Best Cloud Hosting",
  //   "Secure Web Hosting",
  //   "Fast Website Hosting",
  //   "Cloud Data Solutions",
  //   "Akamai CDN",
  // ],
  openGraph: {
    title: "Meet the CloudMinister Team | Experts in Cloud & Server Management",
    description:
      "Meet the skilled professionals behind CloudMinister’s success. Our cloud architects, engineers, and support specialists ensure top-notch hosting solutions.",
    url: "https://cloudminister.com/team/",
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

const Team = () => {
  return (
    <>
      <RefundBreadCrumb />
      <AboutUsTeam />
      <FooterCta
        firsttital={"Book A Free Consultation Today."}
        path={"/contact/"}
        text={"Contact now"}
      />
    </>
  );
};

export default Team;
