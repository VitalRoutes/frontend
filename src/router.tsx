import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from './pages/home/page';
import ChallengeListPage from './pages/challenge/page';
import ChallengeDetailPage from './pages/detail/page';
import RegistrationPage from './pages/registration/page';
import ProfilePage from './pages/profile/page';
import WellnessPage from './pages/wellness/page';
import TestPage from './pages/test/page';
import LoginPage from './pages/login/page';
import FindPw from './pages/login/findpassword';
import KakaoLogin from './pages/login/components/kakaoLogin';
import ProfileUpdatePage from './pages/profile-update/page';
import SignUpPage from './pages/signup/page';
import WithAuthorization from './app/WithAuthorization';

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
        element: (
          <WithAuthorization>
            <RegistrationPage />
          </WithAuthorization>
        ),
      },
      {
        path: 'test',
        element: <TestPage />,
      },
      {
        path: 'profile',
        element: (
          <WithAuthorization>
            <ProfilePage />
          </WithAuthorization>
        ),
      },
      {
        path: 'profile/update',
        element: (
          <WithAuthorization>
            <ProfileUpdatePage />
          </WithAuthorization>
        ),
      },
      { path: '/wellness', element: <WellnessPage /> },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: '/login/signUp',
        element: <SignUpPage />,
      },
      {
        path: '/login/findpassword',
        element: <FindPw />,
      },
      {
        path: '/login/kakaoLogin',
        element: <KakaoLogin />,
      },
    ],
  },
]);

export default router;
