import { useTranslation } from 'react-i18next';

import Seo from '@/components/UI_components/Seo/Seo';

import Cta from '@/components/Home/Cta/Cta';
import FAQ from '@/components/Home/Faq/Faq';
import Hero from '@/components/Home/Hero/Hero';
import Portfolio from '@/components/Home/Portfolio/Portfolio';
import Process from '@/components/Home/Process/Process';
import Reviews from '@/components/Home/Reviews/Reviews';
import Services from '@/components/Home/Services/Services';
import WhyChooseUs from '@/components/Home/WhyChooseUs/WhyChooseUs';
import ContactForm from '@/components/UI_components/ContactForm/ContactForm';

const HomePage = () => {
  const { t } = useTranslation('home');

  return (
    <>
      <Seo title={t('seo.title')} description={t('seo.description')} />

      <Hero />
      <Services />
      <WhyChooseUs />
      <Process />
      <Portfolio />
      <Reviews />
      <Cta />
      <FAQ />
      <ContactForm />
    </>
  );
};

export default HomePage;
