import { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { jobDescriptions } from "../data/jobDescriptions";
import { PiCaretDown, PiCaretUp } from 'react-icons/pi';

const MalakaTavsiflari = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FCFF] font-['Montserrat', 'sans-serif']">
      <Header />
      <Navbar />
      <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-sky-900 mb-6 text-center">
            MALAKA TAVSIFLARI
          </h1>

          <div className="space-y-4">
            {jobDescriptions.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={item.id}
                  className={`bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-200 ${
                    isOpen ? 'ring-2 ring-sky-300' : 'hover:shadow-md'
                  }`}
                >
                  <button
                    onClick={() => handleToggle(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`panel-${item.id}`}
                    className="w-full flex justify-between items-center px-4 sm:px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-sky-300 focus:rounded-lg"
                  >
                    <span className="text-sm sm:text-base font-medium text-sky-900">
                      {item.title}
                    </span>
                    <span className="transform transition-transform duration-200 text-sky-600">
                      {isOpen ? <PiCaretUp className="w-5 h-5" /> : <PiCaretDown className="w-5 h-5" />}
                    </span>
                  </button>

                  <div
                    id={`panel-${item.id}`}
                    className={`px-4 sm:px-6 transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-[5000px] pb-6 opacity-100" : "max-h-0 opacity-0"
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MalakaTavsiflari;
