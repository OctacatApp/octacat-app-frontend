import React from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import { MdOutlineLock } from 'react-icons/md';
import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import AuthenticationLayout from '@/layout/AuthenticationLayout';
import useRegister from '@/hooks/useRegister';
import Aosanimate from '@/components/common/Aosanimate';

export default function Register() {
  const {
    register, handleSubmit: onRegister, mutationResponseError: error, visible, setVisible,
  } = useRegister();

  return (
    <AuthenticationLayout>
      <form className="flex flex-col gap-12 xl:py-20" onSubmit={onRegister}>
        <div className="flex flex-col gap-3 text-center">
          <h1 className="m-0 xl:text-[32px] font-bold text-head-text">Save you account now</h1>
          <p className="m-0 text-sub-text xl:text-xl xl:max-w-md xl:mx-auto">Get unlimited typeforms, questions and responses, free forever</p>
        </div>

        <div className="relative flex flex-col gap-5">
          {error && (
          <Aosanimate className="mx-auto xl:w-[550px]">
            <span className="p-2 text-base bg-red-100 border-l-4 border-red text-active-color">{error.message}</span>
          </Aosanimate>
          )}

          <div className="flex flex-row justify-center">
            <div className="relative xl:w-[550px]">
              <input
                type="text"
                className="border-2 border-border-color transition-all delay-500 ease-in-out text-lg focus:outline-active-color placeholder:text-border-color text-text-input rounded-md p-2.5 pl-10 bg-transparent w-full"
                placeholder="Username"
                {...register('name')}
              />

              <div className="absolute left-3 top-3.5">
                <FiUser className="xl:text-2xl text-border-color" />
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-center">
            <div className="relative xl:w-[550px]">
              <input
                type="text"
                className="border-2 border-border-color transition-all delay-500 ease-in-out text-lg focus:outline-active-color placeholder:text-border-color text-text-input rounded-md p-2.5 pl-10 bg-transparent w-full"
                placeholder="Email"
                {...register('email')}
              />

              <div className="absolute left-3 top-3.5">
                <HiOutlineMail className="xl:text-2xl text-border-color" />
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-center">
            <div className="relative xl:w-[550px]">
              <input
                type={visible ? 'text' : 'password'}
                className="border-2 border-border-color transition-all delay-500 ease-in-out text-lg focus:outline-active-color placeholder:text-border-color text-text-input rounded-md p-2.5 pl-10 bg-transparent w-full"
                placeholder="Password"
                {...register('password')}
              />

              <div className="absolute left-3 top-3.5">
                <MdOutlineLock className="xl:text-2xl text-border-color" />
              </div>

              <button type="button" className="absolute top-3.5 right-3" onClick={() => setVisible(!visible)}>
                <AiOutlineEye className="xl:text-2xl text-border-color" />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-center">
              <button type="submit" className="xl:w-[550px] hover:bg-[#547D7D] transition duration-300 ease-in-out delay-300 hover:-translate-y-1 uppercase text-lg bg-active-color text-text-color p-3 rounded-lg font-bold">create account</button>
            </div>

            <div className="flex flex-row justify-center">
              <span className="text-lg text-border-color xl:w-[550px]">
                Have account?
                {' '}
                <Link to="/" className="font-bold text-active-color">Login now</Link>
              </span>
            </div>
          </div>
        </div>
      </form>
    </AuthenticationLayout>
  );
}
