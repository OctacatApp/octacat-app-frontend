import { createContext, useContext, useMemo } from 'react';
import { Client, cacheExchange, fetchExchange } from 'urql';
import { getFromLocalStorage } from '@/utils/helper';

const UrqlContextClient = createContext();

export const useUrqlClientContext = () => useContext(UrqlContextClient);

export default function UrqlContext({ children }) {
  const token = getFromLocalStorage('token');

  const client = useMemo(() => new Client({
    url: 'https://octacat-app-backend.fly.dev/query',
    exchanges: [
      cacheExchange,
      fetchExchange,
    ],
    requestPolicy: 'cache-and-network',
    fetchOptions: () => ({
      headers: { authorization: token ? `Bearer ${token}` : null },
    }),
  }), []);

  return (
    <UrqlContextClient.Provider value={client}>
      { children }
    </UrqlContextClient.Provider>
  );
}
