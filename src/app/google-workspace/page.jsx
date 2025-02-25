import FooterCta from "@/components/common/cta/FooterCtatwo.jsx";
import GoogleWorkSpaceFaq from "@/components/googleworkspace/GoogleWorkSpaceFaq";
import Googlewrokplan from "@/components/googleworkspace/Googleworkprice";
import GoogleworkspaceHero from "@/components/googleworkspace/GoogleworkspaceHero";
import GoogleWorkBenefitsPlan from "@/components/googleworkspace/GoogleWorkBenefitsPlan";
import GoogleWorkNoIncreased from "@/components/googleworkspace/GoogleWorkNoIncreased";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import EmailHostingSignup from "@/components/googleworkspace/EmailHostingSignup";
import WhyChoose from "@/components/googleworkspace/WhyChoose";
import DataCenterFeedback from "@/components/dataCenter/DataCenterFeedback";

export const metadata = {
  title:
    "Google Workspace - Business Email & Collaboration Tools | CloudMinister",
  description:
    "Empower your business with Google Workspace from CloudMinister. Get secure business email, real-time collaboration, and cloud storage for seamless team productivity.",
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
      "Google Workspace - Business Email & Collaboration Tools | CloudMinister",
    description:
      "Empower your business with Google Workspace from CloudMinister. Get secure business email, real-time collaboration, and cloud storage for seamless team productivity.",
    url: "https://cloudminister.com/google-workspace/",
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

const GoogleWorkSpace = () => {
  return (
    <>
      <GoogleworkspaceHero />
      <Googlewrokplan />
      <GoogleWorkNoIncreased />
      <GoogleWorkBenefitsPlan />
      <DataHostingDatacenterSupport />
      <EmailHostingSignup />
      <WhyChoose />
      <GoogleWorkSpaceFaq />
      <DataCenterFeedback />
      <FooterCta
        firsttital={"Book A Free Consultation Today."}
        path={"/contact/"}
        text={"Contact now"}
      />
    </>
  );
};

export default GoogleWorkSpace;
