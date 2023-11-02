import { gql, useMutation } from 'urql';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import useForm from './useForm';
import { awaiter, saveToLocalStorage } from '@/utils/helper';

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
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const { formState, register } = useForm({ email: '', password: '' });

  const [result, mutationLogin] = useMutation(LOGIN_MUTATION);
  const { fetching, error } = result;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { email, password } = formState;
      const stateHandling = { email, password };

      const response = await mutationLogin(stateHandling);
      const { data: { auth: { login: { token } } } } = response;

      if (token !== null) {
        toast.success('Login Successfully!');

        await awaiter(1000);
        saveToLocalStorage('token', token);
        navigate('/chats');
      }
    } catch (err) {
      toast.error('User with this email not registered');
      throw new Error(err);
    }
  };

  return {
    formState,
    register,
    handleSubmit,
    visible,
    setVisible,
    fetching,
    error,
    result,
  };
}
