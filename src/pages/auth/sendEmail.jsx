import { Link } from 'react-router-dom';

export default function SendEmail() {
  return (
    <section className="flex items-center justify-center h-[90vh]">
      <div className="relative shadow-xl shadow-black/5 max-h-[500px] min-h-[500px] max-w-[700px] min-w-[700px]">
        <div className="flex flex-col gap-5 xl:p-16">
          <div className="flex flex-row-reverse items-center justify-between mt-16">
            <img
              src="/public/images/jupiters.svg"
              alt="avatar-images"
              className="w-12 h-12 xl:mb-3 animate-bounce"
            />
            <div className="flex flex-col gap-1">
              <h1 className="m-0 font-bold text-3xl text-[#525252]">Forgot your Password</h1>
              <span className="text-base text-[#525252]">See what is going on with your business</span>
            </div>
          </div>

          <form className="flex flex-col gap-4 xl:mt-1">

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

            <button
              type="submit"
              className="bg-[#7F265B] hover:bg-[#20111a] duration-500 text-lg text-white p-2 uppercase rounded-md ring-1 ring-[#7F265B] font-bold"
            >
              login
            </button>

            <span className="flex flex-row items-center gap-1.5">
              I remember the password?
              <Link to="/" className="font-bold text-[#7F265B] hover:text-[#050304] duration-500">
                Sign in now
              </Link>
            </span>
          </form>
        </div>
      </div>
    </section>
  );
}
