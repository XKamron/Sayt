import React from 'react';
import { PiDownloadSimpleBold } from 'react-icons/pi';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Hujjatlar = () => {
  const columns = [
    {
      title:
        'BMSM Nizomi',
      fileName: '6_BMSM_Ustav.pdf',
    },
    {
      title:
        'Yuridik shaxsni davlat ro‘yxatidan o‘tkazish to‘g‘risida guvohnoma',
      fileName: '6_BMSM_Guvohnoma.pdf',
    },
    {
      title:
        'Maktab strukturasi',
      fileName: '6_BMSM_Struktura.pdf',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-['Montserrat', 'sans-serif']">
      <Header />
      <Navbar />

      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto w-full">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl text-center font-bold text-sky-900 mb-4 pt-24 font-montserrat">Hujjatlar</h1>
        </div>

              <div className="space-y-4">
                {columns.map((column, index) => (
                  <div key={index} className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white rounded-lg shadow-sm border border-sky-100 p-4 sm:p-6 hover:shadow-md transition-shadow duration-200">
                    <div className="w-full mb-4 sm:mb-0 sm:pr-4">
                      <h3 className="text-lg sm:text-xl font-bold text-sky-900 mb-2 font-montserrat">
                        {column.title}
                      </h3>
                    </div>
                    <div className="w-full sm:w-auto flex justify-end">
                      {column.fileName ? (
                        <a
                          href={`/files/${column.fileName}`}
                          download={column.fileName}
                          className="inline-flex items-center justify-center px-4 py-2 bg-sky-900 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-sm sm:text-base font-montserrat whitespace-nowrap"
                        >
                          <PiDownloadSimpleBold className="mr-2 text-lg" />
                          Yuklab olish
                        </a>
                      ) : (
                        <span className="text-sky-700 text-sm font-medium font-montserrat opacity-75">
                          Tez orada yuklanadi
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
      </main>
      <Footer />
    </div>
  );
};

export default Hujjatlar;
