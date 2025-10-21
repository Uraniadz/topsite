import { FaPhone } from 'react-icons/fa6';
import './MyPhone.css';
import { CONTACTS } from '@/config/contact';

export const MyPhoneNoClass = () => {
  return (
    <a href={`tel:${CONTACTS.phone}`}>
      <span>095 083 59 34</span>
    </a>
  );
};

function MyPhone() {
  return (
    <a href={`tel:${CONTACTS.phone}`} className={'my-phone'}>
      <FaPhone /> <span> 095 083 59 34</span>
    </a>
  );
}

export default MyPhone;
