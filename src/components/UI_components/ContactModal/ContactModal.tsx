import { useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import './ContactModal.css';

type Props = {
  open: boolean;
  onClose: () => void;
};

const ContactModal = ({ open, onClose }: Props) => {
  // закриття по ESC
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (open) document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, onClose]);

  // блок скролу
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  }, [open]);

  if (!open) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {/* КНОПКА ЗАКРИТТЯ */}
        <button className="modal__close" onClick={onClose}>
          ✕
        </button>

        <ContactForm />
      </div>
    </div>
  );
};

export default ContactModal;
