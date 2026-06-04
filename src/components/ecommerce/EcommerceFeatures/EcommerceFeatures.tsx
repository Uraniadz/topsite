import {
  Boxes,
  CreditCard,
  PackageCheck,
  Search,
  ShoppingCart,
  UserRound,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

import styles from './EcommerceFeatures.module.css';

const EcommerceFeatures = () => {
  const { t } = useTranslation('ecommerce');

  const features = [
    {
      icon: <Boxes size={28} />,
      title: t('features.items.item1.title'),
      description: t('features.items.item1.description'),
    },
    {
      icon: <ShoppingCart size={28} />,
      title: t('features.items.item2.title'),
      description: t('features.items.item2.description'),
    },
    {
      icon: <CreditCard size={28} />,
      title: t('features.items.item3.title'),
      description: t('features.items.item3.description'),
    },
    {
      icon: <UserRound size={28} />,
      title: t('features.items.item4.title'),
      description: t('features.items.item4.description'),
    },
    {
      icon: <PackageCheck size={28} />,
      title: t('features.items.item5.title'),
      description: t('features.items.item5.description'),
    },
    {
      icon: <Search size={28} />,
      title: t('features.items.item6.title'),
      description: t('features.items.item6.description'),
    },
  ];

  return (
    <section id="features" className={styles.features}>
      <div className="container">
        <div className={styles.features__header}>
          <span className={styles.features__badge}>{t('features.badge')}</span>

          <h2 className={styles.features__title}>
            {t('features.title.line1')}
            <br />
            <span>{t('features.title.line2')}</span>
          </h2>

          <p className={styles.features__description}>
            {t('features.description')}
          </p>
        </div>

        <div className={styles.features__grid}>
          {features.map((feature, index) => (
            <article key={index} className={styles.features__card}>
              <div className={styles.features__icon}>{feature.icon}</div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcommerceFeatures;
