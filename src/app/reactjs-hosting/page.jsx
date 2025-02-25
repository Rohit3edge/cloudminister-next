import React from 'react';
import ReactJSfaq from '@/components/Reactjs/ReactJSfaq';
import FooterCta from '@/components/common/cta/FooterCta';
import DataCenterFeedback from '@/components/dataCenter/DataCenterFeedback';
import ReactjsHostingHero from '@/components/Reactjs/ReactjsHostingHero';
import DataCenterBrands from '@/components/dataCenter/DataCenterBrands';
import ReactjsHostingPrice from '@/components/Reactjs/ReactjsHostingPrice';
import ReactjsVpsHostingSignup from '@/components/Reactjs/ReactjsVpsHostingSignup';
import WhyBuy from '@/components/Reactjs/WhyBuy';
import ReactjsVpsFeature from '@/components/Reactjs/ReactjsVpsFeature';
import DataHostingDatacenterSupport from '@/components/dataCenter/CloudHostingDatacenterLocation';

function Reactjs() {

  return (
    <>
      <ReactjsHostingHero />
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
      <ReactjsHostingPrice />
      <ReactjsVpsHostingSignup />
      <ReactjsVpsFeature />
      <WhyBuy />
      <DataHostingDatacenterSupport />
      <DataCenterFeedback />
      <ReactJSfaq />
      <FooterCta firsttital={'Experience the Power ReactJS Hosting Management.'} sectital={'7 Days of Risk-Free Trial '}  />
    </>
  );
}

export default Reactjs;
