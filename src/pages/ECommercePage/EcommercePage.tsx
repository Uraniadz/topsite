import EcommerceBenefits from '@/components/ecommerce/EcommerceBenefits/EcommerceBenefits';
import EcommerceFAQ from '@/components/ecommerce/EcommerceFAQ/EcommerceFAQ';
import EcommerceFeatures from '@/components/ecommerce/EcommerceFeatures/EcommerceFeatures';
import EcommerceHero from '@/components/ecommerce/EcommerceHero/EcommerceHero';
import EcommercePricing from '@/components/ecommerce/EcommercePricing/EcommercePricing';
import EcommerceProcess from '@/components/ecommerce/EcommerceProcess/EcommerceProcess';

import RelatedServices from '@/components/Landing/RelatedServices/RelatedServices';
import ContactCta from '@/components/UI_components/ContactCta/ContactCta';
import Seo from '@/components/UI_components/Seo/Seo';

import { useTranslation } from 'react-i18next';
import { CONTACTS } from '@/config/contact';

const ECommercePage = () => {
  const { t } = useTranslation('ecommerce');

  return (
    <>
      <Seo
        title={t('seo.title', { company: CONTACTS.companyName })}
        description={t('seo.description', {
          company: CONTACTS.companyName,
        })}
      />

      <EcommerceHero />
      <EcommerceFeatures />
      <EcommerceBenefits />
      <EcommerceProcess />
      <EcommercePricing />
      <EcommerceFAQ />
      <ContactCta />

      <RelatedServices exclude="ecommerce" />
    </>
  );
};

export default ECommercePage;
