import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loaders from '@/components/common/Loaders';

const Login = lazy(() => import('@/pages/Login'));
const Register = lazy(() => import('@/pages/Register'));
const Dashboard = lazy(() => import('@/pages/Dashboard'));
const Chat = lazy(() => import('@/pages/Chat'));
const ForgotPassword = lazy(() => import('@/pages/ForgotPassword'));
const ChangePassword = lazy(() => import('@/pages/ChangePassword'));
const Page404 = lazy(() => import('@/pages/Page404'));

const pagesRoutes = [
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
    path: '/dashboard', element: <Dashboard />, requireAuth: true,
  },
  {
    path: '/chat', element: <Chat />, requireAuth: true,
  },
  {
    path: '/*', element: <Page404 />, requireAuth: false,
  },
];

export default function Routers() {
  return (
    <Routes>
      {
            pagesRoutes?.map((pages) => {
              if (pages.requireAuth) {
                return (
                  <Route
                    path={pages?.path}
                    element={(
                      <Suspense fallback={(
                        <div className="flex items-center justify-center w-full h-screen">
                          <Loaders />
                        </div>
                      )}
                      >
                        {pages?.element}
                      </Suspense>
                    )}
                    key={pages?.path}
                  />
                );
              }
              return (
                <Route
                  path={pages?.path}
                  element={(
                    <Suspense fallback={<div className="flex items-center justify-center w-full h-screen"><Loaders /></div>}>
                      {pages?.element}
                    </Suspense>
              )}
                  key={pages?.path}
                />
              );
            })
        }
    </Routes>
  );
}
