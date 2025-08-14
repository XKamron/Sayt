import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const columns = [
  {
    id: 1,
    title: '1. O‘zbekiston Respublikasining Mehnat Kodeksi',
    file: '/files/Mehnat_Kodeksi_yangi.pdf',
  },
  {
    id: 2,
    title: '2. O‘zbekiston Respublikasining “Та‘lim to‘g‘risida”gi qonuni',
    file: '/talim_togrisida_qonun',
  },
  {
    id: 3,
    title: '3. O‘zbekiston Respublikasining “Aholini ish bilan ta’minlash to‘g‘risida”gi qonuni',
    file: '/aholini_ish_bilan_taminlash',
  },
  {
    id: 4,
    title: '4. O‘zbekiston Respublikasining “Bola huquqlarining kafolatlari to‘g‘risida”gi qonuni',
    file: '/bola_huquqlari',
  },
  {
    id: 5,
    title: '5. O‘zbekiston Respublikasining “Jismoniy va yuridik shaxslarning murojaatlari to‘g‘risida”gi qonuni',
    file: '/jismoniy_yuridik_shaxs',
  },
    {
    id: 6,
    title: '6. O‘zbekiston Respublikasining “Kasaba uyushmalari to‘g‘risida”gi qonuni',
    file: '/kasaba_uyushmasi',
  },
    {
    id: 7,
    title: '7. O‘zbekiston Respublikasining “Korrupsiyaga qarshi kurashish to‘g‘risida”gi qonuni',
    file: '/korrupsiyaga_qarshi',
  },
    {
    id: 8,
    title: '8. O‘zbekiston Respublikasining “Madaniy faoliyat va madaniyat tashkilotlari to‘g‘risida”gi qonuni',
    file: '/madaniy_faoliyat',
  },
    {
    id: 9,
    title: '9. O‘zbekiston Respublikasining “Mehnatni muhofaza qilish to‘g‘risida”gi qonuni',
    file: '/mehnat_muhofaza',
  },
    {
    id: 10,
    title: '10. O‘zbekiston Respublikasining “Nogironligi bo‘lgan shaxslarning huquqlari to‘g‘risida”gi qonuni',
    file: '/nogironligi_b_l_shaxs',
  },
  {
    id: 11,
    title: '11. O‘zbekiston Respublikasining “Shaxsga doir ma’lumotlar to‘g‘risida”gi qonuni',
    file: '/shaxsga_doir',
  },
  {
    id: 12,
    title: '12. O‘zbekiston Respublikasining “Yoshlarga oid davlat siyosati to‘g‘risida”gi qonuni',
    file: '/yoshlargaOid',
  },
];
const Kodeks = () => {
  // Add hover state for better interactivity
  const [setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50 font-Montserrat">
      <Header />
      <Navbar />
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-7xl mx-auto w-full">
        <motion.div 
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-sky-900 mb-3">
            O'zbekiston Respublikasi Kodeks va Qonunlari
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            Respublikamizning amaldagi asosiy me'yoriy-huquqiy hujjatlari to'plami
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {columns.map((column) => {
            const isPDF = column.file.includes('.pdf');
            const isDisabled = !column.file;
            
            const cardClasses = `
              flex items-center
              p-5 sm:p-6
              rounded-xl
              transition-all duration-300
              ${isDisabled 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-white text-sky-900 shadow-sm hover:shadow-md border border-gray-100 hover:border-sky-100 hover:bg-sky-50 cursor-pointer'}
            `;
            
            const content = (
              <>
                <div className="flex items-center">
                  <div className={`
                    flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 
                    rounded-full flex items-center justify-center
                    ${isDisabled ? 'bg-gray-200' : 'bg-sky-100 text-sky-600'}
                    mr-4 sm:mr-5
                  `}>
                    <span className="text-lg sm:text-xl font-bold">{column.id}</span>
                  </div>
                  <span className="text-sm sm:text-base font-medium leading-tight">
                    {column.title}
                  </span>
                </div>
                {!isDisabled && (
                  <div className="mt-4 text-xs sm:text-sm text-sky-600 font-medium flex items-center">
                    {isPDF ? 'PDF yuklab olish' : 'Batafsil'}
                    <svg 
                      className="w-4 h-4 ml-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d={isPDF ? "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" : "M9 5l7 7-7 7"} 
                      />
                    </svg>
                  </div>
                )}
              </>
            );
            
            if (isDisabled) {
              return (
                <div key={column.id} className={cardClasses}>
                  {content}
                </div>
              );
            }
            
            if (isPDF) {
              return (
                <a
                  key={column.id}
                  href={column.file}
                  download
                  className={cardClasses}
                  onMouseEnter={() => setHoveredCard(column.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {content}
                </a>
              );
            }
            
            return (
              <Link
                key={column.id}
                to={column.file}
                className={cardClasses}
                onMouseEnter={() => setHoveredCard(column.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {content}
              </Link>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Kodeks;