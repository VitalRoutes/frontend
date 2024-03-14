import { Outlet, ScrollRestoration } from 'react-router-dom';
import Layout from '@/components/units/Layout';
import QueryProvider from '@/app/QueryProvider';

function App() {
  return (
    <QueryProvider>
      <ScrollRestoration />
      <Layout>
        <Outlet />
      </Layout>
    </QueryProvider>
  );
}

export default App;
