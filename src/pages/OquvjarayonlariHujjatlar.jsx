import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const OquvjarayonlariHujjatlar = () => {
  const documents = [
    {
      title: "O'quv yili ish rejasi",
      file: "/files/6_BMSM_Ish_reja.pdf",
      description: "Maktabning o'quv yili uchun ish rejasi va taqvimi"
    },
    {
      title: "O'quv yili taqvimi",
      file: "/files/Uquv_kalendari.pdf",
      description: "O'quv yilidagi muhim sanalar va tadbirlar taqvimi"
    },
    {
      title: "Davlat ta'lim talabi",
      file: "/files/Davlat_talim_talabi.pdf",
      description: "Davlat ta'lim standartlari va talablari"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FCFF] font-['Montserrat', 'sans-serif']">
      <Header />
      <Navbar />
      
      <main className="flex-grow py-6 sm:py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full">
          {/* Page Header */}
          <section className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-sky-900 mb-3">
              O'quv Jarayonlari Hujjatlari
            </h1>
            <div className="w-24 h-1 bg-sky-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-700 text-sm sm:text-base max-w-3xl mx-auto">
              Maktabimizning rasmiy hujjatlari va o'quv jarayonlariga oid materiallar
            </p>
          </section>

          {/* Documents Grid */}
          <section aria-label="PDF hujjatlar ro'yxati" className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {documents.map((doc, idx) => (
                <article
                  key={idx}
                  className="flex flex-col bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100"
                  tabIndex={0}
                  aria-label={doc.title}
                >
                  <div className="p-5 sm:p-6 flex-1">
                    <div className="flex items-start gap-4">
                      <div className="bg-sky-50 p-3 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold text-sky-900 mb-1">{doc.title}</h2>
                        <p className="text-gray-600 text-sm sm:text-base mb-4">{doc.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                    <a
                      href={doc.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="w-full inline-flex items-center justify-center px-4 py-2.5 border border-transparent text-sm sm:text-base font-medium rounded-lg text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors duration-200"
                      aria-label={`Yuklab olish: ${doc.title}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Yuklab olish
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OquvjarayonlariHujjatlar;