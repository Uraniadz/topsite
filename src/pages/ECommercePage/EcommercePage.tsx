import EcommerceBenefits from '@/components/ecommerce/EcommerceBenefits/EcommerceBenefits';
import EcommerceFeatures from '@/components/ecommerce/EcommerceFeatures/EcommerceFeatures';
import EcommerceHero from '@/components/ecommerce/EcommerceHero/EcommerceHero';
import EcommercePricing from '@/components/ecommerce/EcommercePricing/EcommercePricing';
import EcommerceProcess from '@/components/ecommerce/EcommerceProcess/EcommerceProcess';
// import RelatedServices from '@/components/Landing/RelatedServices/RelatedServices';
// import ContactCta from '@/components/UI_components/ContactCta/ContactCta';

const ECommercePage = () => {
  return (
    <>
      <EcommerceHero />
      <EcommerceFeatures />
      <EcommerceBenefits />
      <EcommerceProcess />
      <EcommercePricing />
      {/* <ContactCta />
      <RelatedServices exclude="business-website" /> */}
    </>
  );
};

export default ECommercePage;
