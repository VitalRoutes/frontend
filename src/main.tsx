import './index.css';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router.tsx';
import configureAxios from './app/configureAxios.ts';

configureAxios();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);
