import FooterCta from "@/components/common/cta/FooterCtatwo.jsx";
import WhyBuyDomainHostingard from "@/components/DataAnalytics/WhyBuy";
import DataAnalyticsfaq from "@/components/DataAnalytics/DataAnalyticsfaq"
import  DataAnalyticsNoIncreased from "@/components/DataAnalytics/DataAnalyticsNoIncreased";
import DataCenterFeedback from "@/components/dataCenter/DataCenterFeedback";
import DataAnalyticsHostingFeature from "@/components/DataAnalytics/DataAnalyticsHostingFeature";
import DataAnalyticsHero  from "@/components/DataAnalytics/DataAnalyticsHero";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands"


const DataAnalytics = () => {

  return (
    <>
    <DataAnalyticsHero/>
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
    <DataAnalyticsNoIncreased/>
    <DataAnalyticsHostingFeature/>
    <DataHostingDatacenterSupport/>
    <WhyBuyDomainHostingard/>
    <DataCenterFeedback/>
    <DataAnalyticsfaq/>
       <FooterCta firsttital={"Book A Free Consultation Today."} path={"/contact/"}  text={"Contact now"}/>
    
    </>
  )
};

export default DataAnalytics
