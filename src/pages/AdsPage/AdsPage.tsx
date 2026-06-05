import AdsHero from '@/components/ads/AdsHero/AdsHero';
import RelatedServices from '@/components/Landing/RelatedServices/RelatedServices';
import ContactCta from '@/components/UI_components/ContactCta/ContactCta';

const AdsPage = () => {
  return (
    <>
      <AdsHero />
      <ContactCta />
      <RelatedServices exclude="business-website" />
    </>
  );
};

export default AdsPage;
