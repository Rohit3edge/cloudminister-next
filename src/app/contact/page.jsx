import FooterCta from "@/components/common/cta/FooterCtatwo";
import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import OfficeLocations from "@/components/contact/OfficeLocations";
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";


const Contact = () => {

  return (
    <>
      <ContactHero />
      <DataHostingDatacenterSupport />
      <OfficeLocations />
      <ContactForm />
       <FooterCta firsttital={"Book A Free Consultation Today."} path={"/contact"}  text={"Contact now"}/>
    </>
  );
};

export default Contact;
