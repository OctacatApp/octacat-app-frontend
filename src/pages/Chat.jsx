import React from 'react';
import { gql, useQuery } from 'urql';

import User from '@/components/chat/User';
import Chatting from '@/components/chat/Chatting';

const QUERY_USER = gql`
  query {
    user {
      getList(param: {
        limit: 5
        page: 1
      }){
        limit
        page
        totalPage
        totalData
        data {
          id
          name
          email
          password
          profileImage
          createdAt
          createdBy
          updatedAt
          updatedBy
          deletedAt
          deletedBy
          isDeleted
        }
      }
    }
  }
`;
export default function Chat() {
  const [result, reexecuteQuery] = useQuery({
    query: QUERY_USER,
  });

  const { data, fetching, error } = result;

  if (fetching) return <p className="m-0">loading...</p>;
  if (error) return <p className="m-0">oh no error</p>;

  return (
    <section className="flex flex-row gap-10 pt-4">
      <User listUser={data} />
      <Chatting />
    </section>
  );
}
