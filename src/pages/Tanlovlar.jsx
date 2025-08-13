import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Tanlovlar = () => {
  // PDF data
  const competitions = [
    { 
      name: "1. M. Qori-Yoqubov nomidagi Respublika tanlovini tashkil etish va o‘tkazish tartibi to‘g‘risida Nizom", 
      file: "/files/Konkurs_Qoriyoqubov.pdf" 
    },
    { 
      name: "2. Bolalar musiqa va san’at maktablari o‘quvchilarining san’at yo‘nalishi bo‘yicha Respublika tanlovi dasturi va shartlari", 
      file: "/files/Konkurs_Sanat_yunalishi.pdf" 
    },
    { 
      name: "3. “Xalq cholg‘ulari ijrochilari” respublika tanlovining umumiy talablari, shartli asoslari va ijro dasturi", 
      file: "/files/Konkurs_Xalq_cholgulari.pdf" 
    },
    { 
      name: "4. “Yulduzcha” bolalar ijodiyoti televizion tanlovini tashkil etish va o‘tkazish tartibi to‘g‘risida Nizom", 
      file: "/files/Konkurs_Yulduzcha_tanlovi.pdf" 
    },
    { 
      name: "5. Orkestr, ansambl va ijodiy jamoalarining respublika ko‘rik tanlovi shartlari va dasturi", 
      file: "/files/Konkurs_Ansambllar.pdf" 
    },
    { 
      name: "6. Akademik va estrada ijrochiligi respublika tanlovi shartlari va dasturi", 
      file: "/files/Konkurs_Akademik_va_estrada_ijrochiligi_tanlov.pdf" 
    },
    { 
      name: "7. “Botir Zokirov sanʼati davomchilari” respublika ko‘rik-tanlovini tashkil etish va o‘tkazish to‘g‘risida Nizom", 
      file: "/files/Konkurs_Botir_Zokirov.pdf" 
    },
    { 
      name: "8. “Kamalak yulduzlari” bolalar ijodiyoti festivali Nizomi", 
      file: "/files/Konkurs_Kamalak_yulduzlari.pdf" 
    },
    { 
      name: "9. “Qalb” respublika iqtidorli yosh ijrochilari onlayn tanlovi", 
      file: "/files/Konkurs_Qalb.pdf" 
    },
    { 
      name: "10. “Sanʼatim senga, obod yurtim!” ijodiy ko‘rik-tanlovi Nizomi", 
      file: "/files/Konkurs_Sanatim_senga_obod_yurtim.pdf" 
    },
    { 
      name: "11. “Zarbchi” respublika zarbli cholg‘ular yosh ijrochilari tanlovini o‘tkazish tartibi", 
      file: "/files/Konkurs_Zarbchi.pdf" 
    },
    { 
      name: "12. “Yosh havaskorlar” amaliy sanʼat ko‘rik-tanlovini o‘tkazish tartibi", 
      file: "/files/Konkurs_Yosh_havoskarlar.pdf" 
    },
    { 
      name: "13. “Yoshlar raqs” festivalini o‘tkazish tartibi", 
      file: "/files/Konkurs_Yoshlar_raqs.pdf" 
    },
    { 
      name: "14. “Sanʼat sehri” musiqa va sanʼat tanlovini tashkil etish va o‘tkazish tartibi", 
      file: "/files/Konkurs_Sanat_sehri.pdf" 
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-['Montserrat', 'sans-serif']">
      <Header />
      <Navbar />

      <main className="flex-grow py-6 sm:py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto w-full">
          {/* Page Header */}
          <section className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-sky-900 mb-3 leading-tight">
              Respublika tanlovlari va festivallarini o'tkazish
              <br className="hidden sm:block" />
              nizomlari, tartiblari va shartlari
            </h1>
            <div className="w-24 h-1 bg-sky-500 mx-auto rounded-full my-4"></div>
            <p className="text-gray-700 text-sm sm:text-base max-w-3xl mx-auto">
              Maktabimizda ishtirok etadigan barcha respublika tanlovlari va festivallar haqida to'liq ma'lumot
            </p>
          </section>

          {/* Competitions List */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <ul className="divide-y divide-gray-100">
              {competitions.map((item, index) => (
                <li key={index} className="group hover:bg-gray-50 transition-colors duration-200">
                  <a
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 sm:p-6 hover:bg-sky-50 transition-colors duration-200"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-sky-100 text-sky-600 rounded-lg mr-4 mt-0.5">
                        <span className="font-medium text-sm">{index + 1}.</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm sm:text-base text-gray-800 font-medium leading-relaxed group-hover:text-sky-700 transition-colors">
                          {item.name}
                        </p>
                        <div className="mt-1.5 flex items-center text-sky-600">
                          <span className="text-xs sm:text-sm font-medium">PDF faylini yuklab olish</span>
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-3.5 w-3.5 ml-1.5 transform group-hover:translate-x-1 transition-transform" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-5 w-5 text-gray-400 group-hover:text-sky-500 transition-colors" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Tanlovlar;
