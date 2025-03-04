import React from "react";
import SslHero from "@/components/Ssl_Certificates/SslHero";
import WildCardSsl from "@/components/Ssl_Certificates/WildCardSsl";
import Sslvarietyreasons from "@/components/Ssl_Certificates/Sslvarietyreasons";
import BenefitsSsl from "@/components/Ssl_Certificates/BenefitsSsl";
import SslCertificatesFaq from "@/components/Ssl_Certificates/SslCertificatesFaq";
import FooterCta from "@/components/common/cta/FooterCta";
import SslCertificatemean from "@/components/Ssl_Certificates/SslCertificatemean";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import SslNoIncreased from "@/components/Ssl_Certificates/SslNoIncreased";
import DataCenterFeedbackWrapper from "@/components/dataCenter/DataCenterFeedbackWrapper";

export const metadata = {
  title:
    "Buy SSL Certificate in India | Secure Communication and Data Protection | CloudMinister",
  description:
    "Protect your website and customer data with CloudMinister's SSL certificates. Enjoy strong encryption, HTTPS security, and enhanced website trust.",
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
      "Buy SSL Certificate in India | Secure Communication and Data Protection | CloudMinister",
    description:
      "Protect your website and customer data with CloudMinister's SSL certificates. Enjoy strong encryption, HTTPS security, and enhanced website trust.",
    url: "https://cloudminister.com/ssl-certificates/",
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

function SslCertificates() {
  return (
    <>
      <SslHero />
      <WildCardSsl />
      <SslNoIncreased />
      <Sslvarietyreasons />
      <DataHostingDatacenterSupport />
      <BenefitsSsl />
      <SslCertificatemean />
      <SslCertificatesFaq />
      <DataCenterFeedbackWrapper />
      <FooterCta
        firsttital={"Experience the Power of SSL Certificate."}
        sectital={"7 Days of Risk-Free Trial "}
      />
    </>
  );
}

export default SslCertificates;
