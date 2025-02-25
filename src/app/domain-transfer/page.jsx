// import FooterCta from "@/components/common/cta/FooterCta";
import FooterCta from "@/components/common/cta/FooterCtatwo";
import DomainExterntion from "@/components/common/domain/DomainExterntion";
import DomainTransferStep from "@/components/common/domain/DomainTransferStep";
import DomainFaq from "@/components/common/faq/DomainFaq";
import TransferDomainHero from "@/components/transferDomain/TransferDomainHero";
import TransferDomainWhyTransfer from "@/components/transferDomain/TransferDomainWhyTransfer";
import TransferDomaiSearch from "@/components/transferDomain/TransferDomaiSearch";

const TransferDomain = () => {

  return (
    <>
      <TransferDomainHero />
      <TransferDomaiSearch />
      <DomainTransferStep />
      <TransferDomainWhyTransfer />
      <DomainExterntion transferdomain />
      <DomainFaq />
      <FooterCta
        firsttital={"Book A Free Consultation Today."}
        path={"/contact/"}
        text={"Contact now"}
      />
    </>
  );
};

export default TransferDomain;
