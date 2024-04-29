import { useMutation } from 'urql';
import toast from 'react-hot-toast';
import TextInput from '@/components/common/textInput';
import { REGISTER } from '@/gql/mutations/auth';

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
      <div className="relative shadow-xl shadow-black/5 max-h-[600px] min-h-[600px] max-w-[700px] min-w-[700px]">
        <TextInput
          title="Sign up"
          description="See what is going on with your business"
          href="/"
          handlerSubmit={handleSubmit}
          loading={loading}
        />
      </div>
    </section>
  );
}
