import { CheckCircle2, MousePointer2, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import styles from './LandingHero.module.css';

import landingFoto from '@/assets/images/landingPage/landing-foto.png';
import ContactModalButton from '@/components/UI_components/ContactModal/ContactModalButton';

const LandingHero = () => {
  const { t } = useTranslation('landing');

  const scrollToExample = () => {
    document.getElementById('demo')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  return (
    <section className={styles.hero}>
      <div className={styles.hero__image}>
        <img src={landingFoto} alt={t('hero.imageAlt')} />
      </div>

      <div className={styles.hero__overlay}></div>

      <div className="container">
        <div className={styles.hero__content}>
          <div className={styles.hero__mobileImage}>
            <img src={landingFoto} alt={t('hero.imageAlt')} />
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

export default LandingHero;
