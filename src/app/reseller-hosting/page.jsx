import FooterCta from '@/components/common/cta/FooterCta';
import DataCenterCustomerBrands from '@/components/dataCenter/DataCenterCustomerBrands';
import DataCenterBrands from '@/components/dataCenter/DataCenterBrands';
import DataCenterFeedback from '@/components/dataCenter/DataCenterFeedback';
import SharedHostingFeature from '@/components/MainResellerHosting/SharedHostingFeature';
import SharedHostingHero from '@/components/MainResellerHosting/SharedHostingHero';
import IndiaWeb from "@/components/MainVpsHosting/IndiaWeb";
import HostingOptions from '@/components/MainResellerHosting/HostingOptions';
import SharedHostingPrice from '@/components/MainResellerHosting/SharedHostingPrice';
import DataHostingDatacenterSupport from '@/components/dataCenter/CloudHostingDatacenterLocation';
import ResellerHostingFaq from '@/components/MainResellerHosting/LinuxResellerHostingFaq';
import LinuxWhyBuyDomainHostingard from '@/components/MainResellerHosting/LinuxWhyBuyDomainHostingard';

const MainResellerHosting = () => {
  

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
        <LinuxWhyBuyDomainHostingard />
        <HostingOptions/>
        <SharedHostingFeature />
        <DataHostingDatacenterSupport />
        <IndiaWeb/>
        <DataCenterFeedback />
        <DataCenterCustomerBrands />
        <ResellerHostingFaq />
        <FooterCta firsttital={"Experience the Power of Reseller Hosting."} sectital={"7 Days of Risk-Free Trial"}  />
      </>

  );
};

export default MainResellerHosting;
