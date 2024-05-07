import { Client, cacheExchange, fetchExchange } from 'urql';
import { recoverSession } from '@/utils/session';

const client = new Client({
  url: import.meta.env.VITE_PROD_URL || 'https://octacat-app-backend.fly.dev/query',
  exchanges: [fetchExchange, cacheExchange],
  fetchOptions: () => {
    const token = recoverSession('token') ?? '';
    return {
      headers: { authorization: `Bearer ${token}` },
    };
  },
});

export default client;
