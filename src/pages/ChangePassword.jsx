import React from 'react';
import { MdOutlineLock } from 'react-icons/md';
import { AiOutlineEye } from 'react-icons/ai';
import AuthenticationLayout from '@/layout/AuthenticationLayout';

export default function ChangePassword() {
  return (
    <AuthenticationLayout>
      <form className="flex flex-col gap-12 xl:py-44">
        <div className="flex flex-col gap-3 text-center">
          <h1 className="m-0 xl:text-[32px] font-bold text-head-text">Save you account now</h1>
          <p className="m-0 text-sub-text xl:text-xl xl:max-w-md xl:mx-auto">Get unlimited typeforms, questions and responses, free forever</p>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-row justify-center">
            <div className="relative xl:w-[550px]">
              <input
                type="password"
                className="border-2 border-border-color text-lg placeholder:text-border-color rounded-md p-2.5 pl-10 bg-transparent w-full"
                placeholder="Password"
              />

              <div className="absolute left-3 top-3.5">
                <MdOutlineLock className="xl:text-2xl text-border-color" />
              </div>

              <button type="button" className="absolute top-3.5 right-3">
                <AiOutlineEye className="xl:text-2xl text-border-color" />
              </button>
            </div>
          </div>

          <div className="flex flex-row justify-center">
            <div className="relative xl:w-[550px]">
              <input
                type="password"
                className="border-2 border-border-color text-lg placeholder:text-border-color rounded-md p-2.5 pl-10 bg-transparent w-full"
                placeholder="Confirm password"
              />

              <div className="absolute left-3 top-3.5">
                <MdOutlineLock className="xl:text-2xl text-border-color" />
              </div>

              <button type="button" className="absolute top-3.5 right-3">
                <AiOutlineEye className="xl:text-2xl text-border-color" />
              </button>
            </div>
          </div>

          <div className="flex flex-row justify-center">
            <button type="submit" className="xl:w-[550px] uppercase text-lg bg-active-color text-text-color p-3 rounded-lg font-bold">
              change password
            </button>
          </div>
        </div>
      </form>
    </AuthenticationLayout>
  );
}
