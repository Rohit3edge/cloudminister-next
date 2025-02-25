import FooterCta from '@/components/common/cta/FooterCta';
import CpanelHostingfaq from '@/components/ServerManagement/CpanelHostingfaq';
import DataCenterFeedback from '@/components/dataCenter/DataCenterFeedback';
import SharedHostingFeature from '@/components/ServerManagement/SharedHostingFeature';
import CpanelNoIncreased from '@/components/ServerManagement/CpanelNoIncreased';
import ServerManagementHero from '@/components/ServerManagement/ServerManagementHero';
import CpanelHostingPricing from '@/components/ServerManagement/CpanelHostingPricing';
import DataHostingDatacenterSupport from '@/components/dataCenter/CloudHostingDatacenterLocation';
import WhyChoose from '@/components/ServerManagement/WhyChoose';
import DataCenterBrands from '@/components/dataCenter/DataCenterBrands';
import CpanelHostingFeature from '@/components/ServerManagement/CpanelHostingFeature';

const ServerManagement = () => {
  return (
    <>
      <ServerManagementHero />
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

      <CpanelNoIncreased />
      <CpanelHostingPricing />
      <SharedHostingFeature />
      <DataHostingDatacenterSupport />
      <WhyChoose />
      <CpanelHostingFeature />
      <CpanelHostingfaq />
      <DataCenterFeedback />
      <FooterCta firsttital={'Experience the Power of Server Management.'} sectital={'7 Days of Risk-Free Trial'} />
    </>
  );
};

export default ServerManagement;
