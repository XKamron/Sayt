import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BmsmHujjatlar = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <main className="flex-1 px-4 md:px-16 py-8 bg-[#F8FCFF] min-h-[60vh]">
        <h1 className="text-sky-900 text-2xl md:text-3xl font-semibold text-center mb-8">
          BMSM uchun PDF hujjatlar
        </h1>
        <section aria-label="PDF hujjatlar ro'yxati" className="w-full">
          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "BMSM Nizomi",
                file: "/files/6_BMSM_Ustav.pdf",
              },
              {
                title: "Yuridik shaxsni davlat ro‘yxatidan o‘tkazish to‘g‘risida guvohnoma",
                file: "/files/6_BMSM_Guvohnoma.pdf",
              },
              {
                title: "Maktab strukturasi",
                file: "/files/6_BMSM_Struktura.pdf",
              },
            ].map((pdf, idx) => (
              <article
                key={idx}
                className="flex flex-col justify-between bg-white shadow-md rounded-2xl p-5 sm:p-6 w-full max-w-xs min-w-[220px] sm:min-w-[260px] md:min-w-[280px] lg:min-w-[300px] hover:shadow-lg transition duration-200 border border-sky-50"
                tabIndex={0}
                aria-label={pdf.title}
              >
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-sky-900 text-base sm:text-lg md:text-xl font-bold break-words flex-1">{pdf.title}</h2>
                </div>
                <a
                  href={pdf.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="mt-2 px-4 py-2 bg-sky-900 text-white rounded-lg font-semibold hover:bg-blue-700 transition text-center flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
                  aria-label={`Yuklab olish yoki ko‘rish: ${pdf.title}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16V4m0 0L8.25 7.75M12 4l3.75 3.75M16.5 12.75v6.5a2.25 2.25 0 01-2.25 2.25h-4.5A2.25 2.25 0 017.5 19.25v-6.5" />
                  </svg>
                  Yuklab olish / Ko‘rish
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BmsmHujjatlar;