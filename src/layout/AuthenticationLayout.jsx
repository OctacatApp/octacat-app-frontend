import React from 'react';
import { BiMoon } from 'react-icons/bi';

export default function AuthenticationLayout({ children }) {
  return (
    <section className="relative h-screen overflow-hidden xl:px-56 xl:py-24">
      <div className="absolute w-10 h-10 p-2 rounded-full bg-secondary-color top-10" />
      <div className="absolute p-2 rounded-full w-14 h-14 bg-secondary-color top-16" />

      <div className="p-10 bg-primary-color shadow-for-cards relative rounded-[20px]">
        <div className="grid grid-cols-6">
          <div className="flex items-center col-span-3">
            <img src="/src/assets/images/login-cloud.svg" alt="cloud-icons" className="h-full bg-cover xl:w-[450px] xl:ml-16" />
          </div>
          <div className="col-span-3">
            {children}
          </div>
        </div>

        <div className="absolute xl:top-6 xl:right-6">
          <BiMoon className="xl:text-4xl text-active-color" />
        </div>
      </div>
    </section>
  );
}
