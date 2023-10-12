import { createContext, useContext, useMemo } from 'react';
import { Client, cacheExchange, fetchExchange } from 'urql';

const UrqlContextClient = createContext();

export const useUrqlClientContext = () => useContext(UrqlContextClient);

export default function UrqlContext({ children }) {
  const client = useMemo(() => new Client({
    url: 'https://octacat-app-backend.fly.dev/query',
    exchanges: [
      cacheExchange,
      fetchExchange,
    ],
    requestPolicy: 'cache-and-network',
  }), []);

  return (
    <UrqlContextClient.Provider value={client}>
      { children }
    </UrqlContextClient.Provider>
  );
}
