import VpsHostingFaqTwo from "@/components/Offer/VpsHostingFaqTwo";
import VpsHostingFeatures from "@/components/Offer/VpsHostingFeature";
import VpsHostingHero from "@/components/Offer/VpsHostingHero";
import ControlPanel from "@/components/Offer/ControlPanel";
import VpsHostingPlansOne from "@/components/Offer/VpsHostingPlansOne";
import VpsHostingWhyChoose from "@/components/Offer/VpsHostingWhyChoose";
import FooterCta from "@/components/Offer/FooterCta";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands";
import DataCenterFeedback from "@/components/dataCenter/DataCenterFeedback";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import DataCenterCustomerBrands from "@/components/dataCenter/DataCenterCustomerBrands";
import AdvanceFeature from "@/components/Offer/AdvanceFeature";
import { OfferpricingData } from "../../utils/data";
import LinuxOptions from "@/components/Offer/LinuxOptions";

const VpsHosting = () => {

  return (
    <>
      <VpsHostingHero />
      <section className=" position-relative z-1 overflow-hidden mb-8 extra-domain-container">
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
      <VpsHostingPlansOne
        title="Choose your best VPS Hosting Plan"
        price={true}
        pricingData={OfferpricingData}
        // subtitle="Looking for reliable Linux VPS hosting that fits your budget? CloudMinister offers powerful, secure, and flexible servers to boost your website's performance—all at unbeatable vps server prices."
      />

      <VpsHostingWhyChoose />
      {/* <VpsHostingTechPartner /> */}
      <VpsHostingFeatures />
      <DataHostingDatacenterSupport />
      <LinuxOptions />
      <ControlPanel />
      <AdvanceFeature />
      <DataCenterFeedback />
      <DataCenterCustomerBrands />
      <VpsHostingFaqTwo />
      <FooterCta />
    </>
  );
};

export default VpsHosting;
