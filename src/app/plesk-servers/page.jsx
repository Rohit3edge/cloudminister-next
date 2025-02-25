import FooterCta from '@/components/common/cta/FooterCta';
import WhyBuyDomainHostingard from '@/components/PleskSupport/WhyBuy';
import DataCenterBrands from '@/components/dataCenter/DataCenterBrands';
import PleskHostingfaq from '@/components/PleskSupport/PleskHostingfaq';
import DataCenterFeedback from '@/components/dataCenter/DataCenterFeedback';
import PleskHostingFeature from '@/components/PleskSupport/PleskHostingFeature';
import PleskHostingAdvanceFeature from '@/components/PleskSupport/PleskHostingAdvanceFeature';
import PleskHostingHero from '@/components/PleskSupport/PleskHostingHero';
import PleskHostingPrice from '@/components/PleskSupport/PleskHostingPrice';
import DataHostingDatacenterSupport from '@/components/dataCenter/CloudHostingDatacenterLocation';
import WhyChoose from '@/components/PleskSupport/WhyChoose';
import PleskNoIncreased from '@/components/PleskSupport/PleskNoIncreased';
import HostingOptions from '@/components/CpanelHostingNew/HostingOptions';


const PleskSupport = () => {

  return (
    <>
      <PleskHostingHero />
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

      <PleskNoIncreased />
      <PleskHostingPrice />

      <PleskHostingFeature />

      <DataHostingDatacenterSupport />

      <PleskHostingAdvanceFeature />
      <WhyBuyDomainHostingard />
      <WhyChoose />

      <HostingOptions />
      <DataCenterFeedback />
      <PleskHostingfaq />
      <FooterCta firsttital={'Experience the Power of Plesk Server Management.'} sectital={'7 Days of Risk-Free Trial'} />
    </>
  );
};

export default PleskSupport;
