import { createBrowserRouter } from 'react-router-dom';
import App from './pages/App';
import TestPage from './pages/test/page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'test',
        element: <TestPage />,
      },
    ],
  },
]);

export default router;
