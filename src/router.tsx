import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import TestPage from './pages/test/page';
import HomePage from './pages/home/page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'test',
        element: <TestPage />,
      },
    ],
  },
]);

export default router;
