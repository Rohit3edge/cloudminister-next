import FooterCta from "@/components/common/cta/FooterCta";
import WhyBuyDomainHostingard from "@/components/AWSCloud/WhyBuy";
import AwsHostingfaq from "@/components/AWSCloud/AwsHostingfaq"
import AwsNoIncreased from "@/components/AWSCloud/AwsNoIncreased";
import DataCenterFeedback from "@/components/dataCenter/DataCenterFeedback";
import AwsHostingFeature from "@/components/AWSCloud/AwsHostingFeature";
import Solutions from "@/components/AWSCloud/Solutions";
import AwsHostingHero from "@/components/AWSCloud/AwsHostingHero";
import AwsStory from "@/components/AWSCloud/AwsStory";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands"
import WhyChoose from "@/components/AWSCloud/WhyChoose"

const AWSCloud = () => {

  return (
    
    <>
    <AwsHostingHero/>
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
    <AwsNoIncreased/>
    <AwsHostingFeature/>
    <Solutions/>
    <AwsStory/>
    <WhyBuyDomainHostingard/>
    <WhyChoose/>
    <DataHostingDatacenterSupport/>
    <DataCenterFeedback/>
    <AwsHostingfaq/>
    <FooterCta firsttital={"Experience the Power of amazon-cloud-hosting."} sectital={"7 Days of Risk-Free Trial"} />
    
    </>
  )
};

export default AWSCloud
