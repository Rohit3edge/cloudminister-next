import FooterCta from "@/components/common/cta/FooterCta";
import WhyBuyDomainHostingard from "@/components/RackSpace/WhyBuy";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands";
import RackSpacefaq from "@/components/RackSpace/RackSpacefaq";
import DataCenterFeedback from "@/components/dataCenter/DataCenterFeedback";
import RackSpaceHostingFeature from "@/components/RackSpace/RackSpaceHostingFeature";
import RackSpaceHostingAdvanceFeature from "@/components/RackSpace/RackSpaceHostingAdvanceFeature";
import RackSpaceHero from "@/components/RackSpace/RackSpaceHero";
import RackSpaceHostingPrice from "@/components/RackSpace/RackSpaceHostingPrice";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import WhyChoose from "@/components/RackSpace/WhyChoose";
import RackspaceNoIncreased from "@/components/RackSpace/RackspaceNoIncreased";
import HostingOptions from "@/components/CpanelHostingNew/HostingOptions";

const Rackspace = () => {

  return (
    <>
      <RackSpaceHero />
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
      <RackspaceNoIncreased />
      <RackSpaceHostingPrice />

      <RackSpaceHostingFeature />

      <DataHostingDatacenterSupport />

      <RackSpaceHostingAdvanceFeature />
      <WhyBuyDomainHostingard />
      <WhyChoose />

      <HostingOptions />
      <DataCenterFeedback />
      <RackSpacefaq />
      <FooterCta
        firsttital={"Experience the Power of Rackspace Server Management."}
        sectital={"7 Days of Risk-Free Trial "}
      />
    </>
  );
};

export default Rackspace;
