import FooterCta from '@/components/linuxresellerHosting/FooterCta';
import DataCenterCustomerBrands from '@/components/dataCenter/DataCenterCustomerBrands';
import DataCenterBrands from '@/components/dataCenter/DataCenterBrands';
import DataCenterFeedback from '@/components/dataCenter/DataCenterFeedback';
import SharedHostingFeature from '@/components/linuxresellerHosting/SharedHostingFeature';
import SharedHostingAdvanceFeature from '@/components/linuxresellerHosting/SharedHostingAdvanceFeature';
import SharedHostingHero from '@/components/linuxresellerHosting/SharedHostingHero';
import SharedHostingPrice from '@/components/linuxresellerHosting/SharedHostingPrice';
import DataHostingDatacenterSupport from '@/components/dataCenter/CloudHostingDatacenterLocation';
import LinuxResellerHostingFaq from '@/components/linuxresellerHosting/LinuxResellerHostingFaq';
import LinuxWhyBuyDomainHostingard from '@/components/linuxresellerHosting/LinuxWhyBuyDomainHostingard';
import LinuxOptions from "@/components/common/Panel/LinuxOptions"

const ResellerHosting = () => {


  return (
    <>
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
        <SharedHostingFeature />
        <LinuxOptions/>
        <SharedHostingAdvanceFeature />
        <DataCenterCustomerBrands />
        <LinuxWhyBuyDomainHostingard />
        <DataHostingDatacenterSupport />
        <LinuxResellerHostingFaq />
        <DataCenterFeedback />
        <FooterCta />
      </>
    </>
  );
};

export default ResellerHosting;
