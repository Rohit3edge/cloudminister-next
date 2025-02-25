import FooterCta from '@/components/common/cta/FooterCta';
import WhyBuyDomainHostingard from '@/components/VirtualizorSupport/WhyBuy';
import DataCenterBrands from '@/components/dataCenter/DataCenterBrands';
import VirtualizorSupportHostingfaq from '@/components/VirtualizorSupport/VirtualizorSupportHostingfaq';
import DataCenterFeedback from '@/components/dataCenter/DataCenterFeedback';
import VirtualizorSupportHostingFeature from '@/components/VirtualizorSupport/VirtualizorSupportHostingFeature';
import VirtualizorSupportAdvanceFeature from '@/components/VirtualizorSupport/VirtualizorSupportAdvanceFeature';
import VirtualizorSupportHostingHero from '@/components/VirtualizorSupport/VirtualizorSupportHostingHero';
import VirtualizorSupportHostingPrice from '@/components/VirtualizorSupport/VirtualizorSupportHostingPrice';
import DataHostingDatacenterSupport from '@/components/dataCenter/CloudHostingDatacenterLocation';
import VirtualizorNoIncreased from '@/components/VirtualizorSupport/VirtualizorNoIncreased';
import WhyChoose from '@/components/VirtualizorSupport/WhyChoose';
import HostingOptions from '@/components/CpanelHostingNew/HostingOptions';


const VirtualizorSupport = () => {

  return (
    <>
      <VirtualizorSupportHostingHero />
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
      <VirtualizorNoIncreased />
      <VirtualizorSupportHostingPrice />
      <VirtualizorSupportHostingFeature />
      <DataHostingDatacenterSupport />
      <VirtualizorSupportAdvanceFeature />
      <WhyBuyDomainHostingard />
      <WhyChoose />
      <HostingOptions />
      <DataCenterFeedback />
      <VirtualizorSupportHostingfaq />
      <FooterCta firsttital={'Experience the Power of Virtualizor Server Management.'} sectital={'7 Days of Risk-Free Trial '} />
    </>
  );
};

export default VirtualizorSupport;
