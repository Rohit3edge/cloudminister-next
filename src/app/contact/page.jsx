import FooterCta from "@/components/common/cta/FooterCtatwo";
import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import OfficeLocations from "@/components/contact/OfficeLocations";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";

export const metadata = {
  title: "CloudMinister Contact | Reach Our Team for Support & Services",
  description:
    "Find CloudMinister’s contact details, including phone, email, and office location.",
  // keywords: [
  //   "Akamai Cloud Hosting",
  //   "Best Cloud Hosting",
  //   "Secure Web Hosting",
  //   "Fast Website Hosting",
  //   "Cloud Data Solutions",
  //   "Akamai CDN",
  // ],
  openGraph: {
    title: "CloudMinister Contact | Reach Our Team for Support & Services",
    description:
      "Find CloudMinister’s contact details, including phone, email, and office location.",
    url: "https://cloudminister.com/contact/",
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

const Contact = () => {
  return (
    <>
      <ContactHero />
      <DataHostingDatacenterSupport />
      <OfficeLocations />
      <ContactForm />
      <FooterCta
        firsttital={"Book A Free Consultation Today."}
        path={"/contact"}
        text={"Contact now"}
      />
    </>
  );
};

export default Contact;
