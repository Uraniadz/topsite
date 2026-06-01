import {
  ArrowRight,
  ShoppingCart,
  Globe,
  BadgeDollarSign,
  MonitorSmartphone,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import styles from './RelatedServices.module.css';
import routesPath from '@/routes/routesPath';

type ServiceType = 'landing' | 'business-website' | 'ecommerce' | 'google-ads';

interface RelatedServicesProps {
  exclude?: ServiceType;
}

const services = [
  {
    id: 'landing' as const,
    title: 'Landing Page',
    description:
      'Single-page websites designed to convert visitors into customers.',
    icon: <MonitorSmartphone size={28} />,
    link: routesPath.landing,
  },

  {
    id: 'business-website' as const,
    title: 'Business Website',
    description: 'Professional multi-page websites for companies and brands.',
    icon: <Globe size={28} />,
    link: routesPath.business,
  },

  {
    id: 'ecommerce' as const,
    title: 'E-Commerce',
    description: 'Online stores with payments, orders and product management.',
    icon: <ShoppingCart size={28} />,
    link: routesPath.ecommerce,
  },

  {
    id: 'google-ads' as const,
    title: 'Google Ads',
    description: 'Advertising campaigns focused on leads, sales and growth.',
    icon: <BadgeDollarSign size={28} />,
    link: routesPath.ads,
  },
];

const RelatedServices = ({ exclude }: RelatedServicesProps) => {
  const filteredServices = services.filter((service) => service.id !== exclude);

  return (
    <section className={styles.related}>
      <div className="container">
        <div className={styles.related__top}>
          <span>Explore More Services</span>

          <h2>You May Also Be Interested In</h2>

          <p>
            Looking for something more? Explore our additional services designed
            to help businesses grow online.
          </p>
        </div>

        <div className={styles.related__grid}>
          {filteredServices.map((service) => (
            <Link key={service.id} to={service.link} className={styles.card}>
              <div className={styles.card__icon}>{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <span className={styles.card__link}>
                Learn More
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
