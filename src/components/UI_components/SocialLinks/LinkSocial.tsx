import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { SiViber } from 'react-icons/si';

import './LinkSocial.css';
import { CONTACTS } from '../../../config/contact';

function LinkSocial() {
  return (
    <div className="socials">
      <a
        href="https://www.facebook.com/profile.php?id=61561085115539"
        target="_blank"
        rel="noreferrer"
        className="facebook"
        title={'Facebook'}
      >
        <FaFacebookF />
      </a>

      <a
        href="https://www.instagram.com/top_site_com?igsh=MXAzcTN4NXpmdHRyNA=="
        target="_blank"
        rel="noreferrer"
        title={'Instagram'}
        className="instagram"
      >
        <FaInstagram />
      </a>
      <a
        href={`viber://chat?number=${CONTACTS.viber.replace('+', '')}`}
        title={'Viber'}
        className={`$ ${'viberBtn'}`}
      >
        <SiViber className="icon-siviber" />
      </a>
    </div>
  );
}

export default LinkSocial;
