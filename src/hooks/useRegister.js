import { gql } from 'urql';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from './useForm';
import { useUrqlClientContext } from '@/context/urqlContext';
import { awaiter } from '@/utils/helper';

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
  const navigate = useNavigate();
  const client = useUrqlClientContext();

  const [visible, setVisible] = useState(false);
  const [mutationResponse, setMutationResponse] = useState();
  const [mutationResponseError, setMutationResponseError] = useState();

  const { formState, register } = useForm({
    email: '', name: '', password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const {
        name, email, password,
      } = formState;

      const { data, error } = await client.mutation(REGISTER_MUTATION, { name, email, password }).toPromise();

      setMutationResponse(data);
      setMutationResponseError(error);

      if (mutationResponse != null) {
        await awaiter(2000);
        navigate('/');
      }
    } catch (err) {
      throw new Error(err.message);
    }
  };

  return {
    formState,
    register,
    handleSubmit,
    mutationResponseError,
    mutationResponse,
    setVisible,
    visible,
  };
}
