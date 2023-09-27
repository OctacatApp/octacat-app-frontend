import { Route, Routes } from 'react-router-dom';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Dashboard from '@/pages/Dashboard';
import Chat from '@/pages/Chat';

const pagesRoutes = [
  {
    id: 1, path: '/', element: <Login />, requireAuth: false,
  },
  {
    id: 2, path: '/register', element: <Register />, requireAuth: false,
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
    </Routes>
  );
}
