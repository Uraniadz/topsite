import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ArrowLeft,
  ArrowRight,
  Expand,
  MonitorSmartphone,
  Zap,
  Target,
  X,
} from 'lucide-react';

import styles from './LandingExamples.module.css';

import firstAid from '@/assets/images/landingPage/landing-example1.png';
import hairSalon from '@/assets/images/landingPage/landing-example2.png';
import tileExpert from '@/assets/images/landingPage/landing-example3.png';

const LandingExamples = () => {
  const { t } = useTranslation('landing');

  const examples = [
    {
      title: t('examples.items.firstAid.title'),
      description: t('examples.items.firstAid.description'),
      image: firstAid,
    },

    {
      title: t('examples.items.hair.title'),
      description: t('examples.items.hair.description'),
      image: hairSalon,
    },

    {
      title: t('examples.items.tile.title'),
      description: t('examples.items.tile.description'),
      image: tileExpert,
    },
  ];

  const [current, setCurrent] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % examples.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? examples.length - 1 : prev - 1));
  };

  return (
    <section className={styles.examples}>
      <div className="container">
        <div className={styles.examples__wrapper}>
          <div className={styles.examples__content}>
            <span className={styles.examples__badge}>
              {t('examples.badge')}
            </span>

            <h2 className={styles.examples__title}>
              {t('examples.title.line1')}
              <br />
              {t('examples.title.line2')}
            </h2>

            <p className={styles.examples__description}>
              {t('examples.description')}
            </p>

            <div className={styles.examples__features}>
              <div>
                <Target size={18} />
                {t('examples.features.conversion')}
              </div>

              <div>
                <MonitorSmartphone size={18} />
                {t('examples.features.responsive')}
              </div>

              <div>
                <Zap size={18} />
                {t('examples.features.fast')}
              </div>
            </div>

            <div className={styles.examples__controls}>
              <button onClick={prevSlide}>
                <ArrowLeft size={18} />
              </button>

              <span>
                {current + 1} / {examples.length}
              </span>

              <button onClick={nextSlide}>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className={styles.examples__preview}>
            <div className={styles.previewCard} onClick={() => setIsOpen(true)}>
              <img
                src={examples[current].image}
                alt={examples[current].title}
              />

              <button className={styles.expandBtn}>
                <Expand size={18} />
              </button>

              <div className={styles.previewInfo}>
                <h3>{examples[current].title}</h3>

                <p>{examples[current].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className={styles.modal} onClick={() => setIsOpen(false)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.modalClose}
              onClick={() => setIsOpen(false)}
            >
              <X size={22} />
            </button>

            <button
              className={`${styles.modalArrow} ${styles.modalArrowLeft}`}
              onClick={prevSlide}
            >
              <ArrowLeft size={22} />
            </button>

            <button
              className={`${styles.modalArrow} ${styles.modalArrowRight}`}
              onClick={nextSlide}
            >
              <ArrowRight size={22} />
            </button>

            <img src={examples[current].image} alt={examples[current].title} />

            <div className={styles.modalFooter}>
              <h3>{examples[current].title}</h3>

              <span>
                {current + 1} / {examples.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LandingExamples;
