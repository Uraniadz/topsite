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

const LandingPage = () => {
  return (
    <>
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
