import { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { qonunKorrupsiya } from "../data/qonunKorrupsiya";

const QonunKorrupsiya = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#F9F9F9] min-h-screen flex flex-col">
      <Header />
      <Navbar />

      <main className="flex-1 w-full px-4 sm:px-6 lg:px-16 xl:px-32 py-6 sm:py-10">
        {/* Заголовки */}
        <header className="text-center mb-6 sm:mb-10">
          <h1 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-600">
            O‘ZBEKISTON RESPUBLIKASINING QONUNI
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#03124E] mt-2">
            Korrupsiyaga qarshi kurashish to‘g‘risida
          </h2>
          <p className="text-gray-500 mt-4 text-sm sm:text-base">
            Qonunchilik palatasi: 2016-yil 24-noyabrda qabul qilingan
          </p>
          <p className="text-gray-500 text-sm sm:text-base">
            Senat: 2016-yil 13-dekabrda ma’qullangan
          </p>
        </header>

        {/* Аккордеон */}
        <section className="mx-auto w-full max-w-5xl flex flex-col gap-4 sm:gap-6">
          {qonunKorrupsiya.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl shadow-md border border-sky-100 transition-all duration-300 overflow-hidden ${
                  isOpen ? "ring-2 ring-sky-300" : "hover:shadow-lg"
                }`}
              >
                <button
                  onClick={() => handleToggle(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`panel-${item.id}`}
                  className={`w-full flex justify-between items-center px-4 sm:px-6 py-4 sm:py-5 text-left font-semibold text-[#00486C] text-base sm:text-lg md:text-xl transition-colors duration-200 ${
                    isOpen ? "bg-sky-50" : "hover:bg-sky-50"
                  }`}
                >
                  <span className="flex-1 text-left break-words pr-2">
                    {item.title}
                  </span>
                  <svg
                    className={`w-6 h-6 sm:w-7 sm:h-7 transform transition-transform duration-300 ${
                      isOpen ? "rotate-45 text-sky-700" : "text-sky-700"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m6-6H6"
                    />
                  </svg>
                </button>

                {/* Контент */}
                <div
                  id={`panel-${item.id}`}
                  className={`px-4 sm:px-6 transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen
                      ? "max-h-[5000px] py-4 sm:py-6 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                  aria-hidden={!isOpen}
                >
                  <div className="prose prose-sm sm:prose max-w-none text-gray-700 leading-relaxed">
                    {item.content}
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default QonunKorrupsiya;
