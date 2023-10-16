import { gql } from 'urql';
import { useState } from 'react';
import useForm from './useForm';
import { useUrqlClientContext } from '@/context/urqlContext';

const LOGIN_MUTATION = gql`
  mutation auth($email: String!, $password: String!) {
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

  const [visible, setVisible] = useState(false);
  const { formState, register } = useForm({ email: '', password: '' });
  const [mutationResponse, setMutationResponse] = useState();
  const [mutationResponseError, setMutationResponseError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { email, password } = formState;
      const { data, error } = await client.mutation(LOGIN_MUTATION, { email, password });

      setMutationResponse(data);
      setMutationResponseError(error);
    } catch (err) {
      throw new Error(err);
    }
  };

  return {
    formState,
    register,
    handleSubmit,
    visible,
    setVisible,
    mutationResponse,
    mutationResponseError,
  };
}
