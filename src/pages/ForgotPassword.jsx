import React from 'react';
import { Link } from 'react-router-dom';
import AuthenticationLayout from '@/layout/AuthenticationLayout';

export default function ForgotPassword() {
  return (
    <AuthenticationLayout>
      <form className="flex flex-col gap-5">
        <div className="flex flex-row justify-center">
          <div className="relative flex flex-col w-full gap-1">
            <small className="nunito-sans text-sm text-[#828282]">Email</small>
            <input
              type="email"
              className="border-[1px] border-[#DED2D9] transition-all duration-700 ease-linear delay-300 focus:outline-[#7F265B] focus:outline-[1px] placeholder:text-border-color text-text-input rounded-md p-2.5 pl-3.5 text-sm bg-transparent w-full"
              placeholder="mail@abc.com"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3.5">
          <div className="flex flex-row justify-center">
            <button type="submit" className="w-full hover:bg-[#547D7D] transition duration-300 ease-in-out delay-300 hover:-translate-y-1 uppercase text-sm bg-[#7F265B] text-text-color p-3 rounded-lg font-bold">
              Forgot password
            </button>
          </div>

          <div className="flex flex-row justify-start">
            <span className="text-base text-border-color">
              I remember the password?
              {' '}
              <Link to="/" className="font-bold text-[#7F265B]">Sign in now</Link>
            </span>
          </div>
        </div>
      </form>
    </AuthenticationLayout>
  );
}
