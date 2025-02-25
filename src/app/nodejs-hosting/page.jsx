import React from 'react';
import NodeJSfaq from '@/components/Nodejs/NodeJSfaq';
import FooterCta from '@/components/common/cta/FooterCta';
import DataCenterFeedback from '@/components/dataCenter/DataCenterFeedback';
import NodejsHostingHero from '@/components/Nodejs/NodejsHostingHero';
import DataCenterBrands from '@/components/dataCenter/DataCenterBrands';
import NodejsHostingPrice from '@/components/Nodejs/NodejsHostingPrice';
import NodejsVpsHostingSignup from '@/components/Nodejs/NodejsVpsHostingSignup';
import WhyBuy from '@/components/Nodejs/WhyBuy';
import NodejsVpsFeature from '@/components/Nodejs/NodejsVpsFeature';
import DataHostingDatacenterSupport from '@/components/dataCenter/CloudHostingDatacenterLocation';

function Nodejs() {

  return (
    <>


      <NodejsHostingHero />

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

      <NodejsHostingPrice />
      <NodejsVpsHostingSignup />
      <NodejsVpsFeature />
      <WhyBuy />
      <DataHostingDatacenterSupport />
      <DataCenterFeedback />
      <NodeJSfaq />
      <FooterCta firsttital={'Experience the Power NodeJS Hosting Management.'} sectital={'7 Days of Risk-Free Trial '} />
    </>
  );
}

export default Nodejs;
