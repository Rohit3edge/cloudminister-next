"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { CurrencyContext } from "../currencyconversion/Currencyconversion";
const SharedHostingHero = () => {
    const { convert, currency } = useContext(CurrencyContext);
  return (
    <>
      <section className="banner banner-security bg-dark control-panel-banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-xl-6">
              <h1
                className="text-white mb-4"
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
              >
                The Power of{" "}
                <span className="text-success-new"> Shared Hosting</span>, Made
                Simple
              </h1>
              <p
                className="mb-8 text-white max-text-72 text-opacity-75"
                data-sal="slide-up"
                data-sal-duration="1500"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
              >
                Emphasize how your shared hosting options are dependable and
                easy to use, demonstrating how they can accommodate both novice
                and seasoned customers.
              </p>
              <div
                className="d-flex align-items-center gap-5 flex-wrap"
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
              >
                <a
                  href="https://manage.cloudminister.com/store/linux-shared-hosting//startup-shared-hosting"
                  target="_blank"
                  className="btn btn-primary btn-arrow btn-arrow btn-arrow-md btn-lg fs-14 fw-medium rounded"
                >
                  <span className="btn-arrow__text">
                    Get Started
                    <span className="btn-arrow__icon">
                      <i className="las la-arrow-right"></i>
                    </span>
                  </span>
                </a>
                <h4 className="text-white mb-0">
                 {currency === "INR" ? "₹" : "$"} {convert(140, "INR", currency)}
                 <span className="fw-normal fs-16">/mo</span>
             </h4>
              </div>
            </div>
            <div className="col-lg-5 col-xl-6 text-lg-end">
              <Image
                src="/img/Shared web hosting.png"
                alt="Shared Web Hosting"
                className="img-fluid"
                data-sal="fade"
                width={548}
                height={401} 
                data-sal-duration="1500"
                data-sal-delay="300"
                data-sal-easing="ease-in-out-sine"
                priority 
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SharedHostingHero;
