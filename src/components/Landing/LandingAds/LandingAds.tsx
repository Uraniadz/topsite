import {
  Target,
  Search,
  BarChart3,
  MousePointerClick,
  BadgeCheck,
} from 'lucide-react';

import { useTranslation } from 'react-i18next';

import styles from './LandingAds.module.css';

const LandingAds = () => {
  const { t } = useTranslation('landing');

  const features = [
    {
      icon: <Target size={24} />,
      title: t('ads.features.conversion.title'),
      description: t('ads.features.conversion.description'),
    },

    {
      icon: <Search size={24} />,
      title: t('ads.features.keywords.title'),
      description: t('ads.features.keywords.description'),
    },

    {
      icon: <MousePointerClick size={24} />,
      title: t('ads.features.quality.title'),
      description: t('ads.features.quality.description'),
    },

    {
      icon: <BarChart3 size={24} />,
      title: t('ads.features.analytics.title'),
      description: t('ads.features.analytics.description'),
    },
  ];

  return (
    <section className={styles.ads}>
      <div className="container">
        <div className={styles.ads__wrapper}>
          <div className={styles.ads__content}>
            <span className={styles.ads__badge}>{t('ads.badge')}</span>

            <h2 className={styles.ads__title}>
              {t('ads.title.line1')}
              <br />
              {t('ads.title.line2')}
            </h2>

            <p className={styles.ads__description}>{t('ads.description1')}</p>

            <p className={styles.ads__description}>{t('ads.description2')}</p>

            <div className={styles.ads__stats}>
              <div>
                <strong>{t('ads.stats.ads.title')}</strong>

                <span>{t('ads.stats.ads.subtitle')}</span>
              </div>

              <div>
                <strong>{t('ads.stats.analytics.title')}</strong>

                <span>{t('ads.stats.analytics.subtitle')}</span>
              </div>

              <div>
                <strong>{t('ads.stats.tracking.title')}</strong>

                <span>{t('ads.stats.tracking.subtitle')}</span>
              </div>
            </div>
          </div>

          <div className={styles.ads__cards}>
            {features.map((item) => (
              <article key={item.title} className={styles.card}>
                <div className={styles.card__icon}>{item.icon}</div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            ))}

            <div className={styles.resultCard}>
              <BadgeCheck size={32} />

              <h3>{t('ads.result.title')}</h3>

              <p>{t('ads.result.description')}</p>

              <div className={styles.resultCard__badge}>
                {t('ads.result.badge')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingAds;
