import { useMutation } from 'urql';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { recoverSession, saveSession } from '@/utils/session';

import { LOGIN } from '@/gql/mutations/auth';
import LoginForm from '@/components/loginForm';

export default function Login() {
  const [authUserResult, mutationAuthUser] = useMutation(LOGIN);
  const { fetching: loading } = authUserResult;

  const navigate = useNavigate();
  const user = recoverSession('token');

  const handleSubmit = ({ email, password }) => {
    const variables = { email, password };

    mutationAuthUser(variables).then((data) => {
      const { data: { auth: { login: { token } } } } = data;
      if (token) {
        toast.success('Sign in Success');
        saveSession('token', token);
      }
    }).catch((error) => {
      toast.error('Sign in Failed');
      throw Error(error.message);
    });
  };

  useEffect(() => {
    if (user) {
      navigate('/chat');
    }
  }, [user]);

  return (
    <section className="flex items-center justify-center h-[90vh]">
      <div className="relative xl:shadow-xl xl:shadow-black/5 xl:max-h-[500px] xl:min-h-[500px] xl:max-w-[700px] xl:min-w-[700px]">
        <LoginForm
          loading={loading}
          handlerSubmit={handleSubmit}
        />
      </div>
    </section>
  );
}
