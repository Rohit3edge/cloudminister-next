import FooterCta from "@/components/sharedHosting/FooterCta";
import WhyBuyDomainHostingard from "@/components/common/domain/WhyBuyDomainHostingard";
import DataCenterCustomerBrands from "@/components/dataCenter/DataCenterCustomerBrands";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands"
import SharedHostingfaq from "@/components/common/faq/SharedHostingfaq"
import DataCenterFeedback from "@/components/dataCenter/DataCenterFeedback";
import SharedHostingFeature from "@/components/sharedHosting/SharedHostingFeature";
import SharedHostingAdvanceFeature from "@/components/sharedHosting/SharedHostingAdvanceFeature";
import SharedHostingHero from "@/components/sharedHosting/SharedHostingHero";
import SharedHostingPrice from "@/components/sharedHosting/SharedHostingPrice";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import LinuxOptions from "@/components/common/Panel/LinuxOptions"

const SharedHosting = () => {


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
    {/* <SharedHostingPrice/> */}
    <SharedHostingFeature/>
    <LinuxOptions/>
    <SharedHostingAdvanceFeature/>
    <DataCenterCustomerBrands/>
    <WhyBuyDomainHostingard/>
    <DataHostingDatacenterSupport/>
    <SharedHostingfaq/>
    <DataCenterFeedback/>
    <FooterCta/>
    </>
  )
};

export default SharedHosting
