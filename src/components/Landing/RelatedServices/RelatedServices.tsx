import {
  ArrowRight,
  ShoppingCart,
  Globe,
  BadgeDollarSign,
  MonitorSmartphone,
} from 'lucide-react';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getLocalizedPath } from '@/routes/routesPath';
import styles from './RelatedServices.module.css';
import routesPath from '@/routes/routesPath';

type ServiceType = 'landing' | 'business-website' | 'ecommerce' | 'google-ads';

interface RelatedServicesProps {
  exclude?: ServiceType;
}

const RelatedServices = ({ exclude }: RelatedServicesProps) => {
  const { t } = useTranslation('landing');
  const { i18n } = useTranslation();

  const services = [
    {
      id: 'landing' as const,
      title: t('relatedServices.items.landing.title'),
      description: t('relatedServices.items.landing.description'),
      icon: <MonitorSmartphone size={28} />,
      link: getLocalizedPath(i18n.language, `/${routesPath.landing}`),
    },

    {
      id: 'business-website' as const,
      title: t('relatedServices.items.business.title'),
      description: t('relatedServices.items.business.description'),
      icon: <Globe size={28} />,
      link: getLocalizedPath(i18n.language, `/${routesPath.business}`),
    },

    {
      id: 'ecommerce' as const,
      title: t('relatedServices.items.ecommerce.title'),
      description: t('relatedServices.items.ecommerce.description'),
      icon: <ShoppingCart size={28} />,
      link: getLocalizedPath(i18n.language, `/${routesPath.ecommerce}`),
    },

    {
      id: 'google-ads' as const,
      title: t('relatedServices.items.ads.title'),
      description: t('relatedServices.items.ads.description'),
      icon: <BadgeDollarSign size={28} />,
      link: getLocalizedPath(i18n.language, `/${routesPath.ads}`),
    },
  ];

  const filteredServices = services.filter((service) => service.id !== exclude);

  return (
    <section className={styles.related}>
      <div className="container">
        <div className={styles.related__top}>
          <span>{t('relatedServices.badge')}</span>

          <h2>{t('relatedServices.title')}</h2>

          <p>{t('relatedServices.description')}</p>
        </div>

        <div className={styles.related__grid}>
          {filteredServices.map((service) => (
            <Link key={service.id} to={service.link} className={styles.card}>
              <div className={styles.card__icon}>{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <span className={styles.card__link}>
                {t('relatedServices.button')}

                <ArrowRight size={18} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
