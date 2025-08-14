import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const columns = [
  {
    title: 'O‘zbekiston Respublikasi Prezidentining 2008-yil 8-iyuldagi “Bolalar musiqa va san’at maktablarining moddiy-texnik bazasini mustahkamlash va ularning faoliyatini yanada yaxshilash bo‘yicha 2009-2014-yillarga mo‘ljallangan Davlat dasturi to‘g‘risida“gi PQ-910-sonli qarori',
    fileName: '/bolalar_musiqa',
  },
  {
    title: 'O‘zbekiston Respublikasi Prezidentining 2017-yil 8-avgustdagi “O‘zbekiston Davlat Konservatoriyasi faoliyatini yanada rivojlantirish va takomillashtirish chora-tadbirlari to‘g‘risida“gi PQ-3178-son qarori',
    fileName: '/files/PQ_3178_08_08_2017.pdf',
  },
  {
    title: 'O‘zbekiston Respublikasi Prezidentining 2017-yil 9-sentabrdagi “Oliy ta’lim muassasalarida pedagogika yo‘nalishida maxsus sirtqi bo‘limlarni tashkil etish to‘g‘risida” PQ-3183-son qarori',
    fileName: '/Pedagogiga_yonalishi',
  },
  {
    title: 'O‘zbekiston Respublikasi Prezidentining 2017-yil 17-noyabrdagi “O‘zbek milliy maqom san’atini yanada rivojlantirish chora-tadbirlari to‘g‘risida” PQ-3391-son qarori',
    fileName: '/Maqom_sanati',
  },
  {
    title: ' O‘zbekiston Respublikasi Prezidentining 2018-yil 14-avgustdagi “Yoshlarni ma’naviy-axloqiy va jismoniy barkamol etib tarbiyalash, ularga ta’lim-tarbiya berish tizimini sifat jihatidan yangi bosqichga ko‘tarish chora-tadbirlari to‘g‘risida”gi PQ-3907-son qarori',
    fileName: '/files/PQ_3907_14_08_2018.pdf',
  },
  {
    title: 'O‘zbekiston Respublikasi Prezidentining 2018-yil 28-noyabrdagi “O‘zbekiston Respublikasida milliy madaniyatni yanada rivojlantirish konsepsiyasini tasdiqlash to‘g‘risida” PQ-4038-son qarori',
    fileName: '/files/PQ_4038_28_11_2018.pdf',
  },
  {
    title: 'O‘zbekiston Respublikasi Prezidentining 2019-yil 14-maydagi “Baxshichilik san’atini yanada rivojlantirish chora-tadbirlari to‘g‘risida” PQ-4320-son qarori',
    fileName: '/Baxchichilik_sanati',
  },
  {
    title: 'O‘zbekiston Respublikasi Prezidentining 2019-yil 27-maydagi “O‘zbekiston Respublikasida korrupsiyaga qarshi kurashish tizimini yanada takomillashtirish chora-tadbirlari to‘g‘risida“gi PF-5729-farmoni',
    fileName: '/Korrupsiyaga_qarshi_P',
  },
  {
    title: 'O‘zbekiston Respublikasi Prezidentining 2019-yil 30-sentabrdagi “Bolalar musiqa va san’at maktablari rahbar, o‘qituvchi va konsertmeystyerlari mehnatiga haq to‘lash va ularni moddiy rag‘batlantirish tizimini takomillashtirish to‘g‘risida” PQ-4468-son qarori',
    fileName: '/Musiqa_maktablari',
  },
  {
    title: 'O‘zbekiston Respublikasi Prezidentining 2020-yil 21-apreldagi “Tasviriy va amaliy san’at sohasi samaradorligini yanada oshirishga doir chora-tadbirlari to‘g‘risida“gi PQ-4688-son qarori',
    fileName: '/files/PQ_4688_21_04_2020.pdf',
  },
  {
    title: 'O‘zbekiston Respublikasi Prezidentining 2020-yil 26-maydagi “O‘zbekiston Respublikasi Madaniyat vazirligi faoliyatini takomillashtirish chora-tadbirlari to‘g‘risida“gi PQ-4730-son qarori',
    fileName: '/Madaniyat_vazirligi_faoliyati',
  },
  {
    title: 'O‘zbekiston Respublikasi Prezidentining 2020-yil 26-maydagi “Madaniyat va san’at sohasining jamiyat hayotidagi o‘rni va ta’sirini yanada oshirish chora-tadbirlari to‘g‘risida”gi PQ-6000-son qarori',
    fileName: '/Madaniyat_sanat_sohasi',
  },
  {
    title: 'O‘zbekiston Respublikasi Prezidentining 2021-yil 26-martdagi “Ma’naviyat va ijodni qo‘llab-quvvatlash maqsadli jamg‘armasini tashkil etish to‘g‘risida”gi PQ-5039-son qarori',
    fileName: '/files/PQ_5039_26_03_2021.pdf',
  },
    {
    title: 'O‘zbekiston Respublikasi Prezidentining 2021-yil 26-martdagi “Ma’naviy-ma’rifiy ishlar tizimini tubdan takomillashtirish chora-tadbirlari to‘g‘risida”gi PQ-5040-son qarori',
    fileName: '/files/PQ_5040_26_03_2021.pdf',
  },
  {
    title: 'O‘zbekiston Respublikasi Prezidentining 2021-yil 9-dekabrdagi “Madaniyat va san’atni rivojlantirishni qo‘llab-quvvatlash tizimini yanada takomillashtirish to‘g‘risida”gi PQ-36-son qarori',
    fileName: '/madaniyat_sanatni_rivojlantirish',
  },
  {
    title: 'O‘zbekiston Respublikasi Prezidentining 2022-yil 2-fevraldagi “Madaniyat va san’at sohasini yanada rivojlantirishga doir qo‘shimcha chora-tadbirlar to‘g‘risida”gi PQ-112-son qarori',
    fileName: '/madaniyat_sanat_sohasi_yenada_rivojlantirish',
  },
  {
    title: 'O‘zbekiston Respublikasi Prezidentining 2023-yil 27-iyuldagi “Ma‘muriy islohotlar doirasida madaniyat va turizm sohasida davlat boshqaruvini samarali tashkilqilish chora-tadbirlari to‘g‘risida”gi PF-114-son farmoni',
    fileName: '/files/PF-114_27_07_2023.pdf',
  },
  {
    title: 'O‘zbekiston Respublikasi Prezidentining 2023-yil 25-dekabrdagi “Madaniyat va san’at sohasida davlat boshqaruvi takomillashtirilganligi munosabati bilan O‘zbekiston Respublikasi Prezidentining ayrim hujjatlariga o‘zgartirishlar va qo‘shimcha kiritish, shuningdek, ba’zilarini o‘z kuchini yo‘qotgan deb hisoblash to‘g‘risida”gi PF-214-son farmoni',
    fileName: '/files/PF_214_25_12_2023.pdf',
  },
  {
    title: 'O‘zbekiston Respublikasi Prezidentining 2023-yil 25-dekabrdagi “Aholiga madaniy xizmat ko‘rsatish darajasini yanada oshirish chora-tadbirlari to‘g‘risida”gi PQ-406-son qarori',
    fileName: '/files/PQ_406_25_12_2023.pdf',
  },
];
const PrezidentFarmonlari = () => {

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FCFF] font-['Montserrat', 'sans-serif']">
      <Header />
      <Navbar />
      <main className="flex-1 px-4 sm:px-6 md:px-8 lg:px-16 py-6 md:py-8 max-w-7xl mx-auto w-full">
        <h1 className="text-sky-900 text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-6 md:mb-8 font-['Montserrat', 'sans-serif']">
          O‘zbekiston Respublikasi Prezidentining farmonlari va qarorlari
        </h1>
       <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
               {columns.map((column, idx) => (
                 <div
                   key={idx}
                   className="flex flex-col justify-between bg-white shadow-md rounded-xl p-4 sm:p-6 hover:shadow-lg transition duration-200 h-full"
                 >
                   <div>
                     <p className="text-sky-900 text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 leading-relaxed">{column.title}</p>
                   </div>
                   <div className="flex items-center mt-2">
                     {column.fileName ? (
                       column.fileName.startsWith('/') && !column.fileName.includes('.') ? (
                         <Link
                           to={column.fileName}
                           className="text-sky-900 border border-sky-900 px-4 py-2 rounded-lg hover:bg-sky-50 text-lg font-semibold underline hover:text-blue-600 transition"
                         >
                           BATAFSIL
                         </Link>
                       ) : (
                         <a
                           href={column.fileName}
                           download
                           className="text-sky-900 border border-sky-900 px-4 py-2 rounded-lg hover:bg-sky-50 text-lg font-semibold underline hover:text-blue-600 transition"
                         >
                           YUKLASH
                         </a>
                       )
                     ) : (
                       <span className="text-gray-400 text-base font-semibold">Fayl yo'q</span>
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

export default PrezidentFarmonlari;