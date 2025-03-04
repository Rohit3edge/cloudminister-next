import AffiliateNoIncreased from "@/components/Affiliate/AkamiCloudNoIncreased";
import AffiliateHero from "@/components/Affiliate/AkamiCloudHero";
import AkamiCloudHostingFeature from "@/components/Affiliate/AkamiCloudHostingFeature";
import AwsHostingfaq from "@/components/Affiliate/AwsHostingfaq";
import DataCenterFeedbackWrapper from "@/components/dataCenter/DataCenterFeedbackWrapper";
import FooterCta from "@/components/common/cta/FooterCtatwo.jsx";

export const metadata = {
  title: "Become a CloudMinister Affiliate | High Commissions & Easy Setup",
  description:
    "Sign up for CloudMinister’s affiliate program in minutes and start earning commissions. Promote industry-leading cloud services with ease.",
  // keywords: [
  //   "Akamai Cloud Hosting",
  //   "Best Cloud Hosting",
  //   "Secure Web Hosting",
  //   "Fast Website Hosting",
  //   "Cloud Data Solutions",
  //   "Akamai CDN",
  // ],
  openGraph: {
    title: "Become a CloudMinister Affiliate | High Commissions & Easy Setup",
    description:
      "Sign up for CloudMinister’s affiliate program in minutes and start earning commissions. Promote industry-leading cloud services with ease.",
    url: "https://cloudminister.com/affiliate/",
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

const Affiliate = () => {
  return (
    <>
      <AffiliateHero />
      <AffiliateNoIncreased />
      <AkamiCloudHostingFeature />
      <DataCenterFeedbackWrapper />
      <AwsHostingfaq />
      <FooterCta
        firsttital={"Book A Free Consultation Today."}
        path={"/contact/"}
        text={"Contact now"}
      />
    </>
  );
};

export default Affiliate;
