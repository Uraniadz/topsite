import { Check, Star } from 'lucide-react';

import styles from './LandingPricing.module.css';

const plans = [
  {
    name: 'Starter Landing',
    price: '€500+',
    description: 'Perfect for local businesses and service providers.',

    features: [
      'Custom design',
      'Responsive layout',
      'Contact form',
      'Basic SEO',
      'Fast loading',
    ],
  },

  {
    name: 'Business Landing',
    price: '€900+',
    description: 'The most popular choice for growing businesses.',

    featured: true,

    features: [
      'Everything in Starter',
      'Advanced animations',
      'Multi-language support',
      'Analytics setup',
      'Conversion-focused structure',
      'Premium UI/UX',
    ],
  },

  {
    name: 'Landing + Google Ads',
    price: '€1200+',
    description: 'Complete lead generation solution.',

    features: [
      'Everything in Business',
      'Google Ads setup',
      'Conversion tracking',
      'Keyword research',
      'Landing optimization',
      'Performance monitoring',
    ],
  },
];

const LandingPricing = () => {
  return (
    <section className={styles.pricing}>
      <div className="container">
        <div className={styles.pricing__top}>
          <span>Pricing</span>

          <h2>Choose the Right Package</h2>

          <p>
            Transparent pricing with no unnecessary extras. Select the package
            that best fits your goals.
          </p>
        </div>

        <div className={styles.pricing__grid}>
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`${styles.card} ${
                plan.featured ? styles.featured : ''
              }`}
            >
              {plan.featured && (
                <div className={styles.badge}>
                  <Star size={14} />
                  Most Popular
                </div>
              )}

              <h3>{plan.name}</h3>

              <div className={styles.price}>{plan.price}</div>

              <p className={styles.description}>{plan.description}</p>

              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check size={18} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button>Get Started</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingPricing;
