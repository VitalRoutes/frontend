import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from './pages/home/page';
import ChallengeListPage from './pages/challenge/page';
import LoginPage from './login/page';
import SignUp from './login/signUp';
import TestPage from './pages/test/page';
import FindPw from './login/findpassword';

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
        path: 'test',
        element: <TestPage />,
      }
    ],
  }, {
    path: 'login',
    element: <LoginPage/>,

  }, {
    path: "/login/signUp",
    element: <SignUp />,
  }, {
    path: "/login/findpassword",
    element: <FindPw />,
  }
]);

export default router;
