import {
  BadgeCheck,
  Building2,
  Search,
  BriefcaseBusiness,
  BookOpen,
  Megaphone,
} from 'lucide-react';

import { useTranslation } from 'react-i18next';

import styles from './BusinessAbout.module.css';

const BusinessAbout = () => {
  const { t } = useTranslation('business');

  const features = [
    {
      icon: <Search size={24} />,
      title: t('about.features.seo.title'),
      description: t('about.features.seo.description'),
    },

    {
      icon: <BriefcaseBusiness size={24} />,
      title: t('about.features.portfolio.title'),
      description: t('about.features.portfolio.description'),
    },

    {
      icon: <Megaphone size={24} />,
      title: t('about.features.googleAds.title'),
      description: t('about.features.googleAds.description'),
    },

    {
      icon: <BookOpen size={24} />,
      title: t('about.features.blog.title'),
      description: t('about.features.blog.description'),
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
                <strong>5–20+</strong>

                <span>{t('about.stats.pages')}</span>
              </div>

              <div className={styles.stat}>
                <strong>SEO</strong>

                <span>{t('about.stats.seo')}</span>
              </div>

              <div className={styles.stat}>
                <strong>Google Ads</strong>

                <span>{t('about.stats.ads')}</span>
              </div>
            </div>
          </div>

          <div className={styles.about__visual}>
            <div className={styles.visualCardLarge}>
              <Building2 size={28} />

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

export default BusinessAbout;
