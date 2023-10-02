import { Route, Routes } from 'react-router-dom';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Dashboard from '@/pages/Dashboard';
import Chat from '@/pages/Chat';
import ForgotPassword from '@/pages/ForgotPassword';
import ChangePassword from '@/pages/ChangePassword';

const pagesRoutes = [
  {
    id: 1, path: '/', element: <Login />, requireAuth: false,
  },
  {
    id: 2, path: '/register', element: <Register />, requireAuth: false,
  },
  {
    id: 5, path: '/forgot-password', element: <ForgotPassword />, requireAuth: false,
  },
  {
    id: 6, path: '/change-password', element: <ChangePassword />, requireAuth: false,
  },
  {
    id: 3, path: '/dashboard', element: <Dashboard />, requireAuth: true,
  },
  {
    id: 4, path: '/chat', element: <Chat />, requireAuth: true,
  },
];

export default function Routers() {
  return (
    <Routes>
      {
            pagesRoutes?.map((pages) => {
              if (pages.requireAuth) return <Route path={pages?.path} element={pages?.element} key={pages?.id} />;
              return <Route path={pages?.path} element={pages?.element} key={pages?.id} />;
            })
        }

      <Route path="*" element={<div>pages tidak ada</div>} />
    </Routes>
  );
}
