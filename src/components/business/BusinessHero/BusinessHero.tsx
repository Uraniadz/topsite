import { CheckCircle2, MousePointer2, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import styles from './BusinessHero.module.css';

import businessFoto from '@/assets/images/businessPage/business-hero.png';
import ContactModalButton from '@/components/UI_components/ContactModal/ContactModalButton';

const BusinessHero = () => {
  const { t } = useTranslation('business');
  const scrollToExample = () => {
    document.getElementById('demo')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  return (
    <section className={styles.hero}>
      <div className={styles.hero__image}>
        <img src={businessFoto} alt={t('hero.imageAlt')} />
      </div>

      <div className={styles.hero__overlay}></div>

      <div className="container">
        <div className={styles.hero__content}>
          <div className={styles.hero__mobileImage}>
            <img src={businessFoto} alt={t('hero.imageAlt')} />
          </div>

          <div className={styles.hero__badge}>
            <Sparkles size={16} />
            {t('hero.badge')}
          </div>

          <h1 className={styles.hero__title}>
            {t('hero.title.line1')}
            <br />
            <span>{t('hero.title.line2')}</span>
            <br />
            {t('hero.title.line3')}
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
                label={t('hero.primaryButton')}
              />
            </div>

            <button
              onClick={scrollToExample}
              className={styles.hero__secondaryBtn}
            >
              <MousePointer2 size={18} />
              {t('hero.buttons.demo')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessHero;
