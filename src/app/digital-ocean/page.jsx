import FooterCta from "@/components/common/cta/FooterCta";
import WhyBuyDomainHostingard from "@/components/Ocean/WhyBuy";
import OceanHostingfaq from "@/components/Ocean/OceanHostingfaq";
import OceanNoIncreased from "@/components/Ocean/OceanNoIncreased";
import DataCenterFeedback from "@/components/dataCenter/DataCenterFeedback";
import OceanHostingFeature from "@/components/Ocean/OceanHostingFeature";
import OceanAdvanceFeature from "@/components/Ocean/OceanAdvanceFeature";
import OceanHostingHero from "@/components/Ocean/OceanHostingHero";
import OceanHostingPrice from "@/components/Ocean/OceanHostingPrice";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import WhyChoose from "@/components/Ocean/WhyChoose";
import HostingOptions from "@/components/CpanelHostingNew/HostingOptions";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands";


const Ocean = () => {


  return (
    <>
      <OceanHostingHero />
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
      <OceanNoIncreased />
      <OceanHostingPrice />
      <OceanHostingFeature />
      <DataHostingDatacenterSupport />
      <OceanAdvanceFeature />
      <WhyBuyDomainHostingard />
      <WhyChoose />
      <HostingOptions />
      <DataCenterFeedback />
      <OceanHostingfaq />
      <FooterCta
        firsttital={"Experience the Power of digital-ocean."}
        sectital={"7 Days of Risk-Free Trial"}
      />
    </>
  );
};

export default Ocean;
