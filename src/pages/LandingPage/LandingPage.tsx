import LandingStructure from '@/components/Landing/InteractivePreview/LandingStructure';
import LandingAbout from '@/components/Landing/LandingAbout/LandingAbout';
import LandingAds from '@/components/Landing/LandingAds/LandingAds';
import LandingBenefits from '@/components/Landing/LandingBenefits/LandingBenefits';
import LandingFAQ from '@/components/Landing/LandingFAQ/LandingFAQ';
import LandingHero from '@/components/Landing/LandingHero/LandingHero';
import LandingPricing from '@/components/Landing/LandingPricing/LandingPricing';
import LandingProcess from '@/components/Landing/LandingProcess/LandingProcess';
import RelatedServices from '@/components/Landing/RelatedServices/RelatedServices';
import ContactCta from '@/components/UI_components/ContactCta/ContactCta';
import Seo from '@/components/UI_components/Seo/Seo';

import { useTranslation } from 'react-i18next';
import { CONTACTS } from '@/config/contact';

const LandingPage = () => {
  const { t } = useTranslation('landing');

  return (
    <>
      <Seo
        title={t('seo.title', { company: CONTACTS.companyName })}
        description={t('seo.description', {
          company: CONTACTS.companyName,
        })}
      />

      <LandingHero />
      <LandingAbout />
      <LandingBenefits />
      <LandingStructure />
      <LandingPricing />
      <LandingAds />
      <LandingProcess />
      <LandingFAQ />
      <ContactCta />

      <RelatedServices exclude="landing" />
    </>
  );
};

export default LandingPage;
