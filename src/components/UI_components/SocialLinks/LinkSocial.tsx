import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

import './LinkSocial.css';
import { CONTACTS } from '@/config/contact';

type SocialItem = {
  key: string;
  url?: string;
  icon: React.ReactNode;
  style: string;
};

function LinkSocial() {
  const socials: SocialItem[] = [
    {
      key: 'facebook',
      url: CONTACTS.facebook,
      icon: <FaFacebookF />,
      style: 'facebook',
    },
    {
      key: 'instagram',
      url: CONTACTS.instagram,
      icon: <FaInstagram />,
      style: 'instagram',
    },
    {
      key: 'tiktok',
      url: CONTACTS.tiktok,
      icon: <FaTiktok />,
      style: 'tiktok',
    },
    {
      key: 'youtube',
      url: CONTACTS.youtube,
      icon: <FaYoutube />,
      style: 'youtube',
    },
  ];

  return (
    <div className="socials">
      {socials.map((el) => {
        if (!el.url) {
          return null;
        }
        return (
          <a
            href={el.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`social ${el.style}`}
            title={el.key}
            aria-label={el.key}
            key={el.key}
          >
            {el.icon}
          </a>
        );
      })}
    </div>
  );
}

export default LinkSocial;
