import VpsHostingFaqTwo from "@/components/WindowsGpuServer/VpsHostingFaqTwo";
import VpsHostingFeatures from "@/components/WindowsGpuServer/VpsHostingFeature";
import OperatingSystemsSection from "@/components/WindowsGpuServer/CloudHostOperaingSystems";
import VpsHostingHero from "@/components/WindowsGpuServer/VpsHostingHero";
import WindowsVpsHostingPlansOne from "@/components/WindowsGpuServer/WindowsVpsHostingPlansOne";
import VpsHostingTechPartner from "@/components/WindowsGpuServer/VpsHostingTechPartner";
import VpsHostingWhyChoose from "@/components/WindowsGpuServer/VpsHostingWhyChoose";
import FooterCta from "@/components/common/cta/FooterCta";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands"
import DataCenterFeedback from "@/components/dataCenter/DataCenterFeedback";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import DataCenterCustomerBrands from "@/components/dataCenter/DataCenterCustomerBrands";
import { windowsgpupricingData } from "../../utils/data";
import WindowsOptions from "@/components/common/Panel/WindowsOptions"


const WindowsGpuServer = () => {



  return (
    <>

      <VpsHostingHero/>
      <section className=" position-relative z-1 overflow-hidden mb-8 extra-domain-container" >
          <div className="container">
            <div className="row justify-content-center mb-4">
              <div className="col-xl-12">
                <div className="card rounded-4">
                  <DataCenterBrands />
                </div>
              </div>
            </div>
          </div>
        </section>
        <WindowsVpsHostingPlansOne title="Boost AI & ML Productivity with Powerful Windows GPU Servers Plans"  price={true} pricingData={windowsgpupricingData} subtitle="Unlock our Windows Dedicated GPU Server Hosting to achieve optimal performance. Savor devoted resources, strong security, outstanding speed, and unparalleled uptime. Our hosting, which is customized to your requirements according to the business, guarantees smooth scalability and effectiveness for the expansion of your company in the industry."/> 
       
        <VpsHostingFeatures/>
        <WindowsOptions/>  
      <VpsHostingWhyChoose/>
      <OperatingSystemsSection/>
      <DataHostingDatacenterSupport/>
      <VpsHostingTechPartner/>
      <DataCenterCustomerBrands/>
      {/* <AdvanceFeature/> */}
      <DataCenterFeedback/>
      <VpsHostingFaqTwo/>
      <FooterCta firsttital={"Experience the Power of Windows GPU Server."} sectital={"7 Days of Risk-Free Trial"}/>
    </>
  )
};

export default WindowsGpuServer
