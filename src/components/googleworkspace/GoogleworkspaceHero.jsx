import React from 'react'
import Link from 'next/link'
function SslHero() {
  return (
    <>
        <section className="hero-4 position-relative z-1 bg-dark banner-security">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-7 col-xl-6">
               
                    <h1 className="text-white mb-4" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    <span className="text-success-new">
                    Google WorkSpace </span> Solutions for Enterprises & Small Businesses
                    <br />
                   
                    </h1>
                    <p className="mb-8 text-white  text-opacity-75" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                    Our professional services guarantee fast integration, customized support, and maximized productivity, from smooth collaboration to better communication. With Google Workspace solutions made specifically for you, you can easily connect your team, establish powerful processes, and achieve your goals!
                    </p>
                    <Link href="/contact/" className="btn btn-primary btn-arrow btn-arrow btn-arrow-md btn-lg fs-14 fw-medium rounded" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease-in-out-sine">
                        <span className="btn-arrow__text">
                            Get Started
                            <span className="btn-arrow__icon">
                                <i className="las la-arrow-right"></i>
                            </span>
                        </span>
                    </Link>
                </div>
                <div className="col-lg-5 col-xl-6 text-lg-end">
                    <img src="/email/Google Workspace.png" alt="image" className="img-fluid" data-sal="fade" data-sal-duration="1500" data-sal-delay="300" data-sal-easing="ease-in-out-sine"/>
                </div>
            </div>
        </div>
    </section>
    </>
  
  )
}

export default SslHero
