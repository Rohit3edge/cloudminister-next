import FooterCta from '@/components/common/cta/FooterCta';
import WhyBuyDomainHostingard from '@/components/Azure/WhyBuy';
import DataCenterBrands from '@/components/dataCenter/DataCenterBrands';
import AzureHostingfaq from '@/components/Azure/AzureHostingfaq';
import DataCenterFeedback from '@/components/dataCenter/DataCenterFeedback';
import AzureHostingFeature from '@/components/Azure/AzureHostingFeature';
import AzureAdvanceFeature from '@/components/Azure/AzureAdvanceFeature';
import AzureHostingHero from '@/components/Azure/AzureHostingHero';
import AzureHostingPricing from '@/components/Azure/AzureHostingPricing';
import DataHostingDatacenterSupport from '@/components/dataCenter/CloudHostingDatacenterLocation';
import WhyChoose from '@/components/Azure/WhyChoose';
import AzureNoIncreased from '@/components/Azure/AzureNoIncreased';
import HostingOptions from '@/components/CpanelHostingNew/HostingOptions';

const Azure = () => {
  return (
    <>
      <AzureHostingHero />
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
      <AzureNoIncreased />
      <AzureHostingPricing />

      <AzureHostingFeature />

      <DataHostingDatacenterSupport />

      <AzureAdvanceFeature />
      <WhyBuyDomainHostingard />
      <WhyChoose />

      <HostingOptions />
      <DataCenterFeedback />
      <AzureHostingfaq />
      <FooterCta firsttital={'Experience the Power of azure.'} sectital={'7 Days of Risk-Free Trial'} />
    </>
  );
};

export default Azure;
