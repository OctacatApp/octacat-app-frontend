import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import AuthenticationLayout from '@/layout/AuthenticationLayout';
import Title from '@/components/auth/Title';

export default function ForgotPassword() {
  return (
    <AuthenticationLayout>
      <form className="flex flex-col gap-12 xl:py-44">
        <Title />

        <div className="flex flex-col gap-5">
          <div className="flex flex-row justify-center">
            <div className="relative w-full xl:w-[550px]">
              <input
                type="text"
                className="border-2 border-border-color text-lg placeholder:text-border-color rounded-md p-2.5 pl-10 bg-transparent w-full"
                placeholder="Email or username"
              />

              <div className="absolute left-3 top-4 xl:top-3.5">
                <HiOutlineMail className="text-xl xl:text-2xl text-border-color" />
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-center">
            <button type="button" className="w-full xl:w-[550px] uppercase text-lg bg-active-color text-text-color p-3 rounded-lg font-bold">
              forgot password
            </button>
          </div>
        </div>
      </form>
    </AuthenticationLayout>
  );
}
