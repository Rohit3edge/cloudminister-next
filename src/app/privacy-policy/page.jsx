import FooterCta from "@/components/common/cta/FooterCtatwo";
import PrivacyBody from "@/components/privacy/PrivacyBody";
import PrivacyBreadCrumb from "@/components/privacy/PrivacyBreadCrumb";

const PrivacyPolicy = () => {
  return (
    <>
      <PrivacyBreadCrumb/>
      <PrivacyBody/>
        <FooterCta firsttital={"Book A Free Consultation Today."} path={"/contact/"}  text={"Contact now"}/>
    </>
  )
};

export default PrivacyPolicy
