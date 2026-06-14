import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Globe, Layers3, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from './ServicePage.module.css';
import ContactCta from '@/components/UI_components/ContactCta/ContactCta';
import ContactModalButton from '@/components/UI_components/ContactModal/ContactModalButton';
import Seo from '@/components/UI_components/Seo/Seo';
import { CONTACTS } from '@/config/contact';

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  visible: (index: number) => ({
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      delay: index * 0.12,
    },
  }),
};

const ServicePage = () => {
  const { t } = useTranslation('service');

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  const strategicServices = [
    {
      icon: <Globe size={30} strokeWidth={2} />,
      title: t('strategy.websiteDevelopment.title'),
      description: t('strategy.websiteDevelopment.description'),
    },

    {
      icon: <BarChart3 size={30} strokeWidth={2} />,
      title: t('strategy.marketing.title'),
      description: t('strategy.marketing.description'),
    },

    {
      icon: <Wrench size={30} strokeWidth={2} />,
      title: t('strategy.support.title'),
      description: t('strategy.support.description'),
    },

    {
      icon: <Layers3 size={30} strokeWidth={2} />,
      title: t('strategy.automation.title'),
      description: t('strategy.automation.description'),
    },
  ];

  const detailedServices = [
    {
      title: t('solutions.landing.title'),
      description: t('solutions.landing.description'),
      button: t('solutions.landing.button'),
      link: '/services/landing-pages',
    },

    {
      title: t('solutions.business.title'),
      description: t('solutions.business.description'),
      button: t('solutions.business.button'),
      link: '/services/business-websites',
    },

    {
      title: t('solutions.ecommerce.title'),
      description: t('solutions.ecommerce.description'),
      button: t('solutions.ecommerce.button'),
      link: '/services/ecommerce',
    },

    {
      title: t('solutions.ads.title'),
      description: t('solutions.ads.description'),
      button: t('solutions.ads.button'),
      link: '/services/google-ads',
    },
  ];

  return (
    <main className={styles.servicesPage}>
      <Seo
        title={t('seo.title', { company: CONTACTS.companyName })}
        description={t('seo.description', {
          company: CONTACTS.companyName,
        })}
      />
      {/* HERO */}

      <section className={styles.hero}>
        <div className="container">
          <motion.div
            className={styles.hero__content}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.hero__badge}>{t('hero.badge')}</span>

            <h1 className={styles.hero__title}>{t('hero.title')}</h1>

            <p className={styles.hero__description}>{t('hero.description')}</p>

            <div className={styles.hero__actions}>
              <div className={styles.hero__primary}>
                <ContactModalButton
                  variant="primary"
                  label={t('hero.primaryButton')}
                />
              </div>

              <button
                onClick={scrollToContact}
                className={styles.hero__secondary}
              >
                {t('hero.secondaryButton')}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STRATEGY */}

      <section className={styles.strategy}>
        <div className="container">
          <div className={styles.sectionTop}>
            <span>{t('strategy.badge')}</span>

            <h2>{t('strategy.title')}</h2>

            <p>{t('strategy.description')}</p>
          </div>

          <div className={styles.strategy__grid}>
            {strategicServices.map((service, index) => (
              <motion.article
                key={service.title}
                className={styles.strategyCard}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className={styles.strategyCard__icon}>{service.icon}</div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}

      <section className={styles.detailed}>
        <div className="container">
          <div className={styles.sectionTop}>
            <span>{t('solutions.badge')}</span>

            <h2>{t('solutions.title')}</h2>

            <p>{t('solutions.description')}</p>
          </div>

          <div className={styles.detailed__list}>
            {detailedServices.map((service, index) => (
              <motion.article
                key={service.title}
                className={styles.detailedCard}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className={styles.detailedCard__content}>
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>
                </div>

                <Link to={service.link} className={styles.detailedCard__button}>
                  {service.button}

                  <ArrowRight size={18} />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP */}

      <section className={styles.partnership}>
        <div className="container">
          <motion.div
            className={styles.partnership__box}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span>{t('partnership.badge')}</span>

            <h2>{t('partnership.title')}</h2>

            <div className={styles.partnership__grid}>
              <div>
                <h3>{t('partnership.leftTitle')}</h3>

                <ul>
                  <li>{t('partnership.leftItems.clients')}</li>

                  <li>{t('partnership.leftItems.operations')}</li>

                  <li>{t('partnership.leftItems.sales')}</li>

                  <li>{t('partnership.leftItems.growth')}</li>
                </ul>
              </div>

              <div>
                <h3>{t('partnership.rightTitle')}</h3>

                <ul>
                  <li>{t('partnership.rightItems.website')}</li>

                  <li>{t('partnership.rightItems.seo')}</li>

                  <li>{t('partnership.rightItems.analytics')}</li>

                  <li>{t('partnership.rightItems.support')}</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section id="contact" className={styles.contactSection}>
        <div className="container">
          <ContactCta />
        </div>
      </section>
    </main>
  );
};

export default ServicePage;
