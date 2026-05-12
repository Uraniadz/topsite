import Hero from '@/components/Home/Hero/Hero';
import Portfolio from '@/components/Home/Portfolio/Portfolio';
import Process from '@/components/Home/Process/Process';
import Reviews from '@/components/Home/Reviews/Reviews';
import Services from '@/components/Home/Services/Services';
import WhyChooseUs from '@/components/Home/WhyChooseUs/WhyChooseUs';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Process />
      <Portfolio />
      <Reviews />
    </>
  );
};

export default HomePage;
