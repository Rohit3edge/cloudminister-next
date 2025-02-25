import FooterCta from "@/components/common/cta/FooterCta";
import GoogleWorkSpaceFaq from "@/components/MicrosoftOffice/GoogleWorkSpaceFaq";
import Googlewrokplan from "@/components/MicrosoftOffice/Googleworkprice";
import MicrosoftOfficeHero from "@/components/MicrosoftOffice/MicrosoftOfficeHero";
import GoogleWorkBenefitsPlan from "@/components/MicrosoftOffice/GoogleWorkBenefitsPlan";
import DataCenterBrands from '@/components/dataCenter/DataCenterBrands'
import MicrosoftofficeNoIncreased from '@/components/MicrosoftOffice/MicrosoftofficeNoIncreased'
import EmailHostingSignup from "@/components/MicrosoftOffice/EmailHostingSignup";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import WhyChoose from "@/components/MicrosoftOffice/WhyChoose"
import DataCenterFeedback from "@/components/dataCenter/DataCenterFeedback";



const Microsoftoffice = () => {


  return (
    <>
    <MicrosoftOfficeHero/>
    <Googlewrokplan/>
    <MicrosoftofficeNoIncreased/>
    <GoogleWorkBenefitsPlan/>
    <DataHostingDatacenterSupport/> 
    <EmailHostingSignup/>
    <WhyChoose/>
    <GoogleWorkSpaceFaq/>
    <DataCenterFeedback/>
     <FooterCta firsttital={"Experience the Power of Microsoft Office 365."} sectital={"7 Days of Risk-Free Trial"}/>

    </>
  )
};

export default Microsoftoffice
