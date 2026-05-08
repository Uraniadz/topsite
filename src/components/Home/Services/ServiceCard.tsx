import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { Service } from '@/types/common';

import styles from './Services.module.css';

interface Props {
  service: Service;
}

const ServiceCard = ({ service }: Props) => {
  const { t } = useTranslation('home');
  return (
    <article className={styles.card}>
      <div className={styles.card__content}>
        <h3 className={styles.card__title}>{t(service.titleKey)}</h3>

        <p className={styles.card__description}>{t(service.descriptionKey)}</p>

        <Link to={service.link} className={styles.card__button}>
          {t('services.button')}
        </Link>
      </div>

      <div className={styles.card__preview}>
        <div className={styles.card__image}>
          <img
            src={service.image}
            alt={t(service.titleKey)}
            className={styles.card__img}
          />
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
