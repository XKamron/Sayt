import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  Ukuvchi_sinf,
  Ukuvchi_yunalish,
  Pedagog_staj,
  Pedagog_yunalish,
} from '../img';

const cardData = [
  {
    label: "Ta’lim olayotgan o‘quvchilarning sinflar bo‘yicha taqsimoti",
    img: Ukuvchi_sinf,
    alt: "Sinflar bo‘yicha o‘quvchilar taqsimoti diagrammasi",
    aria: 'O‘quvchi sinf taqsimoti grafigi',
  },
  {
    label: "Ta’lim olayotgan o‘quvchilarning yo‘nalishlar bo‘yicha taqsimoti",
    img: Ukuvchi_yunalish,
    alt: "Yo‘nalishlar bo‘yicha o‘quvchilar taqsimoti diagrammasi",
    aria: 'O‘quvchi yo‘nalish taqsimoti grafigi',
  },
  {
    label: "Pedagoglarning maktabdagi ish staji",
    img: Pedagog_staj,
    alt: "Pedagoglarning ish staji taqsimoti diagrammasi",
    aria: 'Pedagog staji taqsimoti grafigi',
  },
  {
    label: "Pedagoglarning yo‘nalishlar bo‘yicha taqsimoti",
    img: Pedagog_yunalish,
    alt: "Pedagoglarning yo‘nalishlar bo‘yicha taqsimoti diagrammasi",
    aria: 'Pedagog yo‘nalish taqsimoti grafigi',
  },
];

const MaktabKorsatkichlari = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col font-Montserrat">
      <Header />
      <Navbar />
      <main className="flex-1 w-full py-8 sm:py-10 md:py-12 lg:py-16">
        {/* Header Section */}
        <section className="text-center mb-12 px-4 sm:px-6">
          <h1 className="text-amber-700 text-lg sm:text-xl font-semibold mb-3 tracking-wider uppercase">Maktab faoliyati</h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Maktab ko'rsatkichlari
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </section>
        
        {/* Cards Grid */}
        <section
          aria-label="Maktab ko'rsatkichlari kartalari"
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {cardData.map((card, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col p-5 sm:p-6 h-full border border-gray-100 hover:border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transform hover:-translate-y-1"
                tabIndex={0}
                aria-label={card.aria}
              >
                {/* Card Header */}
                <div className="flex items-center justify-center mb-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full text-sm font-bold">
                    {idx + 1}
                  </div>
                </div>
                
                {/* Card Content */}
                <p className="mb-4 text-base sm:text-lg text-center font-medium text-gray-800 leading-relaxed">
                  {card.label}
                </p>
                
                {/* Image Container */}
                <div className="flex-1 flex items-center justify-center p-2">
                  <img
                    src={card.img}
                    alt={card.alt}
                    loading="lazy"
                    className="w-full h-auto max-h-[200px] sm:max-h-[240px] md:max-h-[260px] object-contain rounded-lg border border-gray-100 shadow-sm transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MaktabKorsatkichlari;