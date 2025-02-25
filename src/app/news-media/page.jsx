import FooterCta from "@/components/common/cta/FooterCtatwo";
import RefundBody from "@/components/NewsMedia/RefundBody";
import RefundBreadCrumb from "@/components/NewsMedia/RefundBreadCrumb";

const RefundPolicy = () => {
  return (
    <>
      <RefundBreadCrumb />
      <RefundBody />
      <FooterCta
        firsttital={"Book A Free Consultation Today."}
        path={"/contact/"}
        text={"Contact now"}
      />
    </>
  );
};

export default RefundPolicy;
