// import FooterCta from "@/components/common/cta/FooterCta";
import FooterCta from "@/components/common/cta/FooterCtatwo";
import DomainExterntion from "@/components/common/domain/DomainExterntion";
import DomainTransferStep from "@/components/common/domain/DomainTransferStep";
import DomainFaq from "@/components/common/faq/DomainFaq";
import TransferDomainHero from "@/components/transferDomain/TransferDomainHero";
import TransferDomainWhyTransfer from "@/components/transferDomain/TransferDomainWhyTransfer";
import TransferDomaiSearch from "@/components/transferDomain/TransferDomaiSearch";

export const metadata = {
  title:
    "Transfer Your Domain Name to CloudMinister | Fast & Secure Domain Transfer Process",
  description:
    "Easily transfer your domain to CloudMinister with zero downtime. Enjoy secure, fast, and hassle-free domain migration with expert support.",
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
      "Transfer Your Domain Name to CloudMinister | Fast & Secure Domain Transfer Process",
    description:
      "Easily transfer your domain to CloudMinister with zero downtime. Enjoy secure, fast, and hassle-free domain migration with expert support.",
    url: "https://cloudminister.com/domain-transfer/",
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

const TransferDomain = () => {
  return (
    <>
      <TransferDomainHero />
      <TransferDomaiSearch />
      <DomainTransferStep />
      <TransferDomainWhyTransfer />
      <DomainExterntion transferdomain />
      <DomainFaq />
      <FooterCta
        firsttital={"Book A Free Consultation Today."}
        path={"/contact/"}
        text={"Contact now"}
      />
    </>
  );
};

export default TransferDomain;
