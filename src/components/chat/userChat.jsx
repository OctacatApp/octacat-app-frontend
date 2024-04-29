import { HiDotsHorizontal } from 'react-icons/hi';

export default function UserChat({ selectUser, user }) {
  if (!selectUser) {
    return (
      <div className="flex items-center justify-center col-span-4">
        <div className="flex flex-col gap-4">
          <img
            src="/public/images/question.png"
            loading="lazy"
            draggable="false"
            alt="not-found"
            height={350}
            width={350}
            className="mx-auto"
          />
          <div className="flex flex-col gap-1">
            <h1 className="m-0 text-3xl font-bold tracking-wider text-[#676767] text-center uppercase">Octacat app chatting</h1>
            <p className="m-0 min-w-[600px] max-w-[600px] text-center text-base text-[#6767679d]">
              Send and receive message without keeping your phone online
              use Octacat App Chatting to 4 linked devices and 1 phone at the same time.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="col-span-4">
      <div className="relative flex flex-col h-full">
        <div className="flex flex-row items-center justify-between px-5 py-4 border-b border-[#DED2D9]">
          <div className="flex flex-row items-center gap-4">
            <img
              src={user?.profileImage || '/public/images/jupiters.svg'}
              alt="avatar"
              className="w-11 h-11"
            />

            <h1 className="m-0 text-lg text-[#606060] font-semibold">{user?.name}</h1>
          </div>

          <button type="button" aria-label="setting-button">
            <HiDotsHorizontal className="text-3xl duration-500 text-slate-600 hover:text-green-600" />
          </button>
        </div>

        <div className="absolute bottom-0 left-0 w-full py-5 border-t border-[#DED2D9]">
          <form className="px-5">
            <input
              type="text"
              className="ring-1 rounded-full text-base ring-[#DED2D9] p-2.5 px-5 outline-none bg-transparent focus:ring-[#5A4B54] duration-500 w-full"
              placeholder="Types a message"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
