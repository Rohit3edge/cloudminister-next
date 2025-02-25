import FooterCta from "@/components/common/cta/FooterCta";
import WhyBuyDomainHostingard from "@/components/DirectAdmin/WhyBuy";
import HostingOptions from "@/components/CpanelHostingNew/HostingOptions";
import DirectAdminHostingfaq from "@/components/DirectAdmin/DirectAdminHostingfaq"
import DataCenterFeedback from "@/components/dataCenter/DataCenterFeedback";
import DirectAdminHostingFeature from "@/components/DirectAdmin/DirectAdminHostingFeature";
import DirectAdminHostingAdvanceFeature from "@/components/DirectAdmin/DirectAdminHostingAdvanceFeature";
import DirectAdminNoIncreased from "@/components/DirectAdmin/DirectAdminNoIncreased";
import DirectAdminHostingHero from "@/components/DirectAdmin/DirectAdminHostingHero";
import PleskHostingPrice from "@/components/DirectAdmin/DirectAdminHostingPrice";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import WhyChoose from "@/components/DirectAdmin/WhyChoose"
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands"


const DirectAdmin = () => {



  return (
    <>
    <DirectAdminHostingHero/>
    <section className="domain-container position-relative z-1 overflow-hidden mb-10">
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
    <DirectAdminNoIncreased/>
    <PleskHostingPrice/>
    <DirectAdminHostingFeature/>
    <DataHostingDatacenterSupport/> 
    <DirectAdminHostingAdvanceFeature/>
    <WhyBuyDomainHostingard/>
    <WhyChoose/>
    <HostingOptions/>
    <DataCenterFeedback/>
    <DirectAdminHostingfaq/>
    <FooterCta firsttital={"Experience the Power of Direct Admin Server Management Services."} sectital={"7 Days of Risk-Free Trial "} />
    
    </>
  )
};

export default DirectAdmin
