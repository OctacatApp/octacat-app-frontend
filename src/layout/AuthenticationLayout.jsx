import React from 'react';
import { BiMoon } from 'react-icons/bi';
import Aosanimate from '@/components/common/Aosanimate';

export default function AuthenticationLayout({ children }) {
  return (
    <Aosanimate>
      <section className="relative flex items-center justify-center h-screen p-10 overflow-hidden xl:block xl:px-56 xl:py-24">
        <div className="absolute hidden w-10 h-10 p-2 rounded-full bg-secondary-color top-10 xl:block" />
        <div className="absolute hidden p-2 rounded-full w-14 h-14 bg-secondary-color top-16 xl:block" />

        <div className="p-16 xl:p-10 bg-primary-color shadow-for-cards relative rounded-[20px]">
          <div className="grid grid-cols-1 xl:grid-cols-6">
            <div className="hidden xl:flex xl:items-center xl:col-span-3">
              <img src="/images/login-cloud.svg" alt="cloud-icons" className="h-full bg-cover xl:w-[450px] xl:ml-16" />
            </div>
            <div className="col-span-3">
              {children}
            </div>
          </div>

          <div className="absolute top-6 right-6 xl:top-6 xl:right-6">
            <BiMoon className="text-3xl xl:text-4xl text-active-color" />
          </div>
        </div>
      </section>
    </Aosanimate>
  );
}
