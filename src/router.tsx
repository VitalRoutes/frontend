import { createBrowserRouter } from 'react-router-dom';
import App from './pages/App';
import CommonComponentTestPage from './pages/CommonComponentTestPage';
import Layout from './components/units/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <App />
      </Layout>
    ),
    children: [
      {
        path: 'test',
        element: <CommonComponentTestPage />,
      },
    ],
  },
]);

export default router;
