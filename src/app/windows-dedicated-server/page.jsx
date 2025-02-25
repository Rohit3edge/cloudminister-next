import FooterCta from "@/components/common/cta/FooterCta";
import WhyBuyDomainHostingard from "@/components/dedicatedwindowshosting/WhyBuyDomainHostingard";
import DataCenterCustomerBrands from "@/components/dataCenter/DataCenterCustomerBrands";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands"
import LinuxDedicatedfaq from "@/components/dedicatedwindowshosting/LinuxDedicatedfaq"
import DataCenterFeedback from "@/components/dataCenter/DataCenterFeedback";
import SharedHostingFeature from "@/components/dedicatedwindowshosting/SharedHostingFeature";
import SharedHostingHero from "@/components/dedicatedwindowshosting/SharedHostingHero";
import SharedHostingPrice from "@/components/dedicatedwindowshosting/SharedHostingPrice";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import BrandCardsSection from "@/components/dedicatedwindowshosting/BrandCardsSection";
import EnterpriseServer from "@/components/dedicatedwindowshosting/EnterpriseServer";
import WindowsOptions from "@/components/common/Panel/WindowsOptions"

const Dedicatedwindowshosting = () => {

  return (
    <>

    <SharedHostingHero/>
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

    <SharedHostingPrice/>
  
    <SharedHostingFeature/>
  
    <WindowsOptions/>
    <WhyBuyDomainHostingard/>
    <DataCenterCustomerBrands/>
    <BrandCardsSection/>
    <EnterpriseServer/>
    <DataHostingDatacenterSupport/>
    <LinuxDedicatedfaq/>
    <DataCenterFeedback/>
    <FooterCta firsttital={"Experience the Power of Windows Dedicated Server."} sectital={"7 Days of Risk-Free Trial"} />
    </>
  )
};

export default Dedicatedwindowshosting
