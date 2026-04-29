import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { Outlet, useParams } from 'react-router-dom';
import { useSyncLanguage } from '@/hooks/useSyncLanguage';
import NotFoundPage404 from '@/pages/NotFoundPage404/NotFoundPage404';
import { supportedLngs } from '@/config/i18nConfig';

function LayOut() {
  useSyncLanguage();
  const { lng } = useParams();

  if (!lng || !supportedLngs.includes(lng)) {
    return <NotFoundPage404 />;
  }

  return (
    <>
      <Header />
      <main>{<Outlet />}</main>
      <Footer />
    </>
  );
}
export default LayOut;
