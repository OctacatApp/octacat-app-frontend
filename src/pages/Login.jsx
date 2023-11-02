import React from 'react';
import { AiOutlineEye, AiOutlineLoading3Quarters, AiOutlineEyeInvisible } from 'react-icons/ai';

import { Link } from 'react-router-dom';

import AuthenticationLayout from '@/layout/AuthenticationLayout';

import useLogin from '@/hooks/useLogin';

export default function Login() {
  const {
    register, fetching, handleSubmit: onLogin, visible, setVisible,
  } = useLogin();

  return (
    <AuthenticationLayout>
      <form className="flex flex-col gap-5" onSubmit={onLogin}>
        <div className="flex flex-row justify-center">
          <div className="relative flex flex-col w-full gap-1">
            <small className="nunito-sans text-sm text-[#828282]">Email</small>
            <input
              type="email"
              className="border-[1px] border-[#DED2D9] transition-all duration-700 ease-linear delay-300 focus:outline-[#7F265B] focus:outline-[1px] placeholder:text-border-color text-text-input rounded-md p-2.5 pl-3.5 text-sm bg-transparent w-full"
              placeholder="Email or username"
              {...register('email')}
            />
          </div>
        </div>

        <div className="flex flex-row justify-center">
          <div className="relative flex flex-col w-full gap-1">
            <small className="nunito-sans text-sm text-[#828282]">Password</small>
            <input
              type={visible ? 'text' : 'password'}
              className="border-[1px] border-[#DED2D9] transition-all duration-700 ease-linear delay-300 focus:outline-[#7F265B] focus:outline-[1px] placeholder:text-border-color text-text-input rounded-md p-2.5 pl-3.5 text-sm pr-10 bg-transparent w-full"
              placeholder="Password"
              {...register('password')}
            />

            <button type="button" onClick={() => setVisible(!visible)} className="absolute flex items-center h-full top-3 right-4 xl:right-3">
              {visible ? <AiOutlineEyeInvisible className="text-xl text-border-color" /> : <AiOutlineEye className="text-xl text-border-color" />}
            </button>
          </div>
        </div>

        <div className="flex flex-row justify-center">
          <div className="flex flex-row items-center justify-between w-full">
            <label htmlFor="remember" className="flex flex-row items-center gap-2">
              <input type="checkbox" id="remember" className="xl:h-4 xl:w-4 accent-active-color" />
              <span className="text-sm font-normal text-border-color">Remember me</span>
            </label>

            <Link to="/forgot-password" className="text-sm font-bold text-[#7F265B]">Forgot password</Link>
          </div>
        </div>

        <div className="flex flex-col gap-3.5">
          <div className="flex flex-row justify-center">
            <button type="submit" className="w-full hover:bg-[#547D7D] transition duration-300 ease-in-out delay-300 hover:-translate-y-1 uppercase text-sm bg-[#7F265B] text-text-color p-3 rounded-lg font-bold">
              {fetching ? (
                <span className="w-8 h-8">
                  <AiOutlineLoading3Quarters className="mx-auto animate-spin" />
                </span>
              ) : 'login'}
            </button>
          </div>

          <div className="flex flex-row justify-start">
            <span className="text-sm xl:text-base text-border-color">
              Not Registered Yet?
              {' '}
              <Link to="/register" className="font-bold text-[#7F265B]">Create an account</Link>
            </span>
          </div>
        </div>
      </form>
    </AuthenticationLayout>
  );
}
