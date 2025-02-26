import React from "react";
import MigrateAkamaiHero from "@/components/MigrateAkamai/MigrateAkamaiHero";
import WhyChoose from "@/components/MigrateAkamai/WhyChoose";
import ItWorks from "@/components/MigrateAkamai/ItWorks";
import DataCenterCustomerBrands from "@/components/dataCenter/DataCenterCustomerBrands";
import EndSale from "@/components/MigrateAkamai/EndSale";
import FeatureCard from "@/components/MigrateAkamai/FeatureCard";

const MigrateAkamai = () => {
  return (
    <>
      <MigrateAkamaiHero />
      <WhyChoose />
      <ItWorks />
      <FeatureCard />
      <EndSale />
      <DataCenterCustomerBrands />
    </>
  );
};

export default MigrateAkamai;
