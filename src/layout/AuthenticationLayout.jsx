import React from 'react';
import { Toaster } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';
import Aosanimate from '@/components/common/Aosanimate';
import Skeletons from '@/components/common/Skeletons';

export default function AuthenticationLayout({ children }) {
  const location = useLocation();

  return (
    <Aosanimate>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />

      <div className="grid grid-cols-6">
        <div className="col-span-4 bg-[#FFE6C9] h-screen relative">
          <div className="relative flex items-center justify-center max-w-2xl mx-auto xl:mt-44">
            <img src="/images/circle.svg" alt="circle" className="animate-pulse" />
            <div className="absolute flex items-center h-full top-20">
              <Skeletons />
            </div>

            <div className="absolute top-28 left-[420px]">
              <img src="/images/grup-message.svg" alt="circle" className="animate-bounce" />
            </div>

            <div className="absolute top-24 right-[420px]">
              <img src="/images/grup-message1.svg" alt="circle" className="animate-bounce" />
            </div>

            <div className="absolute -bottom-36">
              <div className="flex flex-col gap-1 text-[#73114B] text-center">
                <h1 className="m-0 text-4xl font-bold">Turn your ideas into reality.</h1>
                <p className="m-0 text-xl font-normal">Get started for free and make new friends with the octacat app</p>
              </div>
            </div>
          </div>

          <div className="absolute -top-20 -left-20">
            <img src="/images/jupiters.svg" alt="circle" className="animate-spin" />
          </div>

          <div className="absolute -right-14 -bottom-16">
            <img src="/images/gradient-circle.svg" alt="gradient-colors" />
          </div>
        </div>

        <div className="col-span-2 bg-[#fff] h-full">
          <div className="flex flex-col gap-5 px-20 xl:mt-52">
            <div className="flex flex-col gap-[26px]">
              <img src="/images/favicon.svg" alt="favicon" className="w-10 h-10" />

              <div className="flex flex-col gap-0 text-[#525252]">
                {location.pathname === '/' && <h1 className="m-0 text-3xl font-bold">Login to your Account</h1>}
                {location.pathname === '/register' && <h1 className="m-0 text-3xl font-bold">Register your Account now</h1>}
                {location.pathname === '/forgot-password' && <h1 className="m-0 text-3xl font-bold">Forgot your Password</h1>}
                <span className="text-base font-normal">See what is going on with your business</span>
              </div>
            </div>

            {children}
          </div>
        </div>
      </div>
    </Aosanimate>
  );
}
