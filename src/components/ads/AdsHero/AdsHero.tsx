import { BarChart3, CheckCircle2, MousePointer2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import styles from './AdsHero.module.css';

import adsFoto from '@/assets/images/adsPage/ads-hero.png';
import ContactModalButton from '@/components/UI_components/ContactModal/ContactModalButton';

const AdsHero = () => {
  const { t } = useTranslation('ads');

  const scrollToExample = () => {
    document.getElementById('benefits')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.hero__image}>
        <img src={adsFoto} alt={t('hero.imageAlt')} />
      </div>

      <div className={styles.hero__overlay}></div>

      <div className="container">
        <div className={styles.hero__content}>
          <div className={styles.hero__mobileImage}>
            <img src={adsFoto} alt={t('hero.imageAlt')} />
          </div>

          <div className={styles.hero__badge}>
            <BarChart3 size={16} />
            {t('hero.badge')}
          </div>

          <h1 className={styles.hero__title}>
            {t('hero.title.line1')}
            <br />
            <span>{t('hero.title.line2')}</span>
          </h1>

          <p className={styles.hero__description}>{t('hero.description')}</p>

          <div className={styles.hero__features}>
            <div className={styles.hero__feature}>
              <CheckCircle2 size={18} />
              <span>{t('hero.features.feature1')}</span>
            </div>

            <div className={styles.hero__feature}>
              <CheckCircle2 size={18} />
              <span>{t('hero.features.feature2')}</span>
            </div>

            <div className={styles.hero__feature}>
              <CheckCircle2 size={18} />
              <span>{t('hero.features.feature3')}</span>
            </div>

            <div className={styles.hero__feature}>
              <CheckCircle2 size={18} />
              <span>{t('hero.features.feature4')}</span>
            </div>
          </div>

          <div className={styles.hero__actions}>
            <div className={styles.hero__primaryBtn}>
              <ContactModalButton
                variant="primary"
                label={t('hero.buttons.consultation')}
              />
            </div>

            <button
              onClick={scrollToExample}
              className={styles.hero__secondaryBtn}
            >
              <MousePointer2 size={18} />
              {t('hero.buttons.learnMore')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdsHero;
