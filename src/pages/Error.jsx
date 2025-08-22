import React from 'react';
import { Link } from 'react-router-dom';
import { gerbFooter, gerbFooterOpacity, border_nav } from '../img';

const Error = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#00486C] relative overflow-hidden">
      {/* Top Bar */}
      <div className="flex justify-center items-center w-full pt-6 pb-3 px-4 sm:px-8 absolute top-0 left-0 z-10">
        <img src={gerbFooter} alt="Gerb" className="w-14 sm:w-20 md:w-24" />
        <img src={border_nav} alt="Border" className="w-[2px] h-10 mx-4 opacity-70 hidden sm:block" />
        <div className="text-center">
          <p className="text-xs sm:text-base text-white opacity-80">Rasmiy veb-sayt</p>
          <p className="text-lg sm:text-2xl md:text-3xl text-white font-bold whitespace-nowrap">O’zbekiston Respublikasi Hokimligi</p>
        </div>
      </div>

      {/* 404 Centerpiece */}
      <div className="flex flex-1 flex-col justify-center items-center text-center z-20 px-4">
        <h1 className="text-white font-extrabold font-['Montserrat'] text-[90px] xs:text-[140px] sm:text-[200px] md:text-[280px] lg:text-[340px] xl:text-[420px] leading-none mb-2 drop-shadow-lg transition-all duration-300">
          404
        </h1>
        <p className="text-white text-lg sm:text-xl md:text-2xl mb-8 font-semibold">Sahifa topilmadi</p>
        <Link to="/" className="inline-block">
          <span className="inline-block bg-white/10 hover:bg-white/20 border-2 border-white text-white px-6 py-3 rounded-xl font-semibold font-['Montserrat'] text-base sm:text-lg shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-70 mb-10">
            Bosh sahifaga qaytish
          </span>
        </Link>
      </div>

      {/* Decorative Footer Image */}
      <div className="absolute bottom-0 left-0 w-full flex justify-start z-0 pointer-events-none">
        <img src={gerbFooterOpacity} alt="Gerb Footer" className="w-2/3 max-w-3xl opacity-60 select-none" />
      </div>
    </div>
  );
};

export default Error;
