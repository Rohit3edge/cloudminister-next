import FooterCta from "@/components/common/cta/FooterCta";
import WhyBuyDomainHostingard from "@/components/WindowsSharedHosting/WhyBuyDomainHostingard";
import DataCenterCustomerBrands from "@/components/dataCenter/DataCenterCustomerBrands";
import DataCenterFeedback from "@/components/dataCenter/DataCenterFeedback";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands"
import SharedHostingfaq from "@/components/WindowsSharedHosting/SharedHostingfaq"
import SharedHostingFeature from "@/components/WindowsSharedHosting/SharedHostingFeature";
import SharedHostingAdvanceFeature from "@/components/WindowsSharedHosting/SharedHostingAdvanceFeature";
import SharedHostingHero from "@/components/WindowsSharedHosting/SharedHostingHero";
import SharedHostingPrice from "@/components/WindowsSharedHosting/SharedHostingPrice";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import WindowsOptions from "@/components/common/Panel/WindowsOptions"

const WindowsSharedHosting = () => {


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
    <SharedHostingAdvanceFeature/>
    <DataCenterCustomerBrands/>
    <WhyBuyDomainHostingard/>
    <DataHostingDatacenterSupport/>
    <SharedHostingfaq/>
    <DataCenterFeedback/>
    <FooterCta firsttital={"Experience the Power of Windows Shared Hosting."} sectital={"7 Days of Risk-Free Trial"}/>
    </>
  )
};

export default WindowsSharedHosting
