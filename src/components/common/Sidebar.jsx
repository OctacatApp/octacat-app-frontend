import React from 'react';
import { AiOutlineLogout } from 'react-icons/ai';

import { Link, useNavigate } from 'react-router-dom';

import Constant from '@/utils/constans';
import { saveToLocalStorage } from '@/utils/helper';

export default function Sidebar() {
  const navigate = useNavigate();
  const { routesNavigation } = Constant();

  return (
    <aside className="px-5 relative rounded-[15px] sidebar-effect h-full xl:h-[900px]">
      <div className="flex flex-col gap-10 px-2 py-10">
        {routesNavigation?.filter((routes) => routes.requireAuth)?.map((route) => (
          <Link key={route.path} to={route.path}>
            {route.icons}
          </Link>
        ))}
      </div>

      <div className="absolute left-0 flex justify-center w-full bottom-8">
        <button
          type="button"
          onClick={() => {
            setTimeout(() => {
              saveToLocalStorage('token', null);
              navigate('/');
            }, 1000);
          }}
        >
          <AiOutlineLogout size={30} />
        </button>
      </div>
    </aside>
  );
}
