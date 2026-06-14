import { useTranslation } from 'react-i18next';

import heroImage from '@/assets/images/hero/hero2.webp';

import styles from './Hero.module.css';
import ContactModalButton from '@/components/UI_components/ContactModal/ContactModalButton';

const Hero = () => {
  const { t } = useTranslation('home');
  const scrollToExample = () => {
    document.getElementById('services')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  const stats = [
    {
      title: t('hero.stats.websites.title'),
      subtitle: t('hero.stats.websites.subtitle'),
    },
    {
      title: t('hero.stats.ads.title'),
      subtitle: t('hero.stats.ads.subtitle'),
    },
    {
      title: t('hero.stats.seo.title'),
      subtitle: t('hero.stats.seo.subtitle'),
    },
  ];

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.hero__content}>
          <div className={styles.hero__left}>
            <span className={styles.hero__badge}>{t('hero.badge')}</span>

            <h1 className={styles.hero__title}>{t('hero.title')}</h1>

            <p className={styles.hero__text}>{t('hero.text')}</p>
            <div className={styles.hero__actions}>
              <div className={styles.hero__primaryWrapper}>
                <ContactModalButton
                  variant="primary"
                  label={t('hero.buttons.primary')}
                />
              </div>

              <button
                onClick={scrollToExample}
                className={styles.hero__secondary}
              >
                {t('hero.buttons.secondary')}
              </button>
            </div>

            <div className={styles.hero__stats}>
              {stats.map((stat) => (
                <div key={stat.title} className={styles.hero__stat}>
                  <strong>
                    <span className={styles.hero__statDot} />
                    {stat.title}
                  </strong>

                  <span>{stat.subtitle}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.hero__right}>
            <div className={styles.hero__mockup}>
              <div className={styles.hero__window}>
                <div className={styles.hero__dots}>
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <div className={styles.hero__preview}>
                <img
                  src={heroImage}
                  alt={t('hero.imageAlt')}
                  className={styles.hero__img}
                />
              </div>
            </div>

            <div className={styles.hero__floating}>
              {t('hero.floating.top')}
            </div>

            <div className={styles.hero__floatingBottom}>
              {t('hero.floating.bottom')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
