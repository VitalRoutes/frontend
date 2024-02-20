import { ReactNode } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
