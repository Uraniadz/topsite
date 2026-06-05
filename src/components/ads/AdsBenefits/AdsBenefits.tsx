import {
  Users,
  Zap,
  Wallet,
  BarChart3,
  Target,
  TrendingUp,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

import styles from './AdsBenefits.module.css';

const AdsBenefits = () => {
  const { t } = useTranslation('ads');

  const benefits = [
    {
      icon: <Users size={26} />,
      title: t('benefits.items.leads.title'),
      description: t('benefits.items.leads.description'),
    },

    {
      icon: <Zap size={26} />,
      title: t('benefits.items.results.title'),
      description: t('benefits.items.results.description'),
    },

    {
      icon: <Wallet size={26} />,
      title: t('benefits.items.budget.title'),
      description: t('benefits.items.budget.description'),
    },

    {
      icon: <BarChart3 size={26} />,
      title: t('benefits.items.analytics.title'),
      description: t('benefits.items.analytics.description'),
    },

    {
      icon: <Target size={26} />,
      title: t('benefits.items.targeting.title'),
      description: t('benefits.items.targeting.description'),
    },

    {
      icon: <TrendingUp size={26} />,
      title: t('benefits.items.growth.title'),
      description: t('benefits.items.growth.description'),
    },
  ];

  return (
    <section id="benefits" className={styles.benefits}>
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

export default AdsBenefits;
