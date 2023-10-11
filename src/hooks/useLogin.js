import { gql } from 'urql';
import useForm from './useForm';
import { useUrqlClientContext } from '@/context/urqlContext';

const LOGIN_MUTATION = gql`
  mutation auth {
    auth {
        login (param: {
            email: $email
            password: $password
        }) {
            message
            token
        }
    }
  }
`;

export default function useLogin() {
  const client = useUrqlClientContext();
  const { formState, register } = useForm({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formState;
    const response = await client.mutation(LOGIN_MUTATION, { email, password }).toPromise();
    const { token, error } = response;
    console.log(token, error);
  };

  return {
    formState, register, handleSubmit,
  };
}
