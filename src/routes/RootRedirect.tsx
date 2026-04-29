import i18next from 'i18next';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supportedLngs } from '@/config/i18nConfig';

const RootRedirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    let lng = i18next.language;
    lng = lng?.split('-')[0];
    if (!supportedLngs.includes(lng)) {
      lng = 'en';
    }
    navigate(`/${lng}`, { replace: true });
  }, [navigate]);

  return null;
};

export default RootRedirect;
