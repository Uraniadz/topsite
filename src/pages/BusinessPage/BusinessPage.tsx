import BusinessAbout from '@/components/business/BusinessAbout/BusinessAbout';
import BusinessAds from '@/components/business/BusinessAds/BusinessAds';
import BusinessBenefits from '@/components/business/BusinessBenefits/BusinessBenefits';
import BusinessExamples from '@/components/business/BusinessExample/BusinessExample';
import BusinessFAQ from '@/components/business/BusinessFAQ/BusinessFAQ';
import BusinessHero from '@/components/business/BusinessHero/BusinessHero';
import BusinessPricing from '@/components/business/BusinessPricing/BusinessPricing';
import BusinessProcess from '@/components/business/BusinessProcess/BusinessProcess';

import RelatedServices from '@/components/Landing/RelatedServices/RelatedServices';
import ContactCta from '@/components/UI_components/ContactCta/ContactCta';
import Seo from '@/components/UI_components/Seo/Seo';

import { useTranslation } from 'react-i18next';
import { CONTACTS } from '@/config/contact';

const BusinessPage = () => {
  const { t } = useTranslation('business');

  return (
    <>
      <Seo
        title={t('seo.title', { company: CONTACTS.companyName })}
        description={t('seo.description', { company: CONTACTS.companyName })}
      />

      <BusinessHero />
      <BusinessAbout />
      <BusinessBenefits />
      <BusinessExamples />
      <BusinessPricing />
      <BusinessAds />
      <BusinessProcess />
      <BusinessFAQ />
      <ContactCta />

      <RelatedServices exclude="business-website" />
    </>
  );
};

export default BusinessPage;
