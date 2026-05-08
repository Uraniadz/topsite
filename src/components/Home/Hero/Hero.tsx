import { useTranslation } from 'react-i18next';
import styles from './Hero.module.css';
import heroImage from '@/assets/images/hero/hero2.png';
const Hero = () => {
  const { t } = useTranslation('home');

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.hero__content}>
          <div className={styles.hero__left}>
            <span className={styles.hero__badge}>{t('hero.badge')}</span>

            <h1 className={styles.hero__title}>{t('hero.title')}</h1>

            <p className={styles.hero__text}>{t('hero.text')}</p>

            <div className={styles.hero__actions}>
              <button className={styles.hero__primary}>
                {t('hero.buttons.primary')}
              </button>

              <button className={styles.hero__secondary}>
                {t('hero.buttons.secondary')}
              </button>
            </div>

            <div className={styles.hero__stats}>
              <div className={styles.hero__stat}>
                <strong>
                  <span className={styles.hero__statDot} />
                  {t('hero.stats.react.title')}
                </strong>

                <span> {t('hero.stats.react.subtitle')}</span>
              </div>

              <div className={styles.hero__stat}>
                <strong>
                  <span className={styles.hero__statDot} />
                  {t('hero.stats.node.title')}
                </strong>

                <span> {t('hero.stats.node.subtitle')}</span>
              </div>

              <div className={styles.hero__stat}>
                <strong>
                  <span className={styles.hero__statDot} />
                  {t('hero.stats.seo.title')}
                </strong>

                <span> {t('hero.stats.seo.subtitle')}</span>
              </div>
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
              {' '}
              {t('hero.floating.bottom')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
