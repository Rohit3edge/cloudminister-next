import { AzurecloudData } from "../../utils/data";
import FeatureCard from "../common/card/FeatureCard";
const SharedHostingFeature = () => {
  return (
    <>
      <div className="pt-120 pb-120 bg-primary bg-opacity-5">
        <div className="pb-60">
          <div className="container">
            <div className="row justify-content-center">
              <div
                className="col-md-10 col-lg-8 col-xl-10 text-center"
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
              >
                <h3 className="mb-0">
                  Microsoft Azure Cloud Hosting Services by CloudMinister
                </h3>
                <p className="mt-4">
                  Transform your business operations with CloudMinister's
                  Microsoft Azure Cloud Hosting, where reliability, scalability,
                  and advanced cloud solutions come together to ensure your
                  success. We offer end-to-end hosting services that empower
                  businesses to harness the potential of Azure to achieve
                  optimized performance and hassle-free management.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4">
            {AzurecloudData?.map((f, i) => (
              <FeatureCard feature={f} key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SharedHostingFeature;
