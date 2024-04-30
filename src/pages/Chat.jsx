import { useQuery } from 'urql';
import { useEffect, useState } from 'react';

import { USERS } from '@/gql/queries/users';

import UserTabs from '@/components/chat/userTabs';
import UserChat from '@/components/chat/userChat';

export default function Chat() {
  const [response, reexecuteQuery] = useQuery({
    query: USERS,
  });

  const [users, setUsers] = useState([]);
  const [selectUser, setSelectUser] = useState('');

  useEffect(() => {
    if (response?.data) {
      setUsers(response?.data?.user?.getList?.data);
    }
  }, [response]);

  useEffect(() => {
    reexecuteQuery();
  }, []);

  return (
    <section className="flex items-center h-full p-6">
      <div className="container h-[90vh] overflow-hidden">
        <div className="grid h-full grid-cols-6 gap-0 bg-[#ecebe7] rounded-lg">
          <UserTabs
            users={users}
            selectUser={selectUser}
            setSelectUser={setSelectUser}
          />

          <UserChat
            user={users?.find((user) => user?.email === selectUser)}
            selectUser={selectUser}
          />
        </div>
      </div>
    </section>
  );
}
