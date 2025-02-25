import React from 'react';
import IotHero from '@/components/IoT/IotHero';
import IotNoIncreased from '@/components/IoT/IotNoIncreased';
import IotFeature from '@/components/IoT/IotFeature';
import IotStory from '@/components/IoT/IotStory';
import DataCenterBrands from '@/components/dataCenter/DataCenterBrands';
import WhyBuy from '@/components/IoT/WhyBuy';
import DataHostingDatacenterSupport from '@/components/dataCenter/CloudHostingDatacenterLocation';
import Iotfaq from '@/components/IoT/Iotfaq';
import FooterCta from "@/components/common/cta/FooterCtatwo.jsx";
import DataCenterFeedback from '@/components/dataCenter/DataCenterFeedback';

function Iot() {

  return (
    <>

      <IotHero />
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

      <IotNoIncreased />
      <IotFeature />
      <IotStory />
      <WhyBuy />
      <DataHostingDatacenterSupport />
      <DataCenterFeedback />
      <Iotfaq />
      <FooterCta firsttital={"Book A Free Consultation Today."} path={"/contact/"}  text={"Contact now"}/>
    </>
  );
}

export default Iot;
