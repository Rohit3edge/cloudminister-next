import FooterCta from "@/components/common/cta/FooterCta";
import WhyBuyDomainHostingard from "@/components/Aws/WhyBuy";
import AwsHostingfaq from "@/components/Aws/AwsHostingfaq";
import AwsNoIncreased from "@/components/Aws/AwsNoIncreased";
import DataCenterFeedback from "@/components/dataCenter/DataCenterFeedback";
import AwsHostingFeature from "@/components/Aws/AwsHostingFeature";
import AwsAdvanceFeature from "@/components/Aws/AwsAdvanceFeature";
import AwsHostingHero from "@/components/Aws/AwsHostingHero";
import AwsHostingPrice from "@/components/Aws/AwsHostingPrice";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands";
import WhyChoose from "@/components/Aws/WhyChoose";
import HostingOptions from "@/components/CpanelHostingNew/HostingOptions";


const AWS = () => {

  return (
    <>
      <AwsHostingHero />
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
      <AwsNoIncreased />
      <AwsHostingPrice />
      <AwsHostingFeature />
      <DataHostingDatacenterSupport />
      <AwsAdvanceFeature />
      <WhyBuyDomainHostingard />
      <WhyChoose />
      <HostingOptions />
      <DataCenterFeedback />
      <AwsHostingfaq />
      <FooterCta
        firsttital={"Experience the Power of Aws-support."}
        sectital={"7 Days of Risk-Free Trial"}
      />
    </>
  );
};

export default AWS;
