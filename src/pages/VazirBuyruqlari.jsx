import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const columns = [
  {
    id: 1,
    title: 'O‘zbekiston Respublikasi Madaniyat vazirining 2018-yil 26-yanvardagi “Bolalar musiqa va san’at maktablarida baxshichilik san’ati yo‘nalishi bo‘yicha o‘quv rejasi hamda namunaviy o‘quv dasturini tasdiqlash to‘g‘risida” 34-son buyrug‘i',
    file: '/files/MV_34_son_ buyruq_26_01_2018.pdf',
  },
  {
    id: 2,
    title: 'O‘zbekiston Respublikasi Madaniyat vazirining 2019-yil 20-martdagi “Madaniyat vazirining 2018-yil 25-dekabrdagi buyrug‘iga qo‘shimcha va o‘zgartirishlar kiritish to‘g‘risida” 188-son buyrug‘i',
    file: '/files/MV_188_son_ buyruq_20_03_2019.pdf',
  },
  {
    id: 3,
    title: 'O‘zbekiston Respublikasi Madaniyat vazirining 2019-yil 22-apreldagi “Xorijiy mamlakatlariga xizmat safarlariga borishni tartibga solish to‘g‘risida” 245-son buyrug‘i',
    file: '/files/MV_245_son_buyruq.pdf',
  },
  {
    id: 4,
    title: 'O‘zbekiston Respublikasi Madaniyat vazirining 2019-yil 12-avgustadagi “Bolalar musiqa va san’at maktablari faoliyatiga oid me’yoriy hujjatlar namunamalarini tasdiqlash to‘g‘risida” 478-buyrug‘i',
    file: '/files/MV_478_son_buyruq_12_08_2019.pdf',
  },
  {
    id: 5,
    title: 'O‘zbekiston Respublikasi Madaniyat vazirining 2019-yil 30-dekabrdagi “Bolalar musiqa va san’at maktablarining ta‘lim yo‘nalishlari bo‘yicha o‘quv rejalarini hamda o‘quv rejalariga tushuntirishlarini tasdiqlash to‘g‘risida” 766-son buyrug‘i',
    file: '/files/MV_766_son_buyruq_uquv_reja.pdf',
  },
  {
    id: 6,
    title: 'O‘zbekiston Respublikasi Madaniyat vazirining 2021-yil 21-apreldagi “O‘zbekiston Respublikasi Madaniyat vazirligi tasarrufidagi bolalar musiqa va san‘at maktablari, ixtisoslashtirilgan san‘at va madaniyat maktablari, maktab-internatlari hamda Karim Zaripov nomidagi Respublika estrada va sirk kolleji, Respublika musiqa va san’at kollejlarining ikkinchi malaka toifasiga talabgor pedagog kaddrlarni attestasiyadan o‘tkazish to‘g‘risida” 183-son buyrug‘i',
    file: '/files/MV_183_son_buyruq.pdf',
  },
  {
    id: 7,
    title: 'O‘zbekiston Respublikasi Madaniyat vazirining 2019-yil 20-dekabrdagi “Bolalar musiqa va san’at maktablarida o‘quvchilar bilimining davlat talablariga mosligi arajasini aniqlash mexanizmini joriy etish hamda monitoring olib borish to‘g‘risida” 751-son buyrug‘i',
    file: '/files/MV_751_son_buyruq.pdf',
  },
  {
    id: 8,
    title: 'O‘zbekiston Respublikasi Madaniyat vazirining 2022-yil 2-fevraldagi “Xodimlarning lavozim nomenklaturasini tasdiqlash to‘g‘risida” 38-son buyrug‘i',
    file: '/files/MV_38_son_buyruq_02_02_2022.pdf',
  },
  {
    id: 9,
    title: 'O‘zbekiston Respublikasi Madaniyat vazirining 2022-yil 20-apreldagi “Davlat ta’lim talablarini tasdiqlash to’g’risida” 121-son buyrug‘i',
    file: '/files/MV_121_son_buyruq.pdf',
  },
  {
    id: 10,
    title: 'O‘zbekiston Respublikasi Madaniyat vazirining 2022-yil 20-sentabrdagi “Yosh mutaxassislarni tanlashga oid hujjatlarni tasdiqlash to‘g‘risida” 378-son buyrug‘i',
    file: '/files/MV_378.pdf',
  },
  {
    id: 11,
    title: 'O‘zbekiston Respublikasi Madaniyat vazirining 2023-yil 28-iyuldagi “O‘zbekiston Respublikasi Prezidenti Farmoni ijrosini ta\'minlash to‘g‘risida” 2-son buyrug‘i',
    file: '/files/MV_2_28_07.pdf',
  },
  {
    id: 12,
    title: 'O‘zbekiston Respublikasi Vazirlar Mahkamasi huzuridagi ta’lim sifatini nazorat qilish Davlat inspeksiyasi va O‘zbekiston Respublikasi Madaniyat vazirligining "O‘zbekiston Respublikasi Madaniyat vazirligi tizimidagi ta’lim muassasalari pedagog kadrlarining o‘quv fanidan malaka sinovlarini tashkil etish to‘g‘risida" qo‘shma qarori',
    file: '/files/MV_Qushma_qaror.pdf',
  },
    {
    id: 13,
    title: 'O‘zbеkistоn Rеspublikаsi Madaniyat vazirining 2024-yil 24-yanvardagi “Bolalar musiqa va san’at maktablari direktorlari faoliyatini muvofiqlashtiruvchi kengash faoliyatini takomillashtirish to‘g‘risida”gi 39-son buyrug‘i',
    file: '/files/MV_39_24_01_2024.pdf',
  },
    {
    id: 14,
    title: 'O‘zbеkistоn Rеspublikаsidа Bоlаlаrning bоshlаng‘ich sаn’аt tа’limi Kоnsеpsiyasi',
    file: '/files/MV_Boshlangich_sanat_talim_konsepsiya.pdf',
  },
];

const VazirBuyruqlari = () => (
  <div className="min-h-screen flex flex-col bg-[#F8FCFF] font-['Montserrat', 'sans-serif']">
    <Header />
    <Navbar />
    <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto w-full">
      <h1 className="text-sky-900 text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 font-['Montserrat', 'sans-serif']">
        O'zbekiston Respublikasi Madaniyat vaziri buyruqlari
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {columns.map((column) => (
          <a
            key={column.id}
            href={column.file}
            download
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 hover:border-sky-100 hover:bg-sky-50 group flex flex-col h-full"
          >
            <div className="flex-1">
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-sky-100 text-sky-700 font-medium text-sm mr-4 mt-0.5">
                  {column.id}
                </div>
                <p className="text-sky-900 text-base md:text-lg leading-relaxed group-hover:text-sky-700 transition-colors duration-200">
                  {column.title}
                </p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center text-sm text-sky-600">
              <svg className="w-4 h-4 mr-1.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Yuklab olish</span>
            </div>
          </a>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default VazirBuyruqlari;