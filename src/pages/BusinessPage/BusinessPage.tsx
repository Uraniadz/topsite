import BusinessAbout from '@/components/business/BusinessAbout/BusinessAbout';
import BusinessBenefits from '@/components/business/BusinessBenefits/BusinessBenefits';
import BusinessHero from '@/components/business/BusinessHero/BusinessHero';

const BusinessPage = () => {
  return (
    <>
      <BusinessHero />
      <BusinessAbout />
      <BusinessBenefits />
    </>
  );
};

export default BusinessPage;
