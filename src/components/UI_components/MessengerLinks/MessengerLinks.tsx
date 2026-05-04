import {
  FaWhatsapp,
  FaTelegramPlane,
  FaFacebookMessenger,
  FaEnvelope,
} from 'react-icons/fa';

import './MessengerLinks.css';
import { CONTACTS } from '@/config/contact';

type MessengerItem = {
  key: string;
  url?: string;
  icon: React.ReactNode;
  className: string;
};
type Props = {
  variant?: 'desktop' | 'mobile' | 'menu';
};
const MessengerLinks = ({ variant = 'desktop' }: Props) => {
  const items: MessengerItem[] = [
    {
      key: 'whatsapp',
      url: CONTACTS.whatsapp ? `https://wa.me/${CONTACTS.whatsapp}` : undefined,
      icon: <FaWhatsapp />,
      className: 'whatsapp',
    },
    {
      key: 'telegram',
      url: CONTACTS.telegram ? `https://t.me/${CONTACTS.telegram}` : undefined,
      icon: <FaTelegramPlane />,
      className: 'telegram',
    },
    {
      key: 'messenger',
      url: CONTACTS.messenger
        ? `https://m.me/${CONTACTS.messenger}`
        : undefined,
      icon: <FaFacebookMessenger />,
      className: 'facebook',
    },

    {
      key: 'email',
      url: CONTACTS.email ? `mailto:${CONTACTS.email}` : undefined,
      icon: <FaEnvelope />,
      className: 'email',
    },
  ];

  return (
    <div className="messengers">
      {items
        .filter((el) => {
          if (!el) return false;
          if (variant === 'mobile') {
            return el.key === 'whatsapp';
          }
          if (variant === 'menu') {
            return true;
          }
          return true;
        })
        .map((el) => (
          <a
            key={el.key}
            href={el.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`messenger ${el.className}`}
            aria-label={el.key}
            title={el.key}
          >
            {el.icon}
          </a>
        ))}
    </div>
  );
};

export default MessengerLinks;
