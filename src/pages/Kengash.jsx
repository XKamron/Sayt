import React from 'react';
import { PiDownloadSimpleBold } from 'react-icons/pi';
import pdfFile from '../files/simon-sinek-start-with-why.pdf';
import { news_2 } from '../img';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Kengash = () => {
  const columns = [
    {
      title:
        'Ayollar daftaridan chiqarish',
      fileName: pdfFile,
      date: '2023-11-16',
    },
    {
      title:
        'Ayollar daftaridan chiqarish',
      fileName: pdfFile,
      date: '2023-11-16',
    },
    {
      title:
        'Ayollar daftaridan chiqarish',
      fileName: pdfFile,
      date: '2023-11-16',
    },
    {
      title:
        'Ayollar daftaridan chiqarish',
      fileName: pdfFile,
      date: '2023-11-16',
    },
  ];

  return (
    <div>
    <Header />
    <Navbar />
    <div className="mx-[5rem]">
    <span className="text-sky-900 text-[25px] font-medium font-['Montserrat']">Bosh sahifa / ...</span>
      <div className="block md:flex justify-between items-center text-[#00486C] pt-5 font-['Montserrat']">
        <p className="text-2xl md:text-4xl lg:text-5xl font-bold">Kengash 2023</p>
        <p className="text-xl md:text-2xl lg:text-3xl font-medium">So’nngi yangiliklar</p>
      </div>
      <div className="block md:flex">
        <div className="w-full md:w-[70%] mr-0 md:mr-10">
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

        <div className="w-full md:w-[30%] mt-7">
          <div className="grid grid-cols-1 gap-4">
            <div className="relative">
              <img src={news_2} alt="" className="w-full h-full rounded-[20px]" />
              <div className="absolute bottom-0 w-full h-full bg-gradient rounded-[20px]">
                <div className="absolute bottom-0 text-white font-['Montserrat'] p-5">
                  <span className="text-xs lg:text-base font-medium ">2023-11-12</span>
                  <p className="text-sm md:text-sm lg:text-lg font-semibold ">
                    Shofirkon: Quyi Chuqurakda bir kunda 500 tup manzarali.....
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src={news_2} alt="" className="w-full h-full rounded-[20px]" />
              <div className="absolute bottom-0 w-full h-full bg-gradient rounded-[20px]">
                <div className="absolute bottom-0 text-white font-['Montserrat'] p-5">
                  <span className="text-xs lg:text-base font-medium ">2023-11-12</span>
                  <p className="text-sm lg:text-lg font-semibold ">
                    Shofirkon: Quyi Chuqurakda bir kunda 500 tup manzarali.....
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Kengash;
