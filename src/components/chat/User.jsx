import React, { useMemo } from 'react';
import { FiSearch } from 'react-icons/fi';
import useQueryParams from '@/hooks/userQueryParams';

export default function User({ listUser, setSelectedUserId }) {
  const { querySearch, defferedQuerySearch, handleQuerySearch } = useQueryParams();

  const filteredUsers = useMemo(() => listUser?.user?.getList?.data?.filter((user) => user?.name?.toLowerCase().includes(defferedQuerySearch?.toLowerCase())), [defferedQuerySearch]);

  return (
    <section className="flex flex-col gap-4 pr-4">
      <div className="relative w-full">
        <input
          type="text"
          className="bg-transparent border-[#93A3A3] w-full border-2 p-2 rounded-md placeholder:font-medium text-base"
          placeholder="Search people ..."
          value={querySearch}
          onChange={handleQuerySearch}
        />
        <button type="submit" className="absolute right-3 top-3">
          <FiSearch />
        </button>
      </div>

      <div className={`flex flex-col gap-4 h-[810px] overflow-auto ${listUser?.user?.getList?.data?.length >= 10 ? 'pr-4' : 'pr-0'}`}>
        {filteredUsers.length === 0 && <span className="xl:w-[381px]">data tidak ada</span>}

        {filteredUsers?.map((user) => (
          <button
            key={user?.id}
            type="button"
            className="bg-[#F8F6F4] relative flex flex-row items-start p-4 gap-4 rounded-lg xl:max-w-lg duration-200 hover:bg-[#E9E9E9] cursor-pointer"
            onClick={() => setSelectedUserId(user?.id)}
          >
            <img
              src={user?.profileImage ? user?.profileImage : 'https://www.parenting.co.id/img/images/LELA28_shutterstock_800x400.jpg'}
              alt="avatar"
              className="object-cover bg-cover rounded-full xl:h-20 xl:w-20"
            />

            <div className="flex flex-col gap-1.5">
              <h1 className="m-0 font-semibold text-lg capitalize text-left text-[#393E46]">{user?.name}</h1>
              <p className="m-0 text-[#A0A0A0] text-sm text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ut!</p>
            </div>

            <span className="absolute top-4 right-4 text-[#393E46] text-xs">19.20</span>

            <div className="absolute bottom-3 right-3 bg-active-color text-[#fff] h-5 w-5 rounded-full flex items-center justify-center">
              <span className="text-xs">1</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
