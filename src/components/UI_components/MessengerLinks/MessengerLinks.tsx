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
  variant: 'desktop' | 'mobile' | 'menu' | 'footer';
};
const visibleByVariant: Record<Props['variant'], string[]> = {
  desktop: ['whatsapp', 'telegram', 'messenger', 'email'],
  mobile: ['whatsapp'],
  menu: ['whatsapp', 'telegram', 'messenger', 'email'],
  footer: ['whatsapp', 'telegram', 'messenger'],
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
  const visibleKeys = visibleByVariant[variant] || visibleByVariant.desktop;
  return (
    <div className={`messengers messengers--${variant}`}>
      {items
        .filter((el) => el.url && visibleKeys.includes(el.key))
        .map((el) => (
          <a
            key={el.key}
            href={el.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`messenger messenger--${variant} ${el.className}`}
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
