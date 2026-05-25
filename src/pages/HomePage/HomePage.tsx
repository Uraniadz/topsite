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
  return (
    <>
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
