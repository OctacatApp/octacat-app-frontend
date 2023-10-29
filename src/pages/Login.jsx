import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { MdOutlineLock } from 'react-icons/md';
import { AiOutlineEye } from 'react-icons/ai';

import { Link } from 'react-router-dom';

import AuthenticationLayout from '@/layout/AuthenticationLayout';
import Title from '@/components/auth/Title';

import useLogin from '@/hooks/useLogin';

export default function Login() {
  const {
    register, fetching, error, handleSubmit: onLogin, visible, setVisible, result,
  } = useLogin();

  return (
    <AuthenticationLayout>
      <form className="flex flex-col gap-12 xl:py-36" onSubmit={onLogin}>
        <Title />

        <div className="flex flex-col gap-5">
          {error && (
            <span className="p-2 text-base mx-auto xl:w-[550px] capitalize bg-red-100 border-l-4 border-red text-active-color">user with this email not registered</span>
          )}

          {result?.data && (
            <span className="p-2 text-base mx-auto xl:w-[550px] border-l-4 bg-success-color border-border-success-color text-active-color">Sign success</span>
          )}

          <div className="flex flex-row justify-center">
            <div className="relative w-full xl:w-[550px]">
              <input
                type="email"
                className="border-2 border-border-color transition-all delay-500 ease-in-out text-lg focus:outline-active-color placeholder:text-border-color text-text-input rounded-md p-2.5 pl-10 bg-transparent w-full"
                placeholder="Email or username"
                {...register('email')}
              />

              <div className="absolute left-3 top-[16px] xl:top-3.5">
                <HiOutlineMail className="text-xl xl:text-2xl text-border-color" />
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-center">
            <div className="relative w-full xl:w-[550px]">
              <input
                type={visible ? 'text' : 'password'}
                className="border-2 border-border-color transition-all delay-500 ease-in-out text-lg focus:outline-active-color placeholder:text-border-color text-text-input rounded-md p-2.5 pl-10 pr-10 bg-transparent w-full"
                placeholder="Password"
                {...register('password')}
              />

              <div className="absolute left-3 top-[16px] xl:top-3.5">
                <MdOutlineLock className="text-xl xl:text-2xl text-border-color" />
              </div>

              <button type="button" onClick={() => setVisible(!visible)} className="absolute top-[14px] xl:top-3.5 right-4 xl:right-3">
                <AiOutlineEye className="text-2xl xl:text-2xl text-border-color" />
              </button>
            </div>
          </div>

          <div className="flex flex-row justify-center">
            <div className="flex flex-row items-center justify-between w-full xl:w-[550px]">
              <label htmlFor="remember" className="flex flex-row items-center gap-2.5">
                <input type="checkbox" id="remember" className="xl:h-6 xl:w-6 accent-active-color" />
                <span className="text-lg font-normal text-border-color">Remember me</span>
              </label>

              <Link to="/forgot-password" className="text-lg font-bold text-thirdy-color">Forgot password</Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-center">
              <button type="submit" className="w-full xl:w-[550px] hover:bg-[#547D7D] transition duration-300 ease-in-out delay-300 hover:-translate-y-1 uppercase text-lg bg-active-color text-text-color p-3 rounded-lg font-bold">
                {fetching ? 'loading ...' : 'login'}
              </button>
            </div>

            <div className="flex flex-row justify-start xl:justify-center">
              <span className="text-lg text-border-color xl:w-[550px]">
                Don&apos;t have account?
                {' '}
                <Link to="/register" className="font-bold text-active-color">Create now</Link>
              </span>
            </div>
          </div>
        </div>
      </form>
    </AuthenticationLayout>
  );
}
