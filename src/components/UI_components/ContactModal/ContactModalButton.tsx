import { useEffect, useState } from 'react';
import { FaArrowRight, FaRegCommentDots } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './ContactModal.css';
import ContactModal from './ContactModal';

type Props = {
  label?: string;
  variant?: 'default' | 'icon' | 'primary';
};

const ContactModalButton = ({ label, variant = 'default' }: Props) => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const openModal = () => setOpen(true);
  const { t } = useTranslation();

  const buttonLabel = t('buttons.orderSite');
  // ESC закриття
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };

    if (open) document.addEventListener('keydown', handler);

    return () => document.removeEventListener('keydown', handler);
  }, [open]);

  // блок скролу
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      {/* КНОПКА */}
      <button
        className={
          variant === 'icon'
            ? 'header-contact-btn'
            : variant === 'primary'
              ? 'modal-btn modal-btn--primary'
              : 'floating-cta'
        }
        data-tooltip={t('buttons.contact')}
        onClick={openModal}
      >
        {variant === 'icon' && <FaRegCommentDots size={18} />}

        {variant === 'primary' && (
          <>
            {label ? label : t('buttons.orderSite')}{' '}
            <FaArrowRight size={12} />{' '}
          </>
        )}

        {variant === 'default' && (
          <>
            {label ? label : buttonLabel} <FaArrowRight size={12} />
          </>
        )}
      </button>
      <ContactModal open={open} onClose={close} />
    </>
  );
};

export default ContactModalButton;
