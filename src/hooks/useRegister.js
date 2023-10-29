import { gql, useMutation } from 'urql';
import { useState } from 'react';
import useForm from './useForm';

const REGISTER_MUTATION = gql`
  mutation register($name: String!, $email: String!, $password: String!) {
    auth {
      register(
        param: { name: $name, email: $email, password: $password }
      ) {
        id
        name
        email
        password
      }
    }
  }
`;

export default function useRegister() {
  const [visible, setVisible] = useState(false);
  const { formState, register } = useForm({
    email: '', name: '', password: '',
  });

  const [result, mutationRegister] = useMutation(REGISTER_MUTATION);
  const { fetching, error } = result;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const {
        name, email, password,
      } = formState;
      const handleState = { name, email, password };
      await mutationRegister(handleState);
    } catch (err) {
      throw new Error(err.message);
    }
  };

  return {
    formState,
    register,
    handleSubmit,
    setVisible,
    visible,
    fetching,
    error,
    result,
  };
}
