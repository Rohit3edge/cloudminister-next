import VpsHostingFaqTwo from "@/components/LinuxGpuServer/VpsHostingFaqTwo";
import VpsHostingFeatures from "@/components/LinuxGpuServer/VpsHostingFeature";
import OperatingSystemsSection from "@/components/LinuxGpuServer/CloudHostOperaingSystems";
import VpsHostingHero from "@/components/LinuxGpuServer/VpsHostingHero";
import VpsHostingPlansOne from "@/components/LinuxGpuServer/VpsHostingPlansOne";
import VpsHostingTechPartner from "@/components/LinuxGpuServer/VpsHostingTechPartner";
import VpsHostingWhyChoose from "@/components/LinuxGpuServer/VpsHostingWhyChoose";
import FooterCta from "@/components/common/cta/FooterCta";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands"
import DataCenterFeedback from "@/components/dataCenter/DataCenterFeedback";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import DataCenterCustomerBrands from "@/components/dataCenter/DataCenterCustomerBrands";
import { gpupricingData } from "../../utils/data";
import LinuxOptions from "@/components/common/Panel/LinuxOptions"

const LinuxGpuServer = () => {


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
        <VpsHostingPlansOne title="Affordable Linux GPU Server Hosting Plans – Starting at the best prices!"  price={true} pricingData={gpupricingData} subtitle="With our Linux GPU server hosting, you may achieve high performance as per your business expectations. Savor specialized resources, strong security, lightning-fast performance, and outstanding uptime—all customized to meet the particular requirements of your business. Boost your success right now!"/>       
        <VpsHostingFeatures/>
        <LinuxOptions/>
      <VpsHostingWhyChoose/>
      <OperatingSystemsSection/>
      <DataHostingDatacenterSupport/>
      <VpsHostingTechPartner/>
      <DataCenterCustomerBrands/>
      {/* <AdvanceFeature/> */}
      <DataCenterFeedback/>
      <VpsHostingFaqTwo/>
    <FooterCta firsttital={"Experience the Power of Linux GPU Server."} sectital={"7 Days of Risk-Free Trial"}/>
    </>
  )
};

export default LinuxGpuServer
