import { ImWhatsapp } from 'react-icons/im';
import './Whatsapp.css';
import { CONTACTS } from '@/config/contact';

const Whatsapp = () => {
  return (
    <a
      href={`https://wa.me/${CONTACTS.whatsapp}`}
      target="_blank"
      title="whatsapp"
      className={'my-whatsapp'}
      rel="noopener noreferrer"
    >
      <ImWhatsapp /> <span>WhatsApp</span>
    </a>
  );
};

export default Whatsapp;
