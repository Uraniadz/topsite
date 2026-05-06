import { Link } from 'react-router-dom';

import type { Service } from '@/types/common';

import styles from './Services.module.css';

interface Props {
  service: Service;
}

const ServiceCard = ({ service }: Props) => {
  return (
    <article className={styles.card}>
      <div className={styles.card__content}>
        <span className={styles.card__label}>Service</span>

        <h3 className={styles.card__title}>{service.title}</h3>

        <p className={styles.card__description}>{service.description}</p>

        <Link to={service.link} className={styles.card__button}>
          Learn More
        </Link>
      </div>

      <div className={styles.card__preview}>
        <div className={styles.card__image}>
          <img
            src={service.image}
            alt={service.title}
            className={styles.card__img}
          />
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
