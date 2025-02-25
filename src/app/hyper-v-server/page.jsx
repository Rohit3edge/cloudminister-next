import FooterCta from '@/components/common/cta/FooterCta';
import WhyBuyDomainHostingard from '@/components/HyperV/WhyBuy';
import DataCenterBrands from '@/components/dataCenter/DataCenterBrands';
import HyperVHostingfaq from '@/components/HyperV/HyperVHostingfaq';
import DataCenterFeedback from '@/components/dataCenter/DataCenterFeedback';
import HyperVHostingFeature from '@/components/HyperV/HyperVHostingFeature';
import HyperVAdvanceFeature from '@/components/HyperV/HyperVAdvanceFeature';
import HyperVHostingHero from '@/components/HyperV/HyperVHostingHero';
import HyperVHostingPrice from '@/components/HyperV/HyperVHostingPrice';
import DataHostingDatacenterSupport from '@/components/dataCenter/CloudHostingDatacenterLocation';
import HyperVNoIncreased from '@/components/HyperV/HyperVNoIncreased';
import WhyChoose from '@/components/HyperV/WhyChoose';
import HostingOptions from '@/components/CpanelHostingNew/HostingOptions';
const HyperV = () => {
  return (
    <>
      <HyperVHostingHero />
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
      <HyperVNoIncreased />
      <HyperVHostingPrice />
      <HyperVHostingFeature />
      <DataHostingDatacenterSupport />
      <HyperVAdvanceFeature />
      <WhyBuyDomainHostingard />
      <WhyChoose />
      <HostingOptions />
      <DataCenterFeedback />
      <HyperVHostingfaq />
      <FooterCta firsttital={'Experience the Power of Hyper-V Server Management.'} sectital={'7 Days of Risk-Free Trial '} />
    </>
  );
};

export default HyperV;
