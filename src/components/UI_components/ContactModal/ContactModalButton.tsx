import { useEffect, useState } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import { FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './ContactModal.css';

type Props = {
  label?: string;
  variant?: 'primary' | 'ghost';
};

const ContactModalButton = ({ label }: Props) => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const openModal = () => setOpen(true);
  const { t } = useTranslation();

  const buttonLabel = label || t('buttons.orderSite');
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
      <button className={`floating-cta`} onClick={openModal}>
        {buttonLabel} <FaArrowRight size={12} />
      </button>

      {/* МОДАЛКА */}
      {open && (
        <div className="modal" onClick={close}>
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            {/* ХРЕСТИК */}
            <button className="modal__close" onClick={close}>
              ✕
            </button>

            <ContactForm />
          </div>
        </div>
      )}
    </>
  );
};

export default ContactModalButton;
