import { useTranslation } from 'react-i18next';
import ServiceCard from './ServiceCard';
import { servicesData } from '@/data/serviceData';

import styles from './Services.module.css';

const Services = () => {
  const { t } = useTranslation('home');
  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <div className={styles.services__top}>
          <span>{t('services.badge')}</span>

          <h2>{t('services.title')}</h2>
        </div>

        <div className={styles.services__list}>
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
