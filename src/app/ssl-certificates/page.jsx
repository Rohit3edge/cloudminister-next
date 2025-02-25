import React from 'react'
import SslHero from '@/components/Ssl_Certificates/SslHero'
import WildCardSsl from '@/components/Ssl_Certificates/WildCardSsl'
import Sslvarietyreasons from'@/components/Ssl_Certificates/Sslvarietyreasons'
import BenefitsSsl from '@/components/Ssl_Certificates/BenefitsSsl'
import SslCertificatesFaq from '@/components/Ssl_Certificates/SslCertificatesFaq'
import FooterCta from "@/components/common/cta/FooterCta";
import SslCertificatemean from '@/components/Ssl_Certificates/SslCertificatemean'
import DataHostingDatacenterSupport from "@/components/dataCenter/CloudHostingDatacenterLocation";
import SslNoIncreased from '@/components/Ssl_Certificates/SslNoIncreased'
import DataCenterFeedback from "@/components/dataCenter/DataCenterFeedback";


function SslCertificates() {

  return (
   <>
   <SslHero/>
   <WildCardSsl/>
   <SslNoIncreased/>
   <Sslvarietyreasons/>
   <DataHostingDatacenterSupport/>
   <BenefitsSsl/>
   <SslCertificatemean/>
   <SslCertificatesFaq/>
    <DataCenterFeedback/>
   <FooterCta firsttital={'Experience the Power of SSL Certificate.'} sectital={'7 Days of Risk-Free Trial '}/>

    
   </>
  )
}

export default SslCertificates
