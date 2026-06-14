import AdsBenefits from '@/components/ads/AdsBenefits/AdsBenefits';
import AdsProcess from '@/components/ads/AdsProcess/AdsProcess';
import AdsServices from '@/components/ads/AdsServices/AdsServices';
import AdsHero from '@/components/ads/AdsHero/AdsHero';
import RelatedServices from '@/components/Landing/RelatedServices/RelatedServices';
import ContactCta from '@/components/UI_components/ContactCta/ContactCta';
import AdsFAQ from '@/components/ads/AdsFAQ/AdsFAQ';
import { useTranslation } from 'react-i18next';
import Seo from '@/components/UI_components/Seo/Seo';
import { CONTACTS } from '@/config/contact';

const AdsPage = () => {
  const { t } = useTranslation('ads');
  return (
    <>
      <Seo
        title={t('seo.title', { company: CONTACTS.companyName })}
        description={t('seo.description', { company: CONTACTS.companyName })}
      />
      <AdsHero />
      <AdsBenefits />
      <AdsServices />
      <AdsProcess />
      <AdsFAQ />
      <ContactCta />

      <RelatedServices exclude="google-ads" />
    </>
  );
};

export default AdsPage;
