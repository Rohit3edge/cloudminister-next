import FooterCta from "@/components/common/cta/FooterCta";
import WhyBuyDomainHostingard from "@/components/Google/WhyBuy";
import GoogleHostingfaq from "@/components/Google/GoogleHostingfaq";
import GoogleNoIncreased from "@/components/Google/GoogleNoIncreased";
import DataCenterFeedback from "@/components/dataCenter/DataCenterFeedback";
import GoogleFeature from "@/components/Google/GoogleFeature";
import GoogleAdvanceFeature from "@/components/Google/GoogleAdvanceFeature";
import GoogleHero from "@/components/Google/GoogleHero";
import GooglePrice from "@/components/Google/GooglePrice";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands";
import WhyChoose from "@/components/Google/WhyChoose";
import HostingOptions from "@/components/CpanelHostingNew/HostingOptions";

const Google = () => {


  return (
    <>
    <GoogleHero/>
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
    <GoogleNoIncreased/>
    <GooglePrice/>
    <GoogleFeature/>
    <DataHostingDatacenterSupport/>
    <GoogleAdvanceFeature/>
    <WhyBuyDomainHostingard/>
    <WhyChoose/>
    <HostingOptions/>
    <DataCenterFeedback/>
    <GoogleHostingfaq/>
    <FooterCta/>
    
    </>
  );
};

export default Google;
