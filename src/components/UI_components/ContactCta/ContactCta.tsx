// src/components/UI_components/ContactCta/ContactCta.tsx

import { useTranslation } from 'react-i18next';
import { Mail, MessageCircle, Phone, Send } from 'lucide-react';

import { CONTACTS } from '@/config/contact';

import styles from './ContactCta.module.css';

type ContactCtaProps = {
  title?: string;
  description?: string;

  variant?: 'default' | 'gradient' | 'minimal';

  centered?: boolean;

  showPhone?: boolean;
  showEmail?: boolean;
  showWhatsapp?: boolean;
  showTelegram?: boolean;
};

const ContactCta = ({
  title,
  description,

  variant = 'default',

  centered = true,

  showPhone = false,
  showEmail = true,
  showWhatsapp = true,
  showTelegram = true,
}: ContactCtaProps) => {
  const { t } = useTranslation('common');

  return (
    <section
      className={`
        ${styles.contactCta}
        ${styles[variant]}
        ${centered ? styles.centered : ''}
      `}
    >
      <div className={styles.content}>
        <span className={styles.badge}>{t('contactCta.badge')}</span>

        <h2 className={styles.title}>{title || t('contactCta.title')}</h2>

        <p className={styles.description}>
          {description || t('contactCta.description')}
        </p>
      </div>

      <div className={styles.actions}>
        {showPhone && (
          <a
            href={`tel:${CONTACTS.phone}`}
            className={styles.action}
            aria-label={t('contactCta.phone')}
          >
            <Phone size={18} />

            <span>{CONTACTS.display}</span>
          </a>
        )}

        {showEmail && (
          <a
            href={`mailto:${CONTACTS.email}`}
            className={styles.action}
            aria-label={t('contactCta.email')}
          >
            <Mail size={18} />

            <span>{CONTACTS.email}</span>
          </a>
        )}

        {showWhatsapp && (
          <a
            href={`https://wa.me/${CONTACTS.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className={styles.action}
            aria-label="WhatsApp"
          >
            <MessageCircle size={18} />

            <span>WhatsApp</span>
          </a>
        )}

        {showTelegram && (
          <a
            href={`https://t.me/${CONTACTS.telegram.replace('@', '')}`}
            target="_blank"
            rel="noreferrer"
            className={styles.action}
            aria-label="Telegram"
          >
            <Send size={18} />

            <span>Telegram</span>
          </a>
        )}
      </div>
    </section>
  );
};

export default ContactCta;
