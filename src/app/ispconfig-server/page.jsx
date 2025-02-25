import FooterCta from "@/components/common/cta/FooterCta";
import WhyBuyDomainHostingard from "@/components/IspConfig/WhyBuy";
import IspConfigHostingfaq from "@/components/IspConfig/IspConfigHostingfaq"
import IspNoIncreased from "@/components/IspConfig/IspNoIncreased";
import DataCenterFeedback from "@/components/dataCenter/DataCenterFeedback";
import IspConfigFeature from "@/components/IspConfig/IspConfigFeature";
import IspConfigAdvanceFeature from "@/components/IspConfig/IspConfigAdvanceFeature";
import IspConfigHero from "@/components/IspConfig/IspConfigHero";
import IspConfigPrice from "@/components/IspConfig/IspConfigPrice";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands"
import WhyChoose from "@/components/IspConfig/WhyChoose"
import HostingOptions from "@/components/CpanelHostingNew/HostingOptions";


const IspConfig = () => {

  return (
    <>
    <IspConfigHero/>
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
    <IspNoIncreased/>
    <IspConfigPrice/>
    <IspConfigFeature/>
    <DataHostingDatacenterSupport/>
    <IspConfigAdvanceFeature/>
    <WhyBuyDomainHostingard/>
    <WhyChoose/>
    <HostingOptions/>
    <DataCenterFeedback/>
    <IspConfigHostingfaq/>
    <FooterCta firsttital={'Experience the Power of Virtualizor Server Management.'} sectital={'7 Days of Risk-Free Trial '}/>
    
    </>
  )
};

export default IspConfig
