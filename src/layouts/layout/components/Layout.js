import { Outlet } from 'react-router-dom';

import { Header } from 'layouts/header';
import { Footer } from 'layouts/footer';
import { ScrollToTop } from 'features';

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </>
  );
};
