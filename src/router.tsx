import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import TestPage from './pages/test/page';
import HomePage from './pages/home/page';
import ChallengeListPage from './pages/challenge/page';

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
        path: 'challenge-list',
        element: <ChallengeListPage />,
      },
      {
        path: 'test',
        element: <TestPage />,
      },
    ],
  },
]);

export default router;
