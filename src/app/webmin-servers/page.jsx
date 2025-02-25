import FooterCta from '@/components/common/cta/FooterCta';
import WhyBuyDomainHostingard from '@/components/webminservers/WhyBuy';
import DataCenterBrands from '@/components/dataCenter/DataCenterBrands';
import PleskHostingfaq from '@/components/webminservers/PleskHostingfaq';
import DataCenterFeedback from '@/components/dataCenter/DataCenterFeedback';
import WebminHostingFeature from '@/components/webminservers/WebminHostingFeature';
import WebminHostingAdvanceFeature from '@/components/webminservers/WebminHostingAdvanceFeature';
import WebminserversHero from '@/components/webminservers/WebminserversHero';
import WebinHostingPrice from '@/components/webminservers/WebinHostingPrice';
import DataHostingDatacenterSupport from '@/components/dataCenter/CloudHostingDatacenterLocation';
import WhyChoose from '@/components/webminservers/WhyChoose';
import WebminserversNoIncreased from '@/components/webminservers/WebminserversNoIncreased';
import HostingOptions from '@/components/CpanelHostingNew/HostingOptions';

const Webminservers = () => {
  return (
    <>
      <WebminserversHero />
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
      <WebminserversNoIncreased />
      <WebinHostingPrice />

      <WebminHostingFeature />

      <DataHostingDatacenterSupport />

      <WebminHostingAdvanceFeature />
      <WhyBuyDomainHostingard />
      <WhyChoose />
      <HostingOptions />
      <DataCenterFeedback />
      <PleskHostingfaq />
      <FooterCta firsttital={'Experience the Power Webmin Server Management.'} sectital={'7 Days of Risk-Free Trial '} />
    </>
  );
};

export default Webminservers;
