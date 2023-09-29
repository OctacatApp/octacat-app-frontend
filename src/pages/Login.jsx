import React from 'react';
import { BiMoon } from 'react-icons/bi';

export default function Login() {
  return (
    <section className="relative p-20">
      <div className="w-10 h-10 p-2 rounded-full bg-secondary-color" />
      <div className="p-2 rounded-full w-14 h-14 bg-secondary-color" />

      <div className="p-10 bg-primary-color shadow-for-cards relative rounded-[20px]">
        lgin
        <img src="/images/login-cloud.svg" alt="cloud-icons" />

        <div className="absolute xl:top-6 xl:right-6">
          <BiMoon className="xl:text-4xl text-active-color" />
        </div>
      </div>
    </section>
  );
}
