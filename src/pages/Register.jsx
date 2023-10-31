import React from 'react';
import { AiOutlineEye, AiOutlineLoading3Quarters } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import AuthenticationLayout from '@/layout/AuthenticationLayout';
import useRegister from '@/hooks/useRegister';

export default function Register() {
  const {
    register, handleSubmit: onRegister, visible, setVisible, fetching,
  } = useRegister();

  return (
    <AuthenticationLayout>
      <form className="relative flex flex-col gap-5" onSubmit={onRegister}>
        <div className="flex flex-row justify-center">
          <div className="relative flex flex-col w-full gap-1">
            <small className="nunito-sans text-sm text-[#828282]">Username</small>
            <input
              type="text"
              className="border-[1px] nunito-sans border-[#DED2D9] transition-all duration-700 ease-linear delay-300 focus:outline-[#7F265B] focus:outline-[1px] placeholder:text-border-color text-text-input rounded-md p-2.5 pl-3.5 text-sm bg-transparent w-full"
              placeholder="bandunglautanapi"
              {...register('name')}
            />

          </div>
        </div>

        <div className="flex flex-row justify-center">
          <div className="relative flex flex-col w-full gap-1">
            <small className="nunito-sans text-sm text-[#828282]">Email</small>
            <input
              type="email"
              className="border-[1px] nunito-sans border-[#DED2D9] transition-all duration-700 ease-linear delay-300 focus:outline-[#7F265B] focus:outline-[1px] placeholder:text-border-color text-text-input rounded-md p-2.5 pl-3.5 text-sm bg-transparent w-full"
              placeholder="mail@abc.com"
              {...register('email')}
            />

          </div>
        </div>

        <div className="flex flex-row justify-center">
          <div className="relative flex flex-col w-full gap-1">
            <small className="nunito-sans text-sm text-[#828282]">Password</small>
            <input
              type={visible ? 'text' : 'password'}
              className="border-[1px] nunito-sans border-[#DED2D9] transition-all duration-700 ease-linear delay-300 focus:outline-[#7F265B] focus:outline-[1px] placeholder:text-border-color text-text-input rounded-md p-2.5 pl-3.5 text-sm bg-transparent w-full"
              placeholder="********************"
              {...register('password')}
            />

            <button
              type="button"
              className="absolute top-0 flex items-center h-full right-4 xl:right-3"
              onClick={() => setVisible(!visible)}
            >
              <AiOutlineEye className="text-xl xl:text-2xl text-border-color" />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3.5">
          <div className="flex flex-row justify-center">
            <button type="submit" className="w-full hover:bg-[#547D7D] transition duration-300 ease-in-out delay-300 hover:-translate-y-1 uppercase text-sm bg-[#7F265B] text-text-color p-3 rounded-lg font-bold">
              {fetching ? (
                <span className="w-8 h-8">
                  <AiOutlineLoading3Quarters className="mx-auto animate-spin" />
                </span>
              ) : 'Register'}
            </button>
          </div>

          <div className="flex flex-row justify-center">
            <span className="w-full text-base text-border-color">
              Do you have an account?
              {' '}
              <Link to="/" className="font-bold text-[#7F265B]">Sign in now</Link>
            </span>
          </div>
        </div>
      </form>
    </AuthenticationLayout>
  );
}
