import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import i18next from 'i18next';

const supportedLngs = ['en', 'pl', 'uk'];

export const useSyncLanguage = () => {
  const { lng } = useParams();

  useEffect(() => {
    if (!lng) return;

    const validLng = supportedLngs.includes(lng) ? lng : 'en';

    if (i18next.language !== validLng) {
      i18next.changeLanguage(validLng);
    }
  }, [lng]);
};
