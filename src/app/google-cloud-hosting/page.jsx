import FooterCta from "@/components/common/cta/FooterCta";
import WhyBuyDomainHostingard from "@/components/GoogleCloud/WhyBuy";
import AwsHostingfaq from "@/components/GoogleCloud/AwsHostingfaq"
import GoogleCloudNoIncreased from "@/components/GoogleCloud/GoogleCloudNoIncreased";
import DataCenterFeedback from "@/components/dataCenter/DataCenterFeedback";
import GoogleCloudHostingFeature from "@/components/GoogleCloud//GoogleCloudHostingFeature";
import Solutions from "@/components/GoogleCloud/Solutions";
import GoogleCloudHero from "@/components/GoogleCloud/GoogleCloudHero";
import AwsStory from "@/components/GoogleCloud/AwsStory";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands"
import WhyChoose from "@/components/GoogleCloud/WhyChoose"


const GoogleCloud = () => {
  

  return (
    <>

    <GoogleCloudHero/>
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
    <GoogleCloudNoIncreased/>
    <GoogleCloudHostingFeature/>
    <Solutions/>
    <AwsStory/>
    <WhyBuyDomainHostingard/>
    <WhyChoose/>
    <DataHostingDatacenterSupport/>
    <DataCenterFeedback/>
    <AwsHostingfaq/>
    <FooterCta firsttital={"Experience the Power of Google Cloud Hosting."} sectital={"7 Days of Risk-Free Trial"}/>
    
    </>
  )
};

export default GoogleCloud
