import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { RiLoader3Line } from 'react-icons/ri';

export default function TextInput({
  title, description, href, handlerSubmit, loading,
}) {
  const formRef = useRef();
  const { pathname } = useLocation();

  const submit = () => {
    const formData = new FormData(formRef.current);

    if (pathname === '/') {
      handlerSubmit({ email: formData.get('email'), password: formData.get('password') });
    }
    if (pathname === '/auth/sign-up') {
      handlerSubmit({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
      });
    }
  };

  return (
    <div className="flex flex-col gap-5 xl:p-16">
      <div className="flex flex-row-reverse items-center justify-between mt-2">
        <img
          src="/public/images/jupiters.svg"
          alt="avatar-images"
          className="w-12 h-12 xl:mb-3 animate-bounce"
        />
        <div className="flex flex-col gap-1">
          <h1 className="m-0 font-bold text-3xl text-[#525252]">{title}</h1>
          <span className="text-base text-[#525252]">{description}</span>
        </div>
      </div>

      <form
        ref={formRef}
        className="flex flex-col gap-4 xl:mt-1"
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
      >
        {pathname !== '/' && (
          <label htmlFor="username" className="flex flex-col gap-1">
            <small className="text-[#828282]">Username</small>
            <input
              type="text"
              id="username"
              name="name"
              className="ring-1 rounded-md text-base ring-[#DED2D9] p-2.5 px-3 outline-none bg-transparent focus:ring-[#5A4B54] duration-500"
              placeholder="username"
            />
          </label>
        )}

        <label htmlFor="email" className="flex flex-col gap-1">
          <small className="text-[#828282]">Email</small>
          <input
            type="email"
            id="email"
            name="email"
            className="ring-1 rounded-md text-base ring-[#DED2D9] p-2.5 px-3 outline-none bg-transparent focus:ring-[#5A4B54] duration-500"
            placeholder="main@gmail.com"
          />
        </label>

        <label htmlFor="password" className="flex flex-col gap-1">
          <small className="text-[#828282]">Password</small>
          <input
            type="password"
            id="password"
            name="password"
            className="ring-1 rounded-md text-base ring-[#DED2D9] p-2.5 px-3 outline-none bg-transparent focus:ring-[#5A4B54] duration-500"
            placeholder="*****************"
          />
        </label>

        <div className="flex flex-row items-center justify-between">
          <label htmlFor="checkbox" className="flex flex-row items-center gap-2">
            <input type="checkbox" name="checkbox" id="checkbox" className="w-5 h-5 accent-[#7F265B]" />
            <span className="capitalize text-[#A1A1A1]">remember me</span>
          </label>

          <Link to="/auth/send-email" className="text-[#7F265B] font-semibold capitalize">
            forgot password
          </Link>
        </div>

        <button
          type="submit"
          className="bg-[#7F265B] hover:bg-[#20111a] duration-500 text-base text-white p-2.5 uppercase rounded-md ring-1 ring-[#7F265B] font-bold"
        >
          {loading ? (
            <span className="flex justify-center">
              <RiLoader3Line className="text-2xl animate-spin" />
            </span>
          ) : 'sign in'}
        </button>

        <span className="flex flex-row items-center gap-1.5">
          {pathname === '/' ? 'Not registered yet?' : 'Do you have an account? '}
          <Link to={href} className="font-bold text-[#7F265B] hover:text-[#050304] duration-500">
            {pathname === '/' ? 'Sign up now' : 'Sign in now'}
          </Link>
        </span>
      </form>
    </div>
  );
}
