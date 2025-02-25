import FooterCta from '@/components/common/cta/FooterCta';
import WhyBuyDomainHostingard from '@/components/CpanelHostingNew/WhyBuy';
import CpanelHostingfaq from '@/components/CpanelHostingNew/CpanelHostingfaq';
import AdvanceFeature from '@/components/CpanelHostingNew/AdvanceFeature';
import DataCenterFeedback from '@/components/dataCenter/DataCenterFeedback';
import SharedHostingFeature from '@/components/CpanelHostingNew/SharedHostingFeature';
import CpanelNoIncreased from '@/components/CpanelHostingNew/CpanelNoIncreased';
import CpanelHostingHero from '@/components/CpanelHostingNew/CpanelHostingHero';
import CpanelHostingPricing from '@/components/CpanelHostingNew/CpanelHostingPricing';
import DataHostingDatacenterSupport from '@/components/dataCenter/CloudHostingDatacenterLocation';
import HostingOptions from '@/components/CpanelHostingNew/HostingOptions';
import WhyChoose from '@/components/CpanelHostingNew/WhyChoose';
import DataCenterBrands from '@/components/dataCenter/DataCenterBrands';

const CpanelHosting = () => {

  return (
    <>
      <CpanelHostingHero />
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
      <AdvanceFeature />
      <WhyBuyDomainHostingard />
      <WhyChoose />
      <HostingOptions />
      <DataCenterFeedback />
      {/* <DataCenterBrands/> */}
      <CpanelHostingfaq />
      <FooterCta firsttital={'Experience the Power of cPanel Server Management.'} sectital={'7 Days of Risk-Free Trial '} />
    </>
  );
};

export default CpanelHosting;
