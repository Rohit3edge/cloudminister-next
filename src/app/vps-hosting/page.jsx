
import VpsHostingFaqTwo from "@/components/MainVpsHosting/VpsHostingFaqTwo";
import VpsHostingFeatures from "@/components/MainVpsHosting/VpsHostingFeature";
import VpsHostingHero from "@/components/MainVpsHosting/VpsHostingHero";
import IndiaWeb from "@/components/MainVpsHosting/IndiaWeb";
import VpsHostingPlansOne from "@/components/MainVpsHosting/VpsHostingPlansOne";
import HostingOptions from "@/components/MainVpsHosting/HostingOptions";
import VpsHostingWhyChoose from "@/components/MainVpsHosting/VpsHostingWhyChoose";
import FooterCta from "@/components/MainVpsHosting/FooterCta";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands"
import DataCenterFeedback from "@/components/dataCenter/DataCenterFeedback";
import DataHostingDatacenterSupport from "../../components/dataCenter/CloudHostingDatacenterLocation";
import DataCenterCustomerBrands from "@/components/dataCenter/DataCenterCustomerBrands";
import AdvanceFeature from "@/components/MainVpsHosting/AdvanceFeature";
import { testingpricingData,windowsvpspricingData } from "../../utils/data";

const MainVpsHosting = () => {



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
      <VpsHostingPlansOne title="Affordable VPS Hosting Plans for Your Business | High Performance Guaranteed"  price={true} linuxPricingData={testingpricingData} windowsPricingData={windowsvpspricingData} subtitle=""/> 
      <VpsHostingWhyChoose/>
      <HostingOptions/>
      <VpsHostingFeatures/>
      <DataHostingDatacenterSupport/>
      <IndiaWeb/>
      {/* <ControlPanel/> */}
      <AdvanceFeature/>
      <DataCenterFeedback />
      <DataCenterCustomerBrands/>
      <VpsHostingFaqTwo/>
      <FooterCta/>
    </>
  )
};

export default MainVpsHosting
