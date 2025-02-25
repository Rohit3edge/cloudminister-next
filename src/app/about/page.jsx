// import AboutUsAward from "@/components/aboutUs/AboutUsAward";
import AboutUsBoostingData from "@/components/aboutUs/AboutUsBoostingData";
import AboutUsHero from "@/components/aboutUs/AboutUsHero";
import AboutUsStory from "@/components/aboutUs/AboutUsStory";
import AboutusStoryTimeLine from "@/components/aboutUs/AboutusStoryTimeLine";
import AboutUsTeam from "@/components/aboutUs/AboutUsTeam";
import FooterCta from "@/components/common/cta/FooterCtatwo.jsx";
import DataCenterFeedback from "@/components/dataCenter/DataCenterFeedback";
import DataCenterCustomerBrands from "@/components/dataCenter/DataCenterCustomerBrands";

const AboutUs = () => {
  

  return (
    <>
   
      <AboutUsHero/>
      <AboutUsStory/>
      <AboutUsTeam/>
      <AboutusStoryTimeLine/>
      <AboutUsBoostingData/>
       <DataCenterCustomerBrands/>
      {/* <AboutUsAward/> */}
      <DataCenterFeedback/>  
      <FooterCta firsttital={"Book A Free Consultation Today."} path={"/contact/"}  text={"Contact now"}/>
    </>
  )
};

export default AboutUs
