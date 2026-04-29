import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import i18next from 'i18next';

export const useSyncLanguage = () => {
  const { lng } = useParams();

  useEffect(() => {
    if (!lng || i18next.language === lng) return;

    i18next.changeLanguage(lng);
  }, [lng]);
};
