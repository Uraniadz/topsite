import { useTranslation } from 'react-i18next';

import ContactForm from '@/components/UI_components/ContactForm/ContactForm';

import LinkSocial from '@/components/UI_components/SocialLinks/LinkSocial';
import ContactModalButton from '@/components/UI_components/ContactModal/ContactModalButton';
import contactFoto from '@/assets/images/contact/contact.png';
import styles from './ContactPage.module.css';
import {
  FaEnvelope,
  FaFacebookMessenger,
  FaTelegramPlane,
  FaWhatsapp,
} from 'react-icons/fa';
import { CONTACTS } from '@/config/contact';
import Seo from '@/components/UI_components/Seo/Seo';

const ContactPage = () => {
  const { t } = useTranslation('contact');

  return (
    <main className={styles.contactPage}>
      <Seo
        title={t('seo.title', { company: CONTACTS.companyName })}
        description={t('seo.description', {
          company: CONTACTS.companyName,
        })}
      />
      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.hero__wrapper}>
            {/* LEFT */}
            <div className={styles.hero__content}>
              <span className={styles.hero__badge}>{t('hero.badge')}</span>

              <h1>{t('hero.title')}</h1>

              <p>{t('hero.description')}</p>
              <div className={styles.hero__stack}>
                <span>React</span>
                <span>TypeScript</span>
                <span>Node.js</span>
                <span>NestJS</span>
                <span>PostgreSQL</span>
                <span>MongoDB</span>
                <span>Stripe</span>
                <span>Google Ads</span>
                <span>SEO</span>
              </div>
            </div>

            {/* RIGHT */}
            <div className={styles.hero__image}>
              <img
                src={contactFoto}
                alt="Codevix Studio Support"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* QUICK CARDS */}
      <section className={styles.quick}>
        <div className="container">
          <div className={styles.quick__grid}>
            <div className={styles.quick__card}>
              <h3>{t('quick.project.title')}</h3>

              <p>{t('quick.project.description')}</p>

              <ContactModalButton variant="primary" />
            </div>

            <div className={styles.quick__card}>
              <h3>{t('quick.contacts.title')}</h3>

              <p>{t('quick.contacts.description')}</p>

              <a href="#contacts" className={styles.secondaryBtn}>
                {t('quick.contacts.button')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      {/* CONTACTS */}
      <section id="contacts" className={styles.contacts}>
        <div className="container">
          <div className={styles.sectionTop}>
            <span>{t('contacts.badge')}</span>

            <h2>{t('contacts.title')}</h2>
          </div>

          <div className={styles.contacts__wrapper}>
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${CONTACTS.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contacts__card}
            >
              <div className={styles.contacts__icon}>
                <FaWhatsapp />
              </div>

              <h3>WhatsApp</h3>

              <p>{t('contacts.whatsapp')}</p>

              <span className={styles.contacts__link}>
                {t('contacts.buttons.whatsapp')} →
              </span>
            </a>

            {/* Telegram */}
            <a
              href={`https://t.me/${CONTACTS.telegram}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contacts__card}
            >
              <div className={styles.contacts__icon}>
                <FaTelegramPlane />
              </div>

              <h3>Telegram</h3>

              <p>{t('contacts.telegram')}</p>

              <span className={styles.contacts__link}>
                {t('contacts.buttons.telegram')} →
              </span>
            </a>

            {/* Messenger */}
            <a
              href={`https://m.me/${CONTACTS.messenger}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contacts__card}
            >
              <div className={styles.contacts__icon}>
                <FaFacebookMessenger />
              </div>

              <h3>Messenger</h3>

              <p>{t('contacts.messenger')}</p>

              <span className={styles.contacts__link}>
                {t('contacts.buttons.messenger')} →
              </span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${CONTACTS.email}`}
              className={styles.contacts__card}
            >
              <div className={styles.contacts__icon}>
                <FaEnvelope />
              </div>

              <h3>Email</h3>

              <p>{t('contacts.email')}</p>

              <span className={styles.contacts__link}>
                {t('contacts.buttons.email')} →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* SOCIAL */}
      <section className={styles.social}>
        <div className="container">
          <div className={styles.sectionTop}>
            <span>{t('social.badge')}</span>

            <h2>{t('social.title')}</h2>
          </div>

          <div className={styles.social__wrapper}>
            <LinkSocial variant="primary" />
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className={styles.form}>
        <div className="container">
          <div className={styles.form__wrapper}>
            <div className={styles.form__info}>
              <span>{t('form.badge')}</span>

              <h2>{t('form.title')}</h2>

              <p>{t('form.description')}</p>

              <ul>
                <li>{t('form.list.one')}</li>
                <li>{t('form.list.two')}</li>
                <li>{t('form.list.three')}</li>
              </ul>
            </div>

            <div className={styles.form__content}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
