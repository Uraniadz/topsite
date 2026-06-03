import BusinessAbout from '@/components/business/BusinessAbout/BusinessAbout';
import BusinessBenefits from '@/components/business/BusinessBenefits/BusinessBenefits';
import BusinessExamples from '@/components/business/BusinessExample/BusinessExample';
import BusinessHero from '@/components/business/BusinessHero/BusinessHero';

const BusinessPage = () => {
  return (
    <>
      <BusinessHero />
      <BusinessAbout />
      <BusinessBenefits />
      <BusinessExamples />
    </>
  );
};

export default BusinessPage;
