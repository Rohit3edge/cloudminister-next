import DomainRegiHero from "@/components/domainRegi/DomainRegiHero";
import WhyBuyDomainHostingard from "@/components/domainRegi/WhyBuyDomainHostingard";
import DomainFaq from "@/components/domainRegi/DomainFaq";
import FooterCta from "@/components/common/cta/FooterCtatwo";
import DomainExterntion from "@/components/common/domain/DomainExterntion";

const DomainRegi = () => {

  return (
    <>
      <DomainRegiHero />
      <DomainExterntion />
      <WhyBuyDomainHostingard />
      <DomainFaq />
      <FooterCta
        firsttital={"Book A Free Consultation Today."}
        path={"/contact/"}
        text={"Contact now"}
      />
    </>
  );
};

export default DomainRegi;
