import React, { useMemo } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import useQueryParams from '@/hooks/userQueryParams';

export default function User({ listUser, setSelectedUserId }) {
  const dummyText = 'To create a WebSocket connection in a React application, youll need to use a WebSocket library and integrate it into your project. One popular library for WebSocket support in React';
  const { querySearch, defferedQuerySearch, handleQuerySearch } = useQueryParams();

  const filteredUsers = useMemo(() => listUser?.user?.getList?.data?.filter((user) => user?.name?.toLowerCase().includes(defferedQuerySearch?.toLowerCase())), [defferedQuerySearch]);

  return (
    <div className="flex flex-col mt-1.5 gap-2.5">
      <div className="sticky top-0 w-full px-5 py-2">
        <div className="relative">
          <input
            type="text"
            className="w-full py-2 text-sm pl-10 border-[0.5px] nunito-sans bg-transparent border-[#C9C9C9] rounded-md transition-all duration-700 ease-linear delay-300 focus:outline-[#7F265B] focus:outline-[1px]"
            placeholder="Search or start new chat"
            value={querySearch}
            onChange={handleQuerySearch}
          />
          <div className="absolute top-0 flex items-center h-full left-3">
            <AiOutlineSearch className="text-xl text-[#747B86]" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 pr-3 mt-1 pl-5 overflow-auto h-[740px]">
        {filteredUsers.length === 0 && <span className="xl:w-[381px]">data tidak ada</span>}

        {filteredUsers?.map((user, i) => (
          <button
            key={i}
            type="button"
            className="relative flex flex-row items-center gap-4"
            onClick={() => setSelectedUserId(user?.id)}
          >
            <img
              src={user?.profileImage !== '' ? user?.profileImage : 'https://www.parenting.co.id/img/images/LELA28_shutterstock_800x400.jpg'}
              alt="profile-images"
              className="object-cover rounded-full w-[50px] h-[50px]"
            />

            <div className="border-t-[0.5px] border-[#C9C9C9] flex flex-col text-start gap-1.5 border-b-[0.5px] w-full">
              <h1 className="m-0 nunito-sans text-base text-[#606060]">{user?.name}</h1>
              <span className="text-sm text-[#818080] nunito-sans">
                {dummyText.slice(0, 68)}
                ....
              </span>
            </div>

            <div className="absolute top-0 right-0">
              <span className="text-[10px] text-[#A0A0A0] nunito-sans">19.20</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
