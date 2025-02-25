import FooterCta from "@/components/common/cta/FooterCta";
import WhyBuyCloud from "@/components/CloudHostingNew/WhyBuyCloud";
import DataCenterCustomerBrands from "@/components/dataCenter/DataCenterCustomerBrands";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands"
import CloudHostingfaq from "@/components/CloudHostingNew/CloudHostingfaq"
import DataCenterFeedback from "@/components/dataCenter/DataCenterFeedback";
import SharedHostingFeature from "@/components/CloudHostingNew/SharedHostingFeature";
import CloudHostingTechPartner from "@/components/CloudHostingNew/CloudHostingTechPartner";
import SharedHostingHero from "@/components/CloudHostingNew/SharedHostingHero";
import SharedHostingPrice from "@/components/CloudHostingNew/SharedHostingPrice";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";


const CloudHosting = () => {

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
    <CloudHostingTechPartner/>
    <SharedHostingFeature/>
    <DataCenterCustomerBrands/>
    <WhyBuyCloud/>
    <DataHostingDatacenterSupport/>
    <CloudHostingfaq/>
    <DataCenterFeedback/>
    <FooterCta firsttital={"Experience the Power of Cloud Hosting."} sectital={"7 Days of Risk-Free Trial"} />
    </>
  )
};

export default CloudHosting
