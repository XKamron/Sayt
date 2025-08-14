import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const columns = [
  {
    id: 1,
    title: 'Budjet muassasalari va tashkilotlari xodimlarini moddiy rag‘batlantirish maxsus fondi to‘g‘risida Nizom (rus tilida). O‘zbekiston Respublikasi Adliya vazirligi tomonidan 1995-yil 20-sentabrda 177-son bilan davlat ro‘yxatidan o‘tkazilgan;',
    file: '/files/AV_177_FMS.pdf',
  },
  {
    id: 2,
    title: 'Ota-onalar tomonidan bolalarning bolalar musiqa va san’at maktablarida o‘qishi uchun haq to‘lash va undan foydalanish tartibi to‘g‘risidagi nizomni tasdiqlash haqida O‘zbekiston Respublikasi xalq ta’limi vazirligi va O‘zbekiston Respublikasi moliya vazirligining qo‘shma qarori. O‘zbekiston Respublikasi Adliya vazirligi tomonidan 2009-yil 5-fevralda 1898-son bilan davlat ro‘yxatidan o‘tkazilgan;',
    file: '/files/Ota_onalar_badal_puli_Nizom.pdf',
  },
  {
    id: 3,
    title: 'O‘zbekiston Respublikasi Xalq ta’limi vazirining 2015-yil 31-martdagi “Maktabdan tashqari ta’imga qo‘yiladigan davlat talablarini tasdiqlash haqida”gi 7-mh-son buyrug‘i. O‘zbekiston Respublikasi Xalq ta’limi vazirining 2015-yil 31-martdagi “Maktabdan tashqari ta’imga qo‘yiladigan davlat talablarini tasdiqlash haqida”gi 7-mh-son buyrug‘i. O‘zbekiston Respublikasi Adliya vazirligi tomonidan 2015-yil 9-aprelda ro‘yxatdan o‘tkazildi, ro‘yxat raqami 2663;',
    file: '/files/AV_2663_XTVB_Davlat_talablari.pdf',
  },
  {
    id: 4,
    title: 'O‘zbekiston Respublikasi Xalq ta’limi vazirining 2016-yil 8-noyabrdagi “Bolalar musiqa va san’at maktablarini musiqa asboblari, maxsus mebellar, asbob-uskunalar va boshqa anjomlar bilan jihozlash normativlarini tasdiqlash to‘g‘risida”gi 13-mh-son buyrug‘i. O‘zbekiston Respublikasi Adliya vazirligi tomonidan 2016-yil 30-noyabrda ro‘yxatdan o‘tkazildi, ro‘yxat raqami 2841.',
    file: '/files/AV_2841 30.11.2016.pdf',
  },
  {
    id: 5,
    title: 'O‘zbekiston Respublikasi Vazirlar Mahkamasi huzuridagi ta’lim sifatini nazorat qilish davlat inspeksiyasi, O‘zbekiston badiiy akademiyasining 2022-yil 24-fevraldagi “O‘zbekiston Badiiy akademiyasi tizimidagi ixtisoslashtirilgan san’at maktablari hamda maktab-internatlari pedagog kadrlarining o‘quv fanidan malaka sinovlarini tashil etish to‘g‘risida”gi 3/QQ-son va QQ-02-02-son qo‘shma qarori;',
    file: '/files/AV_Inspeksiya_badiiy_akademmiya.pdf',
  },
  {
    id: 6,
    title: 'O‘zbekiston Respublikasi Maktabgacha va maktab ta’limi vazirligi, Kambag‘allikni qisqartirish va bandlik vazirligi, Yoshlar siyosati va sport vazirligi hamda Madaniyat va turizm vazirligining 202З-уi| 28-apreldagi “Maktabgacha vа maktab ta’limi, madaniyat va sport muassasalari pedagog va rаhЬаr xodimlarining bazaviy tarif stavkalari hamda tumаn (shahar) maktabgacha va maktab ta’limi bo‘limlari xodimlarining lavozim maoshlari miqdorlarini tasdiqlash to‘g‘risida” 14 Q/Q, 6-q/q, 01-15-09 va 08/Q/Q-sоn qo‘shma qarori;',
    file: '/files/AV_lavozim_maoshlari_miqdori.pdf',
  },
];

const AdliyaHujjatlar = () => (
  <div className="min-h-screen flex flex-col bg-[#F8FCFF] font-['Montserrat', 'sans-serif']">
    <Header />
    <Navbar />
    <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto w-full">
      <h1 className="text-sky-900 text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 font-['Montserrat', 'sans-serif']">
        Adliya vazirligidan ro'yxatdan o'tgan hujjatlar, boshqa vazirliklar, qo'mitalar va agentliklarning ishlab chiqqan me'yoriy hujjatlari, qo'shma qarorlar
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {columns.map((column) => (
          <a
            key={column.id}
            href={column.file}
            download
            className=" bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 hover:border-sky-100 hover:bg-sky-50 group flex flex-col h-full"
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

export default AdliyaHujjatlar;