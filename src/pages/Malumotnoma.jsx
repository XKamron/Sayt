import React from 'react'
import { PiDownloadSimpleBold } from 'react-icons/pi';
import pdfFile from '../files/simon-sinek-start-with-why.pdf';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Malumotnoma = () => {

    const columns = [
        {
            title:
              "O'zbekiston Respublikasi Prezidenti Sh.M.Mirziyoyevning 2022-yil 23-24-fevral kunlari Qoraqalpog'iston Respublikasiga tashrifi ...",
            fileName: pdfFile,
            date: '2023-11-16',
          },
        {
            title:
              "O'zbekiston Respublikasi Prezidenti Sh.M.Mirziyoyevning 2022-yil 23-24-fevral kunlari Qoraqalpog'iston Respublikasiga tashrifi ...",
            fileName: pdfFile,
            date: '2023-11-16',
          },
          {
            title:
              "O'zbekiston Respublikasi Prezidenti Sh.M.Mirziyoyevning 2022-yil 23-24-fevral kunlari Qoraqalpog'iston Respublikasiga tashrifi ...",
            fileName: pdfFile,
            date: '2023-11-16',
          },
          {
            title:
              "O'zbekiston Respublikasi Prezidenti Sh.M.Mirziyoyevning 2022-yil 23-24-fevral kunlari Qoraqalpog'iston Respublikasiga tashrifi ...",
            fileName: pdfFile,
            date: '2023-11-16',
          },
      ];

  return (
    <div>
        <Header />
        <Navbar />

        <div className="mx-[5rem] my-[2rem]">
        <span className="text-sky-900 text-[25px] font-medium font-['Montserrat']">Bosh sahifa / ...</span>
        {columns.map((column, index) => (
            <div key={index} className="flex flex-col md:flex-row justify-between items-center bg-[#BCF5F9] bg-opacity-50 rounded-[15px] p-4 my-8">
              <div className="w-full">
                <p className="text-blue-500 text-sm lg:text-base font-medium font-['Montserrat']">{column.date}</p>
                <p className="text-sky-900 text-sm lg:text-2xl font-bold font-['Montserrat']">
                  {column.title}
                </p>
              </div>
              <div className="flex items-center mt-4 md:mt-0">
                <PiDownloadSimpleBold className="ml-1 text-sky-900 text-3xl lg:text-4xl" />
                <a
                  href={column.fileName}
                  download={column.fileName}
                  className="text-sky-900 text-lg lg:text-xl font-semibold font-['Montserrat'] underline ml-2"
                >
                  Yuklash
                </a>
              </div>
            </div>
          ))}
        </div>
        <Footer />
    </div>
  )
}

export default Malumotnoma