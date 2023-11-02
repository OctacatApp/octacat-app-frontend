// import { TbSettings2 } from 'react-icons/tb';
// import { PiChatTeardropDots } from 'react-icons/pi';

import { lazy } from 'react';

import Login from '@/pages/Login';
import Register from '@/pages/Register';
import ForgotPassword from '@/pages/ForgotPassword';
import ChangePassword from '@/pages/ChangePassword';
// import Chats from '@/pages/Chats';

// const Dashboard = lazy(() => import('@/pages/Dashboard'));
// const Chat = lazy(() => import('@/pages/Chat'));
// const Setting = lazy(() => import('@/pages/Setting'));
const Chats = lazy(() => import('@/pages/Chats'));
const Page404 = lazy(() => import('@/pages/Page404'));

export default function Constant() {
  const routesNavigation = [
    {
      path: '/', element: <Login />, requireAuth: false,
    },
    {
      path: '/register', element: <Register />, requireAuth: false,
    },
    {
      path: '/forgot-password', element: <ForgotPassword />, requireAuth: false,
    },
    {
      path: '/change-password', element: <ChangePassword />, requireAuth: false,
    },
    {
      path: '/chats', element: <Chats />, requireAuth: false,
    },
    // {
    //   path: '/chat', element: <Chat />, requireAuth: true, icons: <PiChatTeardropDots size={30} />,
    // },
    // {
    //   path: '/setting', element: <Setting />, requireAuth: true, icons: <TbSettings2 size={30} />,
    // },
    {
      path: '/*', element: <Page404 />, requireAuth: false,
    },
  ];

  return {
    routesNavigation,
  };
}
