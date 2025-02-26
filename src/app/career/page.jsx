import ModernHomeFooter from "@/components/Career/ModernHomeFooter";
import CareerHero from "@/components/Career/CareerHero";
import Support from "@/components/Career/Support";
import Job from "@/components/Career/Job";
import RecruitmentProcess from "@/components/Career/RecruitmentProcess";
import Feature from "@/components/Career/Feature";
import ImageGallery from "@/components/Career/ImageGallery";

export const metadata = {
  title: "CloudMinister Careers | Explore Job Openings & Growth Opportunities",
  description:
    "Looking for a rewarding career in cloud hosting and IT services? Check out job openings at CloudMinister and become part of our innovative team.",
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
      "CloudMinister Careers | Explore Job Openings & Growth Opportunities",
    description:
      "Looking for a rewarding career in cloud hosting and IT services? Check out job openings at CloudMinister and become part of our innovative team.",
    url: "https://cloudminister.com/career/",
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

const Career = () => {
  return (
    <>
      <CareerHero />
      <Support />
      <Job />
      <RecruitmentProcess />
      <Feature />
      <ImageGallery />
      <ModernHomeFooter />
    </>
  );
};

export default Career;
