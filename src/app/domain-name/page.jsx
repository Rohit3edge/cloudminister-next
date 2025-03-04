import DomainRegiHero from "@/components/domainRegi/DomainRegiHero";
import WhyBuyDomainHostingard from "@/components/domainRegi/WhyBuyDomainHostingard";
import DomainFaq from "@/components/domainRegi/DomainFaq";
import FooterCta from "@/components/common/cta/FooterCtatwo";
import DomainExterntion from "@/components/common/domain/DomainExterntion";

export const metadata = {
  title:
    "Cheap Domain Name Registration | Reliable & Fast Registration with CloudMinister",
  description:
    "Find and register the perfect domain name from popular extensions (.com, .in, .net, and more) with CloudMinister. Enjoy instant registration, WHOIS protection, and reliable domain management.",
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
      "Cheap Domain Name Registration | Reliable & Fast Registration with CloudMinister",
    description:
      "Find and register the perfect domain name from popular extensions (.com, .in, .net, and more) with CloudMinister. Enjoy instant registration, WHOIS protection, and reliable domain management.",
    url: "https://cloudminister.com/domain-name/",
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

const DomainRegi = () => {
  return (
    <>
      <DomainRegiHero />
      <DomainExterntion />
      <WhyBuyDomainHostingard />
      <DomainFaq />
      <FooterCta
        firsttital={"Book A Free Consultation Today."}
        path={"/contact/"}
        text={"Contact now"}
      />
    </>
  );
};

export default DomainRegi;
