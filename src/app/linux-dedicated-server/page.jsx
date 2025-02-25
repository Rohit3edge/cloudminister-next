import FooterCta from "@/components/common/cta/FooterCta";
import WhyBuyDomainHostingard from "@/components/dedicatedlinuxhosting/WhyBuyDomainHostingard";
import BrandCardsSection from "@/components/dedicatedlinuxhosting/BrandCardsSection";
import DataCenterCustomerBrands from "@/components/dataCenter/DataCenterCustomerBrands";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands";
import LinuxDedicatedfaq from "@/components/common/faq/LinuxDedicatedfaq";
import DataCenterFeedback from "@/components/dataCenter/DataCenterFeedback";
import SharedHostingFeature from "@/components/dedicatedlinuxhosting/SharedHostingFeature";
import SharedHostingHero from "@/components/dedicatedlinuxhosting/SharedHostingHero";
import EnterpriseServer from "@/components/dedicatedlinuxhosting/EnterpriseServer";
import SharedHostingPrice from "@/components/dedicatedlinuxhosting/SharedHostingPrice";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import LinuxOptions from "@/components/common/Panel/LinuxOptions";

const LinuxDedicated = () => {
 

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
      <SharedHostingFeature />
      <LinuxOptions />
      <WhyBuyDomainHostingard />
      <DataCenterCustomerBrands />
      <BrandCardsSection />
      <EnterpriseServer />
      <DataHostingDatacenterSupport />
      <LinuxDedicatedfaq />
      <DataCenterFeedback />
      <FooterCta
        firsttital={"Experience the Power of Linux Dedicated Server."}
        sectital={"7 Days of Risk-Free Trial"}
      />
    </>
  );
};

export default LinuxDedicated;
