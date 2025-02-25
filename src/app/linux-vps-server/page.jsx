import VpsHostingFaqTwo from '@/components/vpsHosting/VpsHostingFaqTwo';
import VpsHostingFeatures from '@/components/vpsHosting/VpsHostingFeature';
import VpsHostingHero from '@/components/vpsHosting/VpsHostingHero';
import ControlPanel from '@/components/vpsHosting/ControlPanel';
import VpsHostingPlansOne from '@/components/vpsHosting/VpsHostingPlansOne';
import VpsHostingTechPartner from '@/components/vpsHosting/VpsHostingTechPartner';
import VpsHostingWhyChoose from '@/components/vpsHosting/VpsHostingWhyChoose';
import FooterCta from '@/components/vpsHosting/FooterCta';
import DataCenterBrands from '@/components/dataCenter/DataCenterBrands';
import DataCenterFeedback from '@/components/dataCenter/DataCenterFeedback';
import DataHostingDatacenterSupport from '@/components/dataCenter/CloudHostingDatacenterLocation';
import DataCenterCustomerBrands from '@/components/dataCenter/DataCenterCustomerBrands';
import AdvanceFeature from '@/components/vpsHosting/AdvanceFeature';
import LinuxOptions from "@/components/common/Panel/LinuxOptions"
import { testingpricingData } from '../../utils/data';


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
        title="Best Value for Your Money – Affordable Linux VPS Hosting Plans"
        price={true}
        pricingData={testingpricingData}
        subtitle="Looking for reliable Linux VPS hosting that fits your budget? CloudMinister offers powerful, secure, and flexible servers to boost your website's performance—all at unbeatable vps server prices."
      />
    
      <VpsHostingWhyChoose />
      <VpsHostingTechPartner />
      <VpsHostingFeatures />
      <DataHostingDatacenterSupport />
      <LinuxOptions/>
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
