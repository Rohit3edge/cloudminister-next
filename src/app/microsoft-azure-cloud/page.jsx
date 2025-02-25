import FooterCta from "@/components/common/cta/FooterCta";
import WhyBuyDomainHostingard from "@/components/MicroSoftAzureCloud/WhyBuy";
import AwsHostingfaq from "@/components/MicroSoftAzureCloud/AwsHostingfaq"
import MicroSoftAzureCloudNoIncreased from "@/components/MicroSoftAzureCloud/MicroSoftAzureCloudNoIncreased";
import DataCenterFeedback from "@/components/dataCenter/DataCenterFeedback";
import MicroSoftAzureCloudHostingFeature from "@/components/MicroSoftAzureCloud/MicroSoftAzureCloudHostingFeature";
import Solutions from "@/components/MicroSoftAzureCloud/Solutions";
import MicroSoftAzureCloudHero from "@/components/MicroSoftAzureCloud/MicroSoftAzureCloudHero";
import AwsStory from "@/components/MicroSoftAzureCloud/AwsStory";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands"
import WhyChoose from "@/components/MicroSoftAzureCloud/WhyChoose"

const MicroSoftAzureCloud = () => {

  return (
    <>    
    <MicroSoftAzureCloudHero/>
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
    <MicroSoftAzureCloudNoIncreased/>
    <MicroSoftAzureCloudHostingFeature/>
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

export default MicroSoftAzureCloud