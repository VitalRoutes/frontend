import { Outlet, ScrollRestoration } from 'react-router-dom';
import Layout from '@/components/units/Layout';

function App() {
  return (
    <>
      <ScrollRestoration />
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
}

export default App;
