"use client";
import FooterCta from "@/components/common/cta/FooterCtatwo";
import RefundBody from "@/components/Refund/RefundBody";
import RefundBreadCrumb from "@/components/Refund/RefundBreadCrumb";

const RefundPolicy = () => {


  return (
    <>
    <RefundBreadCrumb/>
     <RefundBody/>  
     <FooterCta firsttital={"Book A Free Consultation Today."} path={"/contact/"}  text={"Contact now"}/>
    </>
  )
};

export default RefundPolicy;
