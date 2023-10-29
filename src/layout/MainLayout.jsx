import React from 'react';
import Sidebar from '@/components/common/Sidebar';

export default function MainLayout({ children }) {
  return (
    <section className="flex flex-row gap-10 p-10">
      <Sidebar />
      <div className="w-full">
        {children}
      </div>
    </section>
  );
}
