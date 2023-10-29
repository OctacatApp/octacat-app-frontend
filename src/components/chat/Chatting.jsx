import React from 'react';
import { BiSend } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Chatting() {
  return (
    <section className="flex flex-col w-full gap-4">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-6">
          <img
            src="https://www.parenting.co.id/img/images/LELA28_shutterstock_800x400.jpg"
            alt="avatar"
            className="object-cover w-16 h-16 rounded-full"
          />
          <h1 className="m-0 capitalize text-[#747B86] text-lg font-semibold">gorengan ganjil</h1>
        </div>

        <div className="flex flex-row items-center gap-10">
          <FiSearch className="text-[#747B86]" size={20} />
          <GiHamburgerMenu className="text-[#747B86]" size={20} />
        </div>
      </div>

      <div className="relative bg-[#F8F6F4] p-10 h-full rounded-md shadow-sm">
        asdad
        <form className="absolute left-0 w-full px-10 bottom-10">
          <div className="flex flex-row items-center gap-4">
            <input type="text" className="w-full outline-none px-3 bg-[#D2E9E9] p-1.5 rounded-md" />

            <button type="submit" className="bg-active-color p-1.5 rounded-md">
              <BiSend className="text-[#fff]" size={25} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
