import React, { useEffect, useState } from 'react';
import { gql, useQuery } from 'urql';

import User from '@/components/chat/User';
import Chatting from '@/components/chat/Chatting';

const QUERY_USER = gql`
  query {
    user {
      getList(param: {
        limit: 100
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
  const [result] = useQuery({
    query: QUERY_USER,
  });

  const { data, fetching, error } = result;

  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
        setSelectedUserId(null);
      }
    };
    document.addEventListener('keydown', handleKeyPress);
  }, []);

  if (fetching) return <p className="m-0">loading...</p>;
  if (error) return <p className="m-0">oh no error</p>;

  return (
    <section className="flex flex-row gap-10 pt-4">
      <User listUser={data} setSelectedUserId={setSelectedUserId} />

      {selectedUserId === null && (
      <div className="flex items-center justify-center w-full">
        <div className="flex flex-col gap-4">
          <img src="/images/question.png" alt="question" className="bg-cover h-[350px] mx-auto w-[300px]" />
          <div className="flex flex-col gap-1.5 text-center">
            <h1 className="m-0 text-3xl font-bold capitalize text-[#545D5D]">Octacat app chatting</h1>
            <p className="m-0 text-[#697575] text-lg mx-auto max-w-2xl">
              Send and receive message without keeping your phone online
              use Octacat App Chatting to 4 linked devices and 1 phone at the same time.
            </p>
          </div>
        </div>
      </div>
      )}

      {
        data?.user?.getList?.data
          .filter((user) => user?.id === selectedUserId)
          .map((selectedUser) => (
            <Chatting
              key={selectedUser?.id}
              selectedUser={selectedUser}
            />
          ))
      }
    </section>
  );
}
