import FooterCta from "@/components/common/cta/FooterCtatwo";
import RefundBody from "@/components/Sla/RefundBody";
import RefundBreadCrumb from "@/components/Sla/RefundBreadCrumb";
import DataCenterCustomerBrands from "@/components/dataCenter/DataCenterCustomerBrands";


const Sla = () => {

  return (
    <>

    <RefundBreadCrumb/>
    <RefundBody/>  
     <DataCenterCustomerBrands/>
       <FooterCta firsttital={"Book A Free Consultation Today."} path={"/contact/"}  text={"Contact now"}/>
    </>
  )
};

export default Sla;
