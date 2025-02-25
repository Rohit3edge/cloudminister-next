import FooterCta from "@/components/common/cta/FooterCta";
import GoogleWorkSpaceFaq from "@/components/MicrosoftOffice/GoogleWorkSpaceFaq";
import Googlewrokplan from "@/components/MicrosoftOffice/Googleworkprice";
import MicrosoftOfficeHero from "@/components/MicrosoftOffice/MicrosoftOfficeHero";
import GoogleWorkBenefitsPlan from "@/components/MicrosoftOffice/GoogleWorkBenefitsPlan";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands";
import MicrosoftofficeNoIncreased from "@/components/MicrosoftOffice/MicrosoftofficeNoIncreased";
import EmailHostingSignup from "@/components/MicrosoftOffice/EmailHostingSignup";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import WhyChoose from "@/components/MicrosoftOffice/WhyChoose";
import DataCenterFeedback from "@/components/dataCenter/DataCenterFeedback";

export const metadata = {
  title:
    "Boost Business Productivity with Microsoft Office 365 in India | CloudMinister",
  description:
    "Access affordable Microsoft Office 365 subscriptions with CloudMinister. Scalable plans, expert support, and cloud-based tools for businesses of all sizes.",
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
      "Boost Business Productivity with Microsoft Office 365 in India | CloudMinister",
    description:
      "Access affordable Microsoft Office 365 subscriptions with CloudMinister. Scalable plans, expert support, and cloud-based tools for businesses of all sizes.",
    url: "https://cloudminister.com/microsoft-office365/",
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

const Microsoftoffice = () => {
  return (
    <>
      <MicrosoftOfficeHero />
      <Googlewrokplan />
      <MicrosoftofficeNoIncreased />
      <GoogleWorkBenefitsPlan />
      <DataHostingDatacenterSupport />
      <EmailHostingSignup />
      <WhyChoose />
      <GoogleWorkSpaceFaq />
      <DataCenterFeedback />
      <FooterCta
        firsttital={"Experience the Power of Microsoft Office 365."}
        sectital={"7 Days of Risk-Free Trial"}
      />
    </>
  );
};

export default Microsoftoffice;
