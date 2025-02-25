import FooterCta from "@/components/common/cta/FooterCtatwo";
import AboutUsTeam from "@/components/Team/AboutUsTeam";
import RefundBreadCrumb from "@/components/Team/RefundBreadCrumb";

const Team = () => {
  return (
    <>
    <RefundBreadCrumb/>
    <AboutUsTeam/>  
     <FooterCta firsttital={"Book A Free Consultation Today."} path={"/contact/"}  text={"Contact now"}/>
    </>
  )
};

export default Team;
