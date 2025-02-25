import FooterCta from "@/components/common/cta/FooterCtatwo";
import RefundBody from "@/components/Disclaimer/RefundBody";
import RefundBreadCrumb from "@/components/Disclaimer/RefundBreadCrumb";
import DataCenterCustomerBrands from "@/components/dataCenter/DataCenterCustomerBrands";

const Disclaimer = () => {


  return (
    <>

    <RefundBreadCrumb/>
     <RefundBody/>  
     <DataCenterCustomerBrands/>
       <FooterCta firsttital={"Book A Free Consultation Today."} path={"/contact/"}  text={"Contact now"}/>
    </>
  )
};

export default Disclaimer;
