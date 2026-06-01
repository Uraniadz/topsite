import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './InteractivePreview.module.css';

const InteractivePreview = () => {
  const { t } = useTranslation('landing');

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section className={styles.preview}>
      <div className="container">
        <div className={styles.preview__top}>
          <span>{t('preview.badge')}</span>

          <h2>{t('preview.title')}</h2>

          <p>{t('preview.description')}</p>
        </div>

        <div className={styles.browser}>
          <div className={styles.browser__header}>
            <div className={styles.browser__dots}>
              <span />
              <span />
              <span />
            </div>

            <div className={styles.browser__url}>{t('preview.domain')}</div>
          </div>

          <div className={styles.browser__content}>
            <div className={styles.demoNavbar}>
              <div className={styles.demoLogo}>LOGO</div>

              <nav>
                <button onClick={() => scrollToSection(homeRef)}>
                  {t('preview.navigation.home')}
                </button>

                <button onClick={() => scrollToSection(aboutRef)}>
                  {t('preview.navigation.about')}
                </button>

                <button onClick={() => scrollToSection(servicesRef)}>
                  {t('preview.navigation.services')}
                </button>

                <button onClick={() => scrollToSection(contactRef)}>
                  {t('preview.navigation.contact')}
                </button>
              </nav>
            </div>

            <div className={styles.demoContent}>
              {/* HOME */}
              <section ref={homeRef} className={styles.demoSection}>
                <div className={styles.heroBlock}>
                  <div className={styles.heroText}></div>

                  <div className={styles.heroTextSmall}></div>

                  <div className={styles.heroButtons}>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </section>

              {/* ABOUT */}
              <section ref={aboutRef} className={styles.demoSection}>
                <h3>{t('preview.sections.about')}</h3>

                <div className={styles.aboutGrid}>
                  <div></div>
                  <div></div>
                </div>
              </section>

              {/* SERVICES */}
              <section ref={servicesRef} className={styles.demoSection}>
                <h3>{t('preview.sections.services')}</h3>

                <div className={styles.serviceGrid}>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </section>

              {/* CONTACT */}
              <section ref={contactRef} className={styles.demoSection}>
                <div className={styles.contactBlock}>
                  <h3>{t('preview.sections.contact')}</h3>

                  <div className={styles.contactForm}>
                    <div></div>
                    <div></div>
                    <div></div>

                    <button>{t('preview.button')}</button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractivePreview;
