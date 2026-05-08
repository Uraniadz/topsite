import styles from './WhyChooseUs.module.css';

import { useTranslation } from 'react-i18next';

import { Rocket, Gauge, Layers3, Search, ShieldCheck } from 'lucide-react';

const WhyChooseUs = () => {
  const { t } = useTranslation('home');

  const features = [
    {
      icon: <Rocket size={30} strokeWidth={2} />,
      title: t('whyChooseUs.features.custom.title'),
      description: t('whyChooseUs.features.custom.description'),
      large: true,
    },

    {
      icon: <Gauge size={30} strokeWidth={2} />,
      title: t('whyChooseUs.features.performance.title'),
      description: t('whyChooseUs.features.performance.description'),
      large: true,
    },

    {
      icon: <Layers3 size={24} strokeWidth={2} />,
      title: t('whyChooseUs.features.scalable.title'),
      description: t('whyChooseUs.features.scalable.description'),
    },

    {
      icon: <Search size={24} strokeWidth={2} />,
      title: t('whyChooseUs.features.seo.title'),
      description: t('whyChooseUs.features.seo.description'),
    },

    {
      icon: <ShieldCheck size={24} strokeWidth={2} />,
      title: t('whyChooseUs.features.support.title'),
      description: t('whyChooseUs.features.support.description'),
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.blurTop} />
      <div className={styles.blurBottom} />

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>{t('whyChooseUs.label')}</span>

          <h2 className={styles.title}>{t('whyChooseUs.title')}</h2>

          <p className={styles.subtitle}>{t('whyChooseUs.subtitle')}</p>
        </div>

        <div className={styles.grid}>
          {features.map((item, index) => (
            <article
              key={index}
              className={`${styles.card} ${item.large ? styles.cardLarge : ''}`}
            >
              <div className={styles.cardGlow} />

              <div className={styles.icon}>{item.icon}</div>

              <h3 className={styles.cardTitle}>{item.title}</h3>

              <p className={styles.cardDescription}>{item.description}</p>
            </article>
          ))}
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>&lt; 2s</span>

            <span className={styles.statText}>
              {t('whyChooseUs.stats.speed')}
            </span>
          </div>

          <div className={styles.stat}>
            <span className={styles.statNumber}>100%</span>

            <span className={styles.statText}>
              {t('whyChooseUs.stats.responsive')}
            </span>
          </div>

          <div className={styles.stat}>
            <span className={styles.statNumber}>SEO</span>

            <span className={styles.statText}>
              {t('whyChooseUs.stats.seo')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
