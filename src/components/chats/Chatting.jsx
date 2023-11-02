import React, { useEffect, useState } from 'react';
import { BiDotsVerticalRounded, BiSend } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';

import { io } from 'socket.io-client';
import { getFromLocalStorage } from '@/utils/helper';

export default function Chatting({ selectedUser }) {
  const [isConnected, setIsConnected] = useState(false);

  const token = getFromLocalStorage('token');
  const tokenWithoutQuotes = token?.replace(/"/g, '');

  useEffect(() => {
    const socket = io('wss://octacat-app-backend.fly.dev/wss/chat', {});

    socket.on('connect', () => {
      console.log('Connected to WebSocket server');
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from WebSocket server');
      setIsConnected(false);
    });

    socket.on('error', (error) => {
      console.error('WebSocket error:', error);
      setIsConnected(false);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <section className="flex flex-col w-full h-full gap-4">
      <div className="flex flex-row items-center justify-between px-10 py-[18px] border-b-[0.5px] border-[#C9C9C9]">
        <div className="flex flex-row items-center gap-4">
          <img
            src={selectedUser?.profileImage ? selectedUser?.profileImage : 'https://www.parenting.co.id/img/images/LELA28_shutterstock_800x400.jpg'}
            alt="avatar"
            className="object-cover w-10 h-10 rounded-full"
          />
          <h1 className="m-0 nunito-sans text-[#606060] text-base font-medium">{selectedUser?.name}</h1>
        </div>

        <div className="flex flex-row items-center gap-8">
          <FiSearch className="text-xl text-[#747B86]" />
          <BiDotsVerticalRounded className="text-xl text-[#747B86]" />
        </div>
      </div>

      <div className="relative bg-[#F8F6F4] p-10 h-full rounded-md shadow-sm">
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
