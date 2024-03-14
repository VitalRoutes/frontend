import { Outlet, ScrollRestoration } from 'react-router-dom';
import Layout from '@/components/units/Layout';
import QueryProvider from '@/app/QueryProvider';
import PopupContainer from './app/PopupContainer';

function App() {
  return (
    <QueryProvider>
      <PopupContainer />
      <ScrollRestoration />
      <Layout>
        <Outlet />
      </Layout>
    </QueryProvider>
  );
}

export default App;
