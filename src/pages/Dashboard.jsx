import React, { useState } from 'react';
import { gql, useQuery } from 'urql';

const QUERY_USER = gql`
  query {
    user {
      getList(param: {
        limit: 20
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

export default function Dashboard() {
  const [result] = useQuery({ query: QUERY_USER });
  const [selectedUserId, setSelectedUserId] = useState(null);

  const { data, error, fetching } = result;

  if (error) {
    return (
      <span>
        error
        {' '}
        {error}
      </span>
    );
  }

  if (fetching) return <span>loading...</span>;

  return (
    <section className="flex flex-row gap-10">
      <div className="flex flex-col gap-4">
        {data?.user?.getList?.data?.map((user) => (
          <button
            key={user?.id}
            type="button"
            onClick={() => setSelectedUserId(user?.id)}
          >
            {user?.name}
          </button>
        ))}
      </div>

      <div>
        {data?.user?.getList?.data
          .filter((user) => user?.id === selectedUserId)
          .map((selectedUser) => (
            <div key={selectedUser?.id}>
              <h2>{selectedUser?.name}</h2>
            </div>
          ))}
      </div>
    </section>
  );
}
