import { gql } from 'urql';
import useForm from './useForm';
import { useUrqlClientContext } from '@/context/urqlContext';

const REGISTER_MUTATION = gql`
  mutation Register($name: String!, $email: String!, $password: String!) {
    auth {
      register(param: { name: $name, email: $email, password: $password }) {
        id
        name
        email
        password
        created_at
        created_by
      }
    }
  }
`;

export default function useRegister() {
  const client = useUrqlClientContext();
  const { formState, register } = useForm({
    email: '', name: '', password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      name, email, password,
    } = formState;

    const response = await client.mutation(REGISTER_MUTATION, { name, email, password }).toPromise();
    const { data, error } = response;
    console.log(data, error);
  };

  return {
    formState,
    register,
    handleSubmit,
  };
}
