import { useEffect, useState } from 'react';
import { BiDoughnutChart, BiDotsVerticalRounded } from 'react-icons/bi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { gql, useQuery } from 'urql';
import User from '@/components/chats/User';
import Chatting from '@/components/chats/Chatting';

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

export default function Chats() {
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
    <section className="h-screen bg-[#FFE6C9] overflow-hidden">
      <div className="px-20 py-8">
        <div className="grid grid-cols-6 bg-[#F8F8F8] rounded-xl h-[910px]">
          <div className="col-span-2 border-r-[0.5px] border-[#C9C9C9]">
            <div className="flex flex-col gap-0">
              <div className="border-b-[0.5px] border-[#C9C9C9] flex flex-row items-center justify-between px-5 py-4">
                <img
                  src="https://www.parenting.co.id/img/images/LELA28_shutterstock_800x400.jpg"
                  alt="profile-images"
                  className="object-cover rounded-full w-11 h-11"
                />

                <div className="flex flex-row items-center gap-6">
                  <BiDoughnutChart className="text-xl text-[#747B86]" />
                  <RxHamburgerMenu className="text-xl text-[#747B86]" />
                  <BiDotsVerticalRounded className="text-xl text-[#747B86]" />
                </div>
              </div>

              <User listUser={data} setSelectedUserId={setSelectedUserId} />
            </div>
          </div>

          <div className="h-full col-span-4">
            {
                selectedUserId === null && (
                  <div className="flex items-center justify-center w-full h-full">
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
                )
            }

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
          </div>

        </div>
      </div>
    </section>
  );
}
