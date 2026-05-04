import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import ContactForm from '../ContactForm/ContactForm';
import './ContactModal.css';

type Props = {
  open: boolean;
  onClose: () => void;
};

const ContactModal = ({ open, onClose }: Props) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);

    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 250); // час анімації
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };

    if (open) document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  if (!open && !isClosing) return null;

  return createPortal(
    <div
      className={`modal ${isClosing ? 'closing' : ''}`}
      onClick={handleClose}
    >
      <div
        className={`modal__inner ${isClosing ? 'closing' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal__close" onClick={handleClose}>
          ✕
        </button>

        <ContactForm />
      </div>
    </div>,
    document.body,
  );
};
export default ContactModal;
