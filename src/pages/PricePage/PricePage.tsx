import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import {
  Rocket,
  BriefcaseBusiness,
  ShoppingCart,
  Check,
  ArrowRight,
} from 'lucide-react';

import Seo from '@/components/UI_components/Seo/Seo';
import ContactCta from '@/components/UI_components/ContactCta/ContactCta';

import styles from './PricePage.module.css';

import landingImg from '@/assets/images/price/landing.png';
import businessImg from '@/assets/images/price/buisness.png';
import ecommerceImg from '@/assets/images/price/ecommerce.png';

const PricePage = () => {
  const { t } = useTranslation('price');

  const packages = [
    {
      icon: <Rocket size={28} strokeWidth={2.2} />,
      title: t('packages.landing.title'),
      subtitle: t('packages.landing.subtitle'),
      price: t('packages.landing.price'),
      ads: t('packages.landing.ads'),
      image: landingImg,
      imageAlt: t('packages.landing.imageAlt'),
      tag: t('packages.landing.tag'),

      features: [
        t('packages.landing.features.feature1'),
        t('packages.landing.features.feature2'),
        t('packages.landing.features.feature3'),
        t('packages.landing.features.feature4'),
        t('packages.landing.features.feature5'),
        t('packages.landing.features.feature6'),
      ],

      support: t('packages.landing.support'),
    },

    {
      icon: <BriefcaseBusiness size={28} strokeWidth={2.2} />,
      title: t('packages.business.title'),
      subtitle: t('packages.business.subtitle'),
      price: t('packages.business.price'),
      ads: t('packages.business.ads'),
      image: businessImg,
      imageAlt: t('packages.business.imageAlt'),
      tag: t('packages.business.tag'),

      features: [
        t('packages.business.features.feature1'),
        t('packages.business.features.feature2'),
        t('packages.business.features.feature3'),
        t('packages.business.features.feature4'),
        t('packages.business.features.feature5'),
        t('packages.business.features.feature6'),
      ],

      support: t('packages.business.support'),
    },

    {
      icon: <ShoppingCart size={28} strokeWidth={2.2} />,
      title: t('packages.ecommerce.title'),
      subtitle: t('packages.ecommerce.subtitle'),
      price: t('packages.ecommerce.price'),
      ads: t('packages.ecommerce.ads'),
      image: ecommerceImg,
      imageAlt: t('packages.ecommerce.imageAlt'),
      tag: t('packages.ecommerce.tag'),

      features: [
        t('packages.ecommerce.features.feature1'),
        t('packages.ecommerce.features.feature2'),
        t('packages.ecommerce.features.feature3'),
        t('packages.ecommerce.features.feature4'),
        t('packages.ecommerce.features.feature5'),
        t('packages.ecommerce.features.feature6'),
      ],

      support: t('packages.ecommerce.support'),
    },
  ];

  const extraServices = [
    {
      title: t('extraServices.service1.title'),
      price: t('extraServices.service1.price'),
    },

    {
      title: t('extraServices.service2.title'),
      price: t('extraServices.service2.price'),
    },

    {
      title: t('extraServices.service3.title'),
      price: t('extraServices.service3.price'),
    },

    {
      title: t('extraServices.service4.title'),
      price: t('extraServices.service4.price'),
    },
  ];

  return (
    <>
      <Seo
        title={t('seo.title', {
          company: 'Codevix Studio',
        })}
        description={t('seo.description')}
      />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className="container">
            <motion.div
              className={styles.heroContent}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className={styles.badge}>{t('hero.badge')}</span>

              <h1 className={styles.title}>{t('hero.title')}</h1>

              <p className={styles.description}>{t('hero.description')}</p>

              <div className={styles.heroDivider} />
            </motion.div>
          </div>
        </section>

        <section className={styles.packages}>
          <div className="container">
            <div className={styles.packagesWrapper}>
              {packages.map((item, index) => (
                <div className={styles.cardWrapper} key={item.title}>
                  <motion.article
                    className={`${styles.card} ${
                      index % 2 !== 0 ? styles.reverse : ''
                    }`}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 90,
                      damping: 18,
                      delay: index * 0.06,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                  >
                    <div className={styles.imageWrapper}>
                      <img
                        src={item.image}
                        alt={item.imageAlt}
                        className={styles.image}
                      />

                      <div className={styles.overlay} />

                      <div className={styles.floatingTag}>{item.tag}</div>
                    </div>

                    <div className={styles.content}>
                      <div className={styles.top}>
                        <h2 className={styles.cardTitle}>
                          <span className={styles.icon}>{item.icon}</span>

                          {item.title}
                        </h2>

                        <p className={styles.cardSubtitle}>{item.subtitle}</p>
                      </div>

                      <ul className={styles.features}>
                        {item.features.map((feature) => (
                          <li key={feature}>
                            <Check size={18} />

                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className={styles.priceBox}>
                        <div>
                          <span className={styles.priceLabel}>
                            {t('labels.websiteDevelopment')}
                          </span>

                          <h3 className={styles.price}>{item.price}</h3>
                        </div>

                        <div className={styles.adsPrice}>
                          <span className={styles.priceLabel}>
                            {t('labels.googleAdsManagement')}
                          </span>

                          <p>{item.ads}</p>
                        </div>
                      </div>

                      <div className={styles.supportBox}>
                        <p>{item.support}</p>
                      </div>

                      <button className={styles.button}>
                        {t('labels.startProject')}

                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </motion.article>

                  <div className={styles.cardLine} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.extra}>
          <div className="container">
            <motion.div
              className={styles.extraContent}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className={styles.badge}>
                {t('labels.additionalServices')}
              </span>

              <h2 className={styles.extraTitle}>
                {t('labels.flexibleSolutions')}
              </h2>

              <div className={styles.extraGrid}>
                {extraServices.map((service) => (
                  <div key={service.title} className={styles.extraCard}>
                    <h3>{service.title}</h3>

                    <p>{service.price}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className="container">
            <ContactCta />
          </div>
        </section>
      </main>
    </>
  );
};

export default PricePage;
