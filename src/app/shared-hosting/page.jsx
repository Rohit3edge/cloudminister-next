import FooterCta from "@/components/common/cta/FooterCta";
import WhyBuyDomainHostingard from "@/components/MainSharedHosting/WhyBuyDomainHostingard";
import DataCenterCustomerBrands from "@/components/dataCenter/DataCenterCustomerBrands";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands";
import SharedHostingfaq from "@/components/MainSharedHosting/SharedHostingfaq";
import DataCenterFeedback from "@/components/dataCenter/DataCenterFeedback";
import IndiaWeb from "@/components/MainVpsHosting/IndiaWeb";
import HostingOptions from "@/components/MainSharedHosting/HostingOptions";
import SharedHostingAdvanceFeature from "@/components/MainSharedHosting/SharedHostingAdvanceFeature";
import SharedHostingHero from "@/components/MainSharedHosting/SharedHostingHero";
import SharedHostingPrice from "@/components/MainSharedHosting/SharedHostingPrice";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";



const MainSharedHosting = () => {
  return (
    <>
      <SharedHostingHero />
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
      <SharedHostingPrice />
      <WhyBuyDomainHostingard />
      <HostingOptions />
      <SharedHostingAdvanceFeature />
      <DataHostingDatacenterSupport />
      <IndiaWeb />
      <DataCenterFeedback />
      <DataCenterCustomerBrands />
      <SharedHostingfaq />
      <FooterCta
        firsttital={"Experience the Power of Shared Hosting."}
        sectital={"7 Days of Risk-Free Trial"}
      />
    </>
  );
};

export default MainSharedHosting;
