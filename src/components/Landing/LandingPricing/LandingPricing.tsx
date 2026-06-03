import { Check, Rocket } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { HashLink } from 'react-router-hash-link';

import styles from './LandingPricing.module.css';

import routesPath, { getLocalizedPath } from '@/routes/routesPath';

const LandingPricing = () => {
  const { t, i18n } = useTranslation('landing');

  const features = [
    t('pricing.features.feature1'),
    t('pricing.features.feature2'),
    t('pricing.features.feature3'),
    t('pricing.features.feature4'),
    t('pricing.features.feature5'),
    t('pricing.features.feature6'),
    t('pricing.features.feature7'),
    t('pricing.features.feature8'),
  ];

  return (
    <section className={styles.pricing}>
      <div className="container">
        <div className={styles.pricing__card}>
          <div className={styles.left}>
            <span className={styles.badge}>{t('pricing.badge')}</span>

            <h2 className={styles.title}>
              {t('pricing.title.line1')}
              <br />
              {t('pricing.title.line2')}
            </h2>

            <p className={styles.description}>{t('pricing.description')}</p>

            <div className={styles.features}>
              {features.map((feature) => (
                <div key={feature} className={styles.feature}>
                  <Check size={18} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.priceCard}>
              <Rocket size={34} />

              <span className={styles.priceLabel}>
                {t('pricing.startingFrom')}
              </span>

              <strong>{t('pricing.price')}</strong>

              <p>{t('pricing.launchTime')}</p>

              <HashLink
                to={getLocalizedPath(
                  i18n.language,
                  `/${routesPath.price}#landing-price`,
                )}
                className={styles.button}
              >
                {t('pricing.button')}
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPricing;
