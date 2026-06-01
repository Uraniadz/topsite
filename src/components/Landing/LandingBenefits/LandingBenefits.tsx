import {
  Target,
  Smartphone,
  Gauge,
  Search,
  Languages,
  TrendingUp,
} from 'lucide-react';

import styles from './LandingBenefits.module.css';

const benefits = [
  {
    icon: <Target size={26} />,
    title: 'Focused Conversion',
    description: 'Every section guides visitors toward a single action.',
  },

  {
    icon: <Smartphone size={26} />,
    title: 'Mobile First',
    description: 'Designed primarily for mobile users and modern devices.',
  },

  {
    icon: <Gauge size={26} />,
    title: 'Fast Loading',
    description: 'Lightweight architecture that improves user experience.',
  },

  {
    icon: <Search size={26} />,
    title: 'SEO Friendly',
    description: 'Clean structure optimized for search engine visibility.',
  },

  {
    icon: <Languages size={26} />,
    title: 'Multi-language',
    description: 'Support for multiple languages and international audiences.',
  },

  {
    icon: <TrendingUp size={26} />,
    title: 'Google Ads Ready',
    description: 'Perfect landing destination for advertising campaigns.',
  },
];

const LandingBenefits = () => {
  return (
    <section className={styles.benefits}>
      <div className="container">
        <div className={styles.benefits__wrapper}>
          <div className={styles.benefits__content}>
            <span className={styles.benefits__badge}>
              Why Choose a Landing Page
            </span>

            <h2 className={styles.benefits__title}>
              Built to Generate More Leads,
              <br />
              Not Just Look Good
            </h2>

            <p className={styles.benefits__description}>
              A landing page is focused on one goal. Unlike traditional
              websites, it eliminates distractions and helps visitors take
              action faster.
            </p>
          </div>

          <div className={styles.benefits__grid}>
            {benefits.map((item) => (
              <article key={item.title} className={styles.benefitCard}>
                <div className={styles.benefitCard__icon}>{item.icon}</div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingBenefits;
