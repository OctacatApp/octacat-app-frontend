import { useMutation } from 'urql';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import TextInput from '@/components/common/textInput';
import { LOGIN } from '@/gql/mutations/auth';
import { saveSession } from '@/utils/session';

export default function Login() {
  const [authUserResult, mutationAuthUser] = useMutation(LOGIN);
  const { fetching: loading } = authUserResult;

  const navigate = useNavigate();

  const handleSubmit = ({ email, password }) => {
    const variables = { email, password };

    mutationAuthUser(variables).then((data) => {
      const { data: { auth: { login: { token } } } } = data;
      if (token) {
        toast.success('Sign in Success');
        saveSession('token', token);

        navigate('/chat');
      }
    }).catch((error) => {
      toast.error('Sign in Failed');
      throw Error(error.message);
    });
  };

  return (
    <section className="flex items-center justify-center h-[90vh]">
      <div className="relative shadow-xl shadow-black/5 max-h-[500px] min-h-[500px] max-w-[700px] min-w-[700px]">
        <TextInput
          title="Sign in"
          description="See what is going on with your business"
          href="/auth/sign-up"
          handlerSubmit={handleSubmit}
          loading={loading}
        />
      </div>
    </section>
  );
}
