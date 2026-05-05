import { CONTACTS } from '../../../config/contact';
import './MyEmail.css';

type Props = {
  variant?: 'desktop' | 'footer' | 'menu-mobile';
};

function MyEmail({ variant = 'desktop' }: Props) {
  return (
    <a href={`mailto:${CONTACTS.email}`} className={`email email--${variant}`}>
      {CONTACTS.email}
    </a>
  );
}

export default MyEmail;
