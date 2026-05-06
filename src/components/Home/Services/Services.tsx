import ServiceCard from './ServiceCard';
import { servicesData } from '@/data/serviceData';

import styles from './Services.module.css';

const Services = () => {
  return (
    <section className={styles.services}>
      <div className="container">
        <div className={styles.services__top}>
          <span>Services</span>

          <h2>Solutions for modern businesses</h2>
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
