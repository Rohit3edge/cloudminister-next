import React from "react";
import CyberHero from "@/components/CyberSecurity/CyberHero";
import CyberNoIncreased from "@/components/CyberSecurity/CyberNoIncreased";
import CyberFeature from "@/components/CyberSecurity/CyberFeature";
import CyberStory from "@/components/CyberSecurity/CyberStory";
import DataCenterBrands from "@/components/dataCenter/DataCenterBrands";
import WhyBuy from "@/components/CyberSecurity/WhyBuy";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import Newfaq from "@/components/CyberSecurity/faq";
import FooterCta from "@/components/common/cta/FooterCtatwo.jsx";
import DataCenterFeedback from "@/components/dataCenter/DataCenterFeedback";

function CyberSecurity() {

  return (
    <>
      <CyberHero />

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

      <CyberNoIncreased />
      <CyberFeature />
      <CyberStory />
      <WhyBuy />
      <DataHostingDatacenterSupport />
      <DataCenterFeedback />
      <Newfaq />
  <FooterCta firsttital={"Book A Free Consultation Today."} path={"/contact/"}  text={"Contact now"}/>
    </>
  );
}

export default CyberSecurity;
