import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import TestPage from './pages/test/page';
import HomePage from './pages/home/page';
import ChallengeListPage from './pages/challenge/page';
import ChallengeDetailPage from './pages/detail/page';
import RegistrationPage from './pages/registration/page';
import ProfilePage from './pages/profile/page';

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
        path: 'challenge',
        element: <ChallengeListPage />,
      },
      {
        path: 'challenge/:id',
        element: <ChallengeDetailPage />,
      },
      {
        path: 'registration',
        element: <RegistrationPage />,
      },
      {
        path: 'test',
        element: <TestPage />,
      },
      {
        path: 'profile',
        element: <ProfilePage />,
      },
    ],
  },
]);

export default router;
