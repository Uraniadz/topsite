import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import styles from './EcommerceBenefits.module.css';

import benefitsImage from '@/assets/images/ecommercePage/ecommerce-hero2.png';

const EcommerceBenefits = () => {
  const { t } = useTranslation('ecommerce');

  const benefits = [
    t('benefits.items.item1', { returnObjects: true }),
    t('benefits.items.item2', { returnObjects: true }),
    t('benefits.items.item3', { returnObjects: true }),
    t('benefits.items.item4', { returnObjects: true }),
    t('benefits.items.item5', { returnObjects: true }),
    t('benefits.items.item6', { returnObjects: true }),
  ] as {
    title: string;
    description: string;
  }[];

  return (
    <section className={styles.benefits}>
      <div className="container">
        <div className={styles.benefits__wrapper}>
          <div className={styles.benefits__image}>
            <img src={benefitsImage} alt={t('benefits.title.line1')} />
          </div>

          <div className={styles.benefits__content}>
            <span className={styles.benefits__badge}>
              {t('benefits.badge')}
            </span>

            <h2 className={styles.benefits__title}>
              {t('benefits.title.line1')}
              <br />
              <span>{t('benefits.title.line2')}</span>
            </h2>

            <p className={styles.benefits__description}>
              {t('benefits.description')}
            </p>

            <div className={styles.benefits__list}>
              {benefits.map((item, index) => (
                <div key={index} className={styles.benefits__item}>
                  <CheckCircle2 size={24} />

                  <div>
                    <h3>{item.title}</h3>

                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceBenefits;
