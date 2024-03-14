import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from './pages/home/page';
import ChallengeListPage from './pages/challenge/page';
import ChallengeDetailPage from './pages/detail/page';
import RegistrationPage from './pages/registration/page';
import ProfilePage from './pages/profile/page';
import WellnessPage from './pages/wellness/page';
import TestPage from './pages/test/page';
import LoginPage from './login/page';
import SignUp from './login/signUp';
import FindPw from './login/findpassword';
import KakaoLogin from './login/components/kakaoLogin';

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
      { path: '/wellness', element: <WellnessPage /> },
    ],
  }, {
    path: 'login',
    element: <LoginPage />,

  }, {
    path: "/login/signUp",
    element: <SignUp />,
  }, {
    path: "/login/findpassword",
    element: <FindPw />,
  }, {
    path: "/login/kakaoLogin",
    element: <KakaoLogin />,
  }
]);

export default router;
