import React from 'react';
import Forexfaq from '@/components/ForxsVps/Forexfaq';
import FooterCta from '@/components/common/cta/FooterCta';
import DataCenterFeedback from '@/components/dataCenter/DataCenterFeedback';
import ForxsVpsHostingHero from '@/components/ForxsVps/ForxsVpsHostingHero';
import DataCenterBrands from '@/components/dataCenter/DataCenterBrands';
import ForexHostingPrice from '@/components/ForxsVps/ForexHostingPrice';
import ForexVpsHostingSignup from '@/components/ForxsVps/ForexVpsHostingSignup';
import ForexHostingFeature from '@/components/ForxsVps/ForexHostingFeature';
import HostingOptions from '@/components/ForxsVps/HostingOptions';
import WhyBuy from '@/components/ForxsVps/WhyBuy';
import ForexVpsFeature from '@/components/ForxsVps/ForexVpsFeature';
import DataHostingDatacenterSupport from '@/components/dataCenter/CloudHostingDatacenterLocation';

function ForexVps() {
  return (
    <>
      <ForxsVpsHostingHero />
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

      <ForexHostingPrice />
      <ForexVpsHostingSignup />
      <ForexHostingFeature />
      <HostingOptions />
      <WhyBuy />
      <ForexVpsFeature />
      <DataHostingDatacenterSupport />
      <DataCenterFeedback />
      <Forexfaq />
      <FooterCta firsttital={'Experience the Power Forex VPS Management.'} sectital={'7 Days of Risk-Free Trial '}  />
    </>
  );
}

export default ForexVps;
