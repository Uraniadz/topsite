import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { Outlet } from 'react-router-dom';

function LayOut() {
  return (
    <>
      <Header />
      <main>{<Outlet />}</main>
      <Footer />
    </>
  );
}
export default LayOut;
