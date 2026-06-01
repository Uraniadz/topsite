import {
  BadgeCheck,
  Smartphone,
  Zap,
  TrendingUp,
  Megaphone,
  Rocket,
} from 'lucide-react';

import { useTranslation } from 'react-i18next';

import styles from './LandingAbout.module.css';

const LandingAbout = () => {
  const { t } = useTranslation('landing');

  const features = [
    {
      icon: <Megaphone size={24} />,
      title: t('about.features.googleAds.title'),
      description: t('about.features.googleAds.description'),
    },

    {
      icon: <TrendingUp size={24} />,
      title: t('about.features.leadGeneration.title'),
      description: t('about.features.leadGeneration.description'),
    },

    {
      icon: <Smartphone size={24} />,
      title: t('about.features.mobileFirst.title'),
      description: t('about.features.mobileFirst.description'),
    },

    {
      icon: <Zap size={24} />,
      title: t('about.features.fastLoading.title'),
      description: t('about.features.fastLoading.description'),
    },
  ];

  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.about__wrapper}>
          <div className={styles.about__content}>
            <span className={styles.about__badge}>
              <BadgeCheck size={16} />
              {t('about.badge')}
            </span>

            <h2 className={styles.about__title}>{t('about.title')}</h2>

            <p className={styles.about__description}>
              {t('about.description1')}
            </p>

            <p className={styles.about__description}>
              {t('about.description2')}
            </p>

            <div className={styles.about__stats}>
              <div className={styles.stat}>
                <strong>5–8</strong>

                <span>{t('about.stats.sections')}</span>
              </div>

              <div className={styles.stat}>
                <strong>1</strong>

                <span>{t('about.stats.goal')}</span>
              </div>

              <div className={styles.stat}>
                <strong>100%</strong>

                <span>{t('about.stats.responsive')}</span>
              </div>
            </div>
          </div>

          <div className={styles.about__visual}>
            <div className={styles.visualCardLarge}>
              <Rocket size={28} />

              <h3>{t('about.mainCard.title')}</h3>

              <p>{t('about.mainCard.description')}</p>
            </div>

            <div className={styles.visualGrid}>
              {features.map((item) => (
                <div key={item.title} className={styles.visualCard}>
                  {item.icon}

                  <h4>{item.title}</h4>

                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingAbout;
