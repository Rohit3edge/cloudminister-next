// import AboutUsAward from "@/components/aboutUs/AboutUsAward";
import AboutUsBoostingData from "@/components/aboutUs/AboutUsBoostingData";
import AboutUsHero from "@/components/aboutUs/AboutUsHero";
import AboutUsStory from "@/components/aboutUs/AboutUsStory";
import AboutusStoryTimeLine from "@/components/aboutUs/AboutusStoryTimeLine";
import AboutUsTeam from "@/components/aboutUs/AboutUsTeam";
import FooterCta from "@/components/common/cta/FooterCtatwo.jsx";
import DataCenterFeedback from "@/components/dataCenter/DataCenterFeedback";
import DataCenterCustomerBrands from "@/components/dataCenter/DataCenterCustomerBrands";

export const metadata = {
  title:
    "About CloudMinister Technologies Pvt Ltd  | Trusted Cloud Hosting & Server Management Company",
  description:
    "CloudMinister is committed to delivering reliable cloud and hosting solutions,  and server management solutions. Learn about our mission, values, and journey.",
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
      "About CloudMinister Technologies Pvt Ltd  | Trusted Cloud Hosting & Server Management Company",
    description:
      "CloudMinister is committed to delivering reliable cloud and hosting solutions,  and server management solutions. Learn about our mission, values, and journey.",
    url: "https://cloudminister.com/about/",
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

const AboutUs = () => {
  return (
    <>
      <AboutUsHero />
      <AboutUsStory />
      <AboutUsTeam />
      <AboutusStoryTimeLine />
      <AboutUsBoostingData />
      <DataCenterCustomerBrands />
      {/* <AboutUsAward/> */}
      <DataCenterFeedback />
      <FooterCta
        firsttital={"Book A Free Consultation Today."}
        path={"/contact/"}
        text={"Contact now"}
      />
    </>
  );
};

export default AboutUs;
