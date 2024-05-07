import { useRef } from 'react';
import { RiLoader3Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function RegisterForm({ loading, handlerSubmit }) {
  const formRef = useRef();

  const submit = () => {
    const formData = new FormData(formRef.current);

    handlerSubmit({
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    });
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
          <h1 className="m-0 font-bold text-3xl capitalize text-[#525252]">Sign up</h1>
          <span className="text-base text-[#525252]">See what is going on with your business</span>
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
          Do you have an account?
          <Link to="/" className="font-bold text-[#7F265B] hover:text-[#050304] duration-500">
            Sign in now
          </Link>
        </span>
      </form>
    </div>
  );
}
