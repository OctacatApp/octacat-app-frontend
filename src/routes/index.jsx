import { Route, Routes, useNavigate } from 'react-router-dom';

import { useEffect } from 'react';

import { useQuery } from 'urql';

import Login from '@/pages/Login';
import Register from '@/pages/Register';
import SendEmail from '@/pages/auth/sendEmail';
import ChangePassword from '@/pages/auth/changePassword';
import Chat from '@/pages/Chat';
import { ME } from '@/gql/queries/users';
import { recoverSession } from '@/utils/session';

export default function Routers() {
  const [result, reexecuteQuery] = useQuery({ query: ME });
  const user = result?.data?.user?.me;
  const token = recoverSession('token');

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/*');
    }
  }, [user]);

  useEffect(() => {
    reexecuteQuery();
  }, [reexecuteQuery, token]);

  // async me & route validation

  if (!user) {
    return (
      <Routes>
        <Route path="/*" element={<Login />} />
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
