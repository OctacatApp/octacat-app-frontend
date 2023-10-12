import Aos from 'aos';
import React, { useEffect } from 'react';

export default function Aosanimate({ children, className }) {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      delay: true,
    });
  }, []);

  return (
    <div
      data-aos="fade-right"
      data-aos-offset="50"
      data-aos-easing="ease-in-sine"
      className={className}
    >
      {children}
    </div>
  );
}
