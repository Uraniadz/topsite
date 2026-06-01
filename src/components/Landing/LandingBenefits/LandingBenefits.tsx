import {
  Target,
  Smartphone,
  Gauge,
  Search,
  Languages,
  TrendingUp,
} from 'lucide-react';

import { useTranslation } from 'react-i18next';

import styles from './LandingBenefits.module.css';

const LandingBenefits = () => {
  const { t } = useTranslation('landing');

  const benefits = [
    {
      icon: <Target size={26} />,
      title: t('benefits.items.conversion.title'),
      description: t('benefits.items.conversion.description'),
    },

    {
      icon: <Smartphone size={26} />,
      title: t('benefits.items.mobile.title'),
      description: t('benefits.items.mobile.description'),
    },

    {
      icon: <Gauge size={26} />,
      title: t('benefits.items.speed.title'),
      description: t('benefits.items.speed.description'),
    },

    {
      icon: <Search size={26} />,
      title: t('benefits.items.seo.title'),
      description: t('benefits.items.seo.description'),
    },

    {
      icon: <Languages size={26} />,
      title: t('benefits.items.multilang.title'),
      description: t('benefits.items.multilang.description'),
    },

    {
      icon: <TrendingUp size={26} />,
      title: t('benefits.items.ads.title'),
      description: t('benefits.items.ads.description'),
    },
  ];

  return (
    <section className={styles.benefits}>
      <div className="container">
        <div className={styles.benefits__wrapper}>
          <div className={styles.benefits__content}>
            <span className={styles.benefits__badge}>
              {t('benefits.badge')}
            </span>

            <h2 className={styles.benefits__title}>
              {t('benefits.title.line1')}
              <br />
              {t('benefits.title.line2')}
            </h2>

            <p className={styles.benefits__description}>
              {t('benefits.description')}
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
