import FooterCta from "@/components/common/cta/FooterCtatwo";
import TermsBody from "@/components/terms/TermsBody";
import TermsBreadcrumb from "@/components/terms/TermsBreadcrumb";

const TermsCondition = () => {
  return (
    <>
      <TermsBreadcrumb/>
      <TermsBody/>
      <FooterCta firsttital={"Book A Free Consultation Today."} path={"/contact/"}  text={"Contact now"}/>
    </>
  )
};

export default TermsCondition
