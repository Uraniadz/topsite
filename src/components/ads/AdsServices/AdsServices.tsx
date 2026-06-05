import { Search, MapPin, ShoppingCart, RotateCcw } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import styles from './AdsServices.module.css';

const AdsServices = () => {
  const { t } = useTranslation('ads');

  const services = [
    {
      icon: <Search size={28} />,
      title: t('services.items.search.title'),
      description: t('services.items.search.description'),
    },

    {
      icon: <MapPin size={28} />,
      title: t('services.items.local.title'),
      description: t('services.items.local.description'),
    },

    {
      icon: <ShoppingCart size={28} />,
      title: t('services.items.ecommerce.title'),
      description: t('services.items.ecommerce.description'),
    },

    {
      icon: <RotateCcw size={28} />,
      title: t('services.items.remarketing.title'),
      description: t('services.items.remarketing.description'),
    },
  ];

  return (
    <section className={styles.services}>
      <div className="container">
        <div className={styles.services__header}>
          <span className={styles.services__badge}>{t('services.badge')}</span>

          <h2 className={styles.services__title}>
            {t('services.title.line1')}
            <br />
            {t('services.title.line2')}
          </h2>

          <p className={styles.services__description}>
            {t('services.description')}
          </p>
        </div>

        <div className={styles.services__grid}>
          {services.map((service) => (
            <article key={service.title} className={styles.serviceCard}>
              <div className={styles.serviceCard__icon}>{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdsServices;
