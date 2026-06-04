import { CheckCircle2, ShoppingBag } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { HashLink } from 'react-router-hash-link';
import styles from './EcommercePricing.module.css';
import routesPath, { getLocalizedPath } from '@/routes/routesPath';

const EcommercePricing = () => {
  const { t } = useTranslation('ecommerce');
  const { i18n } = useTranslation();

  const items = [
    t('pricing.items.item1'),
    t('pricing.items.item2'),
    t('pricing.items.item3'),
    t('pricing.items.item4'),
    t('pricing.items.item5'),
    t('pricing.items.item6'),
    t('pricing.items.item7'),
    t('pricing.items.item8'),
    t('pricing.items.item9'),
    t('pricing.items.item10'),
  ];

  return (
    <section className={styles.pricing}>
      <div className="container">
        <div className={styles.pricing__header}>
          <span className={styles.pricing__badge}>{t('pricing.badge')}</span>

          <h2 className={styles.pricing__title}>
            {t('pricing.title.line1')}
            <br />
            <span>{t('pricing.title.line2')}</span>
          </h2>

          <p className={styles.pricing__description}>
            {t('pricing.description')}
          </p>
        </div>

        <div className={styles.pricing__wrapper}>
          <div className={styles.pricing__content}>
            {items.map((item, index) => (
              <div key={index} className={styles.pricing__item}>
                <CheckCircle2 size={20} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className={styles.pricing__card}>
            <div className={styles.pricing__icon}>
              <ShoppingBag size={34} />
            </div>

            <span className={styles.pricing__label}>
              {t('pricing.card.label')}
            </span>

            <div className={styles.pricing__price}>
              {t('pricing.card.price')}
            </div>

            <span className={styles.pricing__launch}>
              {t('pricing.launchTime')}
            </span>

            <h3>{t('pricing.card.title')}</h3>
            <HashLink
              to={getLocalizedPath(
                i18n.language,
                `/${routesPath.price}#ecommerce-price`,
              )}
              className={styles.pricing__button}
            >
              {t('pricing.card.button')}
            </HashLink>
            {/* <button className={styles.pricing__button}>
              {t('pricing.card.button')}
            </button> */}
          </div>
        </div>

        <div className={styles.pricing__bottom}>
          <p>{t('pricing.bottomText')}</p>
        </div>
      </div>
    </section>
  );
};

export default EcommercePricing;
