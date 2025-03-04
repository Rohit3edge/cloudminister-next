import FooterCta from "@/components/common/cta/FooterCtatwo";
import PaymentOptions from "@/components/PaymentPage/PaymentOptions";
import RefundBreadCrumb from "@/components/PaymentPage/RefundBreadCrumb";
import PaymentOptionsAll from "@/components/PaymentPage/PaymentOptionsAll";

export const metadata = {
  title: "CloudMinister Payment Options | Secure & Flexible Payment Methods",
  description:
    "Make secure payments for CloudMinister services using credit cards, PayPal, net banking, UPI, and more. Safe, fast, and reliable transactions guaranteed.",
  // keywords: [
  //   "Akamai Cloud Hosting",
  //   "Best Cloud Hosting",
  //   "Secure Web Hosting",
  //   "Fast Website Hosting",
  //   "Cloud Data Solutions",
  //   "Akamai CDN",
  // ],
  openGraph: {
    title: "CloudMinister Payment Options | Secure & Flexible Payment Methods",
    description:
      "Make secure payments for CloudMinister services using credit cards, PayPal, net banking, UPI, and more. Safe, fast, and reliable transactions guaranteed.",
    url: "https://cloudminister.com/payment-options/",
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

const PaymentPage = () => {
  return (
    <>
      <RefundBreadCrumb />
      <PaymentOptions />
      <PaymentOptionsAll />
      <FooterCta
        firsttital={"Book A Free Consultation Today."}
        path={"/contact/"}
        text={"Contact now"}
      />
    </>
  );
};

export default PaymentPage;
