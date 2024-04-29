import { Route, Routes } from 'react-router-dom';

import Login from '@/pages/login';
import Register from '@/pages/register';
import SendEmail from '@/pages/auth/sendEmail';
import ChangePassword from '@/pages/auth/changePassword';
import { recoverSession } from '@/utils/session';
import Chat from '@/pages/chat';

export default function Routers() {
  const user = recoverSession('token');

  if (!user) {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/auth/sign-up" element={<Register />} />
        <Route path="/auth/send-email" element={<SendEmail />} />
        <Route path="/auth/change-password" element={<ChangePassword />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Chat />} />
    </Routes>
  );
}
