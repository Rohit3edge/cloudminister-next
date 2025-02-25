import React from 'react';
import Pythonfaq from '@/components/Python/Pythonfaq';
import FooterCta from '@/components/common/cta/FooterCta';
import DataCenterFeedback from '@/components/dataCenter/DataCenterFeedback';
import PythonHostingHero from '@/components/Python/PythonHostingHero';
import DataCenterBrands from '@/components/dataCenter/DataCenterBrands';
import PythonHostingPrice from '@/components/Python/PythonHostingPrice';
import PythonVpsHostingSignup from '@/components/Python/PythonVpsHostingSignup';
import WhyBuy from '@/components/Python/WhyBuy';
import PythonVpsFeature from '@/components/Python/PythonVpsFeature';
import DataHostingDatacenterSupport from '@/components/dataCenter/CloudHostingDatacenterLocation';

function Pythonhosting() {

  return (
    <>
      <PythonHostingHero />

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

      <PythonHostingPrice />
      <PythonVpsHostingSignup />
      <PythonVpsFeature />
      <WhyBuy />
      <DataHostingDatacenterSupport />
      <DataCenterFeedback />
      <Pythonfaq />
      <FooterCta firsttital={'Experience the Power Python Hosting Management.'} sectital={'7 Days of Risk-Free Trial '} />
    </>
  );
}

export default Pythonhosting;
