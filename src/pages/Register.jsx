import { useMutation } from 'urql';
import toast from 'react-hot-toast';

import { REGISTER } from '@/gql/mutations/auth';

import RegisterForm from '@/components/registerForm';

export default function Register() {
  const [userRegisterResult, registerMutation] = useMutation(REGISTER);
  const { fetching: loading } = userRegisterResult;

  const handleSubmit = ({ name, email, password }) => {
    const variables = { name, email, password };

    registerMutation(variables).then((data) => {
      if (data !== null) {
        toast.success('create account success');
      }
    }).catch((error) => {
      throw Error(error.message);
    });
  };

  return (
    <section className="flex items-center justify-center h-[90vh]">
      <div className="relative xl:shadow-xl xl:shadow-black/5 xl:max-h-[600px] xl:min-h-[600px] xl:max-w-[700px] xl:min-w-[700px]">
        <RegisterForm
          loading={loading}
          handlerSubmit={handleSubmit}
        />
      </div>
    </section>
  );
}
