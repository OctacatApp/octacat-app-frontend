import { gql } from 'urql';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from './useForm';
import { useUrqlClientContext } from '@/context/urqlContext';
import { awaiter } from '@/utils/helper';

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

  const navigate = useNavigate();

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

      if (data != null) {
        await awaiter(2000);
        navigate('/dashboard');
      }
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
