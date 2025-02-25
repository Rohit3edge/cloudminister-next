import FooterCta from '@/components/common/cta/FooterCta';
import WhyBuyDomainHostingard from '@/components/Linodesupport/WhyBuy';
import DataCenterBrands from '@/components/dataCenter/DataCenterBrands';
import PleskHostingfaq from '@/components/Linodesupport/PleskHostingfaq';
import DataCenterFeedback from '@/components/dataCenter/DataCenterFeedback';
import LinodesupportHostingFeature from '@/components/Linodesupport//LinodesupportHostingFeature';
import LinodesupportHostingAdvanceFeature from '@/components/Linodesupport/LinodesupportHostingAdvanceFeature';
import LinodesupportHero from '@/components/Linodesupport/LinodesupportHero';
import LinodesupportHostingPrice from '@/components/Linodesupport/LinodesupportHostingPrice';
import DataHostingDatacenterSupport from '@/components/dataCenter/CloudHostingDatacenterLocation';
import WhyChoose from '@/components/Linodesupport/WhyChoose';
import LinodesupportNoIncreased from '@/components/Linodesupport/LinodesupportNoIncreased';
import HostingOptions from '@/components/CpanelHostingNew/HostingOptions';

const Linodesupport = () => {

  return (
    <>
      <LinodesupportHero />
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
      <LinodesupportNoIncreased />
      <LinodesupportHostingPrice />

      <LinodesupportHostingFeature />

      <DataHostingDatacenterSupport />

      <LinodesupportHostingAdvanceFeature />
      <WhyBuyDomainHostingard />
      <WhyChoose />

      <HostingOptions />
      <DataCenterFeedback />
      <PleskHostingfaq />
      <FooterCta firsttital={'Experience the Power Linode Cloud Management.'} sectital={'7 Days of Risk-Free Trial '} />
    </>
  );
};

export default Linodesupport;
