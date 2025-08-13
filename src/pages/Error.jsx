import React from 'react';
import { Link } from 'react-router-dom';
import { gerbFooter, gerbFooterOpacity, border_nav } from '../img';

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#00486C] h-screen relative">
      {/* Top Text with Images */}
      <div className="flex justify-center items-center mt-5 sm:mt-10 md:mt-10 lg:mt-10 absolute top-0">
        <img src={gerbFooter} alt="" className="w-[5rem]" />
        <img src={border_nav} alt="" className="w-[1.5px]" />
        <div className="p-5">
          <p className="text-md text-white">Rasmiy veb-sayt</p>
          <p className="text-[20px] text-white font-bold">O’zbekiston Respublikasi Hokimligi</p>
        </div>
      </div>

      {/* Middle Text - 404 */}
      <div className="flex items-center mt-5">
        <h1 className="text-white text-[150px] sm:text-[260px] md:text-[300px] lg:text-[400px]  xl:text-[500px] font-extrabold font-['Montserrat']">404</h1>
      </div>

      {/* Bottom Text */}
      <Link to="/" className="flex flex-row justify-center items-center">
      <p className=" text-white text-md lg:text-2xl border-2 px-5 py-1 rounded-xl font-semibold font-['Montserrat'] mb-[11rem] sm:mb-16 md:mb-20 lg:mb-20 2xl:mb-14 absolute bottom-0">
        Bosh sahifaga qaytish
      </p>
      </Link>

      <div className="absolute bottom-0 left-0">
        <img src={gerbFooterOpacity} alt="" className="xl:w-[38rem]" />
      </div>
    </div>
  );
};

export default Error;
