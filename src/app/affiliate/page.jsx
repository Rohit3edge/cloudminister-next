import AffiliateNoIncreased from "@/components/Affiliate/AkamiCloudNoIncreased";
import AffiliateHero from "@/components/Affiliate/AkamiCloudHero";
import AkamiCloudHostingFeature from "@/components/Affiliate/AkamiCloudHostingFeature";
import AwsHostingfaq from "@/components/Affiliate/AwsHostingfaq";
import DataCenterFeedback from "@/components/dataCenter/DataCenterFeedback";
import FooterCta from "@/components/common/cta/FooterCtatwo.jsx";

const Affiliate = () => {

  return (
    <>
      <AffiliateHero />
      <AffiliateNoIncreased />
      <AkamiCloudHostingFeature />
      <DataCenterFeedback />
      <AwsHostingfaq />
      <FooterCta firsttital={"Book A Free Consultation Today."} path={"/contact/"}  text={"Contact now"}/>
    </>
  );
};

export default Affiliate;
