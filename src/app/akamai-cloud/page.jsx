import FooterCta from "@/components/common/cta/FooterCta";
import WhyBuyDomainHostingard from "@/components/AkamiCloud/WhyBuy";
import AwsHostingfaq from "@/components/AkamiCloud/AwsHostingfaq"
import AkamiCloudNoIncreased from "@/components/AkamiCloud/AkamiCloudNoIncreased";
import DataCenterFeedback from "@/components/dataCenter/DataCenterFeedback";
import AkamiCloudHostingFeature from "@/components/AkamiCloud//AkamiCloudHostingFeature";
import Solutions from "@/components/AkamiCloud/Solutions";
import AkamiCloudHero from "@/components/AkamiCloud/AkamiCloudHero";
import AwsStory from "@/components/AkamiCloud/AwsStory";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands"
import WhyChoose from "@/components/AkamiCloud/WhyChoose"

const AkamiCloud = () => {
  return (
    <>
   
    <AkamiCloudHero/>
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
    <AkamiCloudNoIncreased/>
    <AkamiCloudHostingFeature/>
    <Solutions/>
    <AwsStory/>
    <WhyBuyDomainHostingard/>
    <WhyChoose/>
    <DataHostingDatacenterSupport/>
    <DataCenterFeedback/>
    <AwsHostingfaq/>
    <FooterCta firsttital={"Experience the Power of Akamai Cloud."} sectital={"7 Days of Risk-Free Trial"} />
    
    </>
  )
};

export default AkamiCloud
