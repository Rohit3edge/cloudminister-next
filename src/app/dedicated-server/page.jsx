import FooterCta from '@/components/common/cta/FooterCta';
import WhyBuyDomainHostingard from '@/components/MainDedicated/WhyBuyDomainHostingard';
import BrandCardsSection from '@/components/MainDedicated/BrandCardsSection';
import DataCenterCustomerBrands from '@/components/dataCenter/DataCenterCustomerBrands';
import DataCenterBrands from '@/components/dataCenter/DataCenterBrands';
import DedicatedFaq from '@/components/MainDedicated/DedicatedFaq';
import DataCenterFeedback from '@/components/dataCenter/DataCenterFeedback';
import HostingOptions from '@/components/MainDedicated/HostingOptions';
import SharedHostingFeature from '@/components/MainDedicated/SharedHostingFeature';
import SharedHostingHero from '@/components/MainDedicated/SharedHostingHero';
import EnterpriseServer from '@/components/MainDedicated/EnterpriseServer';
import SharedHostingPrice from '@/components/MainDedicated/SharedHostingPrice';
import DataHostingDatacenterSupport from '@/components/dataCenter/CloudHostingDatacenterLocation';
import IndiaWeb from '@/components/MainVpsHosting/IndiaWeb';


const MainDedicated = () => {


  return (
    <>
      <SharedHostingHero />
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
      <SharedHostingPrice />
      <WhyBuyDomainHostingard />
      <HostingOptions />
      <SharedHostingFeature />
      <DataHostingDatacenterSupport />
      <IndiaWeb />
      <EnterpriseServer />
      <BrandCardsSection />
      <DataCenterFeedback />
      <DataCenterCustomerBrands />
      <DedicatedFaq />
      <FooterCta firsttital={"Experience the Power of Dedicated Servers."} sectital={"7 Days of Risk-Free Trial"} />
    </>
  );
};

export default MainDedicated;
