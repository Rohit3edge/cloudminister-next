import FooterCta from "@/components/common/cta/FooterCtatwo.jsx";
import GoogleWorkSpaceFaq from "@/components/googleworkspace/GoogleWorkSpaceFaq";
import Googlewrokplan from "@/components/googleworkspace/Googleworkprice";
import GoogleworkspaceHero from "@/components/googleworkspace/GoogleworkspaceHero";
import GoogleWorkBenefitsPlan from "@/components/googleworkspace/GoogleWorkBenefitsPlan";
import GoogleWorkNoIncreased from '@/components/googleworkspace/GoogleWorkNoIncreased'
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import EmailHostingSignup from "@/components/googleworkspace/EmailHostingSignup";
import WhyChoose from "@/components/googleworkspace/WhyChoose"
import DataCenterFeedback from "@/components/dataCenter/DataCenterFeedback";

const GoogleWorkSpace = () => {

  return (
    <>
    <GoogleworkspaceHero/>
    <Googlewrokplan/>
    <GoogleWorkNoIncreased/>
    <GoogleWorkBenefitsPlan/>
    <DataHostingDatacenterSupport/> 
    <EmailHostingSignup/>
    <WhyChoose/>
    <GoogleWorkSpaceFaq/>
        <DataCenterFeedback/>
 <FooterCta firsttital={"Book A Free Consultation Today."} path={"/contact/"}  text={"Contact now"}/>

    </>
  )
};

export default GoogleWorkSpace
