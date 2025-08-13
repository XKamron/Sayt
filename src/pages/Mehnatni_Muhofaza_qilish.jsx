import React, { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { mehnatniMuhofazaQilishQonun } from "../data/mehnatniMuhofazaQilishQonun";

const Mehnatni_Muhofaza_qilish = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#F9F9F9] min-h-screen flex flex-col">
      <Header />
      <Navbar />
      <main className="flex-1 w-full px-3 sm:px-6 lg:px-20 xl:px-40 py-6 sm:py-10">
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl text-[#03124E] font-bold tracking-tight">
      O‘ZBEKISTON RESPUBLIKASINING QONUNI

        </h1>
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl text-[#03124E] font-bold mb-6 sm:mb-10 tracking-tight">
        Mehnatni muhofaza qilish to‘g‘risida, (yangi tahriri)
        </h1>

        <div className="mx-auto w-full max-w-5xl flex flex-col gap-4 sm:gap-6">
          {mehnatniMuhofazaQilishQonun.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl shadow-lg border border-sky-100 overflow-hidden transition-all duration-300 ${
                  isOpen ? "ring-2 ring-sky-300" : ""
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
                    className={`w-6 h-6 sm:w-7 sm:h-7 transform transition-transform ${
                      isOpen ? "rotate-45 text-sky-700" : "text-sky-700"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                  </svg>
                </button>

                <div
                  id={`panel-${item.id}`}
                  className={`px-4 sm:px-6 transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[5000px] py-4 sm:py-6 opacity-100" : "max-h-0 opacity-0"
                  }`}
                  aria-hidden={!isOpen}
                >
                  <div className="prose prose-sm sm:prose max-w-none text-gray-700">
                    {item.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Mehnatni_Muhofaza_qilish;
