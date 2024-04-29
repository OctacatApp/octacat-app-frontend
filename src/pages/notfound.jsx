import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col w-full gap-4">
        <img
          src="https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-512x249-ju1c9yxg.png"
          alt="not-found"
          draggable="false"
          className="w-[30%] h-[30%] animate-bounce mx-auto"
          loading="lazy"
        />

        <Link to="/" className="text-2xl font-semibold text-center underline text-[#7F265B] hover:text-[#301c28] hover:-translate-y-4 delay-200 ease-linear duration-500 outline-none">
          Back to page
        </Link>
      </div>
    </div>
  );
}
