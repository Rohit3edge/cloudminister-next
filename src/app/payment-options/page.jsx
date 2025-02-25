import FooterCta from "@/components/common/cta/FooterCtatwo";
import PaymentOptions from "@/components/PaymentPage/PaymentOptions";
import RefundBreadCrumb from "@/components/PaymentPage/RefundBreadCrumb";
import PaymentOptionsAll from "@/components/PaymentPage/PaymentOptionsAll";

const PaymentPage = () => {
  return (
    <>
      <RefundBreadCrumb />
      <PaymentOptions />
      <PaymentOptionsAll />
     <FooterCta firsttital={"Book A Free Consultation Today."} path={"/contact/"}  text={"Contact now"}/>
    </>
  );
};

export default PaymentPage;
