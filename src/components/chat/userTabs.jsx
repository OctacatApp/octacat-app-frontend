import { HiDotsHorizontal } from 'react-icons/hi';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

export default function UserTabs({ users, setSelectUser, selectUser }) {
  return (
    <div className="col-span-2 bg-[#F8F8F8] border-r border-slate-300">
      <div className="flex flex-col gap-0">
        <div className="flex flex-row items-center justify-between px-5 py-4 border-b border-[#DED2D9]">
          <img
            src="/public/images/jupiters.svg"
            alt="avatar"
            className="w-11 h-11"
          />

          <Popover>
            <PopoverTrigger>
              <HiDotsHorizontal className="text-3xl duration-500 text-slate-600 hover:text-green-600" />
            </PopoverTrigger>
            <PopoverContent>
              <div className="flex flex-col gap-0">
                <button type="button" className="p-3 text-left capitalize duration-500 hover:bg-slate-900/5">pesan berbintang</button>
                <button type="button" className="p-3 text-left capitalize duration-500 hover:bg-slate-900/5">Keluar</button>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex flex-col h-[82vh] gap-0 overflow-y-auto">
          {users?.map((user) => (
            <div
              key={user?.id}
              onKeyDown={(e) => e.stopPropagation()}
              className={`px-3 py-3 border-b relative border-[#DED2D9] ${user?.email === selectUser && 'bg-[#E8E8E8]'}`}
              onClick={() => setSelectUser(selectUser === user?.email ? null : user?.email)}
              role="button"
              tabIndex={0}
            >
              <div className="flex flex-row items-start gap-4">
                <img
                  src={user?.profileImage || 'https://www.its.ac.id/it/wp-content/uploads/sites/46/2021/06/blank-profile-picture-973460_1280.png'}
                  alt="avatar"
                  className="rounded-full w-14 h-14"
                />

                <div className="flex flex-col gap-1">
                  <span className="text-lg font-semibold m-0 text-[#606060]">{user?.name}</span>
                  <p className="m-0 text-sm text-[#818080]">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>

              <span className="absolute top-4 right-3 text-[#A0A0A0] text-sm">19.00</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
